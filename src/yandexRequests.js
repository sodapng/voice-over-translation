const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string"))
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("unknown1", 6, "fixed64"))
  .add(new protobuf.Field("unknown2", 7, "int32")) // 1 1
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("unknown3", 9, "int32")) // 0 0
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(new protobuf.Field("responseLanguage", 14, "string")); // target language code

// const VideoWhitelistStreamRequest = new protobuf.Type("VideoWhitelistStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("deviceId", 4, "string"))

// const VideoTranslationStreamRequest = new protobuf.Type("VideoTranslationStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("language", 2, "string"))
//   .add(new protobuf.Field("responseLanguage", 3, "string"))

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32")) // status
  .add(new protobuf.Field("remainingTime", 5, "int32")) // secs before translation
  .add(new protobuf.Field("language", 8, "string")) // detected language (if the wrong one is set)
  .add(new protobuf.Field("message", 9, "string"));
// 6 - unknown 0 (1st request) -> 10 (2nd, 3th and etc requests)
// 7 - unknown array

// const VideoWhitelistStreamResponse = new protobuf.Type("VideoWhitelistStreamResponse")
//   .add(new protobuf.Field("inWhitelist", 1, "bool"))

// const VideoTranslationStreamResponse = new protobuf.Type("VideoTranslationStreamResponse")
//   .add(new protobuf.Field("unknown1", 1, "int32"))
//   .add(new protobuf.Field("array", 2, "string"))
//   .add(new protobuf.Field("ping", 3, "int32"))

// Create a root namespace and add the types
// const root = new protobuf.Root().define("yandex").add(VideoWhitelistStreamRequest).add(VideoWhitelistStreamResponse);

// // Export the encoding and decoding functions
// export const yandexRequests = {
//   encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
//     return root.VideoWhitelistStreamRequest.encode({
//       url,
//       deviceId: 'UCLA_DiR1FfKNvjuUpBHmylQ'
//     }).finish();
//   },
//   decodeResponse(response) {
//     return root.VideoWhitelistStreamResponse.decode(new Uint8Array(response));
//   }
// };

// // Create a root namespace and add the types
// const root = new protobuf.Root().define("yandex").add(VideoTranslationStreamRequest).add(VideoTranslationStreamResponse);

// // Export the encoding and decoding functions
// export const yandexRequests = {
//   encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
//     return root.VideoTranslationStreamRequest.encode({
//       url,
//       language: requestLang,
//       responseLanguage: responseLang
//     }).finish();
//   },
//   decodeResponse(response) {
//     return root.VideoTranslationStreamResponse.decode(new Uint8Array(response));
//   }
// };

// Create a root namespace and add the types
const root = new protobuf.Root()
  .define("yandex")
  .add(VideoTranslationRequest)
  .add(VideoTranslationResponse);

// Export the encoding and decoding functions
export const yandexRequests = {
  encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
    return root.VideoTranslationRequest.encode({
      url,
      deviceId,
      firstRequest: true,
      unknown1,
      unknown2: 1,
      language: requestLang,
      unknown3: 0,
      unknown4: 0,
      responseLanguage: responseLang,
    }).finish();
  },
  decodeResponse(response) {
    return root.VideoTranslationResponse.decode(new Uint8Array(response));
  },
};
