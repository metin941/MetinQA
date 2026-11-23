import pytest
from playwright.sync_api import sync_playwright, expect
import pathlib

@pytest.fixture(scope="session")
def browser_context():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=300)
        context = browser.new_context()
        yield context
        browser.close()

@pytest.fixture
def page(browser_context):
    page = browser_context.new_page()
    html_path = pathlib.Path(__file__).parent.parent / "index.html"
    page.goto(f"file://{html_path.resolve()}")
    yield page
    page.close()

def test_page_title_and_header(page):
    expect(page).to_have_title("Metin Hasanov – QA Manual & Automation")
    expect(page.locator('h1[data-i18n="name"]')).to_have_text("Metin Hasanov")
    expect(page.locator('p.subtitle[data-i18n="subtitle"]')).to_have_text("QA Manual & Automation Engineer")

def test_language_switch(page):
    # Default is English
    expect(page.locator('.tab[data-tab="about"]')).to_have_text("About")
    
    # Switch to Bulgarian
    page.click('button.lang-btn[data-lang="bg"]')
    expect(page.locator('.tab[data-tab="about"]')).to_have_text("За мен")
    
    # Switch back to English
    page.click('button.lang-btn[data-lang="en"]')
    expect(page.locator('.tab[data-tab="about"]')).to_have_text("About")

def test_tab_navigation(page):
    tabs = ["experience", "education", "certs", "myprojects", "testimonials", "about"]
    for tab in tabs:
        page.click(f'.tab[data-tab="{tab}"]')
        expect(page.locator(f"#{tab}")).to_have_class(r"panel active")

def test_certificates_links(page):
    page.click('.tab[data-tab="certs"]')
    links = page.locator(".cert-list a")
    count = links.count()
    assert count > 0
    for i in range(count):
        link = links.nth(i)
        expect(link).to_have_attribute("target", "_blank")
        expect(link).to_have_attribute("rel", "noopener")

def test_admin_wrong_login(page):
    page.click('.tab[data-tab="testimonials"]')
    
    # Click admin link in footer
    page.click('#adminLink')
    expect(page.locator('#adminLogin')).not_to_be_hidden()
    
    # Attempt login with incorrect credentials
    page.fill('input[name="email"]', "wrong@admin.com")
    page.fill('input[name="password"]', "wrongpassword")
    page.click('#loginForm button[type="submit"]')
    
    # Verify error message is displayed
    expect(page.locator('#loginStatus')).to_contain_text("Wrong email or password")