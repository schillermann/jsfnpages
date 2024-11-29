/** @typedef {import("./output.d.js").output} output */

/**
 * @param {import("../page/page-metadata.d.js").pageMetadata[]} metadata
 * @returns {output} - Write output to stream
 */
export function simpleOutput(metadata) {
  return function (outputStream) {
    let _body = "";
    outputStream.statusCode = 200;
    metadata.forEach((row) => {
      if ("JsFnPages-StatusCode" === row.name) {
        outputStream.statusCode = Number(row.value);
        return;
      }
      if ("JsFnPages-Body" === row.name) {
        _body += row.value;
        return;
      }
      outputStream.setHeader(row.name, row.value);
    });
    outputStream.end(_body);
  };
}
