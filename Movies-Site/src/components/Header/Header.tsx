import style from './header.module.css'
import Img from '../../assets/AVATAR.jpg'

export default function Header(){
return(
  <header className={style.header}>
  <nav className={style.nav}>
  <h1>Dev Flix</h1>
   <ul className={style.ul}>
     <li>Terror</li>
     <li>Ação</li>
     <li>Suspense</li>
     <li>Comedia</li>
   </ul>
   <div className={style.avatar}>
  <img src={Img} alt={Img}/>
   </div>
  </nav>
 </header>
)
}