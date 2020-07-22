import Board from '@/services/board';
import { OUTPUT, LOW } from '@/services/board';

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
    const state = board.readPin(16);
    expect(state).toBe(LOW);
  });
});