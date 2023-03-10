import React, { useState } from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import { Drawer } from "antd";
import { ReactComponent as Logo } from "../../Imgs/Logo.svg";
import { ReactComponent as Menu } from "../../Imgs/Menu.svg";
import SelectSmall from "../Language/Language";

import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const isRoot = location.pathname === '/';
  const isActive = (route) => location.pathname.includes(route) ? "active_link" : "nav_content__text";

  return (
    <div className="nav">
      <div className="header">
        <div className="nav_content__img">
          {isRoot ? (
            <a href="#home"><Logo /></a>
          ) : (
            <Link to="/" className="underline">
              <Logo />
            </Link>
          )}
        </div>

        <div className="header_menu">
          <Menu onClick={showDrawer} />
        </div>

        <Drawer placement="right" onClose={onClose} open={open} width="68%" >
          <div className="drawer_nav_content">
            <div className="drawer_nav_content_sub">
              <NavLink to="/courses" className={() => isActive('course')} onClick={onClose}>
                Курсы
              </NavLink>
              <NavLink to="/news" className={() => isActive('news')} onClick={onClose}>
                Новости
              </NavLink>
              <NavLink to="/stats" className={() => isActive('stats')} onClick={onClose}>
                Статистика
              </NavLink>
              <div></div>
            </div>
            {/*<div className="nav_content__text nav_content__text_drawer disabled">*/}
            {/*  О нас*/}
            {/*</div>*/}
            {/*<div className="nav_content__text nav_content__text_drawer disabled">*/}
            {/*  Калькулятор*/}
            {/*</div>*/}
            {/*<div className="nav_content__text nav_content__text_drawer disabled">*/}
            {/*  Мерч*/}
            {/*</div>*/}
            
          </div>
          {/* <div className="drawer_nav_content__t">
            <div className="header_t">RU</div>
            <div className="header_t">ENG</div>
          </div> */}
        </Drawer>

        <div className="nav_content">
          <NavLink to="/courses" className={() => isActive('course')}>
            Курсы
          </NavLink>
          <NavLink to="/news" className={() => isActive('news')}>
            Новости
          </NavLink>
          <NavLink to="/stats" className={() => isActive('stats')}>
            Статистика
          </NavLink>
          {/*<div className="nav_content__text disabled">О нас</div>*/}
          {/*<div className="nav_content__text disabled">Калькулятор</div>*/}
          {/*<div className="nav_content__text disabled">Мерч</div>*/}
        </div>
        {/* <div className="nav_content__t">
          <SelectSmall onClick={() => changeLanguage("ru")} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
