export default interface Switchable {
  pin: number;
  state: number;

  on(): Switchable;
  off(): Switchable;
  isEnergized(): boolean;
}