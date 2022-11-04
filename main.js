const body = document.querySelector("body")
const button = document.querySelector("button")
let isYellow = true
let isBlue = false

const changeBgColor = () => {
  if (isYellow) {
    body.classList.add("blue")
    isYellow = !isYellow
    isBlue = !isBlue
  } else if (isBlue) {
    body.classList.remove("blue")
    body.classList.add("green")
    isBlue = false
  } else {
    body.classList.remove("green")
    isYellow = !isYellow
  }
  // else {
  //   body.classList.remove("green")
  // }
}

button.addEventListener("click", changeBgColor)

function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}">
  </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
          ${games}
      </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "13:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "camaroon"))
