import Board from '@/services/board';
import { OUTPUT, LOW, HIGH } from '@/services/board';

let board: Board;

describe('gpio tests', () => {
  beforeEach(() => {
    board = new Board({
      mock: 'raspi-3'
    });
  });

  test('it can instansiate', () => {
    expect(board).toBeInstanceOf(Board);
  });

  test('can initialize a pin', () => {
    board.initPin(16, OUTPUT, LOW);
    const { pin, energized } = board.readPin(16);
    expect(pin).toBe(16);
    expect(energized).toBe(false);
  });

  test('can turn a pin on', () => {
    board.initPin(16, OUTPUT, LOW);
    board.writePin(16, HIGH);
    const { pin, energized } = board.readPin(16);
    expect(pin).toBe(16);
    expect(energized).toBe(true);
  });
});