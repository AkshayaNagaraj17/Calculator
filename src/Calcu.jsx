import { useState } from "react"

function CalCu() {
    const[input,setInput]=useState("")
    function clear()
    {
        setInput("")
    }
    function click(value)
    {
        setInput(input+value)

    }
    function evaluate()
    {
      setInput(eval(input))
    }
  return (
    
    <div className="  border  border-gray-400 p-5 bg-black text-white flex flex-col m-20 rounded-2xl justify-center ">
      <h1 className="text-3xl text-center mt-5">Calculator</h1>
      <div className="mt-10 mb-10">
        <input type="text" value={input} className=" bg-opacity-20 tezt-3xl p-5 rounded-md w-full bg-gray-400"/>
      </div>
      <div className="grid grid-cols-4 gap-4 m-5">
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("1")}> 1</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("2")}> 2</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("3")}> 3</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("+")}> +</button>

        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("4")}> 4</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("5")}> 5</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("6")}> 6</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("-")}> -</button>

        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("7")}> 7</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("8")}> 8</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("9")}> 9</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("*")}> *</button>

        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click(".")}> .</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("0")}> 0</button>
        <button className=" border border-gray-500 p-3  rounded-md text-3xl" onClick={evaluate}> =</button>
        <button className=" border border-gray-500 p-3  rounded-md" onClick={()=>click("/")}> /</button>

        <button  className= "bg-red-600 p-3 rounded-lg m-3"onClick={clear}>C</button>
      </div>
    </div>
  )
}

export default CalCu
