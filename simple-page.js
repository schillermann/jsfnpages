export function simplePage(text) {
  return function output(metadata) {
    return [
      { name: "Content-Length", value: Buffer.byteLength(text) },
      { name: "JsFnPages-Body", value: text },
    ];
  };
}
