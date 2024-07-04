import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
    document.body.classList.toggle('dark');
  }

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TodoList />
    </>
  )
}

export default App
