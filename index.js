import { simplePage } from "./simple-page.js";

function pageWithRoute() {
  return function output(metadata) {
    for (let row of metadata) {
      if (row.name !== "JsFnPages-Path") {
        continue;
      }
      if (row.value === "http://localhost/profile") {
        return simplePage("Profile Page")(metadata);
      }
      return simplePage("Not Found")(metadata);
    }

    const text = "Not Found";
    return [
      { name: "Content-Length", value: Buffer.byteLength(text) },
      { name: "JsFnPages", value: text },
    ];
  };
}

// input list of metadata
const pageMetadata = [
  {
    name: "JsFnPages-Method",
    value: "GET",
  },
  { name: "JsFnPages-Path", value: "http://localhost/profile" },
  { name: "JsFnPages-Query", value: "" },
  { name: "JsFnPages-HttpVersion", value: "1.1" },
];
console.log(pageWithRoute()(pageMetadata));
