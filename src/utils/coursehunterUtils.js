import debug from "./debug.js";

async function getCourseData(courseId) {
  const response = await fetch(
    `https://coursehunter.net/api/v1/course/${courseId}/lessons`,
  );
  return await response.json();
}

async function getVideoData() {
  const courseId =
    window.course_id ??
    document.querySelector('input[name="course_id"]')?.value;

  const courseData = window.lessons ?? (await getCourseData(courseId));

  const lessonId = parseInt(
    document.querySelector(".lessons-item_active")?.dataset?.index ?? 1,
  );

  const lessonData = courseData?.[lessonId - 1];

  const { file: videoUrl, duration } = lessonData;

  debug.log("coursehunter course data:", courseData);
  return {
    url: videoUrl,
    duration,
  };
}

export default {
  getVideoData,
};
