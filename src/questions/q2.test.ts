import { expect, it, describe, vi } from "vitest";
import { createMyFunction } from "./q2";

describe("createMyFunction should return a memorized result of callback", () => {
  it("callback should be called only once with same result:", () => {
    const callback = vi.spyOn({ callback: () => 12 + 5 }, "callback");
    const func = createMyFunction();

    const firstResult = func(callback);
    const secondResult = func(callback);
    const thirdResult = func(callback);

    expect(firstResult).toBe(secondResult);
    expect(secondResult).toBe(thirdResult);
    expect(callback).toBeCalledTimes(1);
  });
});
