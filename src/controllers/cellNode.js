const getCoordinates = (index) => {
  const xValue = (index % 9) + 1;
  const yValue = Math.floor(index / 9) + 1;
  return { xValue, yValue };
};

const checkBorderY = (cellIndex) => {
  switch (true) {
    case cellIndex < 9:
      return 'outer-top';
    case cellIndex >= 72:
      return 'outer-bottom';
    case (18 <= cellIndex && cellIndex <= 26) ||
      (45 <= cellIndex && cellIndex <= 53):
      return 'inner-bottom';
    case (27 <= cellIndex && cellIndex <= 35) ||
      (54 <= cellIndex && cellIndex <= 62):
      return 'inner-top';
    default:
      return 'none';
  }
};

const checkBorderX = (cellIndex) => {
  switch (true) {
    case cellIndex % 9 === 0:
      return 'outer-left';
    case (cellIndex + 1) % 9 === 0:
      return 'outer-right';
    case (cellIndex - 2) % 9 === 0 || (cellIndex - 5) % 9 === 0:
      return 'inner-right';
    case (cellIndex - 3) % 9 === 0 || (cellIndex - 6) % 9 === 0:
      return 'inner-left';
    default:
      return 'none';
  }
};

class CellNode {
  constructor(index, value) {
    this.index = index;
    this.answer = '';
    this.coordinates = getCoordinates(index);
    this.notes = [];
    this.type = value === '-' ? 'input' : 'permanent';
    this.value = value === '-' ? '' : value;
  }

  getCoordinates() {
    return this.coordinates;
  }

  isHighlighted(selectedCellCoordinates) {
    if (
      selectedCellCoordinates.xValue === this.coordinates.xValue ||
      selectedCellCoordinates.yValue === this.coordinates.yValue
    ) {
      return true;
    } else {
      return false;
    }
  }

  isCorrect() {
    return this.val === this.answer;
  }

  get getBorderStyles() {
    return `${checkBorderY(this.index)} ${checkBorderX(this.index)}`;
  }

  get getValue() {
    return this.value;
  }

  set setValue(newValue) {
    this.value = newValue;
  }

  get getNotes() {
    return this.notes;
  }

  set updateNotes(newValue) {
    if (this.notes.includes(newValue)) {
      this.notes.splice(this.notes.indexOf(newValue), 1);
    } else {
      this.notes.push(newValue);
    }
  }
}

module.exports = { CellNode };
