// Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.

// Answers within 10-5 of the actual value will be accepted as correct.

function getClockAngle(hours, minutes) {
  const minuteAngle = minutes * 6;
  const hourAngle = (hours * 30) + (minutes * 0.5);

  const diff = Math.abs(hourAngle - minuteAngle);

  return Math.min(diff, 360 - diff);
}

console.log(getClockAngle(3,15))