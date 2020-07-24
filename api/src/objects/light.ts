import Switchable from '@/objects/switchable.interface';

export default class Light implements Switchable {

  pin: number;
  state: number;

  constructor(pin: number) {
    this.pin = pin;
    this.state = 0;
  }

  on() {
    this.state = 1;
    return this;
  }

  off() {
    this.state = 0;
    return this;
  }

  isEnergized() {
    return this.state === 1;
  }
}