import {useState} from "react";
import {Button, Form, Input, Alert, Space} from "antd";
import {useAuthHook} from "../../Hooks/useAuthHook";
import useTokenHook from "../../Hooks/useTokenHook";
import {useNavigate} from "react-router-dom";
import './Registration.scss';

export default function Login({ close, setUser, setLogin }) {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('')
  const { login } = useAuthHook();
  const { setToken } = useTokenHook();
  const [form] = Form.useForm();

  const handleLogin = async (values) => {
    const payload = {
      email: values.email,
      password: values.password
    }

    const response = await login(payload);

    if (response.status === 200) {
      form.resetFields();
      setLoginError('');

      setToken(response.data.token);
      setUser(response.data.user);

      close();
      navigate('/dashboard');
    } else {
      setLoginError('Email или Пароль не верный. Попробуйте снова.')
    }
  }

  return (
    <div className='login_container'>
      {loginError &&
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert message={loginError} type="error" />
        </Space>
      }
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