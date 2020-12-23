import { writable, readable, derived } from 'svelte/store'
import moment from 'moment';
import { fetchWeather } from './utils'

export const apiKey = '8260f045aec83a027b2e447a7dae49f8';
export const zip = '98296';

export const isLightOn = writable(false);
export const isPumpOn = writable(false);
export const isFanOn = writable(false);
export const isAuxOn = writable(false);

export const time  = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const weather  = readable(fetchWeather({apiKey, zip }), function start(set) {
	const interval = setInterval(() => {
		set(fetchWeather({ apiKey, zip }));
	}, 14400000); // 4 hours

	return function stop() {
		clearInterval(interval);
	};
});

export const isDaytime = derived([weather, time], async ([$weather, $time]) => {
	const weather = await $weather;
	const { sunrise, sunset } = weather.data?.sys;
	const now = moment($time);
	return now.isBetween(moment(sunrise * 1000), moment(sunset * 1000));
});