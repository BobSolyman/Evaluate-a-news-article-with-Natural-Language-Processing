import { handleSubmit } from "./js/formHandler"
import { checkURL } from "./js/urlChecker"

//importing styles
import "./styles/base.scss"
import "./styles/footer.scss"
import "./styles/form.scss"
import "./styles/header.scss"
import "./styles/resets.scss"

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    handleSubmit()
  })
})

export { handleSubmit, checkURL }
