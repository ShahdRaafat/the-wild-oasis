import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";
const Form = styled.form.attrs((props) => ({
  type: props.type || "regular",
}))`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      @media${device.mobile} {
        padding: 2.4rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      @media${device.tablet} {
        width: 100%;
        max-height: 100%;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
