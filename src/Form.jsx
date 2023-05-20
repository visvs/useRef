import { useRef } from 'react'
import './App.css'

export function Form() { //useEffect Recap
    const nameRef = useRef(); //manipular doom

    const handleClickSetFocus = () => {
        console.log(nameRef);
        nameRef.current.select(); //focus()
    }

  return (
    <>
      <input ref={nameRef} type='text' placeholder='Nombre' defaultValue={'Ingresa nombre'}/>
      <button onClick={handleClickSetFocus}>Set Focus</button>
    </>
  )
}