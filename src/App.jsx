import { useEffect, useReducer } from 'react'
import {v4} from "uuid"
import './App.css'
import { getItem, setItem } from './Utils'
// import { Input } from './Input'
function App() {
  const initialState = {
    items: getItem("todos") ? JSON.parse(getItem("todos")): []
  }
  
 const reducer = (state = initialState, action) => {
    switch(action.type){
      case "create":{
        return{
          ...state,
          items: [...state.items, action.payload]
        }
      }
      case "delete":{
        return  {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        }
      }
      case "edit":{
        let idx = state?.items?.findIndex(item => item.id === action?.payload?.id)
        let name = prompt("Edit", state?.items[idx]?.value)
        let stateEdit = state?.items?.filter(item => {
          if(item.id === action.payload.id){
            item.value = name
          }
          return item
        })
        return {
          ...state,
          items: stateEdit
        }
      }
      default: return state
    }
    
 }
 const [state, dispatch] = useReducer(reducer, initialState )
 const handleKey = (event) => {
  if(event.keyCode === 13 && event.target.value.length){
    const todo = {
      value: event.target.value,
      id: v4()
    }
    dispatch({type: "create", payload: todo })
  }
 }
 useEffect(() => {
  if(state?.items){
    setItem("todos", state.items)
  }
},[state?.items]);

  return (
    <>
    
    <div className="container">
    <div className="box">
    <div className="inp_con">
    <input type="text" placeholder='FirstName' onKeyUp={handleKey} />
    <input type="text" placeholder='LastName' onKeyUp={handleKey} />
    <input type="email" placeholder='email' onKeyUp={handleKey} />

    {state?.items?.length ? (
      <ul className='text'>
        {state?.items?.map(item => {
          console.log(item)
          return(
              <div className='iteams' key={item.id}>
              <h3>{item.value}</h3>
              <button className='btn' onClick={() => dispatch({type: "delete", payload: item})}>Delete</button>
              <button className='button btn' onClick={() => dispatch({type: "edit", payload: item})}>Edit</button>
              </div>
          )
        })}

      </ul>
    ): null}
    </div>

    </div>
    </div>
    </>
  )
}

export default App
