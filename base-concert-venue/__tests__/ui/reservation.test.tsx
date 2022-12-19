import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

describe("Reservation Component", () => {
  test("Should show the correct number of seats", async () => {
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);
    const seatCountText = await screen.findByText(/10 seats left/i);
    expect(seatCountText).toBeInTheDocument();
  });

  test("Should show the show is sold out when there are no available seats", async () => {
    render(<Reservation showId={1} submitPurchase={jest.fn()} />);
    const soldOutMessage = await screen.findByText(/Show is sold out!/i);
    expect(soldOutMessage).toBeInTheDocument();
  });
});
