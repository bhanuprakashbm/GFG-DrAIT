import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  // useEffect(() => {
  //   tippy('#tooltip-btn', {
  //     content: 'Toggle Mode',
  //     theme: {theme},
  //   });
  // }, []);

  // Track mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set up state to track the current theme
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Apply the theme when the component mounts and whenever it changes
  useEffect(() => {
    const rootElement = document.documentElement;

    if (theme === 'dark') {
      rootElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      rootElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Handle the theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a2e3d] px-4 py-1 shadow-lg md:px-6 navbar nav-shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 image-container">
          <img
            src="/assets/gfg-logo.png"
            className="h-10 logo"
            alt="GFG Dr AIT Logo"
          />
          <span className="logo-text self-center text-2xl font-bold whitespace-nowrap text-white">
            GFG Dr AIT
          </span>
        </Link>

        {/* Right Section: Dark mode toggle + Hamburger */}
        <div className="toggle-btn flex space-x-3 items-center md:hidden">
          {/* Dark Mode Toggle Button */}
          <button
              id="tooltip-btn"
              onClick={toggleTheme}
              className="text-white rounded transition-all duration-300"
            >
              <div className="toggle" id="toggle-icon focus:outline-none">
                {theme === 'dark' ? (
                  <i className="light-mode-icon"></i>
                ) : (
                  <i className="dark-mode-icon"></i>
                )}
              </div>
            </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg focus:outline-none"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu - Hidden on mobile, visible on desktop */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="nav-menu flex flex-col font-medium mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/team"
                className="nav-link block py-2 px-3 md:p-0 text-white rounded transition duration-200 hover:bg-[#00FFAF] hover:text-black md:hover:bg-transparent md:hover:text-[#00FFAF]"
              >
                Meet Our Geeks
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="nav-link block py-2 px-3 md:p-0 text-white rounded transition duration-200 hover:bg-[#00FFAF] hover:text-black md:hover:bg-transparent md:hover:text-[#00FFAF]"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link block py-2 px-3 md:p-0 text-white rounded transition duration-200 hover:bg-[#00FFAF] hover:text-black md:hover:bg-transparent md:hover:text-[#00FFAF]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/dsa-sheet"
                className="nav-link block py-2 px-3 md:p-0 text-white rounded transition duration-200 hover:bg-[#00FFAF] hover:text-black md:hover:bg-transparent md:hover:text-[#00FFAF]"
              >
                DSA Sheet
              </Link>
            </li>
            <li>
              <Link
                to="/potd"
                className="nav-link block py-2 px-3 md:p-0 text-white rounded transition duration-200 hover:bg-[#00FFAF] hover:text-black md:hover:bg-transparent md:hover:text-[#00FFAF]"
              >
                POTD
              </Link>
            </li>
          </ul>
        </div>

        {/* Dark mode toggle button visible only on larger screens */}
        <div className="hidden md:flex">
          <button
              id="tooltip-btn"
              onClick={toggleTheme}
              className="text-white rounded transition-all duration-300"
            >
              <div className="toggle focus:outline-none" id="toggle-icon">
                {theme === 'dark' ? (
                  <i className="light-mode-icon"></i>
                ) : (
                  <i className="dark-mode-icon"></i>
                )}
              </div>
            </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
