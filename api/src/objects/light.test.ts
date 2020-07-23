import Light from '@/objects/light';

let light: Light;

describe('testing light abstractions', () => {

  beforeEach(() => {
    light = new Light(1);
  });

  test('can instansiate a light', () => {
    expect(light).toBeInstanceOf(Light);
  });

  test('light is initialized off', () => {
    const isEnergized = light.isEnergized();
    expect(isEnergized).toBeFalsy();
  });

  test('light can be switched on', () => {
    const isEnergized = light.on().isEnergized();
    expect(isEnergized).toBeTruthy();
  });

  test('light can be switched off', () => {
    const isEnergized = light.off().isEnergized();
    expect(isEnergized).toBeFalsy();
  });

});