import React from 'react'

const MainContent = () => {
  return (
    <div className='Wrapper'>
        <h2>Step 1: Creating New Tasks </h2>
        <p>
        To start using the <b>Todo app</b>, simply type your task directly into the input on a single
        line. <br />Then hit the <b>Enter key</b> on your keyboard or click the <b>"Add Task"</b> button. 
        </p>

        <h2>Step 2: Marking Tasks as Done </h2>
        <p>
        Once a task is added to your list, you can mark it as <b>done</b> by <b>clicking</b> directly on 
        it. <br />This feature provides a quick and 
        intuitive way to keep track of your progress.
        </p>

        <h2>Step 3: Deleting Tasks</h2>
        <p>
        To remove a task from your list, look for a <b>can-icon</b> located next to the task and 
        click on it. This action will <b>remove</b> the task <b>permanently</b> 
        from your list, helping you maintain a clean and <br />organized task list.
        </p>
    </div>
  )
}

export default MainContent