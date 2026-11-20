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
    aboutText: "QA specialist with experience in manual and automated testing of web and desktop applications. Strong in writing test scenarios, regression suites and automation with Playwright/Selenium and pytest.",
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
    train2Desc: "Testing fundamentals, test techniques and the test process.",
    certsTitle: "Certificates",
    view: "View",
    testTitle: "Testimonials",
    test1Quote: "\"Metin is extremely organized and thorough. His automation saves hours of manual work every sprint.\"",
    test1Author: "— Name Surname, Test Manager, Company XXX",
    test2Quote: "\"Accurate and clear bug reports that the team could act on immediately.\"",
    test2Author: "— Name Surname, Product Owner, Company YYY",
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
    aboutText: "QA специалист с опит в ръчното и автоматизираното тестване на уеб и десктоп приложения. Силен в писането на тест сценарии, регресионни пакети и автоматизация с Playwright/Selenium и pytest.",
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
    train2Desc: "Основи на тестването, тест техники и процес на тестване.",
    certsTitle: "Сертификати",
    view: "Виж",
    testTitle: "Отзиви",
    test1Quote: "„Метин е изключително организиран и внимателен. Автоматизацията му спестява часове ръчна работа всеки спринт.“",
    test1Author: "— Име Фамилия, Test Manager, Компания XXX",
    test2Quote: "„Точни и ясни бъг репорти, с които екипът може да работи веднага.“",
    test2Author: "— Име Фамилия, Product Owner, Компания YYY",
    footer: "© 2026 Метин Хасанов"
  }
};
/* ---------- Language ---------- */
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  localStorage.setItem("cv-lang", lang);
  // Text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Attributes, format: data-i18n-attr="attr:key" (e.g. "alt:photoAlt")
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":");
      if (t[key] !== undefined) el.setAttribute(attr.trim(), t[key]);
    });
  });
  // Page title
  document.title = t.pageTitle;
  // Highlight active language button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
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
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
/* ---------- Init ---------- */
setLanguage(detectLanguage());