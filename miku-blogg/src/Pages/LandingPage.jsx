import React from 'react';
import BlogWrapper from '../Components/Blogg/BlogWrapper';

const Landingpage = ({isLoggedIn}) => {
  return (
    <>
    <div>Landingpage</div>
    <BlogWrapper isLoggedIn={isLoggedIn}/>
    </>
  )
}

export default Landingpage;