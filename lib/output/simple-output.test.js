import { jest, expect, describe, beforeEach, test } from "@jest/globals";
import { simpleOutput } from "./simple-output.js";

describe("simpleOutput", () => {
  let mockOutput;

  beforeEach(() => {
    mockOutput = {
      statusCode: null,
      setHeader: jest.fn(),
      end: jest.fn(),
    };
  });

  test("should write to the output", () => {
    /** @type {import("../page/page-metadata.d.js").pageMetadata} */
    const metadata = [
      {
        name: "JsFnPages-StatusCode",
        value: "201",
      },
      {
        name: "Content-Type",
        value: "text/plain",
      },
      { name: "JsFnPages-Body", value: "Hello World!" },
    ];
    simpleOutput(metadata)(mockOutput);

    expect(mockOutput.statusCode).toBe(201);
    expect(mockOutput.setHeader).toHaveBeenCalledWith(
      "Content-Type",
      "text/plain",
    );
    expect(mockOutput.end).toHaveBeenCalledWith("Hello World!");
  });

  test("should write to the output without metadata", () => {
    /** @type {import("../page/page-metadata.d.js").pageMetadata} */
    const metadata = [];
    simpleOutput([])(mockOutput);

    expect(mockOutput.statusCode).toBe(200);
    expect(mockOutput.setHeader).not.toBeCalled();
    expect(mockOutput.end).toHaveBeenCalledWith("");
  });
});
