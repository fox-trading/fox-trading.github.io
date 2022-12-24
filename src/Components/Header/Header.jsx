import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { Link, NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { ReactComponent as Logo } from "../../Imgs/Logo.svg";
import { ReactComponent as Menu } from "../../Imgs/Menu.svg";
import SelectSmall from "../Language/Language";

import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const setActive = ({ isActive }) =>
    isActive ? "active_link" : "nav_content__text";

  return (
    <div className="nav">
      <div className="header">
        <div className="nav_content__img">
          <Link to="/" className="underline">
            <Logo />
          </Link>
        </div>

        <div className="header_menu">
          <Menu onClick={showDrawer} />
        </div>

        <Drawer placement="right" onClose={onClose} open={open} width="220px">
          <div className="drawer_nav_content">
            <div className="drawer_nav_content_sub">
              <NavLink to="/courses" className={setActive}>
                {t("nav_course")}
              </NavLink>
              <NavLink to="/news" className={setActive}>
                {t("nav_news")}
              </NavLink>
            </div>
            <div className="nav_content__text nav_content__text_drawer disabled">
              {t("nav_statistics")}
            </div>
            <div className="nav_content__text nav_content__text_drawer disabled">
              {t("nav_about")}
            </div>
            <div className="nav_content__text nav_content__text_drawer disabled">
              {t("nav_calc")}
            </div>
            <div className="nav_content__text nav_content__text_drawer disabled">
              {t("nav_shirt")}
            </div>
          </div>
          <div className="drawer_nav_content__t">
            <div className="header_t">RU</div>
            <div className="header_t">ENG</div>
          </div>
        </Drawer>

        <div className="nav_content">
          <NavLink to="/courses" className={setActive}>
            {t("nav_course")}
          </NavLink>
          <NavLink to="/news" className={setActive}>
            {t("nav_news")}
          </NavLink>
          <div className="nav_content__text disabled">
            {t("nav_statistics")}
          </div>
          <div className="nav_content__text disabled">{t("nav_about")}</div>
          <div className="nav_content__text disabled">{t("nav_calc")}</div>
          <div className="nav_content__text disabled">{t("nav_shirt")}</div>
        </div>
        <div className="nav_content__t">
          <SelectSmall onClick={() => changeLanguage("ru")} />
        </div>
      </div>
    </div>
  );
};

export default Header;
