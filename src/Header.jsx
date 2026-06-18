import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Moon from "./assets/icons/moon.svg";
import Cart from "./assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetail from "./cine/CartDetail";
import { MovieContext } from "./context";
function Header() {
  const [showCart, setShowCart] = useState(true);
  const {cartData}=useContext(MovieContext)
  function handleCartClick() {
    setShowCart(true);
  }
  return (
    <header>
      {showCart && <CartDetail onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={Ring}
                width="24"
                height="24"
                alt="notification ring icon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="moon icon" />
            </a>
          </li>
          <li className="relative">
            <a
              className=" bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartClick}
            >
              <img src={Cart} width="24" height="24" alt="shopping cart icon" />
            </a>
            {cartData.length > 0 && <span className="text-xs text-white -top-2 left-6 flex items-center justify-center absolute bg-primary w-6 h-6 text-center rounded-full " >{cartData.length}</span>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
