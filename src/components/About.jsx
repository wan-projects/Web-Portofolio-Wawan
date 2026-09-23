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
            I'm a <strong>Data Scientist and AI/ML Engineer</strong> with a
            background in Informatics, specializing in building end-to-end
            machine learning and AI systems — from classical ML, deep learning,
            and computer vision to modern LLM-powered and agentic applications.
          </p>
          <p>
            My undergraduate thesis built a{" "}
            <strong>VGG16-style CNN from scratch</strong> to classify 20
            Javanese script characters, pairing a custom 5-stage preprocessing
            pipeline (interpolation, grayscale conversion, Laplacian-of-Gaussian
            edge detection, thresholding, and normalization) with SGD-tuned
            hyperparameters to reach{" "}
            <strong>0.99 training and 0.94 testing accuracy</strong> on a
            4,357-image dataset — peer-reviewed and presented at the{" "}
            <strong>8th IEEE ICITISEE 2024</strong> international conference in
            Yogyakarta.
          </p>
          <p>
            Strong academic foundation —{" "}
            <span className="about-hl">
              S1 Informatika, Universitas Nasional, GPA 3.92 (Cum Laude)
            </span>
            . Completed an intensive Data Science & Machine Learning bootcamp
            (DSML Batch 41, Dibimbing) spanning statistics and classical ML
            through deep learning, NLP, computer vision, and LLM/agentic
            systems, and hold a <strong>BNSP Associate Data Scientist</strong>{" "}
            certification.
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
