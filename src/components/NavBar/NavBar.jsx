import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar__content">
            <NavLink to="/">
              <img
                className="navbar__logo"
                src={
                  "https://img.freepik.com/vector-premium/ninja-esport-gaming-logo_96628-68.jpg?w=826"
                }
              /> <span> Ninjas Games SHOP</span>
            </NavLink>
            <nav className="navbar__items">
              <NavLink
                to={"/category/aventura"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Aventura
              </NavLink>
              <NavLink
                to={"/category/terror"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Terror
              </NavLink>
              
              <NavLink
                to={"/category/fantasia"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Fantasia
              </NavLink>

              <NavLink
                to={""}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Registrate
              </NavLink>
              
            </nav>
            <CartWidget />
          </div>
        </div>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};


