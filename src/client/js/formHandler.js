// function handleSubmit(event) {
//   event.preventDefault();

//   // check what text was put into the form field
//   let formText = document.getElementById("name").value;
//   checkForName(formText);

//   console.log("::: Form Submitted :::");
//   fetch("http://localhost:8080/test")
//     .then((res) => res.json())
//     .then(function (res) {
//       document.getElementById("results").innerHTML = res.message;
//     });
// }

const post = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const url = document.getElementById("articleUrl").value;
  if (Client.checkURL(url)) {
    await post("http://localhost:8083/add-url", { userURL: url }).then(
      (data) => {
        document.getElementById(
          "score_tag"
        ).innerHTML = `Score tag: ${data.score_tag}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${data.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
      }
    );
  } else {
    alert("Invalid URL, please try again.");
  }
};

export { handleSubmit };
