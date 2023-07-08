import Comment from './Modules/Comment'
import checkMsg from './Modules/checkEmail'
import countDown from './Modules/countDown'
import dayProgramation from './Modules/dayProgramation'
import './css/style.css'

setInterval(countDown,1000)
dayProgramation()
checkMsg()
Comment()