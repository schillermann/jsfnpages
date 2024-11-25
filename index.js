// input list of metadata
const pageMetadata = {
    "JsFnPages-Method": "GET",
    "JsFnPages-Path": "http://localhost",
    "JsFnPages-Query": "",
    "JsFnPages-HttpVersion": "1.1"
}

function simplePage(pageMetadata) {

    // output list of metadata
    return {
        "Content-Length": Buffer.byteLength(text),
        "JsFnPages-Body": text
    }
}
