import style from './header.module.css'
import prevIcon from '../../assets/Group 4.svg'
import nextIcon from '../../assets/Group 5.svg'
import avatar from '../../assets/AVATAR.jpg'
import shareIcon from '../../assets/Group 6.svg'
export default function Header(){
  return(
    <header>
    <div className={style.prevAndNext}>
      <div className={style.container}>
      <img src={nextIcon} alt={nextIcon} />
      </div>
      <div className={style.container}>
      <img src={prevIcon} alt={prevIcon} />
      </div>
    </div>
    <div className={style.icons}>
      <img src={shareIcon} alt={shareIcon} className={style.svg} />
      <div className={style.avatar}>
      <img src={avatar} alt={avatar} />
      </div>
    </div>
    
    </header>
  )
}