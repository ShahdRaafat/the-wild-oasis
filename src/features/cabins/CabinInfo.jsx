import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useIsMobile } from "../../hooks/useIsMobile";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinInfo({ cabin }) {
  const isMobile = useIsMobile();
  const { name, maxCapacity, regularPrice, discount } = cabin;
  return (
    <>
      <Cabin>{name}</Cabin>
      <p>Fits up to {maxCapacity} guests</p>
      <Price>
        {isMobile
          ? `Price: ${formatCurrency(regularPrice)}`
          : `${formatCurrency(regularPrice)}`}
      </Price>
      {discount ? (
        <Discount>
          {isMobile
            ? `Discount: ${formatCurrency(discount)}`
            : `${formatCurrency(discount)}`}
        </Discount>
      ) : (
        <span>&mdash;</span>
      )}
    </>
  );
}

export default CabinInfo;
