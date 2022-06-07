let data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

const bars = document.querySelectorAll(".bar");
const days = document.querySelectorAll(".day");
const shownBox = document.querySelectorAll(".shownBox");

//adding heights to bars
let x = 0;
bars.forEach((bar) => {
  bar.style.height = `${data[x].amount * 2.865}px`;
  x++;
});

//adding days to charts
let y = 0;
days.forEach((day) => {
  day.textContent = `${data[y].day}`
  y++;
})

//finding biggest bar and changing its color
let biggest = 0;
bars.forEach(bar => {
  if (parseInt(bar.style.height) > biggest) {
    biggest = parseInt(bar.style.height);
  }
});

bars.forEach(bar => {
  if (parseInt(bar.style.height) == biggest) {
    bar.classList.add("biggest");
  }
});

//adding prices to boxes
let z = 0;
shownBox.forEach(box => {
  box.textContent = `$${data[z].amount}`;
  z++;
});
