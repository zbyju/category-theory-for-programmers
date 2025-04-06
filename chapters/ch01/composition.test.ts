import { composition } from "./composition";
import { identity } from "./identity";

describe("composition", () => {
  test("works for math operations", () => {
    function square(a: number) {
      return a * a;
    }
    function addOne(b: number) {
      return b + 1;
    }

    expect(composition(square, addOne)(0)).toBe(1);
    expect(composition(square, addOne)(1)).toBe(2);
    expect(composition(square, addOne)(2)).toBe(5);
    expect(composition(square, addOne)(3)).toBe(10);
  });

  test("works for functions of different types", () => {
    function addOne(a: number) {
      return a + 1;
    }

    function length(b: string) {
      return b.length;
    }

    expect(composition(length, addOne)("test")).toBe(5);
    expect(composition(length, addOne)("")).toBe(1);
    expect(composition(length, addOne)("looong string")).toBe(14);
  });

  test("respects identity", () => {
    const testCases = [
      { fn: (a: number) => a + 1, vals: [0, 1, 3, -1, 123412, -12348] },
      { fn: (a: string) => a.length, vals: ["test", "", "loooong string"] },
      { fn: (a: Array) => a.length, vals: [[1, 2, 3], ["hi"], []] },
    ];

    for (const t of testCases) {
      const fn = t.fn;
      const vals = t.vals;
      for (const val of vals) {
        expect(composition(identity, fn)(val)).toBe(fn(val));
        expect(composition(fn, identity)(val)).toBe(fn(val));
      }
    }
  });
});
