import Trending from "./assets/icons/trending.svg";
import NewRelease from "./assets/icons/newRelease.svg";
import ComingSoon from "./assets/icons/commingSoon.svg";
import Favourite from "./assets/icons/favourite.svg";
import WatchLater from "./assets/icons/watchLater.svg";

const menuItems = [
  {
    name: "Trending",
    icon: Trending,
    active: true,
  },
  {
    name: "New Releases",
    icon: NewRelease,
  },
  {
    name: "Coming Soon",
    icon: ComingSoon,
  },
  {
    name: "Favourites",
    icon: Favourite,
  },
  {
    name: "Watch Later",
    icon: WatchLater,
  },
];

export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${item.active ? "bg-primary text-black" : ""
                }`}
            >
              <img
                src={item.icon}
                width="24"
                height="24"
                alt={`${item.name} icon`}
              />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
