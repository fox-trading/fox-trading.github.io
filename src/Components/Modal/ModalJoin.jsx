import { Button, Modal } from "antd";
import Input from "../../Components/Input/Input";

import "./ModalJoin.scss";

const ModalJoin = () => {
  return (
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
          <Input title="Телефон" type="number" placeholder="+996" />
        </div>
      </div>
      <div className="modal_registr">
        <div>
          <Input title="Telegram" type="number" placeholder="@ivan" />
        </div>
        <div>
          <Input title="Email" type="email" placeholder="ivan@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default ModalJoin;
