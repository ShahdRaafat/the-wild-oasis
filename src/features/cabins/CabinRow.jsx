import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import CabinInfo from "./CabinInfo";
import { useIsMobile } from "../../hooks/useIsMobile";
import CabinActions from "./CabinActions";
import Table from "../../ui/Table";

//Mobile and tablet view
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
//Desktop View
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
    hover & {
      transform: scale(1.03);
    }
  }
`;

const MobileActions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;

function CabinRow({ cabin }) {
  const isMobile = useIsMobile();
  const { image } = cabin;

  if (isMobile)
    return (
      <CabinCard>
        <div>
          <Img src={image} />
        </div>
        <div>
          <CabinInfo cabin={cabin} isMobile={isMobile} />
          <MobileActions>
            <CabinActions cabin={cabin} />
          </MobileActions>
        </div>
      </CabinCard>
    );

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <CabinInfo cabin={cabin} />
        <div>
          <CabinActions cabin={cabin} />
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
