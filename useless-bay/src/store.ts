import { writable } from 'svelte/store';

export const isLightOn = writable(false);
export const isPumpOn = writable(false);
export const isFanOn = writable(false);
export const isAuxOn = writable(false);