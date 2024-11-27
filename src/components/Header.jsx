export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header>
      <h1 className="logo">Todo</h1>
      <button onClick={toggleDarkMode} className="dark-mode-button">
        <img src={isDarkMode ? "./icon-sun.svg" : "./icon-moon.svg"} />
      </button>
    </header>
  );
}
