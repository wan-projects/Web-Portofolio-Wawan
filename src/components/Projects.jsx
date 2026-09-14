import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
  {
    title: "RAG Chatbot: Indonesian Health Knowledge Base",
    category: "AI / LLM",
    desc: "Retrieval-Augmented Generation system built on Gemini + ChromaDB: a hands-on exploration of advanced retrieval strategies (HyDE, Multi-Query Retrieval, Query Decomposition, Agentic RAG) applied to an end-to-end case study — a multi-turn Indonesian-language health chatbot with an updatable knowledge base and a defensive, hallucination-reducing system prompt.",
    tech: [
      "Gemini API",
      "ChromaDB",
      "Vector Embeddings",
      "Agentic AI",
      "RAG",
      "Python",
    ],
    link: "https://github.com/wan-projects/Retrieval-Augmented-Generation-RAG-Practical-and-Building-Mini-Chabot-Assignment-Guidance",
  },
  {
    title: "LangChain & Agentic AI Hands-On",
    category: "AI / LLM",
    desc: "Hands-on tour of the LangChain ecosystem: LCEL chain composition, instruction/few-shot/chain-of-thought prompting, sequential and memory-backed chains, and a ReAct agent with custom tools (calculator, date lookup, product/business-data queries, web search) via AgentExecutor.",
    tech: ["LangChain", "LangSmith", "Groq API", "Llama 3.3", "Python"],
    link: "https://github.com/wan-projects/Langchain-Framework-Agentic-AI-Practical-Guidance",
  },
  {
    title: "LLM Prompt Engineering Practical Guidance",
    category: "AI / LLM",
    desc: "Hands-on exploration of the three foundational LLM prompting techniques — Zero-Shot, Few-Shot, and Chain-of-Thought — built on the Groq API with Llama 3.1, covering sentiment classification, code generation, and step-by-step reasoning on word problems.",
    tech: ["Groq API", "Llama 3.1", "Python", "Prompt Engineering"],
    link: "https://github.com/wan-projects/LLM-Prompt-Engineering-Practical-Guidance",
  },
  {
    title: "NLP: Classic Techniques, Embeddings & Language Models",
    category: "NLP",
    desc: "Progressed from classic NLP (NLTK/spaCy preprocessing, TF-IDF + MLP) to modern semantic embeddings (Qwen3-Embedding) and transformer language models (Gemma, Qwen3). Switching from TF-IDF to embeddings lifted AG News topic-classification accuracy from 84% to 87%, and both embedding methods correctly retrieved the right document in a semantic search test.",
    tech: [
      "Transformers",
      "Sentence-Transformers",
      "spaCy",
      "NLTK",
      "PyTorch",
      "Scikit-learn",
    ],
    link: "https://github.com/wan-projects/Natural-Language-Processing-NLP-Practical-Guidance",
  },
  {
    title: "Generative AI: VAE, GAN, Stable Diffusion & ComfyUI",
    category: "Computer Vision",
    desc: "Five-notebook tour of generative modeling: a from-scratch Variational Autoencoder on FashionMNIST, Real-ESRGAN + GFPGAN photo restoration, Stable Diffusion XL inference with a community checkpoint and LoRA, and node-based ComfyUI pipelines (ControlNet + inpainting). Capped with a capstone fine-tuning bert-base-multilingual-cased for Indonesian Named Entity Recognition (PER/LOC/ORG/TIME) end-to-end through the CRISP-DM methodology.",
    tech: [
      "PyTorch",
      "Diffusers",
      "Transformers",
      "ComfyUI",
      "OpenCV",
      "Python",
    ],
    link: "https://github.com/wan-projects/Generative-AI-Practical-and-Mini-Project-Training-Model-AI-Assignment-Guidance",
  },
  {
    title: "Stable Diffusion XL — Text-to-Image Generation",
    category: "Computer Vision",
    desc: "Generative AI exploration (DSML Batch 41, Dibimbing) with Stable Diffusion XL via HuggingFace Diffusers: text-to-image inference from the official stabilityai/stable-diffusion-xl-base-1.0 checkpoint, and from a community CivitAI checkpoint paired with a custom DPM-Solver++ (Karras) scheduler for faster, higher-quality sampling.",
    tech: ["PyTorch", "Diffusers", "Stable Diffusion XL"],
    link: "https://github.com/wan-projects/Stable-Diffusion-XL-Image-Generation-Practical-Guidance",
  },
  {
    title: "Computer Vision — Classification & Object Detection",
    category: "Computer Vision",
    desc: "Data Science bootcamp coursework (DSML Batch 41, Dibimbing) spanning the full CV pipeline: OpenCV image processing, a head-to-head comparison of hand-crafted HOG features vs. pretrained CLIP embeddings for 10-class fruit classification (33.8% vs 98.9% accuracy), ImageNet inference with a TorchVision ViT-H/14, and object detection with Ultralytics YOLOv8 — including a from-scratch ONNX/ONNXRuntime inference pipeline (NMS, coordinate rescaling) — plus training a YOLO detector on a custom Roboflow aquarium dataset.",
    tech: [
      "OpenCV",
      "PyTorch",
      "CLIP",
      "YOLOv8",
      "ONNX Runtime",
      "Scikit-learn",
    ],
    link: "https://github.com/wan-projects/Computer-Vision-Classification-Object-Detection-Practical-Guidance",
  },
  {
    title: "CNN, VGG16 & ResNet — Image Classification",
    category: "Computer Vision",
    desc: "Progressive deep learning coursework (DSML Batch 41, Dibimbing): from manual convolution kernels and channel-level image exploration, to a from-scratch VGG16 (Keras Subclassing API) trained on a 5-class, 4,317-image Flowers Recognition dataset, to a ResNet-18 challenge with identity/conv residual blocks. A regularization experiment (L2 + Dropout) cut the train-validation accuracy gap from ~34pp to ~7.6pp, lifting validation accuracy from 56.8% to 63.0%.",
    tech: ["TensorFlow", "Keras", "OpenCV", "CNN", "VGG16", "ResNet"],
    link: "https://github.com/wan-projects/Convolutional-Neural-Network-CNN-Practical-Guidance",
  },
  {
    title:
      "Hyperparameter Tuning and Preprocessing Techniques for Optimizing Javanese Scripts Classification",
    category: "Computer Vision",
    desc: "Custom VGG16-style CNN (5 conv blocks, batch norm, dropout) built from scratch in TensorFlow/Keras to classify 20 Javanese script characters. Applies a custom preprocessing pipeline (Gaussian blur, Laplacian sharpening, median filtering, Otsu's thresholding) with SGD-based hyperparameter tuning, reaching 0.99 training and 0.94 testing accuracy. Published and presented at IEEE ICITISEE 2024.",
    tech: ["TensorFlow", "Keras", "CNN", "OpenCV", "Scikit-learn"],
    link: "https://github.com/wan-projects/Hyperparameter-Tuning-and-Preprocessing-Techniques-for-Optimizing-Javanese-Scripts-Classification",
  },
  {
    title: "CIFAR-10 Image Classifier",
    category: "Computer Vision",
    desc: "Custom CNN built from scratch in PyTorch (3 conv blocks with BatchNorm, dropout, FC head), trained with data augmentation, One Cycle LR policy, gradient clipping, and weight decay — reaching 89.21% validation accuracy on CIFAR-10 in just 8 epochs (~3 min on GPU).",
    tech: ["PyTorch", "Torchvision", "CNN", "NumPy", "Matplotlib"],
    link: "https://github.com/wan-projects/CIFAR-10-Image-Classifier-PyTorch",
  },
  {
    title: "Clean vs Messy Room Classification",
    category: "Computer Vision",
    desc: "Binary CNN image classifier distinguishing clean vs. messy rooms — 4 conv/pooling blocks with image augmentation via Keras ImageDataGenerator. A foundational computer vision exercise highlighting the small-dataset limitation in deep learning (192 training images).",
    tech: ["TensorFlow", "Keras", "CNN", "ImageDataGenerator", "Python"],
    link: "https://github.com/wan-projects/Clean-vs-Messy-Room-Classification-CNN",
  },
  {
    title: "Rock-Paper-Scissors CNN (Split Folders)",
    category: "Computer Vision",
    desc: "Multi-class CNN classifying rock/paper/scissors hand gestures, using the split-folders library to physically partition the dataset (60:40) before training. Reached 97% training and 95% validation accuracy with an auto-stopping accuracy-threshold callback.",
    tech: ["TensorFlow", "Keras", "CNN", "split-folders", "scikit-learn"],
    link: "https://github.com/wan-projects/Rock-Paper-Scissors-CNN-SplitFolders",
  },
  {
    title: "Rock-Paper-Scissors CNN (Validation Split)",
    category: "Computer Vision",
    desc: "Multi-class CNN classifying rock/paper/scissors hand gestures using Keras' in-memory validation_split — no physical folder duplication needed. Reached 98% training and up to 98% validation accuracy, comparing this lighter-weight splitting approach against the split-folders variant.",
    tech: ["TensorFlow", "Keras", "CNN", "Python"],
    link: "https://github.com/wan-projects/Rock-Paper-Scissors-CNN-ValidationSplit",
  },
  {
    title: "Deep Learning: RNN Forecasting, Transformers & NLP Mini Project",
    category: "ML / DL",
    desc: "5-part deep learning collection: multivariate electricity-demand forecasting with a custom RNN and an Encoder-Decoder variant, a GPT-style Transformer built from scratch in PyTorch, HuggingFace GPT-2 fine-tuning on the same instruction-following task, and an individually graded Mini Project — a CRISP-DM-structured Indonesian text sentiment classifier comparing TF-IDF+DNN against an Embedding+BiLSTM model on the IndoNLU SMSA benchmark, with class-weighted training reaching 75% test accuracy.",
    tech: [
      "TensorFlow",
      "PyTorch",
      "HuggingFace",
      "Scikit-learn",
      "Gensim",
      "Python",
    ],
    link: "https://github.com/wan-projects/RNN-Deep-learning-Practical-and-Mini-Project-Guidance",
  },
  {
    title: "Hybrid Recommendation System",
    category: "ML / DL",
    desc: "Content-based, item-based collaborative, and hybrid recommenders built and evaluated side by side on two datasets: a MovieLens movie-similarity exercise, and an end-to-end Book-Crossing project (271K books, 1.1M+ ratings) using TF-IDF + cosine similarity for content-based filtering and an item-item matrix for collaborative filtering. The hybrid blend outperforms both individual approaches across Precision@10, Recall@10, and MAP@10.",
    tech: ["Scikit-learn", "NLTK", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    link: "https://github.com/wan-projects/Recomendation-System-Practical-and-Assignment-Guidance",
  },
  {
    title: "Neural Networks with TensorFlow, Keras & PyTorch",
    category: "ML / DL",
    desc: "Built and compared neural network architectures across two frameworks — Keras models for California Housing regression (MSE down to 1.38) and MNIST classification (up to 95.72% accuracy, testing back- and skip-connection variants), plus a PyTorch MLP (94.26% MNIST accuracy) and a pretrained ResNet18 correctly identifying a personal cat photo (62.3% confidence).",
    tech: ["TensorFlow", "Keras", "PyTorch", "NumPy", "Python"],
    link: "https://github.com/wan-projects/ANN-and-DNN-Deep-learning-Practical-Guidance",
  },
  {
    title: "Home Credit Default Risk Prediction",
    category: "ML / DL",
    desc: "End-to-end credit scoring ML project following the CRISP-DM methodology for Home Credit Indonesia. Merges 8 relational tables (307k+ loan applications) into a unified feature matrix, performs deep EDA, engineers 50+ aggregated features from bureau, installment, POS, and credit-card history, then benchmarks Logistic Regression, Random Forest, XGBoost, LightGBM, Voting, and Stacking ensembles — all tuned via Optuna or RandomizedSearchCV. Best model reaches ROC-AUC ~0.77 on a stratified hold-out. Includes SHAP global/local interpretability, calibration, threshold optimisation, lift/gain charts, and a production-ready inference module for real-time applicant scoring.",
    tech: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Optuna",
      "SHAP",
      "Pandas",
      "Seaborn",
      "Python",
    ],
    link: "https://github.com/wan-projects/Final-Project-Home-Credit-Default-Risk-Prediction",
  },
  {
    title: "Bank Churn Prediction & Model Interpretability",
    category: "ML / DL",
    desc: "End-to-end CRISP-DM case study on credit-card customer churn: EDA, feature engineering, and benchmarking 6 classifiers (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost) with SMOTE for class imbalance. Tuned XGBoost reached 0.992 ROC-AUC / 97.3% accuracy; SHAP (global importance, beeswarm, dependence, and local explanations) was then used to explain the model's predictions and translate them into 5 targeted retention strategies.",
    tech: [
      "XGBoost",
      "SHAP",
      "LightGBM",
      "Scikit-learn",
      "Pandas",
      "Seaborn",
      "Python",
    ],
    link: "https://github.com/wan-projects/Feature-Importance-Analysis-and-Model-Interpretation-Practical-and-Case-Study-Assignment-Guidance",
  },
  {
    title: "Customer Churn Prediction",
    category: "ML / DL",
    desc: "End-to-end churn-prediction pipeline across two datasets (telecom, 7,043 customers; banking, 10,000 customers): churn-rate EDA, business-motivated feature engineering, and a 12-model bake-off — Logistic Regression, KNN, Decision Tree, and SVM, each tuned via GridSearchCV, plus Random Forest, AdaBoost, Gradient Boosting, Voting, and Stacking ensembles — selected on Recall. Best model (SVM RBF, 80.6% Recall) is translated into a retention-program ROI simulation projecting a ~532% return.",
    tech: ["Scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib", "SciPy"],
    link: "https://github.com/wan-projects/Churn-Analysis-Practical-and-Assignment-Guidance",
  },
  {
    title: "Time Series Forecasting: E-Commerce Sales Case Study",
    category: "ML / DL",
    desc: "Two-part forecasting project: a SARIMA vs. LSTM comparison on retail transaction data, followed by a full CRISP-DM case study on 186K e-commerce orders — combining SARIMA, Holt-Winters, and Random Forest to forecast daily order volume, backed by a complete business analysis (2019 KPIs, trend/seasonality, top products, top cities, rush hours).",
    tech: [
      "Statsmodels",
      "SARIMA",
      "Holt-Winters",
      "TensorFlow/Keras",
      "Random Forest",
      "Python",
    ],
    link: "https://github.com/wan-projects/Time-Series-Forecasting-Practical-and-Assignment-Guidance",
  },
  {
    title: "Hyperparameter Tuning in Python: Customer Churn Case Study",
    category: "ML / DL",
    desc: "End-to-end hyperparameter optimization workflow: a hands-on comparison of GridSearchCV, RandomizedSearchCV, and Optuna (TPE) tuning strategies on benchmark datasets, applied to a Random Forest customer-churn classifier tuned via GridSearchCV + StratifiedKFold cross-validation — lifting validation ROC-AUC from 0.80 (baseline) to 0.84 on an imbalanced, 7K-record telecom dataset.",
    tech: [
      "Scikit-learn",
      "Optuna",
      "Pandas",
      "Matplotlib",
      "Random Forest",
      "Python",
    ],
    link: "https://github.com/wan-projects/Hyperparameter-Tuning-in-Python-Practical-and-Case-Study-Assignment-Guidance",
  },
  {
    title:
      "Ensemble Learning: Loan Default & Student Performance Classification",
    category: "ML / DL",
    desc: "Three-notebook bootcamp deep-dive into Bagging, Boosting, and Stacking: fundamentals on classic datasets, a hands-on loan-default classification exercise (Random Forest, XGBoost, AdaBoost, Stacking) with imbalanced-data handling, and a capstone predicting 5-class student academic performance via engineered features, scikit-learn pipelines, and Optuna tuning — lifting Random Forest accuracy from 90.2% to 92.3% (F1-macro 0.775 → 0.860).",
    tech: [
      "Scikit-learn",
      "XGBoost",
      "Optuna",
      "imbalanced-learn",
      "Pandas",
      "Python",
    ],
    link: "https://github.com/wan-projects/Ensemble-Learning-Practical-and-Case-Study-with-Python-Assignment-Guidance",
  },
  {
    title: "Exploring Clustering Techniques with Python",
    category: "ML / DL",
    desc: "End-to-end customer segmentation pipeline covering EDA, feature scaling, K-Means (Elbow Method + Silhouette Analysis), PCA visualization, and automated ML with PyCaret — applied across three real-world datasets.",
    tech: ["Python", "scikit-learn", "PyCaret", "Pandas", "Matplotlib/Seaborn"],
    link: "https://github.com/wan-projects/Exploring-Clustering-Techniques-with-Python-Practical-and-Assignment-Guidance",
  },
  {
    title: "Introduction to Unsupervised Machine Learning",
    category: "ML / DL",
    desc: "Hands-on walkthrough of the core unsupervised ML toolkit: K-Means clustering (Wine dataset) with elbow-method and silhouette-score selection, hierarchical clustering with dendrograms (Iris dataset), DBSCAN for density-based clustering on non-convex shapes, and PCA for dimensionality reduction (Breast Cancer dataset, 30 → 2 components) — combined into a full PCA + K-Means pipeline, plus a PyCaret automated-clustering reference.",
    tech: [
      "Scikit-learn",
      "SciPy",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "PyCaret",
    ],
    link: "https://github.com/wan-projects/Introduction-to-Unsupervised-Machine-Learning-Models-with-Python-Practical-Guidance",
  },
  {
    title: "Advanced Classification — Telco Customer Churn",
    category: "ML / DL",
    desc: "Data Science bootcamp coursework (DSML Batch 41, Dibimbing): an advanced-classification hands-on lab plus a graded individual case study predicting telecom customer churn. Covers Random Forest, Decision Tree, and XGBoost with SMOTE for class imbalance and StratifiedKFold cross-validation, evaluated across Accuracy, Precision, Recall, F1, and AUC-ROC — Random Forest wins at 0.836 AUC — capped off with a business-impact simulation showing 967.7% ROI on a targeted retention program.",
    tech: [
      "Scikit-learn",
      "XGBoost",
      "Imbalanced-learn",
      "Pandas",
      "Seaborn",
      "Python",
    ],
    link: "https://github.com/wan-projects/Exploring-Machine-Learning-Models-Practical-and-Advanced-Classification-Assignment-Guidance",
  },
  {
    title: "Classification Techniques with Python",
    category: "ML / DL",
    desc: "Hands-on classification workflow across 5 datasets: KNN with cross-validated K search (Iris, Breast Cancer), Logistic Regression with ROC-AUC and coefficient interpretation, a full 5-step Decision Tree workflow with an overfitting demo (Titanic), pixel-based image classification (Digits), AutoML benchmarking of ~30 classifiers via LazyPredict, and an independent Decision Tree vs. KNN comparison on the UCI Heart Disease dataset (90% AUC-ROC).",
    tech: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "LazyPredict",
    ],
    link: "https://github.com/wan-projects/Exploring-Machine-Learning-Models-with-Python-Classification-Techniques-Practical-Guidance",
  },
  {
    title: "Regularized Regression",
    category: "ML / DL",
    desc: "Two-part regularization deliverable: an in-class group exercise comparing OLS, Ridge, Lasso, and Elastic Net on a synthetic overfitting scenario and a noise-padded real dataset (with CV-tuned alpha), plus an individual Boston Housing case study — EDA, outlier/multicollinearity handling, a LazyPredict baseline, and Ridge/Lasso models selected via validation RMSE and interpreted through their coefficients.",
    tech: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Python",
    ],
    link: "https://github.com/wan-projects/Regularized-Regression-Practical-and-Case-Study-in-Python-Assignment-Guidance",
  },
  {
    title: "Multiple Linear Regression",
    category: "ML / DL",
    desc: "Applied multiple linear regression to predict student exam scores from 5 features (study hours, sleep, attendance, prior score, screen time), lifting R\u00b2 from 0.72 (single-feature baseline) to 0.89 with the full feature set. Diagnosed the model with VIF multicollinearity checks and residual analysis \u2014 and showed an engineered interaction feature actually lowered Adjusted R\u00b2.",
    tech: ["Scikit-learn", "Statsmodels", "Pandas", "Seaborn", "Python"],
    link: "https://github.com/wan-projects/Simple-and-Multiple-Regression-Models-Supervised-Practical-Guidance",
  },
  {
    title: "Advanced Exploratory Data Analysis",
    category: "DA / DS",
    desc: "Data Analyst Bootcamp module on advanced EDA techniques: a guided walkthrough (stratified sampling, cross-tabulation, group-by aggregation, automated profiling) paired with a full case study on 4,870 UK online-retail transactions — feature-engineered from raw timestamps (TotalSales, day/month/hour, time-of-day buckets) to answer 5 business questions covering revenue trends, geographic spread, peak spending windows, top customers, and best-selling products.",
    tech: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Jupyter", "Python"],
    link: "https://github.com/wan-projects/Advanced-Exploratory-Data-Analysis-with-Python-Practical-and-Assignment-Guidance",
  },
  {
    title: "Exploratory Data Analysis with Python",
    category: "DA / DS",
    desc: "Data Analyst Bootcamp coursework applying the full EDA workflow to two e-commerce case studies: an end-to-end churn-analysis pipeline (500 customers, 16 features) covering data cleaning, univariate/bivariate/multivariate analysis, correlation analysis, and automated profiling via YData, plus a group case study profiling online-retail customer behavior — age, device, and spending patterns — to produce data-driven marketing recommendations.",
    tech: [
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "YData Profiling",
      "Python",
    ],
    link: "https://github.com/wan-projects/Exploratory-Data-Analysis-with-Python-Practical-Guidance",
  },
  {
    title: "Advanced Techniques in Python Data Visualization",
    category: "DA / DS",
    desc: "Data Science & ML Bootcamp (Dibimbing) exercise + assignment combined into one project: advanced Matplotlib/Seaborn/Plotly techniques — multiclass hue/style/size encoding, custom annotations and spines, discrete vs. diverging color palettes, and FacetGrid/catplot/Plotly faceting — applied to a real case on 7,043 telco customers, analyzing what drives Customer Lifetime Value (CLTV) through distribution, bivariate, and categorical visualizations and closing with a data storytelling section translating the charts into retention strategy.",
    tech: ["Matplotlib", "Seaborn", "Plotly", "Pandas", "Python"],
    link: "https://github.com/wan-projects/Advanced-Techniques-in-Python-Data-Visualization-Practical-and-Assignment-Guidance",
  },
  {
    title: "Fundamentals of Data Visualization",
    category: "DA / DS",
    desc: "Data Science bootcamp exercise on choosing and building the right chart for the job — bivariate relationships, distributions, and categorical comparisons — spanning Matplotlib, Seaborn, and Plotly on the Titanic dataset: line, grouped bar, histogram/KDE, box plots, an interactive scatter/histogram/box suite, and a correlation heatmap, closed out with a chart-selection summary table.",
    tech: ["Matplotlib", "Seaborn", "Plotly", "Pandas", "Python"],
    link: "https://github.com/wan-projects/Data-Visualization-Fundamentals-Practical-Guidance",
  },
  {
    title: "Data Manipulation with Pandas",
    category: "DA / DS",
    desc: "Data Science bootcamp coursework (DSML Batch 41, Dibimbing): an in-class pandas exercise plus a graded individual case study applying the full data-manipulation toolkit — filtering, sorting, groupby/aggregation, merge/join, pivot tables, crosstab, appending, and datetime feature extraction — to a 1,000-row, 3-branch supermarket sales dataset, followed by Standard and Min-Max scaling for EDA on four numeric features.",
    tech: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Python",
    ],
    link: "https://github.com/wan-projects/Data-Manipulation-Practical-and-Assignment-Guidance",
  },
  {
    title: "Data Cleaning — Outlier, Missing Value & Encoding",
    category: "DA / DS",
    desc: "Bootcamp data-cleaning coursework across 4 datasets: duplicate handling (Titanic), IQR-based outlier trimming (California Housing), threshold-based column dropping plus median/mode imputation (company data), and Label/One-Hot/Mean encoding comparison (Telco Customer Churn) — each split into a guided class exercise and my own independently completed, graded assignment with different column choices.",
    tech: [
      "Pandas",
      "Scikit-learn",
      "SciPy",
      "Seaborn",
      "Matplotlib",
      "Python",
    ],
    link: "https://github.com/wan-projects/Data-Cleaning-Practical-and-Assignment-Guidance",
  },
  {
    title: "Data Collection",
    category: "DA / DS",
    desc: "Two structured datasets from a Data Collection bootcamp module: a 15,000-row bakery sales transaction log and a 100-record digital-activity survey — covering realistic schema design (categorical, numeric, and datetime fields) for downstream EDA and modeling practice.",
    tech: ["Pandas", "Python"],
    link: "https://github.com/wan-projects/Data-Collection-Practical-Guidance",
  },
  {
    title: "Statistical Hypothesis Testing in Python",
    category: "DA / DS",
    desc: "A practical toolkit covering core hypothesis tests — one-sample, independent two-sample, and paired t-tests, One-Way ANOVA with post-hoc comparisons, and two-proportion z-tests — applied to classroom exercises, a real mobile-game A/B test, and a graded assignment on a Customer Personality Analysis dataset (Shapiro-Wilk, Levene's test, and Welch's t-test to show campaign responders spend significantly more on wine, p ≈ 1.15×10⁻¹⁹).",
    tech: ["SciPy", "Statsmodels", "Pandas", "Seaborn", "Python"],
    link: "https://github.com/wan-projects/Hypothesis-Testing-Concepts-Practical-and-Assignment-Guidance",
  },
  {
    title: "Data Distribution & Probability Analysis",
    category: "DA / DS",
    desc: "Hands-on statistics exercises from a Data Science bootcamp's Data Distribution module: computing Z-scores and flagging outliers (|z| > 3) on 1,000 e-commerce transactions and the Titanic passenger dataset, building the PMF for a discrete variable (order quantity) and KDE-based PDFs for continuous ones (product price, customer spending), and comparing normal, right-skewed, and bimodal distribution shapes with narrative interpretation of each.",
    tech: ["Python", "Pandas", "NumPy", "SciPy", "Seaborn", "Matplotlib"],
    link: "https://github.com/wan-projects/Data-Distribution-and-Probability-Analysis-Practical-Guidance",
  },
  {
    title: "Descriptive Statistics",
    category: "DA / DS",
    desc: "Two-part Data Science bootcamp deliverable (Day 8: Descriptive Statistics): an in-class hands-on notebook on a mentor-provided dataset, plus an individual assignment built on a dataset designed from scratch. Both compute central tendency, dispersion, covariance/correlation, expected value, and confidence intervals — the hands-on notebook benchmarked against Seaborn's Titanic dataset, the assignment adding written interpretation after every analytical step.",
    tech: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Python"],
    link: "https://github.com/wan-projects/Descriptive-Statistics-Practical-and-Assignment-Guidance",
  },
  {
    title: "Diabetes Risk Prediction",
    category: "DA / DS",
    desc: "BNSP Associate Data Scientist certification capstone: an end-to-end clinical data pipeline (missing-value imputation, correlation analysis, Min-Max/Standard scaling) benchmarking 7 classifiers — Decision Tree, Random Forest, SVC, KNN, Naive Bayes, Logistic Regression, and XGBoost — to diagnostically predict diabetes from patient measurements. Each model is evaluated via accuracy, classification report, confusion matrix, ROC, and precision-recall curves; KNN led at 78.57% accuracy, clearing the >70% certification threshold.",
    tech: [
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "Python",
    ],
    link: "https://github.com/wan-projects/Diabetes-Prediction-Associate-Data-Scientist-Certification",
  },
  {
    title: "Customer Churn Prediction",
    category: "DA / DS",
    desc: "BNSP Associate Data Scientist certification capstone: cleaned and modeled the Telco Customer Churn dataset (7,043 customers) with KNN, Decision Tree, Random Forest, and XGBoost. XGBoost led at 79.35% accuracy — all four models cleared the >70% certification threshold, with contract type, charges, and support services as the top churn drivers.",
    tech: ["Scikit-learn", "XGBoost", "Pandas", "Seaborn", "Python"],
    link: "https://github.com/wan-projects/Customer-Churn-Prediction-Associate-Data-Scientist-Certification",
  },
  {
    title: "Multi-Source Data Integration",
    category: "DA / DS",
    desc: "Coursework exercise integrating data from multiple heterogeneous sources into unified DataFrames — key-based merges across CSVs, a 3-sheet Excel workbook join, and programmatic dataset retrieval via the Kaggle API and Google Drive.",
    tech: ["Pandas", "Kaggle API", "gdown", "Python"],
    link: "https://github.com/wan-projects/Data-Integration-Multi-Source-Pandas",
  },
  {
    title: "EDA: Census Income Dataset",
    category: "DA / DS",
    desc: "End-to-end exploratory data analysis on the Adult Census Income dataset — descriptive statistics, IQR-based outlier detection, and univariate/bivariate visualization (pie, bar, boxplot, heatmap) to uncover income patterns across demographics.",
    tech: ["Pandas", "Matplotlib", "Seaborn", "SciPy", "Python"],
    link: "https://github.com/wan-projects/Exploratory-Data-Analysis-Census-Income",
  },
  {
    title: "Feature Selection Techniques",
    category: "DA / DS",
    desc: "Comparing three feature-selection methods — SelectKBest with chi-squared test, ExtraTreesClassifier importance, and correlation heatmaps — to identify the strongest predictors in the Iris dataset.",
    tech: ["Scikit-learn", "Pandas", "Seaborn", "Python"],
    link: "https://github.com/wan-projects/Feature-Selection-Techniques-Iris",
  },
  {
    title: "Data Cleaning & Missing-Value Imputation",
    category: "DA / DS",
    desc: "A hands-on survey of 6 missing-value imputation strategies (mean/median, arbitrary value, end-of-tail, frequent category, random sample, constant) plus column cleanup and categorical encoding, using Scikit-learn and feature-engine.",
    tech: ["Scikit-learn", "Feature-engine", "Pandas", "Python"],
    link: "https://github.com/wan-projects/Data-Cleaning-Missing-Value-Imputation",
  },
  {
    title: "Simple Linear Regression — CO2 Emissions",
    category: "DA / DS",
    desc: "Predicting vehicle CO2 emissions from engine size — derived manually from first principles, then implemented with Scikit-learn; reaches R\u00b2 = 0.779 on the Government of Canada fuel-consumption dataset.",
    tech: ["Scikit-learn", "Pandas", "Matplotlib", "Python"],
    link: "https://github.com/wan-projects/Simple-Linear-Regression-CO2-Emissions",
  },
  {
    title: "Decision Tree Classification — Iris",
    category: "DA / DS",
    desc: "Training and evaluating a Decision Tree classifier on the Iris dataset, with a full confusion matrix, accuracy, precision, recall, and F1-score breakdown.",
    tech: ["Scikit-learn", "Pandas", "Python"],
    link: "https://github.com/wan-projects/Decision-Tree-Classification-Iris",
  },
  {
    title: "K-Means Clustering — Iris",
    category: "DA / DS",
    desc: "Unsupervised K-Means clustering (k=3) on unlabeled Iris measurements after Min-Max scaling, visualized against the true species groupings to check cluster quality.",
    tech: ["Scikit-learn", "Pandas", "Matplotlib", "Python"],
    link: "https://github.com/wan-projects/K-Means-Clustering-Iris",
  },
  {
    title: "Data Preprocessing Fundamentals",
    category: "DA / DS",
    desc: "Four core data-prep drills with Scikit-learn: loading data into pandas, feature scaling (Normalization vs. Standardization), train-test splitting, and k-fold cross-validation — the checklist every ML pipeline starts with.",
    tech: ["Scikit-learn", "Pandas", "Python"],
    link: "https://github.com/wan-projects/Data-Preprocessing-Fundamentals-Sklearn",
  },
  {
    title: "Supervised & Unsupervised Learning Algorithms",
    category: "DA / DS",
    desc: "Five exercises spanning the core ML toolkit: Decision Tree classification, Linear & Logistic Regression, K-Means clustering with the elbow method, and PCA dimensionality reduction, each on a different classic dataset.",
    tech: ["Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Python"],
    link: "https://github.com/wan-projects/Supervised-Unsupervised-Learning-Algorithms",
  },
  {
    title: "Support Vector Machines — Classification & Regression",
    category: "DA / DS",
    desc: "Applying SVM to both a classification task (diabetes prediction) and a regression task (SVR for salary prediction), comparing how the same margin-based approach adapts to discrete vs. continuous targets.",
    tech: ["Scikit-learn", "Pandas", "Python"],
    link: "https://github.com/wan-projects/Support-Vector-Machine-Classification-Regression",
  },
  {
    title: "GridSearchCV Tuning & Feature Engineering",
    category: "DA / DS",
    desc: "Automating hyperparameter selection for an SVR model with GridSearchCV, plus quick feature-engineering techniques — binning continuous values and splitting a text column into multiple fields.",
    tech: ["Scikit-learn", "Pandas", "Python"],
    link: "https://github.com/wan-projects/GridSearchCV-Tuning-and-Feature-Engineering",
  },
  {
    title: "Indonesia COVID-19 Time-Series Forecasting",
    category: "DA / DS",
    desc: "Data-science case study parsing Indonesia's raw COVID-19 case-update API dump into a clean 924-day time series (2020-2022), then applying a classical statistical forecasting pipeline: Augmented Dickey-Fuller stationarity testing, ACF/PACF diagnostics, and an auto_arima stepwise AIC search that selects ARIMA(1,0,0) with intercept as the best-fit model.",
    tech: ["Pandas", "Statsmodels", "pmdarima", "ARIMA", "Time Series"],
    link: "https://github.com/wan-projects/Covid19-Indonesia-Arima-Forecasting",
  },
  {
    title: "Data Science for Beginners — IT Fun 4.0",
    category: "DA / DS",
    desc: "Introductory data-science notebook covering Pandas, NumPy, and Matplotlib, capped with a full visual-analysis case study on the Canada immigration dataset (1980-2013): line, bar, pie, box, scatter, and weighted bubble plots cross-referenced against real economic events.",
    tech: ["Pandas", "NumPy", "Matplotlib", "Python"],
    link: "https://github.com/wan-projects/Python-For-Data-Science",
  },
  {
    title: "Introduction to Python",
    category: "Others",
    desc: "Self-study notebook working through Sololearn's Learn Python Core, from basic syntax to object-oriented programming. Covers 8 modules — control structures, functions & modules, exceptions & file I/O, functional programming, and OOP — each closed out with a small coding project (FizzBuzz, Fibonacci, a Celsius-Fahrenheit converter, a simple calculator, and more).",
    tech: ["Python", "OOP", "Functional Programming", "Jupyter"],
    link: "https://github.com/wan-projects/Introduction-to-Python",
  },
  {
    title: "Python Fundamentals — IT Fun 4.0",
    category: "Others",
    desc: "Beginner Python notebook from the IT Fun 4.0 workshop covering core language fundamentals: data types & type conversion, tuples/lists/sets/dictionaries, conditionals & loops, and functions, with a hands-on exercise closing out each section.",
    tech: ["Python", "Jupyter"],
    link: "https://github.com/wan-projects/Python-for-Beginner",
  },
];

const CATEGORIES = [
  "All",
  "AI / LLM",
  "NLP",
  "ML / DL",
  "DA / DS",
  "Computer Vision",
  "MLOps",
  "Others",
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div
          className="section-header fade-in-section"
          style={{ textAlign: "center" }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            {PROJECTS.length} projects spanning LLM agents, NLP, ML, computer
            vision, and data science.
          </p>
        </div>

        <div className="filter-tabs fade-in-section">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                className={`f-tab${active === cat ? " active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className="projects-grid fade-in-section">
          {filtered.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-head">
                <span className="project-cat">{p.category}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-gh"
                  aria-label={`GitHub: ${p.title}`}
                >
                  <FaGithub size={18} />
                </a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub <FaExternalLinkAlt size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
