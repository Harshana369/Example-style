import React from "react";
import styled from "styled-components";

export default function PassedProps() {
  // Create an Input component that'll render an <input> tag with some styles
  const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${(props) => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;

  return (
    <div>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  );
}
