import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../Imgs/Facebook.svg";
import { ReactComponent as Twitter } from "../../Imgs/Twitter.svg";
import { ReactComponent as Instagram } from "../../Imgs/Instagram.svg";
import { ReactComponent as Telegram } from "../../Imgs/Telegram.svg";
import { ReactComponent as YouTube } from "../../Imgs/YouTube.svg";
import { ReactComponent as Logo } from "../../Imgs/Logo.svg";

import "./Footer.scss";
const Footer = () => {
  const setActive = ({ isActive }) =>
    isActive ? "active_link_" : "footer_content_item";
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_content_nav">
          <div className="footer_content_img">
            <Link to="/" className="underline">
              <Logo />
            </Link>
          </div>
          <div className="footer_content_list">
            <div className="footer_content_list_">
              <div className="footer_content_list_sub">
                <NavLink to="/courses" className={setActive}>
                  Курсы
                </NavLink>
                <NavLink to="/news" className={setActive}>
                  Новости
                </NavLink>
              </div>
              <div className="footer_content_item disabled">Статистика</div>
            </div>
            <div>
              <div className="footer_content_item disabled">О нас</div>
              <div className="footer_content_item disabled">Калькулятор</div>
              <div className="footer_content_item disabled">Мерч</div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer_content_icon">
            {/* <div className="footer_icons">
              
              <Facebook />
              
            </div> */}
            {/* <div className="footer_icons">
              <Twitter />
            </div> */}
            <div className="footer_icons">
              <a href="https://www.instagram.com/0therfox/" target="_blank">
                <Instagram />
              </a>
            </div>
            <div className="footer_icons">
              <a
                href="https://www.youtube.com/channel/UCYqXkPAmCoFvzg6X6knRucw"
                target="_blank"
              >
                <YouTube />
              </a>
            </div>
            <div className="footer_icons">
              <a href="https://t.me/foxautome" target="_blank">
                <Telegram />
              </a>
            </div>
          </div>

          <div className="footer_name_company">Fox Traders 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
