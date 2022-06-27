export function doConsoleLog() {
  console.log("123")
  console.log(123)

  const a = 123
  console.log(a)

  const b = {
    key: 1,
    label: "one",
    isEven: false
  }
  console.log(b)

  const c = [1, 2, 3]
  console.log(c)

  const fn = function doSomething(x) {
    return x
  }
  console.log(fn)
  console.log(fn(["log me"]))
}
