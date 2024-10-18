import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("")

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value)
  }

  const handleClear = () => {
    setInput("")
  }

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString())
    } catch (error) {
      setInput("Error"); 
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        
          <div className="mb-4 p-4 bg-gray-200 text-right text-2xl rounded">
            {input || "0"}
          </div>
          <div className="grid grid-cols-4 gap-2">
              <button onClick={() => handleClick("7")} className="p-4 bg-gray-300 rounded">
                7
              </button>
              <button onClick={() => handleClick("8")} className="p-4 bg-gray-300 rounded">
                8
              </button>
              <button onClick={() => handleClick("9")} className="p-4 bg-gray-300 rounded">
                9
              </button>
              <button onClick={() => handleClick("/")} className="p-4 bg-gray-300 rounded">
                /
              </button>

              <button onClick={() => handleClick("4")} className="p-4 bg-gray-300 rounded">
                4
              </button>
              <button onClick={() => handleClick("5")} className="p-4 bg-gray-300 rounded">
                5
              </button>
              <button onClick={() => handleClick("6")} className="p-4 bg-gray-300 rounded">
                6
              </button>
              <button onClick={() => handleClick("*")} className="p-4 bg-gray-300 rounded">
                *
              </button>


              <button onClick={() => handleClick("1")} className="p-4 bg-gray-300 rounded">
                1
              </button>
              <button onClick={() => handleClick("2")} className="p-4 bg-gray-300 rounded">
                2
              </button>
              <button onClick={() => handleClick("3")} className="p-4 bg-gray-300 rounded">
                3
              </button>
              <button onClick={() => handleClick("-")} className="p-4 bg-gray-300 rounded">
                -
              </button>
              

            <button onClick={handleClear} className="p-4 bg-red-700 rounded col-span-2">
              C
            </button>
            <button onClick={() => handleClick("0")} className="p-4 bg-gray-300 rounded">
              0
            </button>
            <button onClick={() => handleClick("+")} className="p-4 bg-gray-300 rounded">
              +
            </button>

            <button onClick={handleCalculate} className="p-4 bg-green-300 rounded col-span-4">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
