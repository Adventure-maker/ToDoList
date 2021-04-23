const dayDisplay = document.getElementById('day');
const monthDisplay = document.getElementById('month');
const dateDisplay = document.getElementById('date');
const yearDisplay = document.getElementById('year')

var time = new Date();
var day = time.getDay()
var month = time.getMonth() + 1
var year = time.getFullYear()
var date = time.getDate();

var dayName = {
    1 : 'mon',
    2: 'Tue',
    3: 'Wed',
    4 : 'Thur',
    5 : 'Fri',
    6 : 'Sat', 
    7 : 'Sun'
}

dayDisplay.innerHTML = dayName[day];

var monthName = {
    1 : 'Jan',
    2: 'Feb',
    3: 'Mar',
    4 : 'Apr',
    5 : 'May',
    6 : 'June', 
    7 : 'July',
    8 : 'Aug',
    9 : 'Sep',
    10 : 'Oct',
    11 : 'Nov',
    12 : 'Dec'
}

monthDisplay.innerHTML = monthName[month];

dateDisplay.innerHTML = date;

yearDisplay.innerHTML = year;