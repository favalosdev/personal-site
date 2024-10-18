import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('about')

  return (
    <div className="App">
      <header>  <h1>Fernando Avalos</h1>

        <p>
          23-year-old Product Engineer at a Startup & Community Builder. Figuring things out, one
          product at a time.
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

      {activeTab === 'about' && (
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hey, I’m Fernando Avalos, a 23-year-old Product Engineer at a
            startup. But beyond my day job, I’m deeply passionate about
            something I believe could shape the future:{' '}
            <strong>AI Safety</strong>. <br />
            <br />
            I’m not an expert (yet), but I’m all-in when it comes to learning
            and making a difference. In fact, I’m a{' '}
            <strong>co-founder and organizer of AI Safety Colombia</strong>,
            where we bring together people who care about ensuring that the
            development of artificial intelligence benefits humanity in a safe
            and responsible way. <br />
            <br />
            It’s an exciting and complex space, with a lot of unknowns. While
            I’m constantly learning, my focus is on helping build awareness and
            encouraging thoughtful conversations around AI’s long-term impact.
            AI is powerful, but with power comes risk — and I believe that
            managing this risk responsibly is one of the most important
            challenges of our time. <br />
            <br />
            My journey in AI Safety has just begun, but I’m driven to contribute
            wherever I can, from organizing discussions to collaborating with
            researchers and enthusiasts. If you’re interested in AI Safety or
            just want to chat about the future of AI, feel free to reach out.
            Let’s make sure we’re building something that not only works but
            lasts.
          </p>
        </section>
      )}

      {/*activeTab === 'projects' && (
        <section id="projects">
          <h2>Projects</h2>
          <p>
            Here are a few projects I’ve worked on. While I’m not an expert in any one thing, 
            I’ve had my hands in a bit of everything:
          </p>
          <ul>
            <li><strong>Project 1:</strong> A product dashboard that helps users visualize and manage their data.</li>
            <li><strong>Project 2:</strong> A mobile app prototype for improving team communication at startups.</li>
            <li><strong>Project 3:</strong> A feature that optimizes customer feedback collection for product iterations.</li>
          </ul>
          <p>
            Every project is a learning experience, and I’m always looking to improve. 
            Interested in collaborating? Let me know!
          </p>
        </section>
      )*/}

      {/*activeTab === 'feedback' && (
        <section id="feedback">
          <h2>Feedback</h2>
          <form id="feedbackForm">
            <label htmlFor="message">Your Feedback:</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Share your thoughts anonymously..."
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </section>
      )*/}

      {/*activeTab === 'random' && (
        <section id="random">
          <h2>Random Thoughts</h2>
          <div className="quotes">
            <blockquote>
              “You never know how strong you are until being strong is your only
              option.” - Bob Marley
            </blockquote>
            <blockquote>
              “Success is not final, failure is not the end, what counts is the
              courage to get back up again.” - Winston Churchill
            </blockquote>
          </div>
        </section>
      )*/}

      <footer>
        <p>&copy; 2024 Fernando Avalos. Learning in public.</p>
      </footer>
    </div>
  ); 
}

export default App;
