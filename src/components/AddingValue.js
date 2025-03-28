import React, { useRef, useState } from 'react'
import './AddingValue.css'
import { MdDelete } from 'react-icons/md'
const AddingValue = () => {
  const [todoArray, setTodoArray] = useState([])
  const [deletedArray, setDeletedArray] = useState([])
  const [completedArray, setCompletedArray] = useState([])
  const[task,setTask]=useState("");
  const [checked, setIsChecked] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.task.value)
    const value = e.target.task.value
    if (value.length === 0) {
      alert('please enter something before submit')
      return
    } else if (todoArray.includes(value)) {
      alert('This is already exist')
      return
    }

    // todo_array.push(value)
    setTodoArray([...todoArray, value])
    setTask("");
  }
  function checkHandler(e, index) {
    console.log(e)
    if(e.target.checked==true){
      // disable that button
    }
    setIsChecked(e.target.checked)
    const val=todoArray[index];
     setCompletedArray([...completedArray,val]);
     
  }

  function deleteHandler(e,index){
    setDeletedArray([...deletedArray,todoArray[index]]);
    const revised=removeItem(todoArray,todoArray[index]);
    setTodoArray(revised);
  }
  function removeItem(todoArray, itemToRemove) {
    return todoArray.filter(
    	item => item !== itemToRemove);   
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='task'value={task} onChange={(e)=>setTask(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
      <div className='all_value'>
        {todoArray.map((item,index) => {

          return (
            <div className='container'>
              <input type='checkbox' onChange={(e)=> checkHandler(e, index)}></input>
              <p>{item}</p>
               <button onClick={(e)=>deleteHandler(e,index)} >
               <MdDelete className='delete'/>
               </button>
                {/* <p>{JSON.stringify(completedArray)}</p> */}
              
            </div>
          )
        })}
        {/* {console.log(setTodoArray)} */}
      </div>
    </div>
  )
}

export default AddingValue
