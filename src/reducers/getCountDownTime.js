const timeText = ""
const getCountDownTime = (state = timeText, action) => {
  switch (action.type) {
    case "COUNT_DOWN":
      const countdownTime = countDown(action.deadline)
      return countdownTime
    default: return state
  }
}
const countDown = (deadline) => {
  let newDate = new Date();
  let totalTimeNow = newDate.getTime();
  let totalFutureTime = deadline * 1000
  var timeRemain = totalFutureTime - totalTimeNow;
  var seconds = Math.floor(timeRemain / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var day = Math.floor(hours / 24);
  let currentSecond = (seconds % 60);
  let currentMinute = (minutes % 60);
  let currentHour = (hours % 24);
  let currentDay = day
  currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
  currentMinute = (currentMinute < 10) ? "0" + currentMinute : currentMinute;
  currentSecond = (currentSecond < 10) ? "0" + currentSecond : currentSecond;
  let countDownLine = `${currentDay} ngày${currentHour}:${currentMinute}:${currentSecond}`
  return countDownLine
}
export default getCountDownTime