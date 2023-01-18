import { Button, Form, Input } from "antd";
import { useUserRequestsHook } from "../../Hooks/useUserRequestsHook";

import "./ModalForm.scss";

const ModalForm = ({ handleFinish }) => {
  const { send } = useUserRequestsHook()
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const response = await send(values);

    if (response.status === 200) {
      form.resetFields();
      handleFinish();
    }
  }

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      requiredMark={false}
    >
    <div className="modal">
      <div className="modal_title">Записаться на курс</div>
      <div className="modal_text">
        Наш специалист свяжется с вами и ответит на любые ваши вопросы
      </div>
      <div className="modal_registr">
        <Form.Item
          label="Имя"
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите имя.',
            },
          ]}
        >
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item
          label="Телефон"
          name="phone"
          rules={[
            {
              // required: true,
              message: 'Введите номер телефона.',
            },
          ]}
        >
          <Input placeholder="Телефон" />
        </Form.Item>
      </div>
      <div className="modal_registr">
        <Form.Item
          label="Телеграм"
          name="telegram"
          rules={[
            {
              required: true,
              message: 'Введите телеграм.',
            },
          ]}
        >
          <Input placeholder="@telegram_name" />
        </Form.Item>
        <Form.Item
          label="Emails"
          name="email"
          rules={[
            {
              // required: true,
              type: 'email',
              message: 'Введите email.',
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

export default ModalForm;
