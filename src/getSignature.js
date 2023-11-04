import { yandexHmacKey } from "./config/config.js";
import { yandexHmacKey as yandexHmacKeyCloudflare } from "./config/config-cloudflare.js";

async function getSignature(body) {
  // Create a key from the HMAC secret
  const utf8Encoder = new TextEncoder("utf-8");
  const key = await window.crypto.subtle.importKey(
    "raw",
    utf8Encoder.encode(
      BUILD_MODE === "cloudflare" ? yandexHmacKeyCloudflare : yandexHmacKey,
    ),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign", "verify"],
  );
  // Sign the body with the key
  const signature = await window.crypto.subtle.sign("HMAC", key, body);
  // Convert the signature to a hex string
  return Array.from(new Uint8Array(signature), (x) =>
    x.toString(16).padStart(2, "0"),
  ).join("");
}

export { getSignature };
