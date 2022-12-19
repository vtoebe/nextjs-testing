import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

describe("User Reservations Component", () => {
  test("Should show purchase more tickets button when user has reservations", async () => {
    render(<UserReservations userId={1} />);
    const purchaseMoreTicketsButton = await screen.findByRole("button", {
      name: /purchase more tickets/i,
    });
    expect(purchaseMoreTicketsButton).toBeInTheDocument();
  });

  test("Should show purchase tickets button when user has zero reservations", async () => {
    render(<UserReservations userId={2} />);
    const purchaseTicketsButton = await screen.findByRole("button", {
      name: /purchase tickets/i,
    });
    expect(purchaseTicketsButton).toBeInTheDocument();
  });
});
