import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("Should show purchase more tickets button when user has reservations", async () => {
  render(<UserReservations userId={1} />);
  const purchaseMoreTicketsButton = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(purchaseMoreTicketsButton).toBeInTheDocument();
});
