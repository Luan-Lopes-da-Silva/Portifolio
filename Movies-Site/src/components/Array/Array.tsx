import img1 from '../../assets/047501.jpg'
import img2 from '../../assets/download.jpg'
import img3 from '../../assets/Scream_pôster.jpg'

  interface MovieType {
    name:string,
    description:string,
    cover:string,
    id:number
    }
    
    const movie:MovieType={
    name:'O massacre da serra eletrica',
    description:'No caminho para visitar o túmulo de seu avô, cinco jovens se perdem e mergulham em um pesadelo sem fim quando conhecem uma família de canibais. Os psicopatas atacam os forasteiros utilizando uma variedade de métodos brutais e sádicos.',
    cover:`${img1}`,
    id:1
    }
    
    const movie2:MovieType={
    name:'A casa de cera',
    description:'Um grupo de amigos da faculdade está a caminho de um jogo de futebol quando, em uma cidade fantasma, o carro quebra e são obrigados a procurar auxílio no único lugar que está aberto: o museu de cera local. ',
    cover:`${img2}`,
    id:2
    }

    const movie3:MovieType={
    name:'Pânico 1',
    description:'Um grupo de jovens enfrenta um assassino mascarado que testa seus conhecimentos sobre filmes de terror. A pequena cidade de Woodsboro nunca mais será a mesma.',
    cover:`${img3}`,
    id:3
    }

    const movie4:MovieType={
      name:'Pânico 1',
      description:'Um grupo de jovens enfrenta um assassino mascarado que testa seus conhecimentos sobre filmes de terror. A pequena cidade de Woodsboro nunca mais será a mesma.',
      cover:`${img3}`,
      id:4
    }

    const movie5:MovieType={
      name:'Pânico 1',
      description:'Um grupo de jovens enfrenta um assassino mascarado que testa seus conhecimentos sobre filmes de terror. A pequena cidade de Woodsboro nunca mais será a mesma.',
      cover:`${img3}`,
      id:5
    }

    const movie6:MovieType={
      name:'Pânico 1',
      description:'Um grupo de jovens enfrenta um assassino mascarado que testa seus conhecimentos sobre filmes de terror. A pequena cidade de Woodsboro nunca mais será a mesma.',
      cover:`${img3}`,
      id:6
    }
    
    
    const movies = [movie,movie2,movie3,movie4,movie5,movie6]

export default movies
