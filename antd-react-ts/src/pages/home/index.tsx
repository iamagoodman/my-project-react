import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {console.log('to about')}}
      >
        to about
      </Button>
      <Link to='/about'>to about</Link>
    </div>
  );
}