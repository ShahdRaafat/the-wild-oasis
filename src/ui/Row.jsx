import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";
const Row = styled.div.attrs((props) => ({
  type: props.type || "vertical",
}))`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      @media${device.mobile} {
        flex-direction: column;
        gap: 1.6rem;
      }
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
