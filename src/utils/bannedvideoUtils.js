import debug from "./debug.js";

async function getVideoInfo(videoId) {
  return await fetch(`https://api.banned.video/graphql`, {
    method: "POST",
    body: JSON.stringify({
      operationName: "GetVideo",
      query: `query GetVideo($id: String!) {
          getVideo(id: $id) {
            ...DisplayVideoFields
            videoUrl: directUrl
            live
          }
        }

        fragment DisplayVideoFields on Video {
          title
          description: summary
          duration: videoDuration
        }`,
      variables: {
        id: videoId,
      },
    }),
    headers: {
      "User-Agent": "bannedVideoFrontEnd",
      "apollographql-client-name": "banned-web",
      "apollographql-client-version": "1.3",
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {};
    });
}

async function getVideoData(videoId) {
  const videoData = await getVideoInfo(videoId);

  debug.log("banned.video video data:", videoData);

  const { videoUrl, duration, live, description, title } =
    videoData.data.getVideo;

  // TODO: Add detect language from title + description

  return {
    url: videoUrl,
    duration,
    live,
    title,
    description,
  };
}

export const bannedvideoUtils = {
  getVideoData,
};
