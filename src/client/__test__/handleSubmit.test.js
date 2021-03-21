import "babel-polyfill"
import { handleSubmit } from "../js/formHandler"

describe("Testing function handleSubmit", () => {
  test("Making sure it is defined", () => {
    expect(handleSubmit).toBeDefined()
  })
})
