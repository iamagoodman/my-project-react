import React, {useState} from 'react';
import { Select, Input, Row, Col } from 'antd';
const { Option } = Select;
interface Props {
  value: string;
  onChange: (value: string) => void;
}
export default function (props: Props) {
  const [selectvalue,setSelectvalue] = useState('0')
  const [inputvalue,setInputvalue] = useState('fuck');
  const data:any = {
    '0': 'ZH昂三',
    '1': '里斯',
    '2': '王二'
  }
  const onchangeinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.target.value);
    props.onChange(e.target.value+selectvalue);
  }
  const onchangeselect = (e: any) => {
    setSelectvalue(e);
    props.onChange(inputvalue+e);
  }
  return (
    <div>
      <Row>
        <Col span={12}>
          <Select onChange={onchangeselect} defaultValue={selectvalue}>
            {Object.keys(data).map((key:string) => (
              <Option key={key} value={key}>{data[key]}</Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Input value={inputvalue} onChange={onchangeinput} />
        </Col>
      </Row>
    </div>
  )
}
