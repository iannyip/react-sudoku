const getCoordinates = (index) => {
  const xValue = (index % 9) + 1;
  const yValue = Math.floor(index / 9) + 1;
  return { xValue, yValue };
};

class CellNode {
  constructor(index, value) {
    this.index = index;
    this.value = value === '-' ? '' : value;
    this.coordinates = getCoordinates(index);
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

  get getValue() {
    return this.value;
  }
}

module.exports = { CellNode };
