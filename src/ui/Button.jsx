import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 1.1rem;
      padding: 0.6rem 1rem;
    }
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;

    @media (max-width: 768px) {
      padding: 1rem 1.4rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
      padding: 1rem 1.2rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;

    @media (max-width: 768px) {
      padding: 1.2rem 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      padding: 1.1rem 1.8rem;
    }
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button.attrs((props) => ({
  variation: props.variation || "primary",
  size: props.size || "medium",
}))`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  max-width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    min-width: 44px; /* Minimum touch target size */
    min-height: 44px;
  }
`;

export default Button;
