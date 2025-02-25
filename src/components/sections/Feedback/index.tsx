import React from 'react'
import { FeedbackForm } from './Form'

export const FeedbackSection: React.FC = () => {
  return (
    <section
      id="feedback"
      className="flex flex-col items-center justify-center gap-5"
    >
      <FeedbackForm />
    </section>
  )
}
