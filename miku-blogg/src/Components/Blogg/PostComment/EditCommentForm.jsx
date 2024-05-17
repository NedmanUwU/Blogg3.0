import React, {useState} from 'react'
import icon from '../../../assets/bars-icon.svg'

const EditCommentForm = ({editComment, kudos}) => {
    const [value, setValue] = useState(kudos.kudos)
    
    const handleSubmit = (e) => {
      e.preventDefault();

      editComment(value, kudos.id)

      setValue('')
    };

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <div className='Comment-Input'>
        <img src={icon} className='Bar-Icon' />
        <input
        className= 'Input-field' 
        value= {value}
        placeholder='Update your comment...'
        onChange={(e) => setValue(e.target.value)}
        />      
          <button type='submit' className='Comment-btn' onClick={handleSubmit}>
             Update
         </button>
      </div>
    </form>
  )
};

export default EditCommentForm;