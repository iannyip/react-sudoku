// Create a function that returns border based on index (or coordinates?)
// top - if index < 9
// left - if index = 0, 9, 18... i.e. %9 == 0
// right - if index = 8, 17, 26... i.e. index+1%9 == 0
// bottom - if index >= 72
// inner right - (index-2) % 9 == 0 || (index-5) % 9 == 0
// inner bottom - 18<=index<=26 || 45<=index<=53
export const checkBorderY = (cellIndex) => {
  switch (true) {
    case cellIndex < 9:
      return 'top';
    case cellIndex >= 72:
      return 'bottom';
    case (18 <= cellIndex && cellIndex <= 26) ||
      (45 <= cellIndex && cellIndex <= 53):
      return 'bottom';
    case (27 <= cellIndex && cellIndex <= 35) ||
      (54 <= cellIndex && cellIndex <= 62):
      return 'top';
    default:
      return 'none';
  }
};

export const checkBorderX = (cellIndex) => {
  switch (true) {
    case cellIndex % 9 === 0:
      return 'left';
    case (cellIndex + 1) % 9 === 0:
      return 'right';
    case (cellIndex - 2) % 9 === 0 || (cellIndex - 5) % 9 === 0:
      return 'right';
    case (cellIndex - 3) % 9 === 0 || (cellIndex - 6) % 9 === 0:
      return 'left';
    default:
      return 'none';
  }
};
