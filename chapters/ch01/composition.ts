export function composition<A, B, C>(
  f: (a: A) => B,
  g: (b: B) => C,
): (a: A) => C {
  const composed = (a: A) => g(f(a));
  return composed;
}
