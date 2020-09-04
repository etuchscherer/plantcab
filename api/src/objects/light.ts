import Switchable from '@/objects/switchable.interface';

export default class Light implements Switchable {

  pin: number;
  state: number;

  constructor(pin: number) {
    this.pin = pin;
    this.state = 0;
  }

  on(): Light {
    this.state = 1;
    return this;
  }

  off(): Light {
    this.state = 0;
    return this;
  }

  isEnergized(): boolean {
    return this.state === 1;
  }
}