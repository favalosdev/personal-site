import React from 'react'
import { FeedbackForm } from './Form'

export const FeedbackSection: React.FC = () => {
  return (
    <section id="feedback" className="flex flex-col items-center gap-5">
      <p>
        Have I made you laugh, surprised you, or maybe even stepped on your
        toes? Share your thoughts with me anonymously :p
      </p>
      <FeedbackForm />
    </section>
  )
}
