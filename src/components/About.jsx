import React from "react";

const SKILL_GROUPS = [
  {
    title: "LLM & Agentic AI",
    tags: [
      "LangChain",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
      "Groq API",
      "Gemini API",
      "ChromaDB",
      "Vector Databases",
      "LangSmith",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    tags: [
      "PyTorch",
      "TensorFlow / Keras",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "Optuna",
      "PyCaret",
      "Ensemble Learning",
      "imbalanced-learn",
      "LazyPredict",
    ],
  },
  {
    title: "Computer Vision & Generative AI",
    tags: [
      "OpenCV",
      "CNN",
      "VGG16 / ResNet",
      "YOLOv8",
      "CLIP",
      "Stable Diffusion",
      "Diffusers",
      "ComfyUI",
      "ONNX Runtime",
    ],
  },
  {
    title: "Natural Language Processing",
    tags: [
      "Transformers",
      "HuggingFace",
      "Sentence-Transformers",
      "spaCy",
      "NLTK",
      "Gensim",
    ],
  },
  {
    title: "Data Analysis & Statistics",
    tags: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Statsmodels",
      "SciPy",
      "Time Series (ARIMA/SARIMA)",
      "YData Profiling",
      "Feature-engine",
    ],
  },
  {
    title: "Programming & Tools",
    tags: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Flask",
      "Node.js / Express",
      "Docker",
      "Google Antigravity",
      "Visual Studio Code",
      "Google Colab",
      "Jupyter Notebook",
      "Kaggle API",
      "SQLAlchemy",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "FastAPI",
      "Streamlit",
      "Selenium",
      "BeautifulSoup",
      "Git & GitHub",
      "Google Sheets/Spreadsheets",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Power BI",
      "Tableau",
    ],
  },
];

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <div className="section-header fade-in-section">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-wrap fade-in-section">
        <div className="about-body">
          <p>
            I am an Informatics professional passionate about{" "}
            <strong>
              Data Analytics, Data Science, Artificial Intelligence/Machine
              Learning (AI/ML), and Cloud Computing
            </strong>
            . I have experience building end-to-end machine learning and AI
            systems — from classical machine learning, deep learning, and
            computer vision, to{" "}
            <strong>
              computer vision to Large Language Models (LLMs) and agentic AI
              development.
            </strong>
            .
          </p>
          <p>
            I have applied and tested these competencies in industry through
            several strategic roles. As a{" "}
            <strong>
              Data Scientist (Project-Based) at Home Credit Indonesia
            </strong>{" "}
            with Rakamin Academy, I built a credit risk prediction model using
            307,511 loan application records, achieving an evaluation score of
            88.34. As a{" "}
            <strong>Research Analyst at PT Surya Citra Media Tbk</strong>{" "}
            (Indosiar & SINPO TV), I was responsible for analyzing the
            performance of flagship programs and television stations — covering
            rating, share, and audience segmentation metrics — and migrated over
            10,000 historical broadcast records from Excel to a PostgreSQL
            database using Python. Previously, as a{" "}
            <strong>Data Scientist Intern at Agree by Telkom Indonesia</strong>,
            I built a Tableau-based coffee commodity monitoring dashboard
            integrating data from BPS and Open Data Jabar.
          </p>
          <p>
            My research interest is reflected in my undergraduate thesis, where
            I built a{" "}
            <strong>
              Convolutional Neural Network (CNN) with a VGG16 architecture
            </strong>{" "}
            to classify 20 Javanese script characters. By combining a five-stage
            preprocessing pipeline with Stochastic Gradient Descent (SGD)-based
            hyperparameter tuning, the model achieved{" "}
            <strong>0.99 training accuracy and 0.94 testing accuracy</strong>{" "}
            across 4,357 images. This research was presented at the{" "}
            <strong>IEEE-affiliated international conference</strong>, the 2024
            8th International Conference on Information Technology, Information
            Systems and Electrical Engineering (ICITISEE), in Yogyakarta,
            jointly organized by Universitas Amikom Yogyakarta, Universitas
            Amikom Purwokerto, and Universitas Gadjah Mada (UGM).
          </p>
          <p>
            Academically, I hold{" "}
            <span className="about-hl">
              a Bachelor's degree in Informatics from Universitas Nasional
              (UNAS) with a Cumulative Grade Point Average (GPA) of 3.92/4.00
            </span>
            . My analytical and technical foundation is further validated by
            several professional certifications, including the{" "}
            <strong>Google Data Analytics Professional Certificate</strong>,{" "}
            <strong>Associate Data Scientist</strong> from the National
            Professional Certification Agency (BNSP), and{" "}
            <strong>IT Specialist Data Analytics</strong> from Certiport. I am
            also a graduate of the{" "}
            <strong>Bangkit Academy Cloud Computing track</strong>, a
            prestigious career-readiness program backed by Google, GoTo, and
            Traveloka.
          </p>
          <p>
            To stay current with technological developments, I am actively
            deepening my expertise through various training programs and
            bootcamps, including the{" "}
            <strong>
              Data Science & AI Machine Learning Bootcamp at Dibimbing.id
            </strong>
            , with a comprehensive curriculum spanning statistics and classical
            machine learning through to deep learning, Natural Language
            Processing (NLP), computer vision, and LLM and agentic AI systems. I
            have a strong passion for creating data-, AI-, and cloud-driven
            business solutions. I am currently{" "}
            <strong>open to career opportunities</strong> as a Data Analyst,
            Data Scientist, AI/ML Engineer, Cloud Engineer, or other strategic
            roles within the IT field.
          </p>
        </div>

        <div className="skills-col">
          {SKILL_GROUPS.map((g, i) => (
            <div key={i} className="skill-group">
              <p className="sg-title">{g.title}</p>
              <div className="sg-tags">
                {g.tags.map((t, j) => (
                  <span key={j} className="sg-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
