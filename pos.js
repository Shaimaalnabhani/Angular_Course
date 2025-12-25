let email = "Shaima@gmail.com"
let password = "123456"
let attempt = 0

function askLogin() {
  while (attempt < 3) {
    let elog = prompt("Enter your Email")
    let paslog = prompt("Enter your pasword")

    if (elog == email && paslog == password) {
      console.log("congratulation");
      break;
    }
    else {
      attempt++
      console.log("Please enter again");
    }

    if (attempt >= 3) {
      console.log("Wait 30 seconds");
      let counter = 30
      let timer = setInterval(() => {
        console.log("Wait " + counter + "s");
        counter--

        if (counter <= 0) {
          clearInterval(timer)
          attempt = 0
          console.log("you can try again");
          askLogin();
        }
      }, 1000)
    }
  }
}
askLogin();
