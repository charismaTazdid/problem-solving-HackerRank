function getDayName(dateString) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName;
    var date=new Date(dateString)
    dayName = days[date.getDay()];
    return dayName;
}

console.log(getDayName('11/10/2010'))


//problem link: https://www.hackerrank.com/challenges/js10-date/problem