import AsideSection from "./components/Aside/AsideSection";
import iconHome from './assets/system-solid-41-home.svg'
import iconSearch from './assets/system-solid-42-search.svg'
import iconLibrary from './assets/system-solid-19-book.svg'
import imgAlbum from './assets/500x500.jpg'
import style from './app.module.css'
import FooterSection from "./components/Footer/FooterSection";
import Main from "./components/Main/Main";

export default function App() {
  return (
   <main className={style.main}>
   <AsideSection>
   <img src={iconHome} alt={iconHome}/>
   <img src={iconSearch} alt={iconSearch}/>
   </AsideSection>
   <AsideSection>
   <img src={iconLibrary} alt={iconLibrary} />
   <img src={imgAlbum} alt="Photo album" />
   <img src={imgAlbum} alt="Photo album" />
   <img src={imgAlbum} alt="Photo album" />
   <img src={imgAlbum} alt="Photo album" />
   </AsideSection>
   <FooterSection/>
   <Main/>
   </main>
  )
  
}
