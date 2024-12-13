import { useRef } from "react"


function Hooks() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refer=useRef(null)
    function click()
    {
        refer.current.focus()
    }
  return (
    <div>
      <h1>Use ref</h1>
      <input type="text" ref={refer} placeholder="Type "/>
      <button onClick={click}>click</button>
    </div>
  )
}

export default Hooks
