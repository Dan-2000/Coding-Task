import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useTests} from './hooks/useTests';

function App() {
  const { tests, addTest, updateTest, deleteTest} = useTests();

  return (
    <div>
      <button onClick={() => addTest('testing', 'waiting')}>Add test</button>
      <pre>{JSON.stringify(tests, null, 2)}</pre>
    </div>  
    );
}

export default App
