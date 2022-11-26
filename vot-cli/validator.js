/**
 * Checks the correctness of the entered link
 * @param {string} link - link to check
 */
function validate(site) {
  if (/^(https:\/\/|http:\/\/)?(www.|m.)?youtube(-nocookie)?.com\/(embed|watch).*/.test(site)) {
    return 'youtube';
  } else if (/^(https:\/\/|http:\/\/)?(www.|m.|player.)?twitch.tv\/videos\/.*/.test(site)) {
    return 'twitch';
  } else if (/^(https:\/\/|http:\/\/)?(www.)?xvideos.com\/video.*/.test(site)) {
    return 'xvideos';
  } else if (/^(https:\/\/|http:\/\/)?(www.|m.)?vk.(com|ru)\/.*/.test(site)) {
    return 'vk';
  } else if (/^(https:\/\/|http:\/\/)?rt.pornhub.com\/view_video\.php\?viewkey=.*/.test(site)) {
    return 'pornhub';
  }
  return 'unknown';
}

export default validate;