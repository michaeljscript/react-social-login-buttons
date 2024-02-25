import * as exportedUtils from "../";
import { readFileSync } from "fs";

describe("documentation", () => {
  const documentationFileString = readFileSync("./README.md").toString();

  it("should have mentioned all exported utils", () => {
    const utilNames = Object.keys(exportedUtils);

    utilNames.forEach((name) => expect(documentationFileString).toContain(name));
  });
});
