import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load user preference or default to system theme
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="container">
      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1>Shashank Yelagandula</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "transparent",
            border: `2px solid ${darkMode ? "cyan" : "blue"}`,
            color: darkMode ? "cyan" : "blue",
            cursor: "pointer",
            borderRadius: "6px",
            fontFamily: "'Press Start 2P', cursive",
          }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Hi, I’m Shashank — a results-driven Data Analyst with 3+ years experience
          uncovering insights from complex datasets to drive business outcomes.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <ul>
          <li>📞 (571) 293-2463</li>
          <li>📧 <a href="mailto:shashankx1569@gmail.com">shashankx1569@gmail.com</a></li>
          <li>🔗 <a href="https://www.linkedin.com/in/shashank-yelagandula-7a3b391b0" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li>🐱 <a href="https://github.com/shashankyelagandula" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Merck - Data Analyst</h3>
        <p>Mar 2025 – Present</p>
        <ul>
          <li>Analyzed 100,000+ healthcare records for pharma R&D.</li>
          <li>Improved SQL reporting workflows by 30%.</li>
          <li>Built Tableau dashboards & Excel macros.</li>
        </ul>
        <h3>TCS - System Engineer / Data Analyst</h3>
        <p>Jun 2021 – Jan 2023</p>
        <ul>
          <li>Redesigned Tableau dashboards for 200+ stakeholders.</li>
          <li>Optimized SQL queries on 5+ TB financial data.</li>
          <li>Automated ETL pipelines, saving 30+ hours monthly.</li>
        </ul>
      </section>

      <section>
        <h2>Skills & Tools</h2>
        <p>Python, SQL, Tableau, Power BI, Azure, AWS, Databricks, Airflow, Docker</p>
      </section>

      <footer style={{marginTop: "2rem", fontSize: "0.8rem", textAlign: "center"}}>
        © 2025 Shashank Yelagandula
      </footer>
    </div>
  );
}

export default App;
