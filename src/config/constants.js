const translateFuncParam = 0x40_75_50_00_00_00_00_00;
const availableFromLangs = {'ru': 'Русский', 'en': 'Английский', 'zh': 'Китайский', 'fr': 'Французский', 'it': 'Итальянский', 'es': 'Испанский'}; // available languages for translation (from)
const availableToLangs = {'ru': 'Русский', 'en': 'Английский', 'zh': 'Китайский', 'fr': 'Французский', 'it': 'Итальянский', 'es': 'Испанский'}; // available languages for translation (to)
const siteTranslates = {
  'youtube': 'https://youtu.be/',
  'twitch': 'https://twitch.tv/',
  'vimeo': 'https://vimeo.com/',
  '9gag': 'https://9gag.com/gag/',
  'vk': 'https://vk.com/video?z=',
  'xvideos': 'https://www.xvideos.com/',
  'pornhub': 'https://rt.pornhub.com/view_video.php?viewkey=',
  'udemy': 'https://www.udemy.com',
  'twitter': 'https://twitter.com/i/status/',
  'facebook': 'https://www.facebook.com/',
  'rutube': 'https://rutube.ru/video/',
  'bilibili.com': 'https://www.bilibili.com/video/',
  'mail.ru': 'https://my.mail.ru/'
};


export { translateFuncParam, availableFromLangs, availableToLangs, siteTranslates }