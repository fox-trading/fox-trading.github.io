import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Vector } from "../../Imgs/Vector.svg";

import './BreadCrumb.scss';
export default function BreadCrumb({path, text}) {
  return (
    <div className="breadcrumb">
      <Link to={path}>
        <div className="breadcrumb_arrow"><Vector /></div>
        <div className="breadcrumb_title">{text}</div>
      </Link>
    </div>
  )
}