import React from 'react';
import { Button } from 'antd';

export default function () {
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {console.log('to about')}}
      >
        to about
      </Button>
    </div>
  );
}