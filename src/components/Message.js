import React from 'react'
import {
  FiHeart,
  FiX,
  FiMessageCircle,
  FiUpload,
  FiRefreshCw
} from 'react-icons/fi'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import IconContainer from './IconContainer'

const Message = () => {
  return (
    <div className='message-container'>
      <div>
        <img
          src='https://d31ezp3r8jwmks.cloudfront.net/variants/Ldn5ECHyhMnPvyMDnfC2JhYr/d2e337a4f6900f8d0798c596eb0607a8e0c2fbddb6a7ab7afcd60009c119d4c7'
          alt='Profil'
          className='profil-picture'
        />
      </div>
      <div className='message'>
        <header>
          <h3>Maxime Leszczynski</h3>
          <span>. {formatDistanceToNow(1585057779124, { locale: fr })}</span>
        </header>
        <p>Tempora minima et aperiam magnam illum dolorum officiis molestias laborum cupiditate architecto dicta adipisci odio quis ipsum porro accusamus deleniti beatae, cum qui fuga obcaecati </p>
        <footer>
          <IconContainer color='blue'>
            <FiMessageCircle />
          </IconContainer>
          <IconContainer color='green'>
            <FiRefreshCw />
          </IconContainer>
          <IconContainer color='red' count='5'>
            <FiHeart />
          </IconContainer>
          <IconContainer color='blue'>
            <FiUpload />
          </IconContainer>
          <IconContainer color='red'>
            <FiX />
          </IconContainer>

        </footer>
      </div>
    </div>
  )
}

export default Message
