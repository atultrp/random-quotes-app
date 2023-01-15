import Head from 'next/head'
import {
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';
import { FaQuoteLeft, FaWhatsappSquare, FaTwitterSquare } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export default function Home() {

  const apiLink = "https://type.fit/api/quotes"
  const [randomColor, setRandomColor] = useState(["bg-rose-800", "text-rose-800", "border-rose-800", "shadow-rose-900"])
  const [quoteData, setQuoteData] = useState()
  const [quote, setQuote] = useState()
  const [shareQuote, setShareQuote] = useState()
  const shareQuoteDummy = "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar from https://random-quotes-app-atultrp.vercel.app/"
  const randomColorSet = [
    {
      "key": "red",
      "value": ["bg-red-800", "text-red-800", "border-red-800", "shadow-red-900"]
    },
    {
      "key": "rose",
      "value": ["bg-rose-800", "text-rose-800", "border-rose-800", "shadow-rose-900"]
    },
    {
      "key": "green",
      "value": ["bg-green-800", "text-green-800", "border-green-800", "shadow-green-900"]
    },
    {
      "key": "blue",
      "value": ["bg-blue-800", "text-blue-800", "border-blue-800", "shadow-blue-900"]
    },
    {
      "key": "gray",
      "value": ["bg-gray-800", "text-gray-800", "border-gray-800", "shadow-gray-900"]
    },
    {
      "key": "pink",
      "value": ["bg-pink-800", "text-pink-800", "border-pink-800", "shadow-pink-900"]
    },
    {
      "key": "orange",
      "value": ["bg-orange-800", "text-orange-800", "border-orange-800", "shadow-orange-900"]
    },
    {
      "key": "teal",
      "value": ["bg-teal-800", "text-teal-800", "border-teal-800", "shadow-teal-900"]
    },
    {
      "key": "cyan",
      "value": ["bg-cyan-800", "text-cyan-800", "border-cyan-800", "shadow-cyan-900"]
    },
    {
      "key": "purple",
      "value": ["bg-purple-800", "text-purple-800", "border-purple-800", "shadow-purple-900"]
    },
    {
      "key": "violet",
      "value": ["bg-violet-800", "text-violet-800", "border-violet-800", "shadow-violet-900"]
    },
    {
      "key": "yellow",
      "value": ["bg-yellow-800", "text-yellow-800", "border-yellow-800", "shadow-yellow-900"]
    }
  ]

  // Fetching data from api
  useEffect(() => {
    fetch(apiLink)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuoteData(data)
      })
  }, [])

  // Handling new quote
  const handleNewQuote = () => {
    setRandomColor(randomColorSet[Math.floor(Math.random() * (randomColorSet.length))].value)

    if (quoteData) {
      let quoteIndex = Math.floor(Math.random() * (quoteData.length))
      setQuote(quoteData[quoteIndex])
    }
  }

  // Handling share quote
  useEffect(() => {
    setShareQuote(`${quote?.text} - ${quote?.author} from https://random-quotes-app-atultrp.vercel.app/`)
  }, [quote])

  return (
    <>
      <Head>
        <title>Random Quotes App</title>
        <meta name="description" content="This app generate random quotes using the quotes api and motivates you to focus on your work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={` ${randomColor[0]} h-screen text items-center flex`}>
        <div className={`mx-auto w-[650px] px-12 py-8 ${randomColor[1]} bg-white rounded-tl-3xl rounded-br-3xl shadow-lg ${randomColor[3]} font-mono`}>
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
            <span className={`font-light text-lg italic border-b-2 w-fit ${randomColor[2]}`}>
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
                className={`${randomColor[0]} text-white px-3 py-2 rounded-md font-semibold hover:scale-125 ease-in-out duration-300`}
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
