import React, { useState } from "react";
import { Button, Modal, Form } from "antd";

import ButtonCustom from "../../../Components/Button/Button";
import Usd from "../../../Components/Box/Usd";
import ModalDone from "../../../Components/Modal/ModalDone";
import ModalJoin from "../../../Components/Modal/ModalJoin";

import { ReactComponent as Down } from "../../../Imgs/down.svg";
import { ReactComponent as Logo } from "../../../Imgs/BigLogo.svg";
import { useRatesHook } from "../../../Hooks/useRatesHook";

import "./Main.scss";
import Input from '../../../Components/Input/Input';


const Main = () => {
  const { rates, globalMetrics } = useRatesHook();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [openSecond, setOpenSecond] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setOpenSecond(true);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
    setOpenSecond(false);
  };
  const onFinishFailed = (errorinfo) => {
    console.log("Failed", errorinfo);
  };
  return (
    <div className="main">
      <div className="main_content">
        <div className="main_list">
          <div className="main_content__name">FOX TRADERS</div>
          <div className="main_content__text">
            Сообщество профессиональных трейдеров. Обучение прошли более сотни
            человек. Трейдинг это лучшая работа в мире!
          </div>

          <div className="main_content__join" onClick={showModal}>
            <ButtonCustom text={"Вступай в наши ряды"} />
          </div>

          <div className="main_box">
            {rates.map(rate => (
              <div>
                <Usd text={rate.symbol} value={rate.quote.USD.price}/>
              </div>
            ))}
            {globalMetrics &&
              <div>
                <Usd text={'Global'} value={globalMetrics.quote.USD.total_market_cap}/>
              </div>
            }
          </div>
        </div>
        <div>
          <div className="main_img">
            <Logo />
          </div>
        </div>
      </div>
      <div className="main_down">
        <Down />
      </div>

      <Modal
        open={openSecond}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <ModalDone />
      </Modal>

      <Modal
        open={open}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
        layout="vertical"

          onFinish={handleOk}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="modal">
            <div className="modal_title">Записаться на курс</div>
            <div className="modal_text">
              Наш специалист свяжется с вами и ответит на любые ваши вопросы
            </div>

            <div className="modal_registr">
              <div>

                  <Input title="Имя" placeholder="Иван" />

              </div>
              <div>
                <Input title="Телефон" type="text" placeholder="+996" />
              </div>
            </div>
            <div className="modal_registr">
              <div>
                <Input title="Telegram" type="text" placeholder="@ivan" />
              </div>
              <div>
                <Input
                  title="Email"
                  type="email"
                  placeholder="ivan@gmail.com"
                />
              </div>
            </div>
          </div>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              key="submit"
              className="modal_button"
              htmlType="submit"
            >
              Записаться на курс
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Main;
