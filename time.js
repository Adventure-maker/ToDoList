const dateDisplay = document.getElementById('date');

var time = new Date();
var day = time.getDay() + 1;
var month = time.getMonth() + 1
var year = time.getFullYear()
var date = time.getDate();

var dayName = {
    1 : 'Sunday',
    2 : 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5 : 'Thursday',
    6 : 'Friday',
    7 : 'Saturday' 
}

var monthName = {
    1 : 'January',
    2: 'February ',
    3: 'March',
    4 : 'April',
    5 : 'May',
    6 : 'June', 
    7 : 'July',
    8 : 'August',
    9 : 'September ',
    10 : 'October',
    11 : 'November',
    12 : 'December'
}

dateDisplay.innerHTML = `${dayName[day]},  ${date} ${monthName[month]} ${year}`;