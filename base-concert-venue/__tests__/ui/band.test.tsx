import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

describe("Band page", () => {
  test("Band component displays correct band information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandComponent band={fakeBands[0]} error={null} />);

    const heading = screen.getByRole("heading", {
      name: /The Wandering Bunnies/i,
    });
    const description = screen.getByText(
      "blistering world music, supported by a moody water glass orchestra"
    );
    const image = screen.getByRole("img", { name: "band photo" });
    const authorName = screen.getByText("Adina Voicu");
    const link = screen.getByRole("link");

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://pixabay.com/users/adinavoicu-485024/"
    );
  });

  test("Should show error message when band data could not be retrieved", async () => {
    render(<BandComponent band={null} error="Error message" />);

    const heading = screen.getByRole("heading", {
      name: /Error message/i,
    });
    const message = screen.getByText("please try again later");
    expect(heading).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
