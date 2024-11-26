## Quickstart

```js
const pageMetadata = [
  {
    name: "JsFnPages-Method",
    value: "GET",
  },
  { name: "JsFnPages-Path", value: "/profile" },
  { name: "JsFnPages-Query", value: "" },
  { name: "JsFnPages-HttpVersion", value: "1.1" },
];
console.log(simplePage("test")(pageMetadata));
```
