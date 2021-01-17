import React from "react";
import styled from "styled-components";
import { Links } from "react-router-dom";
import logo from "../logo.svg";
import { scroller } from "react-scroll";
import { ProductConsumer } from "../Context/Context";

export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        return <div>hello</div>;
      }}
    </ProductConsumer>
  );
}
