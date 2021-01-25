import SystemManager from '@/services/systemManager';

let manager: SystemManager;

describe('system manager tests', () => {

  beforeEach(() => {
    manager = new SystemManager();
  });

  test('can be instansiated', () => {
    expect(manager).toBeInstanceOf(SystemManager);
  });
});