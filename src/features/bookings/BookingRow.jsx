import styled from "styled-components";
import { format, isToday } from "date-fns";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import BookingActions from "./BookingActions";
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

// Card styles for mobile/tablet
const BookingCard = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 700px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardContent = styled.div`
  display: grid;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: 500;
  color: var(--color-grey-600);
  font-size: 1.3rem;
`;

const CardActions = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
  margin-top: 1.6rem;

  button {
    padding: 0.6rem;
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-50);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--color-grey-100);
    }
  }
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
  isCard = false,
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if (isCard) {
    return (
      <BookingCard>
        <CardHeader>
          <div>
            <Cabin>{cabinName}</Cabin>
            <span
              style={{ color: "var(--color-grey-500)", fontSize: "1.3rem" }}
            >
              Booking #{bookingId}
            </span>
          </div>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </CardHeader>

        <CardContent>
          <CardRow>
            <Label>Guest:</Label>
            <Stacked>
              <span>{guestName}</span>
              <span>{email}</span>
            </Stacked>
          </CardRow>

          <CardRow>
            <Label>Dates:</Label>
            <Stacked>
              <span>
                {isToday(new Date(startDate))
                  ? "Today"
                  : formatDistanceFromNow(startDate)}{" "}
                → {numNights} night stay
              </span>
              <span>
                {format(new Date(startDate), "MMM dd yyyy")} —{" "}
                {format(new Date(endDate), "MMM dd yyyy")}
              </span>
            </Stacked>
          </CardRow>

          <CardRow>
            <Label>Amount:</Label>
            <Amount>{formatCurrency(totalPrice)}</Amount>
          </CardRow>
        </CardContent>

        <CardActions>
          <BookingActions bookingId={bookingId} status={status} />
        </CardActions>
      </BookingCard>
    );
  }

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <BookingActions bookingId={bookingId} status={status} />
    </Table.Row>
  );
}

export default BookingRow;
