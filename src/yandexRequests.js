const yandexRequests = (function() {
    var protoRequest = new protobuf.Type("VideoTranslationRequest")
                          .add(new protobuf.Field("url", 3, "string"))
                          .add(new protobuf.Field("deviceId", 4, "string"))
                          .add(new protobuf.Field("unknown0", 5, "int32"))  // первый запрос на перевод - 1, последующие - 0
                          .add(new protobuf.Field("unknown1", 6, "fixed64"))
                          .add(new protobuf.Field("unknown2", 7, "int32"))
                          .add(new protobuf.Field("language", 8, "string"))
                          .add(new protobuf.Field("unknown3", 9, "int32"))
                          .add(new protobuf.Field("unknown4", 10, "int32"))
                          .add(new protobuf.Field("responseLanguage", 14, "string"));
    var protoResponse = new protobuf.Type("VideoTranslationResponse")
                            .add(new protobuf.Field("url", 1, "string"))
                            .add(new protobuf.Field("duration",	2, "double"))
                            .add(new protobuf.Field("status", 4, "int32"))
                            .add(new protobuf.Field("remainingTime", 5,	"int32"))
                            .add(new protobuf.Field("message", 9, "string"));
    new protobuf.Root().define("yandex").add(protoRequest).add(protoResponse);
    return {
        encodeRequest: function(url, deviceId, unknown1, requestLang, responseLang) {
            return protoRequest.encode({
              url: url, 
              deviceId: deviceId, 
              unknown0: 1, 
              unknown1: unknown1, 
              unknown2: 1, 
              language: requestLang, // en - english, zh - china, fr - french, it - italian, es - spanish, mb: ru - russian
              unknown3: 0, 
              unknown4: 0,
              responseLanguage: responseLang
            }).finish();
        },
        decodeResponse: function(response) {
            return protoResponse.decode(new Uint8Array(response));
        }
    };
})();

module.exports = yandexRequests;