import Cache from '@/services/cache';

let cache: Cache;

describe('can test the cache', () => {

  beforeEach(() => {
    cache = new Cache();
  });

  test('instansiates', () => {
    expect(cache).toBeInstanceOf(Cache);
  });

  test('we can set a value in the cache', () => {
    cache.set('foo', 'bar');
    expect(cache.get('foo')).toBe('bar');
  });
});