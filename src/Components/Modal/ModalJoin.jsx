import { Button, Form, Input } from "antd";
// import Input from "../../Components/Input/Input";

import "./ModalJoin.scss";

const ModalJoin = () => {

  const onFinish = (values) => {
    console.log('values', values)
  }


  return (
    <Form
      name="register"
      onFinish={onFinish}
    >
    <div className="modal">
      <div className="modal_title">Записаться на курс</div>
      <div className="modal_text">
        Наш специалист свяжется с вами и ответит на любые ваши вопросы
      </div>
      <div className="modal_registr">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите Ваше имя.',
            },
          ]}
        >
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Введите Ваш номер телефона.',
            },
          ]}
        >
          <Input placeholder="Телефон" />
        </Form.Item>
      </div>
      <div className="modal_registr">
        <Form.Item
          name="telegram"
          rules={[
            {
              required: true,
              message: 'Введите Телеграм',
            },
          ]}
        >
          <Input placeholder="@telegram_name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Введите Email',
            },
          ]}
        >
          <Input placeholder="name@gmail.com" />
        </Form.Item>
      </div>

      <Button
        loading={false}
        type="primary"
        key="submit"
        className="modal_button"
        htmlType="submit"
      >
        Записаться на курс
      </Button>
    </div>
    </Form>
  );
};

export default ModalJoin;
