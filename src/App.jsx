import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]); 

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <TodoList />
    </>
  )
}

export default App
