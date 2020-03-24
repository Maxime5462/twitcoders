import React from 'react'
import '../styles/App.css'
import Header from './../components/Header'
import MessageForm from './../components/MessageForm'
import Message from './../components/Message'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <MessageForm />
      <Message />

    </div>
  )
}

export default App
