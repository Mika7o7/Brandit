import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../logos/branditLogo.png";
import logoDark from "../../logos/BranditDark.png";
import sun from "../../logos/Sun.png";
import moon from "../../logos/moon.png";
import vector from "../../logos/Vector.png";
import vectorDark from "../../logos/VectorDark.png";
import facebook from "../../logos/facebook.png";
import instagram from "../../logos/instagram.png";
import be from "../../logos/be.png";
import telegram from "../../logos/telegram.png";
import menu from "../../logos/menu.png";
import menu2 from "../../logos/menu2.png";
import "./Layout.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Layout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='contentWrapper'>
      <div className='navbarWrapper' id={theme}>
        <Link to='/' className='logoWrapper'>
          {theme === "light" ? (
            <img src={logoDark} className='logo' />
          ) : (
            <img src={logo} className='logo' />
          )}
        </Link>
        <div className='links' id={theme}>
          <NavLink
            id={theme}
            to='/Portfolio'
            className={({ isActive }) =>
              isActive ? "portfolio portfolioBold" : "portfolio"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            id={theme}
            to='/About'
            className={({ isActive }) =>
              isActive ? "about aboutBold" : "about"
            }
          >
            About
          </NavLink>
          <NavLink
            id={theme}
            to='/Services'
            className={({ isActive }) =>
              isActive ? "service serviceBold" : "service"
            }
          >
            Service
          </NavLink>
          <NavLink
            id={theme}
            to='/ContactUs'
            className={({ isActive }) =>
              isActive ? "contactUs contactUsBold" : "contactUs"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className='sunWrapper'>
          {theme === "light" ? (
            <img src={moon} className='sun' onClick={() => toggleTheme()} />
          ) : (
            <img
              src={sun}
              className='sun white'
              onClick={() => toggleTheme()}
            />
          )}
          {theme === "light" ? (
            <img src={menu} alt='' className='burger' />
          ) : (
            <img src={menu2} alt='' className='burger' />
          )}

          <div className='enWrapper'>
            <h1 id={theme} className='en'>
              En
            </h1>
            {theme === "light" ? (
              <img src={vectorDark} className='vector' />
            ) : (
              <img src={vector} className='vector' />
            )}
          </div>
        </div>
      </div>
      <Outlet />
      <div className='footerWrapper'>
        <div className='footerContent'>
          <div className='footerLogosWrapper'>
            <div className='footerLogos'>
              <a href='#' className='facebook'>
                <img src={facebook} />
              </a>
              <a href='#' className='instagram'>
                <img src={instagram} />
              </a>
              <a href='#' className='be'>
                <img src={be} />
              </a>
              <a href='#' className='telegram'>
                <img src={telegram} />
              </a>
            </div>
          </div>
          <div className='infoWrapper'>
            <div className='infoHeader'>
              <p className='aboutContact'>About Us | Contact Us</p>
              <p className='infoNumber'>
                info@thebrandit.agency | +374 33 97 00 96
              </p>
            </div>
            <p className='infoFooter'>@2022 Brandit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
