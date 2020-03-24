import React from 'react'

const MessageForm = () => {
  return (
    <form className='message-form-container'>
      <div className='message-form'>
        <div>
          <img
            src='https://d31ezp3r8jwmks.cloudfront.net/variants/Ldn5ECHyhMnPvyMDnfC2JhYr/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7'
            alt='Profil'
            className='profil-picture'
          />
        </div>
        <textarea name='message' placeholder='Quoi de neuf ?' />
      </div>
      <footer>
        <p>280</p>
        <button type='submit'>Tweeter</button>
      </footer>
    </form>
  )
}

export default MessageForm
