// Problem: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true


function timeConversion(s) {
    // Write your code here
    const timePeriod = s.match(/(A|P)M/g);
    const isAM = timePeriod.includes('AM');
    const [hours, minutes, secondsWithTimePeriod] = s.split(':');
    let finalHours = isAM ? hours : +hours + 12;

    if (+hours === 12) {
        finalHours = isAM ? '00' : hours;
    }

    return `${finalHours}:${minutes}:${secondsWithTimePeriod}`.replace(timePeriod, '');
}
