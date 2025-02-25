import React, { useState, useEffect } from 'react'
import {
  AboutSection,
  FeedbackSection,
  Sidebar,
  ProfileComponent,
  SocialMediaIcons,
} from './components'

import './App.css'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const mobileRegex =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i

    setIsMobile(mobileRegex.test(userAgent))
  }, [])

  return (
    <div className="flex flex-row h-[100vh] w-full">
      {!isMobile && <Sidebar />}
      <div className="h-[100%] flex flex-col flex-1 main-content">
        {isMobile && <ProfileComponent />}
        <nav className="flex flex-row items-center px-5">
          <ul className="flex flex-row flex-1 gap-6 justify-center py-5">
            <li>
              <button
                onClick={() => setActiveTab('about')}
                className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
              >
                About
              </button>
            </li>
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
          {activeTab === 'feedback' && <FeedbackSection />}
        </div>
        {isMobile && (
          <div className="w-[100%] flex flex-row justify-center items-center">
            <SocialMediaIcons />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
