import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialMediaIcons: React.FC = () => {
  return (
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
      <a
        href="https://calendly.com/favalosl/tertulia"
        className="hover:text-fuchsia-400"
        aria-label="Schedule"
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
      </a>
    </div>
  )
}
