import React from "react";
import styled from "styled-components";
import styles from "../App.css";

// -----------Exampple 02----------------

const StyledCounter = styled.div`
  /* ... */
`;
const Paragraph = styled.p`
  /* ... */
`;
const Button = styled.button`
  /* ... */
`;

export default class Counter extends React.Component {
  //   state = { count: 0 };

  //   increment = () => this.setState({ count: this.state.count + 1 });
  //   decrement = () => this.setState({ count: this.state.count - 1 });

  // -----------Exampple 02----------------

  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      //   <div className={styles.counter}>
      //     <p className={styles.paragraph}>{this.state.count}</p>
      //     <button className={styles.button} onClick={this.increment}>
      //       +
      //     </button>
      //     <button className={styles.button} onClick={this.decrement}>
      //       -
      //     </button>
      //   </div>

      // -----------Exampple 02----------------

      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    );
  }
}
