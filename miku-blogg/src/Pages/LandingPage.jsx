import React from 'react';
import BlogWrapper from '../Components/Blogg/BlogWrapper';

const Landingpage = ({isLoggedIn}) => {
  return (
    <>
    <BlogWrapper isLoggedIn={isLoggedIn}/>
    </>
  )
}

export default Landingpage;