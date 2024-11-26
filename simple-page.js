/** @typedef {import("./page-output.d.js").pageOutput} pageOutput */

/**
 * @param {string} text - Page text
 * @returns {pageOutput} - A function that takes an array of pageMetadata and returns an array of pageMetadata
 */
export function simplePage(text) {
  return function output(metadata) {
    return [
      { name: "Content-Length", value: Buffer.byteLength(text) },
      { name: "JsFnPages-Body", value: text },
    ];
  };
}
