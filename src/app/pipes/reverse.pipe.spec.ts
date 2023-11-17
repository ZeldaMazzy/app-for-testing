import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it("should reverse a string", () => {
    //arrange
    const pipe = new ReversePipe();
    const fwd: string = "12345";
    const rev: string = "54321";

    //act
    const result = pipe.transform(fwd);
    
    //assert
    expect(result).toBe(rev);
  })
});
