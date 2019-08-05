const { prettifyRow, prettifyBoard, generateStartingBoard, updateBoard } = require('../lib/board');

describe('prettifyRow', () => {
  it('should convert an array of input to a string where each element is separated by | ', () => {
    const stringArray = ['X', 'O', 'X'];
    const result = prettifyRow(stringArray);
    expect(result).toBe(' X | O | X ');
  });

  it('should generate a "typeError" message when input is not an array', () => {
    expect(() => prettifyRow('X')).toThrow(TypeError);

    // alternative way

    // try {
    //   prettifyRow('X');
    // } catch (err) {
    //   expect(err).toBeInstanceOf(TypeError);
    // }
  });

  it('should throw an "TypeError" when input is not an array of arrays containing only strings', () => {
    expect(prettifyRow([])).toBe('');
  });
});

describe('prettifyBoard', () => {
  it('should return a string representation of the board given a nested array of strings', () => {
    const board = [['X', 'O', 'X'], ['X', 'X', 'O'], ['X', 'O', 'O']];
    expect(prettifyBoard(board)).toBe(' X | O | X \n---|---|---\n X | X | O \n---|---|---\n X | O | O ');
  });

  it('should throw a "TypeError" if the input is not a nested array', () => {
    expect(() => prettifyBoard(['X', 'O', 'X'], ['X', 'O', 'X']).toThrow(TypeError));
    expect(() => prettifyBoard(['X', 'O', 'X']).toThrow(TypeError));
    expect(() => prettifyBoard(1).toThrow(TypeError));
    expect(() => prettifyBoard().toThrow(TypeError));
    expect(() => prettifyBoard(false).toThrow(TypeError));
  });
});

describe('generateStartingBoard', () => {
  it('should return a 3 x 3 array filled with spaces by default if not given any arguments', () => {
    expect(generateStartingBoard()).toStrictEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });

  it('should return a n x n array filled with spaces if given a number(n)', () => {
    expect(generateStartingBoard(4)).toStrictEqual([
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
    ]);
  });
});

describe('updateBoard', () => {
  it('Updates the board with a new move given the current state of the board, the coordinates of the new move and the icon of the player commiting the move', () => {
    const board = [['X', 'O', ' '], ['X', 'X', 'O'], ['X', 'O', 'O']];
    const coordinates = [0, 2];
    const player = 'X';

    expect(updateBoard(board, coordinates, player)).toStrictEqual([['X', 'O', 'X'], ['X', 'X', 'O'], ['X', 'O', 'O']]);
  });

  it('should throw a "TypeError" if the board is undefined', () => {
    const [board, coordinates, player] = [undefined, [0, 2], 'x'];
    expect(() => updateBoard(board, coordinates, player)).toThrow(TypeError);
  });
});
