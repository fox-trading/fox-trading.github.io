import {Modal} from "antd";
import Login from "../../Pages/Registration/Login";
import React, {useState} from "react";
import SignUp from "../../Pages/Registration/SignUp";

export default function ModalLogin({show, close, setUser, isLoginForm, setIsLoginForm}) {

  const handleSetLogin = (value) => setIsLoginForm(value);

  return (
    <Modal
      open={show}
      title=""
      onCancel={close}
      footer={null}
    >
      {isLoginForm
        ? <Login close={close} setUser={setUser} setLogin={handleSetLogin} />
        : <SignUp close={close} setUser={setUser} setLogin={handleSetLogin} />
      }
    </Modal>
  )
}