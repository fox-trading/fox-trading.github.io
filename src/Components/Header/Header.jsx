import React, {useEffect, useState} from "react";
import {Link, NavLink, redirect, useLocation, useNavigate} from "react-router-dom";
import { Drawer } from "antd";
import { ReactComponent as Logo } from "../../Imgs/Logo.svg";
import { ReactComponent as Menu } from "../../Imgs/Menu.svg";

import useTokenHook from "../../Hooks/useTokenHook";
import ModalLogin from "../Modal/ModalLogin";

import "./Header.scss";

const Header = ({user, setUser}) => {
  const location = useLocation();
  const { setToken } = useTokenHook();
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);

  const showDrawer = () => {
    setOpenMenu(true);
  };

  const onCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleLogin = () => {
    setOpenLogin(true)
    setIsLoginForm(true)
  }

  const handleSingUp = () => {
    setOpenLogin(true)
    setIsLoginForm(false)
  }

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  }

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

        <Drawer placement="right" onClose={onCloseMenu} open={openMenu} width="68%" >
          <div className="drawer_nav_content">
            <div className="drawer_nav_content_sub">
              <NavLink to="/courses" className={() => isActive('course')} onClick={onCloseMenu}>
                Курсы
              </NavLink>
              <NavLink to="/news" className={() => isActive('news')} onClick={onCloseMenu}>
                Новости
              </NavLink>
              <NavLink to="/stats" className={() => isActive('stats')} onClick={onCloseMenu}>
                Статистика
              </NavLink>
              {user ? (
          <div className="profile">
            <NavLink to="/dashboard" className="login">Личный Кабинет</NavLink>
            <div className="user-block">
              <NavLink to="/dashboard" className="email">{user.email}</NavLink>
              <NavLink to="/"  onClick={handleLogout} className="exit">Выйти</NavLink>
            </div>
          </div>
        ) : (
          <div className="profile_sidebar_buttons">
            <button className="login" onClick={handleLogin}>Войти</button>
            <button className="login" onClick={handleSingUp}>Регистрация</button>
          </div>
        )}
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


        {user ? (
          <div className="profile">
            <NavLink to="/dashboard" className="login">Личный Кабинет</NavLink>
            <div className="user-block">
              <NavLink to="/dashboard" className="email">{user.email}</NavLink>
              <NavLink to="/"  onClick={handleLogout} className="exit">Выйти</NavLink>
            </div>
          </div>
        ) : (
          <div className="profile_buttons">
            <button className="login" onClick={handleLogin}>Войти</button>
            <button className="login" onClick={handleSingUp}>Регистрация</button>
          </div>
        )}
      </div>

      <ModalLogin
        show={openLogin}
        close={() => setOpenLogin(false)}
        setUser={setUser}
        isLoginForm={isLoginForm}
        setIsLoginForm={setIsLoginForm}
      />
    </div>
  );
};

export default Header;
