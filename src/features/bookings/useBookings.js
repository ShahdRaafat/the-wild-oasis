import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const { data: bookings, isPending } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  console.log(bookings);
  return { bookings, isPending };
}
