import { useNavigate } from "react-router-dom";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";

function BookingActions({ bookingId, status }) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Menus.Menu>
      <Menus.Toggle id={bookingId} />
      <Menus.List id={bookingId}>
        <Menus.Button
          icon={<HiEye />}
          onClick={() => navigate(`/bookings/${bookingId}`)}
        >
          See details
        </Menus.Button>
        {status === "unconfirmed" && (
          <Menus.Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Menus.Button>
        )}
        {status === "checked-in" && (
          <Menus.Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => {
              checkout(bookingId);
            }}
            disabled={isCheckingOut}
          >
            Check out
          </Menus.Button>
        )}
      </Menus.List>
    </Menus.Menu>
  );
}

export default BookingActions;
