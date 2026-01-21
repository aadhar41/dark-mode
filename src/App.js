import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

function App() {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <main>
        <nav className="nav-center">
          <h1>Dark Mode Starter</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </nav>
        <section className="articles">
          {data.map((article) => {
            return <Article key={article.id} {...article} />
          })}
        </section>
      </main>
    </>
  )
}

export default App
