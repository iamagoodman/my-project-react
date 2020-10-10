import React, { useEffect } from 'react';
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/stores/reducers";
import { doLoginVisiable, doLogin } from "../../stores/actions";
import { Modal, Select, Input, Row, Col, Button, Form  } from "antd";
import { IconFont } from "../../components";
import style from './index.module.less';
import './index.less';
const { Option } = Select;
const { Group } = Input;
export default function () {
  const mapState = createSelector(
    (state: RootState) => state,
    ({app: { loginVisiable, phone, password, userInfo }}) => ({ loginVisiable, phone, password, userInfo })
  )
  const { loginVisiable, phone, password, userInfo } = useSelector(mapState);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const checkValid = async () => {
    try{
      const values = await form.validateFields();
      dispatch(doLogin.request({phone:values.phone, password:values.password}));
      dispatch(doLoginVisiable(false));
    }catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(userInfo);
  },[userInfo])
  return (
    <Modal
      className={'login_module'}
      visible={loginVisiable}
      maskClosable
      closable={true}
      centered={true}
      onCancel={() => {dispatch(doLoginVisiable(false))}}
    >
      <Form form={form} initialValues={{phone:phone,password:password}}>
        <Group compact>
          <Select
            defaultValue="+086"
            size='large'
            style={{ width: '40%'}}
          >
            <Option value="+086">+086</Option>
          </Select>
          <Form.Item
            name='phone'
            style={{ width: '60%' }}
            rules={[
              {
                required: true,
                message: '手机号为必录项'
              }
            ]}
          >
            <Input
              size='large'
              placeholder={'请输入手机号'}
              onChange={(e) => {console.log(e.target.value)}}
            />
          </Form.Item>
        </Group>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: '密码为必录项'
            }
          ]}
        >
          <Input.Password
            size='large'
            placeholder={'请输入密码'}
            prefix={<IconFont name='iconmima1' />}
            onChange={(e) => {console.log(e.target.value)}}
          />
        </Form.Item>
        <Button type='primary' size='large' onClick={() => {checkValid()}} block>
          登录
        </Button>
      </Form>
    </Modal>
  )

}