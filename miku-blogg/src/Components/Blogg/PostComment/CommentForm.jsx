import React, {useState} from 'react'
import icon from '../../../assets/bars-icon.svg'

const CommentForm = ({addComment}) => {
    const [value, setValue] = useState('')
    
    const handleSubmit = e => {
      e.preventDefault();

      addComment(value)

      setValue('')
    };

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <div className='Comment-Input'>
        <img src={icon} className='Bar-Icon' />
        <input 
        className= 'Input-field' 
        value= {value}
        placeholder='Write your comment...'
        onChange={(e) => setValue(e.target.value)}
        />      
          <button type='submit' className='Comment-btn' onClick={handleSubmit}>
             Submit!
         </button>
      </div>
    </form>
  )
};

export default CommentForm;