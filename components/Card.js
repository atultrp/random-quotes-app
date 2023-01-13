import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';

const Card = () => {
  return (
    <div className=''>


      <WhatsappShareButton
        url={'https://blog-like-star.vercel.app'} >
        <BsWhatsapp className='text-2xl text-green-500 mr-4 hover:scale-125 ease-in-out duration-200' />
      </WhatsappShareButton>
      <TwitterShareButton
        url={'https://blog-like-star.vercel.app'} >
        <TiSocialTwitter className='text-4xl text-blue-400 mr-4 hover:scale-125 ease-in-out duration-200' />
      </TwitterShareButton>

    </div>
  )
}

export default Card