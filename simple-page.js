/** @typedef {import("./page-output.d.js").pageOutput} pageOutput */

const pageMetadata = [
  { name: "JsFnPages-Method", value: "GET" },
  { name: "JsFnPages-Path", value: "http://localhost/profile" },
  { name: "JsFnPages-Query", value: "key=value" },
  { name: "JsFnPages-HttpVersion", value: "1.1" },
];

/**
 * @param {string} text - Page text
 * @returns {pageOutput} - A function that takes an array of pageMetadata and returns an array of pageMetadata
 */
export function simplePage(text) {
  return function output(pageMetadata) {
    return [
      { name: "Content-Length", value: Buffer.byteLength(text) },
      { name: "JsFnPages-Body", value: text },
    ];
  };
}
