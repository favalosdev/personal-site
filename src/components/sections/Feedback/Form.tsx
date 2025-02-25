import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export const FeedbackForm: React.FC = () => {
  const [state, handleSubmit] = useForm('mpwqgkag')

  const { submitting, succeeded, errors } = state

  if (succeeded) {
    return <h2>Thanks for your feedback!</h2>
  }

  return (
    <div className="flex flex-col w-[100%] h-[300px] justify-center items-center">
      {succeeded ? (
        <h2>Thanks for your feedback!</h2>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            width: '80%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <textarea
            id="message"
            name="message"
            placeholder="Your feedback"
            style={{ flex: 1, height: '80%', color: 'black', padding: 5 }}
          />
          <ValidationError prefix="Message" field="message" errors={errors} />
          <button
            type="submit"
            disabled={submitting}
            id="form-button"
            style={{
              alignSelf: 'center',
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  )
}
