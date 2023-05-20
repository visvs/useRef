import { useEffect, useState } from 'react'
import './App.css'

export function App() { //useEffect Recap
  const [count, setCount] = useState(0) //cada vez que cambia un estado se dispara un rerender
  const [estado, modificadorDelEstado] = useState(0) //objeto tipo array, posicion 0 da el valor/estado, 1 da la function modificadora del estado


    useEffect(() => {
      if(count === 5){
        console.log(`El contador se actualizo: ${count}`)
      }
    }, [])

  //ejecuta al inicio/mount del componete
  //ejecuta cada que alguna de sus dependencias cambia

  const myFlag = count === 3;

  console.log(myFlag)
  console.log({myFlag})
  
  //console.log("Rerenderizado")
  return (
    <>
      <h1>{`Counter: ${count}`}</h1>
      <button onClick={()=>{setCount(count + 1)}}>+</button>
    </>
  )
}

