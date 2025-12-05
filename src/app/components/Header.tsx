const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between p-4 shadow-md z-50">
      <h1>Geunhwa Lee</h1>
      <nav>
        <ul className="flex flex-row gap-10">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>KO/EN</div>
    </header>
  );
};

export default Header;
