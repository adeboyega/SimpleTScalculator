import { useState } from 'react';
import { calculate } from './logic';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0); // State for the first number
  const [num2, setNum2] = useState(0); // State for the second number
  const [method, setMethod] = useState('+'); // State for the method (operation)
  const [ans, setAns] = useState(0); // State for the answer/result

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const result = calculate(num1, num2, method); // Calculate based on current state
    setAns(result); // Update the state with the result
  };

  return (
    <div className='w-[50%] border border-black h-[60%] mx-auto'>
      <form onSubmit={handleSubmit} className='w-full h-full flex flex-col p-4'>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
          className='border border-gray-800 mb-2 p-2'
          placeholder='Enter first number'
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
          className='border border-gray-800 mb-2 p-2'
          placeholder='Enter second number'
        />
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className='border border-gray-800 mb-2 p-2'
        >
          <option value='+'>Add</option>
          <option value='-'>Subtract</option>
          <option value='*'>Multiply</option>
          <option value='/'>Divide</option>
        </select>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
          Calculate
        </button>
      </form>
      <div className='mt-4'>
        <p className='text-xl'>Result: {eval(ans.replace(/\s/g, ''))}</p>
      </div>
    </div>
  );
}

export default App;
