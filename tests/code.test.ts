import { describe, expect, test } from "vitest";
import { len, isPalindrome, sort, sqrt, sumArray, fetchUserData, fib } from "./code";

describe("len", () => {
  test("returns the length of a string", () => {
    expect(len("hello")).toBe(5);
  });

  test("returns zero for an empty string", () => {
    expect(len("")).toBe(0);
  });
});

describe("isPalindrome", () => {
  test("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});

describe("sort", () => {
  test("sorts an array of numbers", () => {
    expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("sorts an empty array", () => {
    expect(sort([])).toEqual([]);
  });
});

describe("sqrt", () => {
  test("returns the square root of a number", () => {
    expect(sqrt(4)).toBe(2);
  });

  test("throws Error for negative numbers", () => {
    expect(() => sqrt(-1)).toThrowError("negative");
  });
});

describe("sumArray", () => {
  test("returns the sum of an array of numbers", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  test("returns zero for an empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  test("returns the sum greater then 9", () => {
    expect(sumArray([1, 2, 3, 10])).toBeGreaterThan(9);
  });
});

describe("fetchUserData", () => {
  test("returns user data", async () => {
    const data = await fetchUserData("1");
    expect(data).toEqual({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
  });

  test("throws error when id is not valid", async () => {
    await expect(() => fetchUserData('kdfkf')).rejects.toThrowError("User not found");
  });
});

describe("fib", () => {
    test("returns the nth fibonacci number", () => {
        expect(fib([0, 1, 1, 2, 3, 5, 8])).toBe(13);
    });
    
    test("throws Error for arrays with less than 2 elements", () => {
        expect(() => fib([1])).toThrowError("at least 2");
    });
    
    test("throws Error for arrays that are not fibonacci sequences", () => {
        expect(() => fib([0, 1, 1, 2, 3, 5, 9])).toThrowError("fibonacci");
    });
});