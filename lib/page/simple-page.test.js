import { expect, describe, test } from "@jest/globals";
import { simplePage } from "./simple-page.js";

describe("simplePage", () => {
  test("should return page metadata", () => {
    /** @type {import("./page-metadata.d.js").pageMetadata} */
    const metadata = [];
    const pageOutput = simplePage("Hello World!")(metadata);

    expect(pageOutput).toEqual([
      {
        name: "Content-Length",
        value: "12",
      },
      { name: "JsFnPages-Body", value: "Hello World!" },
    ]);
  });
});
