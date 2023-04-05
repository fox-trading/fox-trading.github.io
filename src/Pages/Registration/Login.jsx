import {Button, Form, Input} from "antd";
import {useAuthHook} from "../../Hooks/useAuthHook";
import useTokenHook from "../../Hooks/useTokenHook";
import {useNavigate} from "react-router-dom";

import './Registration.scss';

export default function Login({ close, setUser, setLogin }) {
  const navigate = useNavigate();
  const { login } = useAuthHook();
  const { setToken } = useTokenHook();
  const [form] = Form.useForm();

  const handleLogin = async (values) => {
    const payload = {
      email: values.email, //'a@gmail.com',
      password: values.password //'123123'
    }

    const response = await login(payload);

    if (response.status === 200) {
      form.resetFields();
      setToken(response.data.token);
      setUser(response.data.user);
      close();
      navigate('/dashboard');
    }
  }

  return (
    <div className='login_container'>
      <h1 className='title'>Войти</h1>
      <Form
        form={form}
        name="login"
        onFinish={handleLogin}
        requiredMark={false}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Введите email.',
            },
          ]}

        >
          <Input placeholder="name@gmail.com" />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль.',
            },
          ]}
        >
          <Input.Password placeholder="Пароль"/>
        </Form.Item>
        <div className="link" onClick={() => setLogin(false)}>Зарегистрироваться</div>
        <Button
          loading={false}
          type="primary"
          key="submit"
          className="modal_button"
          htmlType="submit"
        >
          Войти
        </Button>
      </Form>
    </div>
  )
}