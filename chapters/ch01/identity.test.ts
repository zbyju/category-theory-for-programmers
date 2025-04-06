import { identity } from "./identity";

describe("identity", () => {
  test("returns the same value for any number", () => {
    const numbers = [0, 1, -1, -100000, 10000, 123451541];
    for (const num of numbers) {
      expect(identity(num)).toBe(num);
    }
  });

  test("returns the same value for any float", () => {
    const numbers = [0.0, 1.0, -1.0, 0.5, 12354895.12341234, -12341234.9483];
    for (const num of numbers) {
      expect(identity(num)).toBe(num);
    }
  });

  test("returns the same value for any string", () => {
    const strings = ["test", "multiple words test", "hi"];
    for (const str of strings) {
      expect(identity(str)).toBe(str);
    }
  });
});
