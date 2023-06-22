import style from './asideSection.module.css'


/* eslint-disable react/prop-types */
export default function AsideSection(props){
return(
  <section className={style.container}>
  {props.children}
  </section> 
)
}