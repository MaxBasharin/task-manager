const monthList = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сенятбрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const weekDaysList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

// Выбранная дата
const selectMonth = 1;
const selectYear = 2023;

const $calendar = document.getElementById("calendar");

// Шапка календаря
const $head = document.createElement("div");
const $month = document.createElement("div");
const $year = document.createElement("div");

$head.classList.add("calendar__head");
$month.classList.add("calendar__month");
$year.classList.add("calendar__year");

$month.textContent = "month";
$year.textContent = "year";

$head.append($month);
$head.append($year);
$calendar.append($head);
// Тело календаря
const $body = document.createElement("div");
$body.classList.add("calendar__body");
$calendar.append($body);
// Шапка с днями недели

//пока i меньше чем длина массива i увеливать
for (let i = 0; i < weekDaysList.length; i++) {
  const $weekDayCell = document.createElement("div");
  $weekDayCell.classList.add("calendar__cell", "calendar__cell_week-day");
  $weekDayCell.textContent = weekDaysList[i];

  // добавляет выходным класс
  if (i > 4) {
    $weekDayCell.classList.add("calendar__cell_weekend");
  }

  $body.append($weekDayCell);
}

// Сетка календаря (дни недели)

const firstDay = new Date(selectYear, selectMonth, 0).getDay()
const monthDaysCount = new Date(selectYear, selectMonth+1, 0).getDate()

for (let i = 0; i < weekDaysList.length * 6; i++) {
  if (i>=firstDay && i<monthDaysCount + firstDay) {
    const day = i - firstDay + 1
    const weekDay = new Date(selectYear, selectMonth, day).getDay()
    const $dayCell = document.createElement("div");
    $dayCell.classList.add("calendar__cell", "calendar__cell_day");
    $dayCell.textContent=day

    if(weekDay==0 || weekDay==6) {
        $dayCell.classList.add("calendar__cell_day-wekend");
    }

    $body.append($dayCell);
  } else {
    const $dayCell = document.createElement("div");
    $dayCell.classList.add("calendar__cell");
    $body.append($dayCell);
  }
}


