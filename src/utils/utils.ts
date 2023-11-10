/**
 * check if  given domain or url is https enabled or not
 * @param url
 */
function ensureHTTPS(url: string | null) {
  if (!url) {
    return '';
  }
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  } else if (/^http:\/\//i.test(url)) {
    url = url.replace(/^http:/i, 'https:');
  }
  return url;
}

/**
 * check if  given  url is valid url string
 * @param url
 */
function isValidUrl(url: string) {
  // Regular expression pattern to match a valid URL
  const urlPattern =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,13})([/\w .-]*)*\/?$/;

  return urlPattern.test(url);
}

/**
 * converts string to lowercase
 * @param str
 */
function convertToLower(str: string) {
  if (str?.length <= 0) {
    return str;
  }
  return str?.toLowerCase();
}

/**
 * check is array is non-empty valid array
 * @param array
 */

function isValidArray(array: any[] | undefined | null): boolean {
  return array !== undefined && array !== null && array?.length > 0;
}

/**
 * check if given string is non empty valid string
 * @param str
 */
function isValidString(str: string | undefined | null): boolean {
  return str !== undefined && str !== null && str?.length > 0;
}

/**
 * check if given string is non empty valid number
 * @param num
 */
function isValidNumber(num: number | undefined | null): boolean {
  return num !== undefined && num !== null && num > 0;
}

function getTabBarRouteLabel(
  options: {tabBarLabel: string | undefined; title: string | undefined},
  route: {name: string | undefined},
) {
  const str =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;
  return str ?? '';
}

export {
  ensureHTTPS,
  isValidUrl,
  convertToLower,
  isValidArray,
  isValidString,
  isValidNumber,
  getTabBarRouteLabel,
};
