import { Buffer } from "node:buffer";
/** @typedef {import("./page.d.js").page} page */

/**
 * @param {string} text - Page text
 * @returns {page} - A function that takes an array of pageMetadata as input and returns an new array of pageMetadata as output
 */
export function simplePage(text) {
  return function (metadata) {
    return [
      { name: "Content-Length", value: Buffer.byteLength(text).toString() },
      { name: "JsFnPages-Body", value: text },
    ];
  };
}
