import rpio from 'rpio';

const { HIGH, LOW, INPUT, OUTPUT } = rpio;

export default class Board {
  rpio: Rpio;

  constructor(options: RPIO.Options) {
    this.rpio = rpio;
    rpio.init(options);
  };

  initPin<T extends typeof OUTPUT | typeof INPUT,
    O extends typeof HIGH | typeof LOW
  >(pin: number, mode: T, options: O) {
    this.rpio.open(pin, mode, options);
  }

  /**
   * Read a value from a pin
   * @param pin
   */
  readPin(pin: number) {
    return this.rpio.read(pin);
  }

  /**
   * Write a value to a pin
   * @param pin
   * @param state
   */
  writePin(pin: number, state: number) {
    return this.rpio.write(pin, state);
  }
}

export { OUTPUT, INPUT, HIGH, LOW };