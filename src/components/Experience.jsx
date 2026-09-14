import React, { useState } from "react";

const WORK = [
  {
    role: "Data Scientist (Project-Based)",
    org: "Home Credit Indonesia x Rakamin Academy",
    date: "Apr – May 2026",
    location: "Project-Based Virtual Internship · Remote",
    type: "work",
    points: [
      "Conducted exploratory data analysis on Home Credit's loan dataset (307,511 observations, 122 features) using Python, addressing missing values, identifying anomalies, and analyzing distributions across seven data sources.",
      "Built and compared credit default risk models using Logistic Regression (ROC-AUC ~0.671) and Random Forest (ROC-AUC ~0.678), applying categorical encoding and multi-source feature engineering.",
      "Delivered data-driven business recommendations based on model results to support more accurate and fair loan approval decisions for the unbanked population segment.",
    ],
  },
  {
    role: "Research Analyst",
    org: "PT Surya Citra Media Tbk",
    date: "Jan 2025 – Jan 2026",
    location: "South Jakarta, DKI Jakarta | Contract · On-Site",
    type: "work",
    points: [
      "Analyzed and predicted daily performance of flagship programs (BRI Super League on Indosiar, Pegadaian Championship on SINPO TV) through audience share tracking and viewer behavior segmentation, delivering strategic scheduling and product recommendations to programming teams.",
      "Transformed manual data workflows into a structured relational database system, improving data accuracy, consistency, and reporting efficiency for historical broadcast data.",
      "Migrated 10,000+ FTV records from Excel (.xlsb) to PostgreSQL across 25+ normalized relational tables using Python (Pandas & SQLAlchemy), significantly improving data accessibility for reporting.",
      "Built a centralized internal web application using Flask, Bootstrap, and JavaScript to streamline CRUD processes and monitoring, accelerating end-to-end data analysis workflows.",
    ],
  },
  {
    role: "Data Scientist (Internship)",
    org: "Agree by Telkom Indonesia",
    date: "Feb – Jun 2024",
    location: "South Jakarta, DKI Jakarta | Internship · Hybrid Working",
    type: "work",
    points: [
      "Built a coffee commodity supply & demand monitoring dashboard using Tableau Public, integrating BPS and Open Data Jabar datasets for interactive analysis of price trends, production volumes, and peak harvest seasons.",
      "Extracted coffee price data via Python web scraping across multiple e-commerce platforms to establish a standardized, high-accuracy commodity price database.",
      "Managed monthly commodity price database updates and compiled potential buyer records within the B2B marketplace ecosystem, streamlining transaction processing (PO, BAST, invoicing) and reducing turnaround times.",
      "Collaborated with Operations and After-Sales teams through weekly progress reports to evaluate agricultural business strategies and optimize field-based operational problem-solving.",
    ],
  },
  {
    role: "Customer Service",
    org: "PT. Layanan Langit",
    date: "Jan – Mar 2020",
    location: "West Jakarta, DKI Jakarta | Contract · On-Site",
    type: "work",
    points: [
      "Delivered frontline customer support via phone and chat, providing accurate product and service information to resolve customer inquiries efficiently.",
      "Promoted digital loan products to eligible customers, balancing sales targets with clear communication of terms and conditions.",
      "Handled and de-escalated customer complaints, coordinating with internal teams to resolve issues and maintain customer satisfaction.",
      "Conducted proactive payment reminder calls to reduce overdue billing and support on-time collection rates.",
    ],
  },
  {
    role: "Customer Service",
    org: "PT. Micro Cloud Information Technology",
    date: "Aug – Dec 2019",
    location: "Central Jakarta, DKI Jakarta | Contract · On-Site",
    type: "work",
    points: [
      "Delivered frontline customer support via phone and chat, providing accurate product and service information to resolve customer inquiries efficiently.",
      "Promoted digital loan products to eligible customers, balancing sales targets with clear communication of terms and conditions.",
      "Handled and de-escalated customer complaints, coordinating with internal teams to resolve issues and maintain customer satisfaction.",
      "Conducted proactive payment reminder calls to reduce overdue billing and support on-time collection rates.",
      "Provided basic PC troubleshooting support — diagnosing OS issues, checking peripheral connections, and performing hardware disassembly/reassembly when needed.",
    ],
  },
  {
    role: "Pipe Cutting Operator",
    org: "PT. Wahana Duta Jaya Rucika",
    date: "Jun – Jul 2019",
    location: "Cikarang, West Java | Probation · On-site",
    type: "work",
    points: [
      "Cut PVC/PPR pipe fittings into standardized sections using manual pipe cutters, ensuring clean edges free of cracks or plastic residue to meet packaging and quality standards.",
      "Rotated weekly into warehouse operations covering receiving, FIFO-based stock stowing, order picking against packing lists, and load preparation for branch and customer distribution.",
      "Conducted quality control on cut pipe segments, inspecting physical output and segregating out-of-spec (reject) products from approved units before packaging.",
      "Kept manual cutting tools (pipe cutters, pipe scissors) sharp and ready for use, and managed waste segregation of scrap pipe material for recycling.",
    ],
  },
  {
    role: "IT Support Technician (Internship)",
    org: "CV. EGYD Computer",
    date: "Feb – Mar 2018",
    location: "Kuningan, West Java | Internship · On-Site",
    type: "work",
    points: [
      "Assembled and configured desktop PCs end-to-end — installed processors, RAM, motherboards, power supplies, HDDs, Etc, and verified full hardware functionality before handover to customers.",
      "Performed clean installations of Windows 7, 8, 10, including BIOS boot configuration, disk partitioning, and post-install setup, standardizing the OS deployment process for walk-in service requests.",
      "Installed and configured hardware drivers (VGA, audio, chipset, network, Bluetooth, Etc) using both vendor-specific packages and universal driver tools to ensure optimal system performance.",
      "Set up essential software packages (Microsoft Office, Adobe Photoshop, CorelDRAW, antivirus, Etc) for client machines, supporting the shop's retail and repair service operations.",
    ],
  },
];

const EDUCATION = [
  {
    role: "Data Science & AI Machine Learning Bootcamp — Batch 41",
    org: "Dibimbing.id",
    date: "Jan 2026 – Jul 2026",
    location: "Remote from Brebes, Central Java",
    type: "edu",
    points: [
      "Completed a 7-month industry-aligned bootcamp (55+ live classes, 45+ practice sessions) covering the full data pipeline — Python, SQL, NoSQL (MongoDB), statistics, and data visualization — through to Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI.",
      "Applied advanced ML/DL techniques including ensemble learning, hyperparameter tuning, time series forecasting, ANN/CNN/RNN architectures, churn prediction, and model interpretability (SHAP, LIME).",
      "Worked hands-on with LLM & Generative AI — Hugging Face Transformers, LangChain, Retrieval-Augmented Generation (RAG), and prompt engineering — alongside MLOps deployment using Docker, FastAPI, and Streamlit.",
      "Delivered 3 capstone AI products as part of the final project series: an Intelligent Customer Assistant (QnA system), a Personalized SmartShopper Assistant (recommendation engine), and SmartSplit Bill AI (computer vision-based receipt parsing).",
    ],
  },
  {
    role: "Data Analytics",
    org: "Kementerian Komunikasi dan Informatika RI × Google (Coursera)",
    date: "Apr 2024 – Jul 2024",
    location: "Remote from South Jakarta, DKI Jakarta",
    type: "edu",
    gpa: "Certified — Google Data Analytics Professional Certificate (Coursera) + Kemkominfo Certificate of Completion",
    points: [
      "Completed Kemkominfo's Digital Talent Scholarship – Fresh Graduate Academy, Batch 2 Data Analytics track delivered by Google, selected from 600 quota seats via substance and administrative screening.",
      "Earned the Google Data Analytics Professional Certificate (8 courses, 192 study hours) on Coursera, verified July 2024, covering the full data analysis lifecycle from fundamentals to visualization.",
      "Built practical skills in spreadsheet analysis, SQL querying (BigQuery), and structured data cleaning to move datasets from raw and inconsistent states into analysis-ready form.",
      "Learned R programming (RStudio, Tidyverse, dataframes, R Markdown) and Tableau to build dashboards and visual narratives that communicate data-driven insights to stakeholders.",
      "Completed a final capstone case study applying the end-to-end analytics workflow — question framing, data preparation, analysis, and visualization — for a portfolio-ready project.",
    ],
  },
  {
    role: "Cloud Computing Cohort",
    org: "Bangkit Academy by Google, GoTo, Traveloka (Yayasan Dicoding Indonesia)",
    date: "Feb 2023 – Jul 2023",
    location: "Remote from South Jakarta, DKI Jakarta",
    type: "edu",
    gpa: "Graduated — 20 SKS Credit + Google Cloud, Coursera & Dicoding Certifications",
    points: [
      "Selected as 1 of 5,013 Bangkit Academy 2023 participants (from 67,000+ applicants, 376 universities) for the Cloud Computing learning path, a Kemdikbudristek-recognized MBKM independent-study program.",
      "Completed 900+ hours of coursework spanning JavaScript/Node.js backend development, Google Cloud Computing Foundations, IT Support & System Administration (Coursera), and the Cloud Engineer learning path, preparing for the Associate Cloud Engineer certification.",
      "Built the Cloud Computing backend for Road Sign Spotter, a 6-person capstone project spanning Machine Learning, Mobile Development, and Cloud Computing, detecting Indonesian traffic signs via a YOLOv5 model to improve road safety awareness.",
      "Designed and deployed a Node.js/Express REST API (JWT auth, MySQL via Cloud SQL, Swagger docs) on Google App Engine, plus a Flask-based ML inference API on Cloud Run.",
      "Earned certifications from Dicoding, Coursera, and Google Cloud Skills Boost, alongside weekly soft-skill and English-communication training in professional presentation, critical thinking, and adaptability.",
    ],
  },
  {
    role: "Data Science & Bela Negara — MBKM Student Exchange (PMM-PKBN)",
    org: "LLDikti Wilayah III & Kemenhan RI (Badiklat)",
    date: "Sep 2022 – Jan 2023",
    location: "Hybrid from South Jakarta, DKI Jakarta",
    type: "edu",
    gpa: "20 SKS Credit Equivalent + Bela Negara Certification",
    points: [
      "Completed Pertukaran Mahasiswa Merdeka – Pembinaan Kesadaran Bela Negara (PMM-PKBN), a national MBKM exchange program run jointly by Kemendikbudristek and the Ministry of Defense across 46 partner universities.",
      "Completed the Data Science specialization (Universitas Gunadarma), covering data preparation, exploratory analysis, and predictive modeling (regression, Bayesian, decision tree, clustering, neural networks) under Indonesia's SKKNI competency standard.",
      "Studied MLOps, deployment strategy, and pipelining, applying concepts in dedicated industry sessions on data science practice across the private and public sectors.",
      "Completed the Bela Negara curriculum (national insight, Four Consensuses, national vigilance) and, as a student team, co-produced five short films on Pancasila, Bhinneka Tunggal Ika, Cinta Tanah Air, NKRI, and Bela Negara Through Profession.",
      "Rounded out the 20-SKS package with coursework in Digital Forensics (SNI ISO/IEC 27037:2014 evidence handling), Public Relations & Digital PR strategy (LSPR), and English for national communication.",
    ],
  },
  {
    role: "Junior Network Administrator",
    org: "Digital Talent Scholarship (Kominfo) x Politeknik Negeri Jakarta",
    date: "Jul – Aug 2022",
    location: "Remote from South Jakarta, DKI Jakarta",
    type: "edu",
    points: [
      "Completed a 90-hour intensive Vocational School Graduate Academy (VSGA) training covering network topology design, device specification, IP addressing, and wireless network deployment.",
      "Designed IP addressing and subnetting for a 3-building enterprise network (400+ devices) using Packet Tracer as part of the BNSP practical competency assessment, calculating subnet masks, gateways, and broadcast addresses for each segment.",
      "Configured inter-router routing across 3 buildings under a single Autonomous System, including DHCP pool setup and interface configuration, verified through successful ICMP connectivity tests between clients and servers.",
      "Identified gaps in access-control configuration (wireless-to-PC network isolation) during the assessment, providing a concrete area for continued hands-on improvement in network security policy implementation.",
    ],
  },
  {
    role: "Junior Web Developer",
    org: "Digital Talent Scholarship (Kominfo) x Politeknik Negeri Cilacap",
    date: "Jul – Aug 2021",
    location: "Remote from Brebes, Central Java",
    type: "edu",
    points: [
      "Completed a 90-hour intensive Vocational School Graduate Academy (VSGA) program covering HTML, CSS, PHP, MySQL, and phpMyAdmin for web application development.",
      "Built a team as a 5-member capstone project — a PHP/MySQL CRUD web app for certificate management, including dynamic record handling and automated PDF certificate generation with Dompdf.",
      "Completed 30+ hours of soft-skills training (Business English, Personal Branding, Interpersonal Communication) covering CV writing, interview preparation, and professional workplace etiquette.",
    ],
    awards: [
      {
        text: "BNSP Certified — Junior Web Developer",
        url: "https://drive.google.com/file/d/10HSY7j7-3BrC7-9iRgPyjFi6m4kTFG_p/view?usp=sharing",
      },
    ],
  },
  {
    role: "Bachelor of Computer Science",
    org: "National University (Unas)",
    date: "Sep 2020 – Sep 2024",
    location: "South Jakarta, DKI Jakarta",
    type: "edu",
    gpa: "GPA 3.92 / 4.00",
    points: [
      "Focused coursework in Artificial Intelligence, Deep Learning, Natural Language Processing (NLP), Machine Learning, Data Science, Database Systems, Software Engineering, and Cloud Computing.",
      'Final thesis: "Hyperparameter Tuning and Preprocessing Techniques for Optimizing Javanese Scripts Classification" — a VGG-16 CNN model achieving 0.99 training and 0.94 testing accuracy on 20-class script recognition.',
      "Presented thesis research as a paper at ICITISEE 2024, an IEEE-affiliated international hybrid conference hosted by Universitas Amikom Yogyakarta, Universitas Amikom Purwokerto and Universitas Gadjah Mada.",
      "Certified Associate Data Scientist by BNSP (National Professional Certification Body) — built diabetes classification models across 7 algorithms, achieving 78.6% accuracy with KNN.",
    ],
    awards: [
      {
        text: "Best Research Award",
        url: "https://ieeexplore.ieee.org/document/10730205/",
      },
      {
        text: "Best Presenter Award",
        url: "https://ftki.unas.ac.id/wawan-mahasiswa-informatika-unas-hadirkan-solusi-optimasi-klasifikasi-aksara-jawa-di-icitisee-2024/",
      },
    ],
  },
  {
    role: "Computer and Network Engineering",
    org: "SMK Cibening (Vocational High School)",
    date: "Jul 2016 – May 2019",
    location: "Kuningan, West Java",
    type: "edu",
    gpa: "Competency Score 84/100 — Sangat Kompeten",
    points: [
      "Completed a 3-year vocational program in Teknik Komputer dan Jaringan (TKJ), covering computer assembly, OS installation, and network infrastructure fundamentals.",
      "Certified Competent in National Skills Competency Test (UKK) — Network Device Routing Configuration, achieving 84/100 with top marks in the Attitude & Work Ethics component (86/100).",
      "Authored a project work report on LAN/Hub network simulation using Cisco Packet Tracer, covering IP addressing, subnetting, and client-server connectivity testing.",
      'Completed 2-month industrial internship (PKL) at CV. EGYD Computer, rated "Sangat Baik" (84/100 average) across discipline, initiative, and work quality.',
      "Participated in an industry visit to PT Indosat Ooredoo's satellite ground station in Jatiluhur, studying satellite communication infrastructure and telecommunications network operations.",
    ],
  },
];

const Experience = () => {
  const [tab, setTab] = useState("work");
  const items = tab === "work" ? WORK : EDUCATION;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header fade-in-section">
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="timeline-tabs fade-in-section">
          <button
            className={`t-tab${tab === "work" ? " active" : ""}`}
            onClick={() => setTab("work")}
          >
            Work Experience
          </button>
          <button
            className={`t-tab${tab === "edu" ? " active" : ""}`}
            onClick={() => setTab("edu")}
          >
            Education
          </button>
        </div>

        <div className="timeline fade-in-section">
          {items.map((item, i) => (
            <div key={i} className="tl-item">
              <div className={`tl-dot${item.type === "edu" ? " edu" : ""}`} />
              <div className="tl-card">
                <div className="tl-header">
                  <div>
                    <div className="tl-role">{item.role}</div>
                    <div
                      className={`tl-org${item.type === "edu" ? " edu-color" : ""}`}
                    >
                      {item.org}
                    </div>
                    {item.gpa && <span className="tl-gpa">{item.gpa}</span>}
                  </div>
                  <div className="tl-meta">
                    <span className="tl-date">{item.date}</span>
                    <span className="tl-location">{item.location}</span>
                  </div>
                </div>
                <ul className="tl-points">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                {item.awards && (
                  <div className="tl-awards">
                    {item.awards.map((a, j) =>
                      typeof a === "object" && a.url ? (
                        <a
                          key={j}
                          href={a.url}
                          target="_blank"
                          rel="noreferrer"
                          className="tl-award tl-award-link"
                        >
                          🏆 {a.text}
                        </a>
                      ) : (
                        <span key={j} className="tl-award">
                          🏆 {typeof a === "object" ? a.text : a}
                        </span>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
