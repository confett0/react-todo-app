export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <h1 className="logo">Todo</h1>
      <button onClick={toggleDarkMode} className="dark-mode-button">
        <img src={darkMode ? "./icon-sun.svg" : "./icon-moon.svg"} />
      </button>
    </header>
  );
}
