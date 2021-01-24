import SystemManager from '@/services/systemManager';
import Board from '@/services/board';

let manager: SystemManager;

describe('system manager tests', () => {

  beforeEach(() => {
    manager = new SystemManager();
  });

  test('can be instansiated', () => {
    expect(manager).toBeInstanceOf(SystemManager);
  });

  // test('sets up the board, when instansiated', () => {
  //   expect(manager.get('main_board')).toBeInstanceOf(Board);
  // });

  // test('can debug the cache', () => {
  //   manager.flush();
  //   manager.set('foo', 'bar');
  //   expect(manager.dumpCache()).toStrictEqual({ foo: 'bar' });
  // });
});