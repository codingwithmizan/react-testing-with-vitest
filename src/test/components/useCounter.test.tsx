import { renderHook, act } from "@testing-library/react";
import { useCounter } from "@/hooks/useCounter";

describe("useCounter", () => {
  test("renders correctly", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("renders increment action", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    act(() => {
      result.current.increment();
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
  });
});
