export async function getHmacSha1(hmacKey, salt) {
  const utf8Encoder = new TextEncoder("utf-8");
  salt = utf8Encoder.encode(salt);

  return window.crypto.subtle
    .importKey(
      "raw",
      utf8Encoder.encode(hmacKey),
      { name: "HMAC", hash: { name: "SHA-1" } },
      false,
      ["sign", "verify"],
    )
    .then((key) => window.crypto.subtle.sign("HMAC", key, salt))
    .then((arrayBuffer) =>
      btoa(String.fromCharCode(...new Uint8Array(arrayBuffer))),
    )
    .catch((err) => {
      console.error(err);
      return false;
    });
}
