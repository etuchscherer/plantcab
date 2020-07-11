import { debug } from '@/services/logging';

const label = 'cache-service';

export default class Cache {
  _cache: Map<string, any>;

  constructor() {
    debug('creating new cache service', label);
    this._cache = new Map();
  }

  /**
   * Pushes the supplied value into the cache.
   * @param {string} key
   * @param {any} value
   */
  set(key: string, value: any) {
    debug(`setting ${typeof value} at ${key}`, label);
    this._cache.set(key, value);
    return this;
  };

  /**
   * Returns true if the supplied pin exists in the cache. Otherwise false.
   * @param {any} key
   * @returns {boolean}
   */
  has(key: string) {
    const isHit = this._cache.has(key);
    debug(`cache lookup for ${key}... ${isHit ? 'hit' : 'miss'}`, label);
    return isHit;
  };

  /**
   * Returns a specified element from the cache. If the value that is
   * associated to the provided key is an object, then you will get a
   * reference to that object and any change made to that object will
   * effectively modify it inside the Map object.
   * @param {any} key
   * @returns {any} item associated with key, or undefined if not found
   */
  get(key: string) {
    return this._cache.get(key);
  };

  /**
   * Removes the specified element from the cache.
   * @param {any} key
   * @return {boolean} true if the item existed and was removed, otherwise false.
   */
  delete(key: string) {
    return this._cache.delete(key);
  }

  /**
   * Flushes all elements from the cache.
   * @return {undefined}
   */
  flush() {
    return this._cache.clear();
  }

  /**
   * Dumps all cache entries to log.
   * @returns {object} a JSON object representing the entire contents of the cache.
   */
  debug() {
    const entries = this._cache;
    const json = Object.fromEntries(entries);
    debug(`${json}`, 'cache-dump');
    return json;
  }
}