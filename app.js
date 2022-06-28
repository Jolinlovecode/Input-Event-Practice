const input = document.querySelector("input");
const h1 = document.querySelector("h1");
input.addEventListener("input", function (e) {
  // console.log(input);
  // console.log(e);
  if (input.value === "") {
    // if(e.target.value === "")
    h1.innerText = "Enter Your Username";
  } else {
    h1.innerText = `Welcome, ${input.value}`;
    // h1.innerText = `Welcome, ${e.target.value}`;
  }
});
