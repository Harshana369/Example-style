import React from "react";
import styled from "styled-components";

// // The Button from the last section without the interpolations
// const Button = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// // A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// -------------2 Example----------------

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

//----------------3 Example----------------

// const Button = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;

// const ReversedButton = (props) => (
//   <Button {...props} children={props.children.split("").reverse()} />
// );

export default function ExtendingStyles() {
  return (
    <div>
      {/* <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton> */}

      {/* -------------2 Example-------------- */}

      <Button>Normal Button</Button>
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>

      {/* ----------------3 Example------------------ */}

      {/* <Button>Normal Button</Button>
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button> */}
    </div>
  );
}
