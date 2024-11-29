## Quickstart

```js
import { simplePage } from "./lib/page/simple-page.js";
import { simpleOutput } from "./lib/output/simple-output.js";
import http from "http";

/** @type {import("./lib/page/page-metadata.d.js").pageMetadata} */
const pageMetadata = [
  {
    name: "JsFnPages-Method",
    value: "GET",
  },
  { name: "JsFnPages-Path", value: "/profile" },
  { name: "JsFnPages-Query", value: "" },
  { name: "JsFnPages-HttpVersion", value: "1.1" },
];

const PORT = 3000;
http
  .createServer(async (request, response) =>
    simpleOutput(simplePage("Hello World!")(pageMetadata))(response),
  )
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
```
