const SUPABASE_URL = "https://ozolrtwxaivvbkyouoys.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IZnD8BXvUXabdsclxgBacw_dS_lUwrS";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const translations = {
  en: {
    pageTitle: "Metin Hasanov – QA Manual & Automation",
    metaDescription: "Professional CV of a QA Manual & Automation Engineer",
    photoAlt: "Photo of Metin Hasanov",
    name: "Metin Hasanov",
    subtitle: "QA Manual & Automation Engineer",
    tabAbout: "About",
    tabExperience: "Experience",
    tabTraining: "Training",
    tabCerts: "Certificates",
    tabTestimonials: "Testimonials",
    aboutTitle: "About me",
    aboutText: "QA specialist with a background in electrical engineering. \n \n I've spent years testing web and desktop applications, both by hand and with automation, and I'm very good at finding the problem nobody else wanted to look for.\n \n I'm a natural problem solver. Give me a device that talks to the cloud and I'll find the one edge case that breaks it, usually before the demo. I write test scenarios, regression suites and automation with Playwright, Selenium and pytest, and I take it personally when a bug gets past me.",
    skillsTitle: "Key skills",
    skill1: "Manual Testing",
    skill2: "Test Case Design",
    skill3: "Regression Testing",
    skill4: "API Testing",
    expTitle: "Professional experience",
    exp1Role: "QA Engineer",
    exp1Company: "Company XXX",
    exp1b1: "Writing and maintaining over 500 manual test cases.",
    exp1b2: "Building Playwright + pytest automation for the Desigo BMS web interface.",
    exp1b3: "Integrating tests into the CI/CD pipeline.",
    exp2Role: "Junior QA Tester",
    exp2Company: "Company YYY",
    exp2b1: "Manual testing of mobile apps and web portals.",
    exp2b2: "Documenting and tracking defects in Jira.",
    present: "present",
    trainTitle: "Training",
    train1Title: "Advanced Test Automation with Python",
    train1Meta: "Online course · 2023",
    train1Desc: "Building a test framework with pytest, the page object model and CI integration.",
    train2Title: "ISTQB Foundation Level",
    train2Meta: "2021",
    train2Desc: "Testing fundamentals, test techniques and the test process.",
    certsTitle: "Certificates",
    view: "View",
    testTitle: "Testimonials",
    test1Quote: "\"Metin is extremely organized and thorough. His automation saves hours of manual work every sprint.\"",
    test1Author: "— Name Surname, Test Manager, Company XXX",
    test2Quote: "\"Accurate and clear bug reports that the team could act on immediately.\"",
    test2Author: "— Name Surname, Product Owner, Company YYY",
    formTitle: "Add a testimonial",
    labelName: "Name *",
    labelCompany: "Company",
    labelRole: "Role / position *",
    labelMessage: "Testimonial *",
    phName: "Your name",
    phCompany: "Company name",
    phRole: "e.g. Test Manager",
    phMessage: "Write your testimonial here...",
    btnAdd: "Send testimonial",
    formNote: "Your testimonial will appear on the page after it is approved.",
    msgRequired: "Please fill in name, role and testimonial.",
    msgAdded: "Thank you! Your testimonial was sent for approval.",
    msgError: "Something went wrong. Please try again.",
    adminLink: "Admin",
    adminTitle: "Admin login",
    labelEmail: "Email",
    labelPassword: "Password",
    btnLogin: "Log in",
    btnLogout: "Log out",
    msgLoginFail: "Wrong email or password.",
    adminQueue: "Testimonials",
    btnApprove: "Approve",
    btnDelete: "Delete",
    statusPending: "Pending approval",
    statusApproved: "Approved",
    msgConfirmDelete: "Delete this testimonial permanently?",
    noItems: "No testimonials yet.",
    footer: "© 2026 Metin Hasanov"
  },
  bg: {
    pageTitle: "Метин Хасанов – QA Manual & Automation",
    metaDescription: "Професионално CV на QA Manual & Automation инженер",
    photoAlt: "Снимка на Метин Хасанов",
    name: "Метин Хасанов",
    subtitle: "QA Manual & Automation Engineer",
    tabAbout: "За мен",
    tabExperience: "Опит",
    tabTraining: "Обучения",
    tabCerts: "Сертификати",
    tabTestimonials: "Отзиви",
    aboutTitle: "За мен",
    aboutText: "QA специалист с опит в електротехниката.\n\nСпециализирам ръчно и автоматизирано тестване на уеб и десктоп приложения и съм много добър в намирането на проблема, който никой друг не е искал да търси.\n\nЕстествено решавам проблеми. Дайте ми устройство, което комуникира с облака, и ще намеря единствения случай, който го чупи, обикновено преди демото. Пиша тест сценарии, регресионни пакети и автоматизация с Playwright, Selenium и pytest и приемам като лична обида, когато бъг се промъкне покрай мен.",
    skillsTitle: "Ключови умения",
    skill1: "Ръчно тестване",
    skill2: "Проектиране на тест случаи",
    skill3: "Регресионно тестване",
    skill4: "API тестване",
    expTitle: "Професионален опит",
    exp1Role: "QA Engineer",
    exp1Company: "Компания XXX",
    exp1b1: "Изготвяне и поддръжка на над 500 ръчни тест сценарии.",
    exp1b2: "Изграждане на Playwright + pytest автоматизация за уеб интерфейса на Desigo BMS.",
    exp1b3: "Интеграция на тестовете в CI/CD пайплайн.",
    exp2Role: "Junior QA Tester",
    exp2Company: "Компания YYY",
    exp2b1: "Ръчно тестване на мобилни приложения и уеб портали.",
    exp2b2: "Документиране и проследяване на бъгове в Jira.",
    present: "до момента",
    trainTitle: "Обучения",
    train1Title: "Advanced Test Automation with Python",
    train1Meta: "Онлайн курс · 2023",
    train1Desc: "Изграждане на тестов фреймуърк с pytest, page object модел и CI интеграция.",
    train2Title: "ISTQB Foundation Level",
    train2Meta: "2021",
    train2Desc: "Основи на тестването, тест техники и процес на тестване.",
    certsTitle: "Сертификати",
    view: "Виж",
    testTitle: "Отзиви",
    test1Quote: "„Метин е изключително организиран и внимателен. Автоматизацията му спестява часове ръчна работа всеки спринт.“",
    test1Author: "— Име Фамилия, Test Manager, Компания XXX",
    test2Quote: "„Точни и ясни бъг репорти, с които екипът може да работи веднага.“",
    test2Author: "— Име Фамилия, Product Owner, Компания YYY",
    formTitle: "Добави препоръка",
    labelName: "Име *",
    labelCompany: "Компания",
    labelRole: "Длъжност *",
    labelMessage: "Препоръка *",
    phName: "Вашето име",
    phCompany: "Име на компанията",
    phRole: "напр. Test Manager",
    phMessage: "Напишете вашата препоръка тук...",
    btnAdd: "Изпрати препоръка",
    formNote: "Препоръката ще се появи на сайта след одобрение.",
    msgRequired: "Моля, попълнете име, длъжност и препоръка.",
    msgAdded: "Благодаря! Препоръката е изпратена за одобрение.",
    msgError: "Възникна грешка. Моля, опитайте отново.",
    adminLink: "Администратор",
    adminTitle: "Вход за администратор",
    labelEmail: "Имейл",
    labelPassword: "Парола",
    btnLogin: "Вход",
    btnLogout: "Изход",
    msgLoginFail: "Грешен имейл или парола.",
    adminQueue: "Препоръки",
    btnApprove: "Одобри",
    btnDelete: "Изтрий",
    statusPending: "Чака одобрение",
    statusApproved: "Одобрена",
    msgConfirmDelete: "Да се изтрие ли препоръката окончателно?",
    noItems: "Все още няма препоръки.",
    footer: "© 2026 Метин Хасанов"
  }
};
let currentLang = "en";
let approvedCache = [];
let adminCache = [];
/* ---------- Language ---------- */
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("cv-lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":");
      if (t[key] !== undefined) el.setAttribute(attr.trim(), t[key]);
    });
  });
  document.title = t.pageTitle;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  // Re-render dynamic parts so their buttons use the new language
  renderAdmin();
}
function detectLanguage() {
  const saved = localStorage.getItem("cv-lang");
  if (saved && translations[saved]) return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("bg") ? "bg" : "en";
}
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
/* ---------- Tabs ---------- */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
function showTab(name) {
  tabs.forEach(t => {
    const on = t.dataset.tab === name;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });
  panels.forEach(p => p.classList.toggle("active", p.id === name));
}
tabs.forEach(tab => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});
/* ---------- Testimonials (public) ---------- */
const approvedList = document.getElementById("approvedList");
const testimonialForm = document.getElementById("testimonialForm");
const formStatus = document.getElementById("formStatus");
function showStatus(el, msg) {
  el.textContent = msg;
}
function makeQuote(item) {
  const bq = document.createElement("blockquote");
  bq.className = "testimonial";
  const p = document.createElement("p");
  p.textContent = "“" + item.message + "”";
  const footer = document.createElement("footer");
  footer.textContent = "— " + [item.name, item.role, item.company].filter(Boolean).join(", ");
  bq.append(p, footer);
  return bq;
}
function renderApproved() {
  approvedList.innerHTML = "";
  approvedCache.forEach(item => approvedList.appendChild(makeQuote(item)));
}
async function loadApproved() {
  const { data, error } = await sb
    .from("testimonials")
    .select("id, name, company, role, message")
    .eq("status", "approved")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }
  approvedCache = data || [];
  renderApproved();
}
testimonialForm.addEventListener("submit", async e => {
  e.preventDefault();
  const t = translations[currentLang];
  const data = new FormData(testimonialForm);
  // Honeypot filled in: pretend success, store nothing
  if (data.get("website")) {
    testimonialForm.reset();
    showStatus(formStatus, t.msgAdded);
    return;
  }
  const item = {
    name: (data.get("name") || "").trim(),
    company: (data.get("company") || "").trim() || null,
    role: (data.get("role") || "").trim(),
    message: (data.get("message") || "").trim()
  };
  if (!item.name || !item.role || !item.message) {
    showStatus(formStatus, t.msgRequired);
    return;
  }
  const submitBtn = testimonialForm.querySelector("button[type=submit]");
  submitBtn.disabled = true;
  const { error } = await sb.from("testimonials").insert(item);
  submitBtn.disabled = false;
  if (error) {
    console.error(error);
    showStatus(formStatus, t.msgError);
    return;
  }
  testimonialForm.reset();
  showStatus(formStatus, t.msgAdded);
});
/* ---------- Admin ---------- */
const adminLink = document.getElementById("adminLink");
const adminPanel = document.getElementById("adminPanel");
const loginDiv = document.getElementById("adminLogin");
const toolsDiv = document.getElementById("adminTools");
const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");
const adminList = document.getElementById("adminList");
const logoutBtn = document.getElementById("logoutBtn");
async function refreshAdminView() {
  const { data } = await sb.auth.getSession();
  const loggedIn = !!data.session;
  loginDiv.hidden = loggedIn;
  toolsDiv.hidden = !loggedIn;
  if (loggedIn) await loadAdmin();
}
async function loadAdmin() {
  const { data, error } = await sb
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }
  adminCache = data || [];
  renderAdmin();
}
function renderAdmin() {
  const t = translations[currentLang];
  adminList.innerHTML = "";
  if (!adminCache.length) {
    const p = document.createElement("p");
    p.textContent = t.noItems;
    adminList.appendChild(p);
    return;
  }
  adminCache.forEach(item => {
    const box = document.createElement("div");
    box.className = "admin-item";
    const badge = document.createElement("span");
    badge.className = "badge " + item.status;
    badge.textContent = item.status === "approved" ? t.statusApproved : t.statusPending;
    const title = document.createElement("strong");
    title.textContent = item.name + " — " + item.role + (item.company ? ", " + item.company : "");
    const msg = document.createElement("p");
    msg.textContent = item.message;
    const actions = document.createElement("div");
    actions.className = "admin-actions";
    if (item.status !== "approved") {
      const approveBtn = document.createElement("button");
      approveBtn.type = "button";
      approveBtn.className = "btn";
      approveBtn.textContent = t.btnApprove;
      approveBtn.addEventListener("click", () => approveItem(item.id));
      actions.appendChild(approveBtn);
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = t.btnDelete;
    deleteBtn.addEventListener("click", () => deleteItem(item.id));
    actions.appendChild(deleteBtn);
    box.append(badge, title, msg, actions);
    adminList.appendChild(box);
  });
}
async function approveItem(id) {
  const { error } = await sb.from("testimonials").update({ status: "approved" }).eq("id", id);
  if (error) console.error(error);
  await loadAdmin();
  await loadApproved();
}
async function deleteItem(id) {
  if (!confirm(translations[currentLang].msgConfirmDelete)) return;
  const { error } = await sb.from("testimonials").delete().eq("id", id);
  if (error) console.error(error);
  await loadAdmin();
  await loadApproved();
}
adminLink.addEventListener("click", async e => {
  e.preventDefault();
  showTab("testimonials");
  adminPanel.hidden = false;
  await refreshAdminView();
  adminPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});
loginForm.addEventListener("submit", async e => {
  e.preventDefault();
  const t = translations[currentLang];
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value;
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    showStatus(loginStatus, t.msgLoginFail);
    return;
  }
  loginForm.reset();
  showStatus(loginStatus, "");
  await refreshAdminView();
});
logoutBtn.addEventListener("click", async () => {
  await sb.auth.signOut();
  adminCache = [];
  await refreshAdminView();
});
/* ---------- Init ---------- */
setLanguage(detectLanguage());
loadApproved();