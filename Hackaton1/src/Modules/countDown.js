const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minEl = document.getElementById('mins')
const secEl = document.getElementById('secs')

const limitDate = '20 Jul 2023'


export default function countDown(){

  const limit = new Date(limitDate)
  const currentDate = new Date()

  const totalSeconds = (limit-currentDate)/1000

  const days = Math.floor(totalSeconds/3600/24)
  const hours = Math.floor(totalSeconds/3600) % 24
  const mins = Math.floor(totalSeconds/60) %60
  const seconds = Math.floor(totalSeconds) %60

  dayEl.innerHTML = days
  hourEl.innerHTML = formatTime(hours)
  minEl.innerHTML = formatTime(mins)
  secEl.innerHTML = formatTime(seconds)


  function formatTime(time){
    return time<10? `0${time}` : time;
  }
}