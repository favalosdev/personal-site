import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export const FeedbackForm: React.FC = () => {
  const [state, handleSubmit] = useForm('mpwqgkag')

  if (state.succeeded) {
    return <p>Thanks for your feedback!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea id="message" name="message" placeholder="Your feedback" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}
