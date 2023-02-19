const $calendar = document.getElementById('calendar')

console.log($calendar)

// Шапка календаря
const $head = document.createElement('div')
const $month = document.createElement('div')
const $year = document.createElement('div')

$head.classList.add('calendar__head')
$month.classList.add('calendar__month')
$year.classList.add('calendar__year')

$month.textContent='month'
$year.textContent='year'

$head.append($month)
$head.append($year)
$calendar.append($head)
// Тело календаря
const $body = document.createElement('div')
$body.classList.add('calendar__body')
$calendar.append($body)
// Шапка с днями недели

// Сетка календаря (дни недели)