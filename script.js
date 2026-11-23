// ==========================================
// SUPABASE CLIENT INITIALIZATION
// ==========================================
const SUPABASE_URL = "https://ozolrtwxaivvbkyouoys.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IZnD8BXvUXabdsclxgBacw_dS_lUwrS";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ==========================================
// TRANSLATIONS DICTIONARY (EN & BG)
// ==========================================
const translations = {
  en: {
    // --- Meta & Header ---
    pageTitle: "Metin Hasanov – QA Manual & Automation",
    metaDescription: "Professional CV of a QA Manual & Automation Engineer",
    photoAlt: "Photo of Metin Hasanov",
    name: "Metin Hasanov",
    subtitle: "QA Manual & Automation Engineer",
    // --- Navigation Tabs ---
    tabAbout: "About",
    tabExperience: "Experience",
    tabEducation: "Education",
    tabCerts: "Certificates",
    tabTestimonials: "Testimonials",
    // --- About Section ---
    aboutTitle: "About me",
    aboutText: "Results-driven QA Manual & Automation Engineer with a unique engineering background bridging software quality assurance and hardware systems. \n \n Proven expertise in designing comprehensive test strategies, writing robust automation scripts in C# and Python (Selenium, FlaUI, pytest), and integrating automated suites into CI/CD pipelines (GitLab, GitHub Actions). Adept at investigating complex edge cases across web, desktop, and embedded environments, ensuring high reliability, security compliance, and exceptional product performance.",
    
    // --- Key Skills ---
    skillsTitle: "Key skills",
    techSkillsTitle: "Technical skills",
    skill1: "Automation & Manual Testing",
    skill2: "Test Case Design",
    skill3: "Test Frameworks (Selenium WebDriver, FlaUI, pytest)",
    skill4: "Programming Languages: C#, Python",
    skill5: "Version Control: Git, GitLab, GitHub",
    skill6: "CI/CD Pipelines",
    skill7: "Linux Systems & Hardware Troubleshooting",
    
    softSkillsTitle: "Personal skills",
    soft1: "Teamwork and Collaboration",
    soft2: "Problem-Solving",
    soft3: "Attention to Detail",
    soft4: "Adaptability & Time Management",
    // --- Experience Section ---
    expTitle: "Professional experience",
    
    // Siemens
    exp1Role: "Senior QA Engineer",
    exp1Company: "Siemens",
    exp1b1: "Designed comprehensive test cases covering various network and security scenarios, including authentication, authorization, data encryption, and secure communication protocols.",
    exp1b2: "Developed automated test scripts using C# as the primary programming language.",
    exp1b3: "Utilized Selenium WebDriver with C# bindings to automate interactions with web elements.",
    exp1b4: "Used FlaUI, a framework for automated UI testing of Windows applications, with C# for desktop automation.",
    exp1b5: "Utilized testing frameworks such as NUnit, MSTest, or xUnit for writing and executing tests.",
    exp1b6: "Set up CI/CD pipelines using tools like Siemens specific GitLab and GitHub Actions.",
    exp1b7: "Collaborated with the development team to analyze and troubleshoot issues identified during testing.",
    // Televic
    exp2Role: "Middleware Hardware Test Engineer",
    exp2Company: "Televic",
    exp2b1: "Rigorously tested and validated hardware components, focusing on programming, troubleshooting, and functional testing of Linux-based Printed Circuit Boards (PCBs) and end products.",
    exp2b2: "Utilized Python and its libraries to execute comprehensive tests, ensuring product reliability and performance.",
    exp2b3: "Played a crucial role in developing and maintaining the test framework, providing partial support for its functionalities.",
    exp2b4: "Leveraged expertise in testing methodologies and programming to contribute effectively to the quality assurance process.",
    // Imesa
    exp3Role: "Middleware Electrical Design Engineer",
    exp3Company: "Imesa",
    exp3b1: "Designed electrical wiring diagrams using AutoCAD Electrical, ensuring compliance with industry standards and project requirements.",
    exp3b2: "Led the assembly of electrical panels, encompassing low and medium voltage systems, MCC, and PLC configurations.",
    exp3b3: "Planned and executed mechanical switch assembly processes, ensuring optimal functionality and performance.",
    exp3b4: "Utilized SolidWorks to design and develop mechanical units, meeting design specifications and performance criteria.",
    exp3b5: "Collaborated with cross-functional teams to ensure seamless integration of electrical and mechanical components.",
    exp3b6: "Conducted quality assurance checks and troubleshooting to rectify design and assembly issues, ensuring product reliability and safety.",
    present: "present",
    // --- Education Section ---
    eduTitle: "Education",
    eduUniDegree: "Bachelor in Automation Engineering",
    eduUniName: "UFT – University of Food Technologies, Plovdiv",
    eduUnib1: "Completed program specializing in automation engineering.",
    eduUnib2: "Acquired comprehensive knowledge and practical skills in automation systems, PLC programming, pneumatics, sensors, and semiconductor devices.",
    eduUnib3: "Participated in projects and activities focused on the design, implementation, and troubleshooting of automated systems.",
    eduUnib4: "Proficient in software tools commonly used in automation engineering: AutoCAD, SolidWorks, MATLAB, Zelio, TIA Portal.",
    eduHighDegree: "Professional in Information and Technology",
    eduHighName: "VEE – Vocational High School for Electrical Engineering, Sliven",
    eduHighb1: "Completed program specializing in electrical engineering and information technology.",
    eduHighb2: "Developed foundational knowledge and practical skills in electrical systems, circuits, and technology.",
    eduHighb3: "Gained hands-on experience with various tools and equipment used in electrical engineering.",
    eduHighb4: "Proficient in programming languages: Python.",
    eduHighb5: "Familiar with front-end development technologies: HTML, CSS, JavaScript, and database management.",
    // --- Certificates Section ---
    certsTitle: "Certificates",
    view: "View",
    cert1Name: "Google Cybersecurity",
    cert1Meta: "Google",
    cert2Name: "QA Basics",
    cert2Meta: "SoftUni",
    cert3Name: "Agile and Scrum",
    cert3Meta: "IBM",
    cert4Name: "DevOps",
    cert4Meta: "IBM",
    cert5Name: "Git and Github",
    cert5Meta: "Google",
    cert6Name: "Building Automation Networks",
    cert6Meta: "Siemens",

    tabProjects: "My Projects",
    projectsTitle: "Projects",
    projectsEmpty: "Projects will be added soon...",

    // --- Testimonials Section (Public & Form) ---
    testTitle: "Testimonials",
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
    formNote: "",
    msgRequired: "Please fill in name, role and testimonial.",
    msgAdded: "Thank you! Your testimonial!",
    msgError: "Something went wrong. Please try again.",
    // --- Admin Panel Section ---
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
    // --- Footer ---
    footer: "© 2026 Metin Hasanov"
  },
  bg: {
    // --- Meta & Header ---
    pageTitle: "Метин Хасанов – QA Manual & Automation",
    metaDescription: "Професионално CV на QA Manual & Automation инженер",
    photoAlt: "Снимка на Метин Хасанов",
    name: "Метин Хасанов",
    subtitle: "QA Manual & Automation Engineer",
    // --- Navigation Tabs ---
    tabAbout: "За мен",
    tabExperience: "Опит",
    tabEducation: "Образование",
    tabCerts: "Сертификати",
    tabTestimonials: "Отзиви",
    // --- About Section ---
    aboutTitle: "За мен",
    aboutText: "Резултатно-ориентиран QA инженер с опит както в ръчното, така и в автоматизираното тестване, съчетаващ задълбочени технически познания между софтуерното осигуряване на качеството и хардуерните системи.\n\nДоказан опит в проектирането на изчерпателни тестови стратегии, разработването на автоматизирани скриптове на C# и Python (Selenium, FlaUI, pytest) и интеграцията им в CI/CD пайплайни (GitLab, GitHub Actions). Специалист в откриването на сложни гранични случаи (edge cases) при уеб, десктоп и вградени приложения с акцент върху надеждността, сигурността и високата производителност.",
    
    // --- Key Skills ---
    skillsTitle: "Ключови умения",
    techSkillsTitle: "Технически умения",
    skill1: "Автоматизирано и ръчно тестване",
    skill2: "Проектиране на тест случаи",
    skill3: "Тест фреймуъркове (Selenium WebDriver, FlaUI, pytest)",
    skill4: "Програмни езици: C#, Python",
    skill5: "Контрол на версиите: Git, GitLab, GitHub",
    skill6: "CI/CD пайплайни",
    skill7: "Linux системи и хардуерно отстраняване на неизправности",
    
    softSkillsTitle: "Лични умения",
    soft1: "Работа в екип и сътрудничество",
    soft2: "Решаване на проблеми",
    soft3: "Внимание към детайла",
    soft4: "Адаптивност и управление на времето",
    // --- Experience Section ---
    expTitle: "Професионален опит",
    
    // Siemens
    exp1Role: "Senior QA Engineer",
    exp1Company: "Siemens",
    exp1b1: "Проектиране на изчерпателни тест сценарии, покриващи различни мрежови и сигурностни сценарии, включително автентикация, оторизация, криптиране на данни и сигурни комуникационни протоколи.",
    exp1b2: "Разработване на автоматизирани тестови скриптове с използване на C# като основен език за програмиране.",
    exp1b3: "Използване на Selenium WebDriver с C# bindings за автоматизиране на взаимодействията с уеб елементи.",
    exp1b4: "Използване на FlaUI (фреймуърк за UI тестване на Windows приложения) с C# за десктоп автоматизация.",
    exp1b5: "Използване на тестващи фреймуъркове като NUnit, MSTest или xUnit за писане и изпълнение на тестове.",
    exp1b6: "Настройка на CI/CD пайплайни с инструменти като специфични за Siemens GitLab и GitHub Actions.",
    exp1b7: "Сътрудничество с развойния екип за анализ и отстраняване на проблеми, идентифицирани по време на тестването.",
    // Televic
    exp2Role: "Middleware Hardware Test Engineer",
    exp2Company: "Televic",
    exp2b1: "Прецизно тестване и валидиране на хардуерни компоненти, с фокус върху програмиране, отстраняване на неизправности и функционално тестване на Linux-базирани печатни платки (PCB) и крайни продукти.",
    exp2b2: "Използване на Python и неговите библиотеки за изпълнение на изчерпателни тестове, гарантиращи надеждност и производителност.",
    exp2b3: "Ключова роля в разработването и поддръжката на тестовия фреймуърк и предоставяне на поддръжка за неговите функционалности.",
    exp2b4: "Прилагане на експертиза в методологиите за тестване и програмиране за ефективен принос към процеса на осигуряване на качеството.",
    // Imesa
    exp3Role: "Middleware Electrical Design Engineer",
    exp3Company: "Imesa",
    exp3b1: "Проектиране на електрически схеми с помощта на AutoCAD Electrical, гарантиращо съответствие с индустриалните стандарти и изискванията на проекта.",
    exp3b2: "Ръководство на монтажа на електрически табла, обхващащи системи ниско и средно напрежение, MCC и PLC конфигурации.",
    exp3b3: "Планиране и изпълнение на процеси по сглобяване на механични превключватели за оптимална функционалност и производителност.",
    exp3b4: "Използване на SolidWorks за проектиране и разработване на механични възли в съответствие със спецификациите и критериите за ефективност.",
    exp3b5: "Сътрудничество с междуфункционални екипи за осигуряване на безпроблемна интеграция на електрически и механични компоненти.",
    exp3b6: "Провеждане на проверки за контрол на качеството и отстраняване на неизправности с цел коригиране на проблеми в дизайна и монтажа.",
    present: "до момента",
    // --- Education Section ---
    eduTitle: "Образование",
    eduUniDegree: "Бакалавър по Автоматика и Системи за Управление",
    eduUniName: "УХТ – Университет по хранителни технологии, Пловдив",
    eduUnib1: "Завършена специалност, насочена към инженерната автоматизация.",
    eduUnib2: "Придобити задълбочени познания и практични умения в автоматизираните системи, PLC програмиране, пневматика, сензори и полупроводникови устройства.",
    eduUnib3: "Участие в проекти и дейности, фокусирани върху проектирането, внедряването и отстраняването на неизправности в автоматизирани системи.",
    eduUnib4: "Владеене на софтуерни инструменти, използвани в инженерната автоматизация: AutoCAD, SolidWorks, MATLAB, Zelio, TIA Portal.",
    eduHighDegree: "Професионалист по информационни и софтуерни технологии",
    eduHighName: "ПГЕЕ – Професионална гимназия по електротехника и електроника, Сливен",
    eduHighb1: "Завършена специалност с насоченост към електротехниката и информационните технологии.",
    eduHighb2: "Изградени основни познания и практични умения в електрическите системи, вериги и технологии.",
    eduHighb3: "Придобит ръчен опит с различни инструменти и оборудване, използвани в електротехниката.",
    eduHighb4: "Владеене на езици за програмиране: Python.",
    eduHighb5: "Познаване на преден край (front-end) технологии: HTML, CSS, JavaScript и управление на бази данни.",
    // --- Certificates Section ---
    certsTitle: "Сертификати",
    view: "Виж",
    cert1Name: "Google Cybersecurity",
    cert1Meta: "Google",
    cert2Name: "QA Basics",
    cert2Meta: "SoftUni",
    cert3Name: "Agile and Scrum",
    cert3Meta: "IBM",
    cert4Name: "DevOps",
    cert4Meta: "IBM",
    cert5Name: "Git and Github",
    cert5Meta: "Google",
    cert6Name: "Building Automation Networks",
    cert6Meta: "Siemens",

    tabProjects: "Проекти",
    projectsTitle: "Проекти",
    projectsEmpty: "Проектите ще бъдат добавени скоро...",

    // --- Testimonials Section (Public & Form) ---
    testTitle: "Отзиви",
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
    formNote: "",
    msgRequired: "Моля, попълнете име, длъжност и препоръка.",
    msgAdded: "Благодаря! Препоръката е изпратена за одобрение.",
    msgError: "Възникна грешка. Моля, опитайте отново.",
    // --- Admin Panel Section ---
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
    // --- Footer ---
    footer: "© 2026 Метин Хасанов"
  }
};
// ==========================================
// GLOBAL STATE VARIABLES
// ==========================================
let currentLang = "en";
let approvedCache = [];
let adminCache = [];
// ==========================================
// LANGUAGE SWITCHER & LOCALIZATION LOGIC
// ==========================================
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
// ==========================================
// TAB NAVIGATION LOGIC
// ==========================================
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
// ==========================================
// PUBLIC TESTIMONIALS LOGIC
// ==========================================
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
// ==========================================
// ADMIN AUTHENTICATION & MANAGEMENT LOGIC
// ==========================================
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
// ==========================================
// INITIALIZATION ON PAGE LOAD
// ==========================================
setLanguage(detectLanguage());
loadApproved();