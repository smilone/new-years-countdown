var currentDate = new Date();

var currentMonth = currentDate.getMonth()+1;
var currentDay = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();

var currentYear = currentDate.getFullYear();

var newYearsMonth = 12;
var newYearsDay = 31;
var newYearsHour = 0;
var newYearsMinute = 0;

var differenceDay = getDifferenceDay();
var differenceHour = getDifferenceHour();
var differenceMinute = getDifferenceMinute();

window.onload = function setDate(){
  document.getElementById('dayValue').innerHTML = differenceDay;
  document.getElementById('hourValue').innerHTML = differenceHour;
  document.getElementById('minuteValue').innerHTML = differenceMinute;
}

function getDifferenceDay(){
var newYearsDayOfYear;

  if(leapYear()==true)
    newYearsDayOfYear=366;

  else if(leapYear()==false)
    newYearsDayOfYear = 365;

  var dayOfYear = getDayofYear();
  var differenceDay = newYearsDayOfYear-dayOfYear;
  return differenceDay;
}

function leapYear(){
  if(currentYear%4==0&&currentYear%100!=0||currentYear%400==0){
  return true;
}
  else {
    return false;
  }
}

function getDifferenceHour(){
  return 23-currentHour;
}

function getDifferenceMinute(){
  return 60-currentMinute;
}

function getDayofYear(){
  var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
  var yearFirstDay = Math.floor(timestmp / 86400000);
  var today = Math.ceil((currentDate.getTime()) / 86400000);
  var dayOfYear = today - yearFirstDay;
  console.log(dayOfYear);
  return dayOfYear;
}
