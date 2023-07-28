let buttons = document.querySelectorAll(".evelator__btn_left button");

let currentFloor = 1;

function changeFloor(direction) {
  if (direction === "up" && currentFloor < 9) {
    currentFloor++;
  } else if (direction === "down" && currentFloor > 1) {
    currentFloor--;
  }

  let targetFloor = document.querySelector(`[name="floor-${currentFloor}"]`);
  targetFloor.scrollIntoView({ behavior: "smooth" });
}

buttons[1].addEventListener("click", function () {
  changeFloor("up");
});

buttons[0].addEventListener("click", function () {
  changeFloor("down");
});

// Promt
let people = prompt('Укажите нужный этаж :)')
let currentFloor2 = 1


  if (people !== null && people.trim() !== '' && Number(people) !== currentFloor2) {
    currentFloor2 = Number(people);
  } 

  console.log(people);
  console.log(currentFloor2);




