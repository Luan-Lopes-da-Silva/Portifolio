import style from './player.module.css'
import randomIcon from '../../assets/iconmonstr-random-thin 1.svg'
import prevIcon from '../../assets/iconmonstr-media-control-52 1.svg'
import pauseIcon from '../../assets/Group 1.svg'
import nextIcon from '../../assets/iconmonstr-media-control-53 1.svg'
import repeatIcon from '../../assets/iconmonstr-media-control-39 1.svg'
export default function Player(){
  return(
    <div className={style.playerContainer}>
    <div>
      <img src={randomIcon} alt={randomIcon} className={style.svg}/>
      <img src={prevIcon} alt={prevIcon} className={style.svg}/>
      <img src={pauseIcon} alt={pauseIcon} className={style.svg}/>
      <img src={nextIcon} alt={nextIcon} className={style.svg}/>
      <img src={repeatIcon} alt={repeatIcon} className={style.svg}/>
    </div>
    <div className={style.progressBar}>
    <span className={style.currentTime}>1:25</span>
    <span className={style.totalTime}>4:13</span>
    </div>
    </div>
  )
}