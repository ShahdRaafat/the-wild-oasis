import { useNavigate } from "react-router-dom";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

function BookingActions({ bookingId, status }) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  return (
    <Modal>
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
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
          </Modal.Open>
        </Menus.List>
      </Menus.Menu>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="booking"
          onConfirm={() => deleteBooking(bookingId)}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default BookingActions;
