import React from 'react'
import Miku from '../../assets/Miku_Stand.png'

const MainContent = () => {
  return (
    <div className='MainContent'>
      <div className='Wrapper'>
        <h1>Hi there! <br /></h1>
        <h2>Welcome to Miku and Cinnamorolls joint blogg!</h2>
        <p>
          We're so happy to have you here! You are very welcome to blogg here
          right besides us. Let's share our experiences and get to know each other! 
          Whether it's about music, art, or everyday adventures, we can't wait to see what 
          you'll share! 💙<br /><br />Why wait? To start all you need to do is create a 
          profile, afterwards it's straight ahead 
          blogging!
        </p>
      </div>
      <img src={Miku} alt="" />
    </div>

  )
}

export default MainContent