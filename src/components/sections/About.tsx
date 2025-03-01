import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex flex-col gap-5 p-10">
      <h1>What do I do?</h1>
      <ul className="list-disc">
        <li>
          <b>I solve problems, build scalable systems and maximize impact.</b>
        </li>
        <li>
          I&apos;m currently exploring Meta-learning, Systems-thinking, Eastern
          Philosophy, Consciousness, Buddhism and so much more.
        </li>
        <li>
          I work as Product Engineer at a startup named{' '}
          <a href="https://samsam.co">Samsam</a> and co-lead{' '}
          <a href="https://aiscol.org">AI Safety Colombia</a>.
        </li>
        <li>
          This page is a work in progress. I&apos;m still figuring out what I
          want to put here, but mostly it will be a collection of my projects
          and writings.
        </li>
      </ul>
      <p>
        Provisionally, you can inspect my{' '}
        <a href="https://github.com/favalosdev">work</a> and contact me via{' '}
        <a href="mailto:fernandoadev@protonmail.com">email</a>. If you want to
        have a chat, you can schedule a meeting with me{' '}
        <a href="https://calendly.com/favalosl/tertulia">here.</a>
      </p>
    </section>
  )
}
