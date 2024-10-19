import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { AboutSection } from './components/sections'

import './App.css'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about')

  return (
    <div className="App">
      <header>
        {' '}
        <h1>Fernando Avalos</h1>
        <p>
          23-year-old Product Engineer at a Startup & Community Builder. I make
          stuff happen.
        </p>
      </header>

      <nav>
        <ul>
          <li>
            <button onClick={() => setActiveTab('about')}>About</button>
          </li>
          {/*<li><button onClick={() => setActiveTab('projects')}>Projects</button></li>
          <li>
            <button onClick={() => setActiveTab('feedback')}>Feedback</button>
          </li>
          <li>
            <button onClick={() => setActiveTab('random')}>Random</button>
          </li>*/}
        </ul>
      </nav>
      {activeTab === 'about' && <AboutSection />}
      {/*activeTab === 'projects' && <ProjectsSection />*/}
      {/*activeTab === 'feedback' && <FeedbackSection />*/}
      {/*activeTab === 'random' && <RandomSection />*/}
      <footer>
        <p>&copy; 2024 Fernando Avalos. Learning in public.</p>
        <div className="social-icons">
          <a href="https://github.com/favalosdev" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/fernando-avalos-lopez/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:fernandoadev@protonmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
