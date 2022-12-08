import React from "react";
import styled from "styled-components";

export default function StylingAnyComponent() {
  // This could be react-router-dom's Link for example
  const Link = ({ className, children }) => (
    <h1 className={className}>{children}</h1>
    // <a className={className}>{children}</a>
  );

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  return (
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  );
}
