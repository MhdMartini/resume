---
mainfont: Liberation Sans
mainfontoptions:
- BoldFont=Liberation Sans Bold
- ItalicFont=Liberation Sans Italic
- BoldItalicFont=Liberation Sans Bold Italic

linkcolor: blue
urlcolor: blue

header-includes: |
  \usepackage{enumitem}
  \usepackage{xcolor}
  \definecolor{lightgray}{HTML}{808080}
  \setlist[itemize,1]{label=\textbullet, left=0pt}
  \setlist[itemize,2]{label=\textbullet, left=2pt}
---

# Mohamed Martini

\small\textcolor{lightgray}{NH · 617-955-4276 · leverai@leverai.tech · linkedin.com/in/mohamed-martini · https://leverai.tech}\normalsize

**Skills:** Python, AI/ML (LangChain, LangGraph, TensorFlow, PyTorch), Cloud (GCP - Cloud Run, CloudSQL, Cloud Trace), Data (PostgreSQL, BigQuery, Apache Beam), DevOps (Docker, CI/CD), Web (FastAPI), Flutter.


### **PROFESSIONAL EXPERIENCE**

**Founder & Principal Engineer** | Lever AI \
\small\textcolor{lightgray}{\textit{Full-time · July 2025 - Present}}\normalsize

- Founded a consulting and SaaS development LLC specialized in AI-powered, data-driven software solutions.
- **Showcase Project: Guesstimate: Not Trivia!** ([Google Play](https://play.google.com/store/apps/details?id=tech.leverai.guesstimate), [App Store](https://apps.apple.com/ca/app/guesstimate-not-trivia/id6756033242))
  - Designed and shipped a full-stack social estimation game to Android and iOS, featuring **real-time multiplayer** via Firestore, global leaderboards, and freemium monetization (RevenueCat, Unity Ads).
  - Built an **LLM-powered ETL pipeline** using smart seed selection and pgvector embeddings for **semantic deduplication**, generating 700+ high-quality, diverse, and fact-checked questions at <1 cent per question.
  - Architected real-time, fair question assignment for multi-player rounds using **optimized SQL**.
  - Implemented **end-to-end distributed tracing** with OpenTelemetry, correlating Flutter frontend events to FastAPI backend spans via Cloud Trace and Cloud Logging.
  - Established **GitFlow CI/CD pipelines** with automated testing, and dev/prod building and deployment.
  - Leveraged AI coding agents to accelerate cross-platform Flutter development while maintaining full architectural oversight of the Python backend.

\vspace{8pt}
**Machine Learning Engineer III** | Pison Technology \
\small\textcolor{lightgray}{\textit{Full-time · Oct 2022 - July 2025 · 2 yrs 10 mos}}\normalsize

- **Promoted from MLE to MLE III** in April 2025.
- Ran 1,200+ TensorFlow experiments for sleep stage classification, improving the baseline F1-score by 15%. Developed two custom loss functions to address class imbalance. Implemented a custom attention layer for feature mining, improving performance while reducing the size of the feature set by an order of magnitude.
- Developed real-time biosignal gesture detection models. Wrote Cythonized extension modules, and vectorized bottleneck functions, significantly improving the speed of online prediction and offline modeling.
- Led a “Hackaweek” project with two colleagues to implement a state-of-the-art [domain-invariant classification network with adversarial training](https://ieeexplore.ieee.org/document/10099164) in PyTorch, following the approach outlined in its original manuscript.
- Led the adoption of BigQuery as a data warehouse solution to streamline the handling of analytics data.
- Deployed and monitored streaming and batch ML models using Google Model Registry and Cloud Functions. 
- Wrote a scalable ETL pipeline using Apache Beam which brought down the compute time of 56 GB of data from 2 days to 15 minutes at a cost of 25 cents.
- Standardized the Python codebase, CI/CD workflows, and dependency management, enabling seamless collaboration between colleagues across operating systems.
- Maintained cross-team communication to ensure consistency and optimal integration of ML solutions.

\vspace{8pt}
**Research Assistant** | UNIVERSITY OF MASSACHUSETTS LOWELL \
\small\textcolor{lightgray}{\textit{*Jan 2021 – June 2022*}}\normalsize

- Implemented **Reinforcement Learning** agents for cooperative multi-agent Search and Rescue simulations.
- Implemented **object detection** training and inference pipelines. Used Generative AI for data augmentation. 

### **EDUCATION**

\begin{tabular}{@{} l l l l @{}}
\textbf{M.S. Computer Engineering}   & (4.0 GPA) & UMass Lowell & \small\textcolor{lightgray}{\textit{2022}}\normalsize \\
\textbf{B.S. Electrical Engineering} & (3.8 GPA) & UMass Lowell & \small\textcolor{lightgray}{\textit{2021}}\normalsize \\
\textbf{B.S. Biology}                & (3.5 GPA) & UMass Lowell & \small\textcolor{lightgray}{\textit{2019}}\normalsize \\
\end{tabular}