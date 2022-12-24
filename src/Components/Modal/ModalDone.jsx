import { ReactComponent as Success } from "../../Imgs/Success.svg";

import "./ModalDone.scss";

const ModalDone = () => {
  return (
    <div className="modal_success">
      <div className="modal_success_img">
        <Success />
      </div>
      <div className="modal_title">Поздравляем!</div>
      <div className="modal_success_text">
        Ваша заявка успешно отправлена. Наш специалист свяжется с вами в
        ближайшее время.
      </div>
    </div>
  );
};

export default ModalDone;
