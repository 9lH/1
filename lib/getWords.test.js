import {describe, it, expect} from "vitest"
import getWords from "./getWords.mjs"

describe("getWords(str: string): string[]",()=>{
  
  it("should split words separated with space", ()=>{
    const words = getWords("a b c")
    expect(words).toEqual(["a", "b", "c"])
  })
  
  it("should treat consecutive spaces as one", ()=>{
    const words = getWords("x     jhh    ds")
    expect(words).toEqual(["x", "jhh", "ds"])
  })

  it("should ignore spaces in the beginning and the end", ()=>{
    const words = getWords(" x     jhh    ds   ")
    expect(words).toEqual(["x", "jhh", "ds"])
  })
})
