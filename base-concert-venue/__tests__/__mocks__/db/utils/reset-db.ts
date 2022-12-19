import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

import { readFakeData } from "../../fakeData";

export const resetDB = async () => {
  // failsage against resetting production db
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    console.warn(
      "WARNING: database reset unavailable outside test environment!"
    );
  }

  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  // overwrite data in fales
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.users, fakeUsers),
    writeJSONToFile(filenames.reservations, fakeReservations),
  ]);
};
