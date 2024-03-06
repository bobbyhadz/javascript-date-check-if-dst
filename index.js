// Check if DST (Daylight Saving Time) is in Effect using JS

function hasDST(date = new Date()) {
  const january = new Date(
    date.getFullYear(),
    0,
    1,
  ).getTimezoneOffset();
  const july = new Date(
    date.getFullYear(),
    6,
    1,
  ).getTimezoneOffset();

  return Math.max(january, july) !== date.getTimezoneOffset();
}

// 👇️ 1st of February 2022
console.log(hasDST(new Date(2022, 1, 1))); // 👉️ false

// 👇️ 1st of September 2022
console.log(hasDST(new Date(2022, 8, 1))); // 👉️ true
