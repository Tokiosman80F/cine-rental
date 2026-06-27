import Moon from "./assets/icons/moon.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
function Header() {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <button
              type="button"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img
                src={Ring}
                width="24"
                height="24"
                alt="notification ring icon"
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img src={Moon} width="24" height="24" alt="moon icon" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img src={Cart} width="24" height="24" alt="shopping cart icon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
