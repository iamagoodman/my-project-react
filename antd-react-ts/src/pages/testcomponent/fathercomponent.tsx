import React from 'react';
import { useState } from 'react';
import { Input, Form, Button } from 'antd';
import Son from './soncomponent';
const FormItem = Form.Item;
export default function () {
  const [initvalue,setInitvalue] = useState('10');
  const [defaultvalue,setDefaultvalue] = useState('');
  const [form] = Form.useForm();
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInitvalue(e.target.value);
  }
  const changevalue = (str:string) => {
    console.log(str)
  }
  const handleClick = () => {
    console.log(form.getFieldsValue())
  }
  return (
    <div>
      <p>father page</p>
      <Input value={initvalue} onChange={onchange} />
      <Son value={defaultvalue} onChange={changevalue} />
      <Form form={form}>
        <FormItem label='haha' name='values'>
          <Son value={defaultvalue} onChange={changevalue} />
        </FormItem>
        <FormItem>
          <Button type='primary' onClick={handleClick}>查询</Button>
        </FormItem>
      </Form>
    </div>
  )
}
