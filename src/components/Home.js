 
import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
 
const Home = () => {
  return (
    <div className='home'>
      <div className='homebg'>
      <h1 className='hometext'><Link className='link' to ="/auth">
        Welcome to my blog app if you are new to my blog click here🤞
        </Link></h1>
      </div>
    </div>
  )
}
 
export default Home;