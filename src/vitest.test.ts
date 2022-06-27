import { assert, describe, expect, it } from "vitest"

describe("Math", () => {
  it("+ operator", () => {
    expect(1 + 1).eq(2)
  })

  it("Math.sqrt()", () => {
    expect(Math.sqrt(4)).eq(2)
  })

  it("Math.sqrt() 3 times", () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt(144)).toBe(12)
    expect(Math.sqrt(2)).toBe(Math.SQRT2)
  })
})

describe("Snapshot", () => {
  it("Snapshot Object", () => {
    expect({ foo: "bar" }).toMatchSnapshot()
  })
})

describe("JSON", () => {
  it("JSON.stringify()", () => {
    const input = {
      foo: "hello",
      bar: "world",
    }
  
    const output = JSON.stringify(input)
  
    expect(output).eq('{"foo":"hello","bar":"world"}')
    assert.deepEqual(JSON.parse(output), input, "matches original")
  })
})
