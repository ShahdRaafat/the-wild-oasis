import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { device } from "../../styles/breakpoints";
import { useIsTablet } from "../../hooks/useIsTablet";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media${device.laptop} {
    grid-template-columns: 8rem 2rem 1fr 6rem 8rem;
    gap: 1rem;
    font-size: 1.5rem;
  }
  @media${device.tablet} {
    grid-template-rows: auto auto auto;
    gap: 0.8rem;
    padding: 1.4rem 0;
    text-align: left;
  }
  @media${device.mobile} {
    grid-template-columns: 1fr;
    font-size: 1.3rem;
    padding: 2.5rem 2rem;
    gap: 0.6rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const MobileInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const MobileActionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  & > * {
    flex-shrink: 0;
    width: auto !important;
    min-width: 0;
  }
`;

const DesktopItems = styled.div`
  display: contents;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  const { isTablet } = useIsTablet();

  if (!isTablet) {
    return (
      <StyledTodayItem>
        <DesktopItems>
          {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
          {status === "checked-in" && <Tag type="blue">Departing</Tag>}

          <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
          <Guest>{guests.fullName}</Guest>
          <div>{numNights} nights</div>

          {status === "unconfirmed" && (
            <Button
              size="small"
              variation="primary"
              as={Link}
              to={`/checkin/${id}`}
            >
              Check in
            </Button>
          )}
          {status === "checked-in" && <CheckoutButton bookingId={id} />}
        </DesktopItems>
      </StyledTodayItem>
    );
  }
  return (
    <StyledTodayItem>
      <MobileInfoRow>
        {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
        {status === "checked-in" && <Tag type="blue">Departing</Tag>}
        <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
        <Guest>{guests.fullName}</Guest>
        <span>• {numNights} nights</span>
      </MobileInfoRow>

      <MobileActionRow>
        {status === "unconfirmed" && (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check in
          </Button>
        )}
        {status === "checked-in" && <CheckoutButton bookingId={id} />}
      </MobileActionRow>
    </StyledTodayItem>
  );
}

export default TodayItem;
