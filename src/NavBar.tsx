import { Link } from "react-router-dom";
import { useTheme } from "./useTheme";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      <nav className="navbar">
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile"> Profile </Link>
        </div>
        <div className="mode">
          <label>
            <input
              type="checkbox"
              checked={theme == "dark"}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
    </div>
  );
}
