import { expect, it, describe } from "vitest";
import {
  convertObjToArray,
  convertObjToArrayWithoutRepeatedValues,
  convertObjToArrayWithoutRepeatedValues2,
} from "./q1";

describe("testing Object to array converter", () => {
  it("{ali:22,Mohamad:12,Reza:22} to array is [22,12,22]", () => {
    const test = { ali: 22, Mohamad: 12, Reza: 22 };
    const answer = [22, 12, 22];
    expect(convertObjToArray(test)).toEqual(answer);
  });

  it("{ali:22,Mohamad:12,Reza:22,Hamid:17} to array is [22,12,22]", () => {
    const test = { ali: 22, Mohamad: 12, Reza: 22, Hamid: 17 };
    const answer = [22, 12, 22, 17];
    expect(convertObjToArray(test)).toEqual(answer);
  });

  it("convert object to array without repeated values, with js Set:", () => {
    const test = { ali: 22, Mohamad: 12, Reza: 22 };
    const answer = [22, 12];
    expect(convertObjToArrayWithoutRepeatedValues(test)).toEqual(answer);
  });

  it("convert object to array without repeated values, with array loop:", () => {
    const test = { ali: 22, Mohamad: 12, Reza: 22 };
    const answer = [22, 12];
    expect(convertObjToArrayWithoutRepeatedValues2(test)).toEqual(answer);
  });
});
