import Artist from "./Artist";
import Controls from "./Controls";
import Player from "./Player";
import style from "./footerSection.module.css"

export default function FooterSection(){
return(
<footer className={style.container}>
  <Artist/>
  <Player/>
  <Controls/>
</footer>  
)
}