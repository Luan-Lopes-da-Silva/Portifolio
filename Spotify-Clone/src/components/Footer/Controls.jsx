import style from './controls.module.css'
import micIcon from '../../assets/iconmonstr-microphone-8 1.svg'
import stackIcon from '../../assets/iconmonstr-database-5 1.svg'
import deviceIcon from '../../assets/iconmonstr-smartphone-16 1.svg'
import maxIcon from '../../assets/Vector.svg'
import soundIcon from '../../assets/iconmonstr-sound-thin 1.svg'
export default function Controls(){
  return(
    <section className={style.container}>
      <img src={micIcon} alt={micIcon} className={style.svg} />
      <img src={stackIcon} alt={stackIcon} className={style.svg} />
      <img src={deviceIcon} alt={deviceIcon} className={style.svg} />
      <div className={style.progressBar}></div>
      <img src={soundIcon} alt={soundIcon} className={style.svg} />
      <img src={maxIcon} alt={maxIcon} className={style.svg} />
    
    </section>
  )
}