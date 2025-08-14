import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { device } from "../../styles/breakpoints";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
const CabinCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 12px;
  padding: 1.6rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 6.4rem 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  transition: transform 400ms ease;

  @media${device.mobile} {
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
    transform: scale(1) translateX(0px);
    ${CabinCard}:hover & {
      transform: scale(1.03);
    }
  }
`;

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
function CabinRow({ cabin, isMobile }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const [showForm, setShowForm] = useState(false);

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  if (isMobile)
    return (
      <CabinCard>
        <div>
          <Img src={image} />
        </div>
        <div>
          <Cabin>{cabin.name}</Cabin>
          <p>Fits up to {cabin.maxCapacity} guests</p>
          <Price>Price: {formatCurrency(cabin.regularPrice)}</Price>
          {discount ? (
            <Discount>Discount: {formatCurrency(cabin.discount)}</Discount>
          ) : (
            <span>&mdash;</span>
          )}

          <div></div>
          <button>Delete</button>
        </div>
      </CabinCard>
    );

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(cabin.discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={handleDuplicate} disabled={isCreating}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
