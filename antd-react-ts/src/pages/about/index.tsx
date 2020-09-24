import React from "react";
import { Button } from "antd";

export default function () {
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {console.log('to home')}}
      >
        to home
      </Button>
    </div>
  );
}