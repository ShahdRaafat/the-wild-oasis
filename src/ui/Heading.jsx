import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      @media${device.tablet} {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      @media${device.tablet} {
        font-size: 1.5rem;
      }
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      @media${device.tablet} {
        font-size: 1.5rem;
      }
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      @media${device.tablet} {
        font-size: 2rem;
      }
    `}
  line-height: 1.4;
`;

export default Heading;
