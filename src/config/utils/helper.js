export function cutStringWithEllipsis(string, maxLength) {
    if (string.length <= maxLength) {
      return string; // No need to cut the string
    } else {
      return string.slice(0, maxLength - 3) + "..."; // Cut the string and add three dots
    }
  }
  