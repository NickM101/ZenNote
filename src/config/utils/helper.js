export function cutStringWithEllipsis(string, maxLength) {
    if (string.length <= maxLength) {
      return string; // No need to cut the string
    } else {
      return string.slice(0, maxLength - 3) + "..."; // Cut the string and add three dots
    }
  }

export const  uid = () => String(Date.now().toString(32) + Math.random().toString(32) + Math.random().toString(32)).replace(/\\./g, '');
