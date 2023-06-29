import Header from "./components/Header/Header"
import movies from "./components/Array/Array"
import style from "./app.module.css"

function App() {
  return (
    <div id="app">
    <Header/> 
    <h2>Meus filmes</h2>
    <div className={style.movies} >
    {movies.map((movie)=>(
    <div className={style.movie} key={movie.id}>
      <h1 className={style.title}>{movie.name}</h1>
      <img src={movie.cover} alt={movie.name} className={style.cover}/>
      <span className={style.description}>{movie.description}</span>
    </div>
    ))}
    </div>
    </div>
  )
}

export default App
