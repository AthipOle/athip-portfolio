"use client";

import { useRef, useState } from "react";

type Language = "th" | "en";

const copy = {
  th: {
    nav: {
      about: "เกี่ยวกับผม",
      education: "การศึกษา",
      skills: "ทักษะ",
      certifications: "ใบรับรอง",
      projects: "โปรเจกต์",
      award: "รางวัล",
      contact: "ติดต่อ",
    },
    heroEyebrow: "สวัสดีครับ ผมโอเล่",
    role: "Full Stack Developer",
    target: "กำลังมองหาโอกาสสหกิจในตำแหน่ง Full Stack Developer Intern",
    intro:
      "นักศึกษาสาขาวิทยาการคอมพิวเตอร์ที่สนใจการพัฒนาเว็บแอปพลิเคชันแบบ Full Stack มีประสบการณ์จากโปรเจกต์มหาวิทยาลัยทั้งด้าน Frontend, Backend, API, Authentication และฐานข้อมูล พร้อมเรียนรู้เทคโนโลยีและกระบวนการพัฒนาซอฟต์แวร์จากการทำงานจริง",
    viewProjects: "ดูผลงาน",
    contactMe: "ติดต่อผม",
    openToWork: "OPEN TO CO-OP",
    statProjects: "โปรเจกต์เด่น",
    statAward: "รางวัลด้าน AI",
    statGpa: "GPA",
    aboutLabel: "ABOUT ME",
    aboutTitle: "รู้จักผมให้มากขึ้น",
    aboutBody:
      "ผมสนใจการพัฒนาเว็บแอปพลิเคชันตั้งแต่การออกแบบส่วนติดต่อผู้ใช้ การพัฒนาระบบหลังบ้าน การเชื่อมต่อ API ไปจนถึงการจัดการฐานข้อมูล เป้าหมายของผมคือพัฒนาทักษะด้าน Full Stack Development จากการทำงานจริง และเติบโตเป็นนักพัฒนาที่สามารถสร้างระบบได้อย่างครบวงจร",
    strengthsTitle: "จุดแข็ง",
    strengths: [
      "ละเอียดรอบคอบและช่างสังเกต",
      "คิดวิเคราะห์และแก้ปัญหาอย่างเป็นขั้นตอน",
      "รับผิดชอบต่องานที่ได้รับมอบหมาย",
      "เปิดรับคำแนะนำและพร้อมเรียนรู้สิ่งใหม่",
      "อ่านเอกสารทางเทคนิคภาษาอังกฤษได้",
    ],
    educationLabel: "EDUCATION",
    educationTitle: "ประวัติการศึกษา",
    degree: "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์",
    faculty: "คณะ เทคโนโลยีสารสนเทศและนวัตกรรม",
    university: "มหาวิทยาลัยกรุงเทพ",
    studyYear: "2023 — 2027 (คาดว่าจะสำเร็จการศึกษา)",
    skillsLabel: "TECHNICAL SKILLS",
    skillsTitle: "ทักษะและเครื่องมือ",
    certificationsLabel: "CERTIFICATIONS",
    certificationsTitle: "ใบรับรองและประกาศนียบัตร",
    certificationsLead:
      "ใบรับรองด้าน Cloud, Generative AI และ AI Vector Search จาก Oracle University",
    viewCertificate: "ดูใบประกาศ",
    closeCertificate: "ปิด",
    basic: "พื้นฐาน",
    intermediate: "ปานกลาง",
    projectsLabel: "SELECTED PROJECTS",
    projectsTitle: "ผลงานที่คัดสรร",
    projectsLead:
      "โปรเจกต์ที่สะท้อนทักษะด้าน Frontend, Backend, API, ฐานข้อมูล การทำงานร่วมกับทีม และการนำเทคโนโลยีมาแก้ปัญหาจริง",
    problem: "วัตถุประสงค์",
    responsibility: "หน้าที่รับผิดชอบ",
    result: "ผลลัพธ์",
    team: "ทีม",
    github: "ดูโค้ดบน GitHub",
    awardLabel: "ACTIVITY & AWARD",
    awardTitle: "Best AI Prototype for Real-World Impact Award",
    awardEvent: "IT Empowering Day 2026 · Bangkok University",
    awardBody:
      "ร่วมพัฒนา StyleSpace ตั้งแต่หน้าอัปโหลดแปลน การเชื่อมต่อ AI เพื่อวิเคราะห์ห้องและสร้างภาพจำลอง ไปจนถึงระบบแนะนำสไตล์ วัสดุ และผลิตภัณฑ์ พร้อมดูแลการเชื่อมต่อระบบ ทดสอบ แก้ไขข้อผิดพลาด และร่วมเตรียมผลงานสำหรับนำเสนอต่อคณะกรรมการ",
    awardResult:
      "ผลงานได้รับรางวัลจากการประยุกต์ใช้ AI เพื่อช่วยให้ผู้ใช้งานมองเห็นภาพห้องก่อนตัดสินใจตกแต่ง สะท้อนประสบการณ์ด้านการทำงานเป็นทีม การพัฒนาเว็บแอปพลิเคชันแบบ Full Stack การสร้างต้นแบบจากโจทย์จริง และการนำเสนอผลงาน",
    contactLabel: "CONTACT",
    contactTitle: "มาร่วมสร้างเว็บแอปพลิเคชันที่ใช้งานได้จริงไปด้วยกัน",
    contactBody:
      "ผมกำลังมองหาโอกาสสหกิจในตำแหน่ง Full Stack Developer Intern และพร้อมเรียนรู้และพัฒนาซอฟต์แวร์ร่วมกับทีมในสภาพแวดล้อมการทำงานจริง",
    email: "อีเมล",
    phone: "โทรศัพท์",
    footer: "ออกแบบและพัฒนาโดย Athip Saenpakdee",
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      projects: "Projects",
      award: "Award",
      contact: "Contact",
    },
    heroEyebrow: "Hello, I’m Ole",
    role: "Full Stack Developer",
    target: "Seeking a Full Stack Developer Co-op Internship",
    intro:
      "A Computer Science student interested in full-stack web development, with project experience across frontend interfaces, backend services, APIs, authentication, and databases. I am eager to strengthen my development skills through real-world software projects.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    openToWork: "OPEN TO CO-OP",
    statProjects: "Featured Projects",
    statAward: "AI Award",
    statGpa: "GPA",
    aboutLabel: "ABOUT ME",
    aboutTitle: "A little more about me",
    aboutBody:
      "I am interested in building complete web applications, from user interface development and backend services to API integration and database management. My goal is to gain practical full-stack development experience and grow into a developer who can build reliable end-to-end systems.",
    strengthsTitle: "Strengths",
    strengths: [
      "Detail-oriented and observant",
      "Analytical, step-by-step problem solving",
      "Responsible and dependable",
      "Open to feedback and eager to learn",
      "Able to read technical documentation in English",
    ],
    educationLabel: "EDUCATION",
    educationTitle: "Academic background",
    degree: "Bachelor of Science in Computer Science",
    faculty: "School of Information Technology and Innovation",
    university: "Bangkok University",
    studyYear: "2023 — 2027 (Expected)",
    skillsLabel: "TECHNICAL SKILLS",
    skillsTitle: "Skills and tools",
    certificationsLabel: "CERTIFICATIONS",
    certificationsTitle: "Professional certifications",
    certificationsLead:
      "Cloud, Generative AI, and AI Vector Search certifications issued by Oracle University.",
    viewCertificate: "View certificate",
    closeCertificate: "Close",
    basic: "Basic",
    intermediate: "Intermediate",
    projectsLabel: "SELECTED PROJECTS",
    projectsTitle: "Featured work",
    projectsLead:
      "Projects that demonstrate frontend and backend development, API integration, database design, teamwork, and the practical application of technology.",
    problem: "Objective",
    responsibility: "My contribution",
    result: "Outcome",
    team: "Team",
    github: "View on GitHub",
    awardLabel: "ACTIVITY & AWARD",
    awardTitle: "Best AI Prototype for Real-World Impact Award",
    awardEvent: "IT Empowering Day 2026 · Bangkok University",
    awardBody:
      "Contributed to StyleSpace across the upload experience, AI integrations for room analysis and image generation, style and material recommendations, system integration, testing, debugging, and preparation for the judging presentation.",
    awardResult:
      "The project received this award for applying AI to a real interior-design decision problem. The experience strengthened my teamwork, full-stack web development, product prototyping, and presentation skills.",
    contactLabel: "CONTACT",
    contactTitle: "Let’s build useful web applications together",
    contactBody:
      "I am currently seeking a Full Stack Developer Co-op Internship and am ready to learn and contribute within a real software development team.",
    email: "Email",
    phone: "Phone",
    footer: "Designed and developed by Athip Saenpakdee",
  },
} as const;

const skills = [
  {
    title: "Programming",
    items: [
      ["Python", "basic"],
      ["Java", "basic"],
      ["Dart", "basic"],
      ["TypeScript", "basic"],
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      ["HTML & CSS", "intermediate"],
      ["JavaScript", "basic"],
      ["Flutter", "basic"],
    ],
  },
  {
    title: "Backend & API",
    items: [
      ["Flask", "basic"],
      ["REST API", "basic"],
      ["Authentication", "basic"],
    ],
  },
  {
    title: "Database",
    items: [
      ["MySQL", "basic"],
      ["SQLite", "basic"],
      ["Firebase", "basic"],
    ],
  },
  {
    title: "Tools",
    items: [
      ["Git & GitHub", "basic"],
      ["Postman", "basic"],
      ["Figma", "basic"],
      ["Visual Studio Code", "intermediate"],
    ],
  },
  {
    title: "Language",
    items: [
      ["Thai — Native", "intermediate"],
      ["English — CEFR B2", "intermediate"],
    ],
  },
] as const;

const certificates = [
  {
    id: "01",
    titleTh:
      "ผู้เชี่ยวชาญด้าน Generative AI บน Oracle Cloud Infrastructure ประจำปี 2025",
    titleEn:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle University",
    dateTh: "ตุลาคม 2025",
    dateEn: "October 2025",
    image: "/portfolio/certificate-oracle-genai-1.png",
  },
  {
    id: "02",
    titleTh: "ผู้เชี่ยวชาญด้าน Oracle AI Vector Search",
    titleEn: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle University",
    dateTh: "ตุลาคม 2025",
    dateEn: "October 2025",
    image: "/portfolio/certificate-oracle-vector-search-1.png",
  },
  {
    id: "03",
    titleTh: "พื้นฐานปัญญาประดิษฐ์บน Oracle Cloud Infrastructure ประจำปี 2025",
    titleEn:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    dateTh: "ตุลาคม 2025",
    dateEn: "October 2025",
    image: "/portfolio/certificate-oracle-ai-foundations-1.png",
  },
] as const;

const projects = {
  th: [
    {
      number: "01",
      title: "ระบบรู้จำเลขไทยจากลายมือ ๓๑–๓๕",
      subtitle: "Thai Handwritten Digit Recognition",
      image: "/portfolio/project-thai-handwriting.png",
      alt: "หน้าจอเว็บแอปพลิเคชันทำนายเลขไทยจากลายมือ",
      objective:
        "พัฒนาระบบ Machine Learning สำหรับจำแนกลายมือภาษาไทย และเรียนรู้กระบวนการฝึก ประเมิน และนำโมเดลไปใช้งานผ่านเว็บ",
      contribution:
        "พัฒนาเส้นทางหน้าเว็บและ API ตรวจสอบโมเดล จัดทำไฟล์ตั้งค่า พัฒนาหน้าวาดและทำนาย รวมถึงส่วนประเมิน Accuracy, Precision, Recall, F1-score และ Confusion Matrix",
      outcome:
        "เว็บต้นแบบสามารถจำแนกเลขไทย ๓๑–๓๕ พร้อมแสดงค่าความมั่นใจและรองรับการประเมินโมเดล",
      tech: ["Python", "PyTorch", "CNN", "Flask", "JavaScript"],
      team: "โปรเจกต์กลุ่ม 4 คน",
      link: "https://github.com/AthipOle/ThaiHandwriting_ML_ALL_IN_CS462_327B",
    },
    {
      number: "02",
      title: "HydroH2O",
      subtitle: "แอปพลิเคชันติดตามการดื่มน้ำ",
      image: "/portfolio/project-hydroh2o.png",
      alt: "หน้าหลักของแอป HydroH2O แสดงปริมาณน้ำที่ดื่ม",
      objective:
        "ช่วยให้ผู้ใช้งานดื่มน้ำอย่างสม่ำเสมอ ผ่านการบันทึก สถิติ เป้าหมายต่อเนื่อง และระบบคูปองรางวัล",
      contribution:
        "พัฒนาระบบสมัครสมาชิกและเข้าสู่ระบบ ออกแบบโมเดลผู้ใช้ เข้ารหัสรหัสผ่านด้วย Argon2id จัดการ Session และเขียน Unit Test ระบบ Authentication 9 กรณี",
      outcome:
        "แอปต้นแบบติดตามน้ำได้ครบถ้วน พร้อมระบบสมาชิก กราฟย้อนหลัง เป้าหมายต่อเนื่อง และคูปองรางวัล",
      tech: ["Flutter", "Dart", "SQLite", "Argon2id", "FL Chart"],
      team: "โปรเจกต์กลุ่ม 4 คน",
      link: "https://github.com/AthipOle/hydro-h2o",
    },
    {
      number: "03",
      title: "StyleSpace",
      subtitle: "ระบบออกแบบตกแต่งภายในด้วย AI",
      image: "/portfolio/project-stylespace.png",
      alt: "บูธนำเสนอโปรเจกต์ StyleSpace ในงาน IT Empowering Day",
      objective:
        "ช่วยให้ผู้ใช้เห็นภาพห้องหลังตกแต่งจากแปลน 2D ก่อนตัดสินใจเลือกสไตล์ วัสดุ และผลิตภัณฑ์",
      contribution:
        "พัฒนาหน้าอัปโหลดและแสดงผล เชื่อมต่อ Claude Vision และ Gemini พัฒนาระบบแนะนำสไตล์และวัสดุ พร้อมทดสอบและแก้ไขข้อผิดพลาด",
      outcome:
        "ระบบสามารถวิเคราะห์แปลน แนะนำสไตล์และวัสดุ และสร้างภาพจำลอง Isometric 3D ได้ 6 สไตล์",
      tech: ["TypeScript", "Vite", "Cloudflare", "Claude Vision", "Gemini"],
      team: "Senior Project ทีม All in · โจทย์จาก SCG",
      link: "https://github.com/AthipOle/stylespace-main",
    },
  ],
  en: [
    {
      number: "01",
      title: "Thai Handwritten Digit Recognition",
      subtitle: "Recognition system for Thai numerals ๓๑–๓๕",
      image: "/portfolio/project-thai-handwriting.png",
      alt: "Thai handwritten numeral prediction web application",
      objective:
        "Build a machine-learning system for Thai handwriting recognition and learn the full model training, evaluation, and web deployment workflow.",
      contribution:
        "Developed web routes and a model information API, application configuration, the drawing and prediction interface, and evaluation for accuracy, precision, recall, F1-score, and confusion matrix.",
      outcome:
        "A working prototype that classifies Thai numerals ๓๑–๓๕, displays confidence scores, and supports model evaluation.",
      tech: ["Python", "PyTorch", "CNN", "Flask", "JavaScript"],
      team: "Team project · 4 members",
      link: "https://github.com/AthipOle/ThaiHandwriting_ML_ALL_IN_CS462_327B",
    },
    {
      number: "02",
      title: "HydroH2O",
      subtitle: "Mobile water-intake tracking application",
      image: "/portfolio/project-hydroh2o.png",
      alt: "HydroH2O home screen showing daily water intake",
      objective:
        "Encourage consistent hydration through daily tracking, statistics, streaks, and reward coupons.",
      contribution:
        "Built registration and login, designed the user model, secured passwords with Argon2id, managed sessions, and wrote nine authentication unit-test cases.",
      outcome:
        "A complete prototype with member accounts, seven-day charts, daily goals, streaks, and a reward coupon flow.",
      tech: ["Flutter", "Dart", "SQLite", "Argon2id", "FL Chart"],
      team: "Team project · 4 members",
      link: "https://github.com/AthipOle/hydro-h2o",
    },
    {
      number: "03",
      title: "StyleSpace",
      subtitle: "AI-powered interior design platform",
      image: "/portfolio/project-stylespace.png",
      alt: "StyleSpace project booth at IT Empowering Day",
      objective:
        "Help users visualize a decorated room from a 2D floor plan before choosing a style, material, or product.",
      contribution:
        "Built upload and result interfaces, integrated Claude Vision and Gemini, developed style and material recommendations, and tested and debugged the system.",
      outcome:
        "The system analyzes floor plans, recommends styles and materials, and produces Isometric 3D visualizations in six design styles.",
      tech: ["TypeScript", "Vite", "Cloudflare", "Claude Vision", "Gemini"],
      team: "All in Senior Project · SCG challenge",
      link: "https://github.com/AthipOle/stylespace-main",
    },
  ],
} as const;

export default function Home() {
  const [lang, setLang] = useState<Language>("th");
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[number] | null
  >(null);
  const certificateTrackRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  const scrollCertificates = (direction: -1 | 1) => {
    certificateTrackRef.current?.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Athip portfolio home">
          <span className="brand-mark">AS</span>
          <span>
            <strong>Athip Saenpakdee</strong>
            <small>Full Stack Developer Intern</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#education">{t.nav.education}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#certifications">{t.nav.certifications}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#award">{t.nav.award}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="language-toggle" aria-label="Language">
          <button
            className={lang === "th" ? "active" : ""}
            onClick={() => setLang("th")}
            aria-pressed={lang === "th"}
          >
            TH
          </button>
          <span>/</span>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>
            Athip <span>Saenpakdee</span>
          </h1>
          <p className="hero-role">{t.role}</p>
          <div className="target-pill">
            <span className="pulse-dot" />
            {t.target}
          </div>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              {t.viewProjects} <span aria-hidden="true">↓</span>
            </a>
            <a className="button secondary" href="#contact">
              {t.contactMe} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="availability">{t.openToWork}</div>
            <img src="/portfolio/athip-profile.png" alt="Athip Saenpakdee" />
            <div className="portrait-caption">
              <span>Ole</span>
              <small>Bangkok, Thailand</small>
            </div>
          </div>
          <div className="decor-grid" aria-hidden="true" />
        </div>
      </section>

      <section className="quick-stats">
        <div className="section-shell stats-grid">
          <div>
            <strong>3</strong>
            <span>{t.statProjects}</span>
          </div>
          <div>
            <strong>1</strong>
            <span>{t.statAward}</span>
          </div>
          <div>
            <strong>2.91</strong>
            <span>{t.statGpa}</span>
          </div>
          <div className="status-card">
            <span className="pulse-dot" />
            <strong>FULL STACK CO-OP 2027</strong>
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-grid">
          <p className="large-copy">{t.aboutBody}</p>
          <div className="strength-card">
            <h3>{t.strengthsTitle}</h3>
            <ul>
              {t.strengths.map((strength) => (
                <li key={strength}>
                  <span>✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section education-section" id="education">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">{t.educationLabel}</p>
            <h2>{t.educationTitle}</h2>
          </div>
          <article className="education-card">
            <div className="education-year">2023</div>
            <div className="education-main">
              <span className="university-chip">BU</span>
              <div>
                <h3>{t.degree}</h3>
                <p>{t.faculty}</p>
                <strong>{t.university}</strong>
              </div>
            </div>
            <div className="education-meta">
              <span>{t.studyYear}</span>
              <strong>GPA 2.91</strong>
            </div>
          </article>
          <article className="education-card">
            <div className="education-year">2019</div>

            <div className="education-main">
              <span className="university-chip">KN</span>

              <div>
                <h3>
                  {lang === "th"
                    ? "มัธยมศึกษาตอนปลาย แผนการเรียน วิทยาศาสตร์–คณิตศาสตร์"
                    : "Upper Secondary Education — Science–Mathematics Program"}
                </h3>

                <p>
                  {lang === "th"
                    ? "แผนการเรียน วิทยาศาสตร์–คณิตศาสตร์"
                    : "Science–Mathematics Program"}
                </p>

                <strong>
                  {lang === "th"
                    ? "โรงเรียนกัลยาณีศรีธรรมราช"
                    : "Kanlayanee Si Thammarat School"}
                </strong>
              </div>
            </div>

            <div className="education-meta">
              <span>2019 — 2021</span>
            </div>
          </article>

          <article className="education-card">
            <div className="education-year">2016</div>

            <div className="education-main">
              <span className="university-chip">KN</span>

              <div>
                <h3>
                  {lang === "th"
                    ? "มัธยมศึกษาตอนต้น แผนการเรียน — English Program"
                    : "Lower Secondary Education — English Program"}
                </h3>

                <p>
                  {lang === "th"
                    ? "แผนการเรียน English Program"
                    : "English Program"}
                </p>

                <strong>
                  {lang === "th"
                    ? "โรงเรียนกัลยาณีศรีธรรมราช"
                    : "Kanlayanee Si Thammarat School"}
                </strong>
              </div>
            </div>

            <div className="education-meta">
              <span>2016 — 2018</span>
            </div>
          </article>

          <article className="education-card">
            <div className="education-year">2010</div>

            <div className="education-main">
              <span className="university-chip">AMC</span>

              <div>
                <h3>
                  {lang === "th"
                    ? "ระดับประถมศึกษา แผนการเรียน — English Program"
                    : "Primary Education — English Program"}
                </h3>

                <p>
                  {lang === "th"
                    ? "แผนการเรียน English Program"
                    : "English Program"}
                </p>

                <strong>
                  {lang === "th"
                    ? "โรงเรียนศรีธรรมราชศึกษา"
                    : "Srithammaratsuksa School"}
                </strong>
              </div>
            </div>

            <div className="education-meta">
              <span>2010 — 2015</span>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section section-shell" id="skills">
        <div className="section-heading">
          <p className="eyebrow">{t.skillsLabel}</p>
          <h2>{t.skillsTitle}</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-head">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.items.map(([name]) => (
                  <div className="skill-row" key={name}>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="content-section certifications-section"
        id="certifications"
      >
        <div className="section-shell">
          <div className="certifications-heading">
            <div className="section-heading">
              <p className="eyebrow">{t.certificationsLabel}</p>
              <h2>{t.certificationsTitle}</h2>
              <p className="certifications-lead">{t.certificationsLead}</p>
            </div>
            <div
              className="certificate-controls"
              aria-label="Certificate navigation"
            >
              <button
                type="button"
                onClick={() => scrollCertificates(-1)}
                aria-label="Previous certificates"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCertificates(1)}
                aria-label="Next certificates"
              >
                →
              </button>
            </div>
          </div>

          <div className="certificate-track" ref={certificateTrackRef}>
            {certificates.map((certificate) => {
              const title =
                lang === "th" ? certificate.titleTh : certificate.titleEn;
              const date =
                lang === "th" ? certificate.dateTh : certificate.dateEn;

              return (
                <button
                  className="certificate-card"
                  type="button"
                  key={certificate.id}
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`${t.viewCertificate}: ${title}`}
                >
                  <span className="certificate-image">
                    <img src={certificate.image} alt={title} />
                    <span className="certificate-number">{certificate.id}</span>
                  </span>
                  <span className="certificate-content">
                    <span className="certificate-badge">ORACLE CERTIFIED</span>
                    <strong>{title}</strong>
                    <small>
                      {certificate.issuer} · {date}
                    </small>
                    <span className="certificate-link">
                      {t.viewCertificate} <b aria-hidden="true">↗</b>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-shell">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">{t.projectsLabel}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsLead}</p>
          </div>

          <div className="project-list">
            {projects[lang].map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} />
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-content">
                  <div>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-detail">
                    <strong>{t.problem}</strong>
                    <p>{project.objective}</p>
                  </div>
                  <div className="project-detail">
                    <strong>{t.responsibility}</strong>
                    <p>{project.contribution}</p>
                  </div>
                  <div className="project-detail">
                    <strong>{t.result}</strong>
                    <p>{project.outcome}</p>
                  </div>
                  <div className="tag-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>
                      <strong>{t.team}:</strong> {project.team}
                    </span>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {t.github} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="award">
        <div className="award-layout">
          <div className="award-copy">
            <p className="eyebrow">{t.awardLabel}</p>
            <div className="award-icon" aria-hidden="true">
              ★
            </div>
            <h2>{t.awardTitle}</h2>
            <p className="award-event">{t.awardEvent}</p>
            <p>{t.awardBody}</p>
            <div className="award-result">
              <span>WINNER</span>
              <p>{t.awardResult}</p>
            </div>
          </div>
          <div className="award-gallery">
            <figure className="award-main-image">
              <img
                src="/portfolio/award-winner.png"
                alt="Athip holding the Best AI Prototype for Real-World Impact Award"
              />
            </figure>
            <figure className="award-secondary-image">
              <img
                src="/portfolio/award-stage.png"
                alt="StyleSpace team receiving the award on stage"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div>
            <p className="eyebrow light">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
          </div>
          <div className="contact-links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=athipole@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>{t.email}</small>
                <strong>athipole@gmail.com</strong>
              </span>
              <b>↗</b>
            </a>
            <a href="tel:+66611391658">
              <span>
                <small>{t.phone}</small>
                <strong>061-139-1658</strong>
              </span>
              <b>↗</b>
            </a>
            <a
              href="https://github.com/AthipOle"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>GitHub</small>
                <strong>github.com/AthipOle</strong>
              </span>
              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell">
          <span>© 2026 Athip Saenpakdee</span>
          <span>{t.footer}</span>
        </div>
      </footer>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={
            lang === "th"
              ? selectedCertificate.titleTh
              : selectedCertificate.titleEn
          }
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-modal-close"
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label={t.closeCertificate}
            >
              ×
            </button>
            <img
              src={selectedCertificate.image}
              alt={
                lang === "th"
                  ? selectedCertificate.titleTh
                  : selectedCertificate.titleEn
              }
            />
            <div>
              <strong>
                {lang === "th"
                  ? selectedCertificate.titleTh
                  : selectedCertificate.titleEn}
              </strong>
              <span>
                {selectedCertificate.issuer} ·{" "}
                {lang === "th"
                  ? selectedCertificate.dateTh
                  : selectedCertificate.dateEn}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
