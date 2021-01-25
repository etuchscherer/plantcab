import rpio from 'rpio';

const { HIGH, LOW, INPUT, OUTPUT } = rpio;

interface PinStatus {
  pin: number;
  energized: boolean;
}

export default class Board {
  rpio: Rpio;

  constructor(options: RPIO.Options) {
    this.rpio = rpio;
    rpio.init(options);
  }

  initPin<T extends typeof OUTPUT | typeof INPUT,
    O extends typeof HIGH | typeof LOW
  >(pin: number, mode: T, options: O): void {
    this.rpio.open(pin, mode, options);
  }

  /**
   * Read a value from a pin
   * @param pin
   */
  readPin(pin: number): PinStatus {
    const energized = !!this.rpio.read(pin);
    return { pin, energized };
  }

  /**
   * Write a value to a pin
   * @param pin
   * @param state
   */
  writePin(pin: number, state: number): PinStatus {
    this.rpio.write(pin, state);
    return { pin, energized: !!state };
  }
}

export { OUTPUT, INPUT, HIGH, LOW };