import './styles/style.css';
import twitterIcon from './icons/twitter-icon.png';
import facebookIcon from './icons/facebook-icon.png';
import quotationMarkIcon from './icons/quotation-mark-icon.png';
import { useState } from 'react';
import { func } from './cssFilterGenerator';

function generateRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

var generateHexColor = function() {
  let newColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  console.log(newColour.length);
  if(newColour.length < 7) {
    generateHexColor();
  }

  return newColour
}

function App() {

  const quotes = [
    {author: "Archie Griffen", text: "It's not the size of the dog in the fight, but the size of the fight in the dog."},
    {author: "Arnold H Glasgow", text: "Nothing lasts forever. Not even your troubles."},
    {author: "Albert Einstein", text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle"},
    {author: "Mary Tyler Moore", text: "Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave."},
    {author: "Margaret Woodhouse", text: "Being strong means rejoicing in who you are, complete with imperfections."},
    {author: "Nora Roberts", text: "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place."},
    {author: "Michael Jordan", text: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."},
    {author: "May V Smith", text: "The only place you find success before work is in the dictionary."},
    {author: "Les Brown", text: "You're going to fail your way to success, you have nothing to be ashamed of so keep your head up. It’s much easier to come up with excuses of why you can't do it. If you do what is easy your life will be hard."},
    {author: "George Bernard Shaw", text: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing."},
    {author: "Eleanor Roosevelt", text: "Nobody can make you feel inferior without your consent."},
    {author: "Sally Field", text: "It took me a long time not to judge myself through someone else's eyes."},
    {author: "Allen H Neuharth", text: "I quit being afraid when my first venture failed and the sky didn't fall down."},
    {author: "George Weinberg", text: "Hope never abandons you, you abandon it."},
    {author: "Tony Robbins", text: "The only thing keeping you from getting what you want is the story you keep telling yourself about why you don't have it. People who are willing to die to succeed will tend to succeed."},
    {author: "Elisabeth Kübler-Ross", text: "People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within."},
    {author: "Bruce Barton", text: "Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance."},
    {author: "Mary Kay Ash", text: "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway."},
    {author: "Eric Thomas", text: "The secret is in not giving up, of all the greats they didn't quit. If you quit I guarantee you're gonna fail, but you don't know what's gunna happen if you don't give in."},
    {author: "Will Smith", text: "Just decide; what's it's gonna be, who you're gonna be and how your gonna do it, and then from that point, the universe will get out of your way."},
    {author: "Me", text: "Wake Up Early!!!"}
  ]

  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * 21)]
  )

  const [bgColor, setBgColor] = useState(generateHexColor())

  function handleNextQuote() {
    setQuote(quotes[Math.floor(Math.random() * 21)])
    setBgColor(generateHexColor())
  }

  console.log(func("#ffffff"))

  return (
    <div className="quote-box-background" style = {{backgroundColor: bgColor}}>
      <div className='quote-box'>
        <div className='quote-text-box'>
          <p key = {bgColor + "text"} className='quote-text' style = {{color: bgColor}}>
            {/* <img src={quotationMarkIcon} style={{filter: func(bgColor)}} alt='quotation mark icon'/> */}
            {quote.text}
          </p>
        </div>
        <div className='author-name-box'>
          <p key = {bgColor + "author name"} className='author-name' style = {{color: bgColor}}>- {quote.author}</p>
        </div>
        <div className='links-btns-box'>
          <div className='links-box'>
            <a href='https://twitter.com/?lang=en'>
              <img src={twitterIcon} className='link-image' alt='Twitter icon' style = {{backgroundColor: bgColor}}/>
            </a>

            <a href='https://www.facebook.com/'>
              <img src={facebookIcon} className='link-image' alt='Facebook icon' style = {{backgroundColor: bgColor}}/>
            </a>
          </div>
          <div className='btns-box'>
            <button className='next-quote-btn'
              onClick={handleNextQuote}
              style={{backgroundColor: bgColor}}
            >
              Next quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
