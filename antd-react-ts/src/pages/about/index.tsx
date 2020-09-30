import React from "react";
import { Button } from "antd";
import { history } from "../../utils/util";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Button
        type='primary'
        onClick={() => {history.push('/')}}
      >
        to home
      </Button>
      <Link to='/'>to home</Link>
    </div>
  );
}

