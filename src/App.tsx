import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p>Welcome to my personal website!</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I am a passionate software developer with experience in building web applications.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
        <p>
          <a href="https://www.linkedin.com/in/yi-shiuan-elsa-chiang/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            Your GitHub
          </a>
        </p>
      </section>

      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  )
}

export default App
