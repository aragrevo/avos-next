import React, { useEffect, useState } from 'react'
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Option } = Select
const AutoCompleteOption = AutoComplete.Option

const residences = [
  { value: 'bogotá', label: 'Bogotá' },
  {
    value: 'cundinamarca',
    label: 'Cundinamarca',
    children: [
      { value: 'agua de dios', label: 'Agua de Dios', disabled: true },
      { value: 'albán', label: 'Albán' },
      { value: 'anapoima', label: 'Anapoima' },
      { value: 'anolaima', label: 'Anolaima' },
      { value: 'apulo', label: 'Apulo' },
      { value: 'arbeláez', label: 'Arbeláez' },
      { value: 'beltrán', label: 'Beltrán' },
      { value: 'bituima', label: 'Bituima' },
      { value: 'bojacá', label: 'Bojacá' },
      { value: 'cabrera', label: 'Cabrera' },
      { value: 'cachipay', label: 'Cachipay' },
      { value: 'cajicá', label: 'Cajicá' },
      { value: 'caparrapí', label: 'Caparrapí' },
      { value: 'cáqueza', label: 'Cáqueza' },
      { value: 'carmen de carupa', label: 'Carmen de Carupa' },
      { value: 'chaguaní', label: 'Chaguaní' },
      { value: 'chía', label: 'Chía' },
      { value: 'chipaque', label: 'Chipaque' },
      { value: 'choachí', label: 'Choachí' },
      { value: 'chocontá', label: 'Chocontá' },
      { value: 'cogua', label: 'Cogua' },
      { value: 'cota', label: 'Cota' },
      { value: 'cucunubá', label: 'Cucunubá' },
      { value: 'el colegio', label: 'El Colegio' },
      { value: 'el peñón', label: 'El Peñón' },
      { value: 'el rosal', label: 'El Rosal' },
      { value: 'facatativá', label: 'Facatativá' },
      { value: 'fómeque', label: 'Fómeque' },
      { value: 'fosca', label: 'Fosca' },
      { value: 'funza', label: 'Funza' },
      { value: 'fúquene', label: 'Fúquene' },
      { value: 'fusagasugá', label: 'Fusagasugá' },
      { value: 'gachalá', label: 'Gachalá' },
      { value: 'gachancipá', label: 'Gachancipá' },
      { value: 'gachetá', label: 'Gachetá' },
      { value: 'gama', label: 'Gama' },
      { value: 'girardot', label: 'Girardot' },
      { value: 'granada', label: 'Granada' },
      { value: 'guachetá', label: 'Guachetá' },
      { value: 'guaduas', label: 'Guaduas' },
      { value: 'guasca', label: 'Guasca' },
      { value: 'guataquí', label: 'Guataquí' },
      { value: 'guatavita', label: 'Guatavita' },
      { value: 'guayabal de síquima', label: 'Guayabal de Síquima' },
      { value: 'guayabetal', label: 'Guayabetal' },
      { value: 'gutiérrez', label: 'Gutiérrez' },
      { value: 'jerusalén', label: 'Jerusalén' },
      { value: 'junín', label: 'Junín' },
      { value: 'la calera', label: 'La Calera' },
      { value: 'la mesa', label: 'La Mesa' },
      { value: 'la palma', label: 'La Palma' },
      { value: 'la peña', label: 'La Peña' },
      { value: 'la vega', label: 'La Vega' },
      { value: 'lenguazaque', label: 'Lenguazaque' },
      { value: 'machetá', label: 'Machetá' },
      { value: 'madrid', label: 'Madrid' },
      { value: 'manta', label: 'Manta' },
      { value: 'medina', label: 'Medina' },
      { value: 'mosquera', label: 'Mosquera' },
      { value: 'nariño', label: 'Nariño' },
      { value: 'nemocón', label: 'Nemocón' },
      { value: 'nilo', label: 'Nilo' },
      { value: 'nimaima', label: 'Nimaima' },
      { value: 'nocaima', label: 'Nocaima' },
      { value: 'pacho', label: 'Pacho' },
      { value: 'paime', label: 'Paime' },
      { value: 'pandi', label: 'Pandi' },
      { value: 'paratebueno', label: 'Paratebueno' },
      { value: 'pasca', label: 'Pasca' },
      { value: 'puerto salgar', label: 'Puerto Salgar' },
      { value: 'pulí', label: 'Pulí' },
      { value: 'quebradanegra', label: 'Quebradanegra' },
      { value: 'quetame', label: 'Quetame' },
      { value: 'quipile', label: 'Quipile' },
      { value: 'ricaurte', label: 'Ricaurte' },
      {
        value: 'san antonio del tequendama',
        label: 'San Antonio del Tequendama',
      },
      { value: 'san bernardo', label: 'San Bernardo' },
      { value: 'san cayetano', label: 'San Cayetano' },
      { value: 'san francisco', label: 'San Francisco' },
      { value: 'san juan de rioseco', label: 'San Juan de Rioseco' },
      { value: 'sasaima', label: 'Sasaima' },
      { value: 'sesquilé', label: 'Sesquilé' },
      { value: 'sibaté', label: 'Sibaté' },
      { value: 'silvania', label: 'Silvania' },
      { value: 'simijaca', label: 'Simijaca' },
      { value: 'soacha', label: 'Soacha' },
      { value: 'sopó', label: 'Sopó' },
      { value: 'subachoque', label: 'Subachoque' },
      { value: 'suesca', label: 'Suesca' },
      { value: 'supatá', label: 'Supatá' },
      { value: 'susa', label: 'Susa' },
      { value: 'sutatausa', label: 'Sutatausa' },
      { value: 'tabio', label: 'Tabio' },
      { value: 'tausa', label: 'Tausa' },
      { value: 'tena', label: 'Tena' },
      { value: 'tenjo', label: 'Tenjo' },
      { value: 'tibacuy', label: 'Tibacuy' },
      { value: 'tibirita', label: 'Tibirita' },
      { value: 'tocaima', label: 'Tocaima' },
      { value: 'tocancipá', label: 'Tocancipá' },
      { value: 'topaipí', label: 'Topaipí' },
      { value: 'ubalá', label: 'Ubalá' },
      { value: 'ubaque', label: 'Ubaque' },
      { value: 'ubaté', label: 'Ubaté' },
      { value: 'une', label: 'Une' },
      { value: 'útica', label: 'Útica' },
      { value: 'venecia', label: 'Venecia' },
      { value: 'vergara', label: 'Vergara' },
      { value: 'vianí', label: 'Vianí' },
      { value: 'villagómez', label: 'Villagómez' },
      { value: 'villapinzón', label: 'Villapinzón' },
      { value: 'villeta', label: 'Villeta' },
      { value: 'viotá', label: 'Viotá' },
      { value: 'yacopí', label: 'Yacopí' },
      { value: 'zipacón', label: 'Zipacón' },
      { value: 'zipaquirá', label: 'Zipaquirá' },
    ],
  },
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
}

const filter = (inputValue, path) => {
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  )
}

const RegisterForm = () => {
  // const newCities = ciudades.map(ciudad => {
  //   return {
  //     value: ciudad.toLowerCase(),
  //     label: ciudad,
  //   }
  // });

  // console.log(JSON.stringify(newCities))

  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      // initialValues={{
      //   // residence: ['zhejiang', 'hangzhou', 'xihu'],
      //   prefix: '57',
      // }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                'The two passwords that you entered do not match!'
              )
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label={
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} showSearch={{ filter }} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        validateTrigger="onBlur"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { len: 10, message: 'Please input a validate cellphone number' },
        ]}
      >
        <Input addonBefore={'+57'} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name="introduction" label="Introduction">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject('Should accept agreement, please'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
