import imgAlbum from '../../assets/500x500.jpg'
import style from './artist.module.css'
import iconFavorite from '../../assets/system-outline-48-favorite-heart.svg'

export default function Artist(){
  return(
  <div className={style.container}>
  <img src={imgAlbum} alt={imgAlbum} />
  <div className={style.resume}>
    <span className={style.music}>Hours in silence</span>
    <span className={style.artist}>Drake</span>
  </div>
  <img src={iconFavorite} alt={iconFavorite} className={style.svg}/>
  </div>
  )
}