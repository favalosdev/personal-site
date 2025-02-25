import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { AboutSection, FeedbackSection } from './components/sections'
import profileImage from './assets/images/stick-man.png'

import './App.css'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about')

  return (
    <div className="flex flex-row h-[100vh] w-full">
      <div className="h-[100%] w-[25%] flex flex-col items-center p-10">
        <img
          src={profileImage}
          alt="Fernando Avalos"
          className="profile-image"
        />
        <h1 className="profile-title">Fernando Avalos</h1>
        <p className="text-center text-lg mb-8">Aspiring Renaissance-man</p>
        <div className="social-icons">
          <a
            href="https://github.com/favalosdev"
            className="hover:text-fuchsia-400"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/fernando-avalos-lopez/"
            className="hover:text-fuchsia-400"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:fernandoadev@protonmail.com"
            className="hover:text-fuchsia-400"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="h-[100%] flex flex-col flex-1 main-content">
        <nav>
          <ul className="flex gap-6 justify-center py-5">
            <li>
              <button
                onClick={() => setActiveTab('about')}
                className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
              >
                About
              </button>
            </li>
            {/* <li>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('essays')}
                  className={`nav-button ${activeTab === 'essays' ? 'active' : ''}`}
                >
                  Essays
                </button>
              </li> */}
            <li>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`nav-button ${activeTab === 'feedback' ? 'active' : ''}`}
              >
                Feedback
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex-1 px-5">
          {activeTab === 'about' && <AboutSection />}
          {/* {activeTab === 'projects' && <ProjectsSection />} */}
          {/* activeTab === 'essays' && <EssaysSection /> */}
          {activeTab === 'feedback' && <FeedbackSection />}
        </div>
      </div>
    </div>
  )
}

export default App
