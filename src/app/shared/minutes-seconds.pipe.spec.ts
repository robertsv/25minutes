import {MinutesSecondsPipe} from './minutes-seconds.pipe';

describe('MinutesSecondsPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new MinutesSecondsPipe();
  });

  it('should transform 0', () => {
    expect(pipe.transform(0)).toBe('00:00');
  });

  it('should transform 1', () => {
    expect(pipe.transform(1)).toBe('00:01');
  });

  it('should transform 60', () => {
    expect(pipe.transform(60)).toBe('01:00');
  });

  it('should transform 61', () => {
    expect(pipe.transform(61)).toBe('01:01');
  });

  it('should transform 3599', () => {
    expect(pipe.transform(3599)).toBe('59:59');
  });

  it('should transform 3600', () => {
    expect(pipe.transform(3600)).toBe('60:00');
  });

  it('should transform 3661', () => {
    expect(pipe.transform(3661)).toBe('61:01');
  });

});
