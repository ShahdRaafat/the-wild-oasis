import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  @media ${device.tablet} {
    gap: 1.4rem;
    & input[type="checkbox"] {
      height: 2rem;
      width: 2rem;
    }
    & label {
      font-size: 1.4rem;
      gap: 0.8rem;
    }
  }
  @media ${device.mobile} {
    gap: 1.3rem;
    & input[type="checkbox"] {
      height: 1.8rem;
      width: 1.8rem;
    }
    & label {
      font-size: 1.3rem;
      gap: 0.7rem;
    }
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
