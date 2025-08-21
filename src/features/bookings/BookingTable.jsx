import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import Pagination from "../../ui/Pagination";
import { useIsTablet } from "../../hooks/useIsTablet";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

function BookingTable() {
  const { bookings, isPending, count } = useBookings();
  const isTablet = useIsTablet();

  if (isPending) return <Spinner />;
  if (!bookings || bookings.length === 0) return <Empty resource="bookings" />;

  if (isTablet) {
    return (
      <Menus>
        <CardContainer>
          {bookings.map((booking) => (
            <BookingRow key={booking.id} booking={booking} isCard={true} />
          ))}
        </CardContainer>
        <Pagination count={count} />
      </Menus>
    );
  }

  return (
    <Menus>
      <Table columns="0.5fr 1.5fr 2fr 1fr 0.8fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} isCard={false} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
