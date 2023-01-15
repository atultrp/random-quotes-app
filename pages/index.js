import Head from 'next/head'
import { BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';
import { FaQuoteLeft, FaWhatsappSquare, FaTwitterSquare } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export default function Home() {

  const apiLink = "https://type.fit/api/quotes"
  const [randomColor, setRandomColor] = useState("rose")
  const [quoteData, setQuoteData] = useState()
  const [quote, setQuote] = useState()
  const [shareQuote, setShareQuote] = useState()

  const randomColorsArr = ["red", "rose", "green", "blue", "gray", "pink", "orange", "teal", "cyan", "purple", "violet", "yellow"]

  useEffect(() => {
    fetch(apiLink)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuoteData(data)
      })
  }, [])

  const handleNewQuote = () => {
    let colorIndex = Math.floor(Math.random() * (randomColorsArr.length))
    setRandomColor(randomColorsArr[colorIndex])

    if (quoteData) {
      let quoteIndex = Math.floor(Math.random() * (quoteData.length))
      setQuote(quoteData[quoteIndex])
    }
  }

  useEffect(() => {
    setShareQuote(`${quote?.text} - ${quote?.author} from https://random-quotes-app-atultrp.vercel.app/`)
  }, [quote])

  const shareQuoteDummy = "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar from https://random-quotes-app-atultrp.vercel.app/"

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={` bg-${randomColor}-800 h-screen text items-center flex`}>
        <div className={`mx-auto w-[650px] px-12 py-8 text-${randomColor}-800 bg-white rounded-tl-3xl rounded-br-3xl shadow-lg shadow-${randomColor}-900 font-mono`}>
          <div className='flex items-center'>
            <div className='text-3xl flex'>
              <span>
                <FaQuoteLeft />
              </span>
              <span className='ml-4 '>
                {quote?.text || "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily."}
              </span>
            </div>
          </div>

          <div className='text-end mt-2'>
            <span className={`font-light text-lg italic border-b-2 w-fit border-b-${randomColor}-800`}>
              - {quote?.author || "Zig Ziglar"}
            </span>
          </div>

          <div className='flex justify-between mt-6'>
            <div >
              <WhatsappShareButton
                url={shareQuote || shareQuoteDummy} >
                <FaWhatsappSquare className='text-5xl mr-1 hover:scale-125 ease-in-out duration-300' />
              </WhatsappShareButton>
              <TwitterShareButton
                url={shareQuote || shareQuoteDummy}
              >
                <FaTwitterSquare className={`text-5xl hover:scale-125 ease-in-out duration-300`} />
              </TwitterShareButton>
            </div>
            <div>
              <button
                className={`bg-${randomColor}-800 text-white px-3 py-2 rounded-md font-semibold hover:scale-125 ease-in-out duration-300`}
                onClick={handleNewQuote}
              >
                New Quote
              </button>
            </div>
          </div>



        </div>
      </main>
    </>
  )
}
