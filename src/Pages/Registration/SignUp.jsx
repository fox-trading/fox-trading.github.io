import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Form, Input} from "antd";
import { Alert } from 'antd';

import {useAuthHook} from "../../Hooks/useAuthHook";
import useTokenHook from "../../Hooks/useTokenHook";
import './Registration.scss'
import reCAPTCHA from "react-google-recaptcha"

export default function SignUp({ close, setLogin, setUser }) {
  const {signUp} = useAuthHook()
  const { setToken } = useTokenHook();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([])

  const handleSave = async (values) => {
    const payload = {
      telegram: values.telegram,
      email: values.email,
      password: values.password
    }

    const response = await signUp(payload)

    if (response.status === 201) {
      setErrors([]);
      setUser(response.data.user)
      setToken(response.data.token)
      form.resetFields();
      close()
      navigate('/dashboard')
    } else {
      setErrors(response?.response.data?.errors)
    }
  }

  return (
    <div className="sing-up_container">
      {errors.map(e => <Alert key={e} message={e} type="error" />)}

      <h1 className="title">Зарегистрироваться</h1>
      <Form
        form={form}
        name="register"
        onFinish={handleSave}
        requiredMark={false}
      >
        <Form.Item
          label="Email"
          name="email"
          autoComplete={false}
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Введите email.',
            },
          ]}
        >
          <Input placeholder="name@gmail.com" autoComplete={false} />
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

        <Form.Item
          label="Телеграм"
          name="telegram"
          autocomplete={false}
          rules={[
            {
              type: 'text',
              message: 'Введите телеграм.',
            },
          ]}
        >
          <Input placeholder="@telegram" autoComplete={false}/>
        </Form.Item>

        <div className="link" onClick={() => setLogin(true)}>Уже есть аккаунт?</div>

        <reCAPTCHA sitekey="6Lcl7vokAAAAAGsoYJ2up2LK6wyjE74S02elqUDF" />

        <Button
          loading={false}
          type="primary"
          key="submit"
          className="modal_button"
          htmlType="submit"
        >
          Зарегистрироваться
        </Button>


      </Form>
    </div>
  )
}