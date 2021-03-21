import "babel-polyfill"
import { checkURL } from "../js/urlChecker"

describe("Testing function checkURL", () => {
  test("Making sure it is defined", () => {
    expect(checkURL).toBeDefined()
  })

  test("Testing a valid url", () => {
    expect(checkURL("https://github.com/BobSolyman/")).toBeTruthy()
  })

  test("Testing an invalid url should return false", () => {
    expect(checkURL("not a URL")).toBeFalsy()
  })
})
