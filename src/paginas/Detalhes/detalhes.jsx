import { Footer } from "../../Componentes/Footer/Footer";
import { Header } from "../../Componentes/Header/Header";
import {Link} from "react-router-dom";
import { Grid, Container, RigthSide } from "./DetalhesStyle";
import { useSelector, useDispatch } from 'react-redux';
import { goToHome } from "../../assets/redux/slice";


export function Detalhes() {
  const dispatch = useDispatch() //é o cara que chama as funções do slice
  const state = useSelector((state) => state.page.valor2)

  return (
    <Container>
      <Header />
      <Grid>
        <img src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`} alt="" onclick={() => {console.log(state)}} />
          <RigthSide>
            <p><b>Titulo:</b> {state.data.title}</p>
            <p><b>Sinopse:</b> {state.data.overview}</p>
            <p><b>Data de lançamento:</b> {state.data.release_date}</p>
            <p><b>Nota:</b> {state.data.vote_average}</p>
            <Link to="/" onClick={()=>dispatch(goToHome())}>Voltar para a home</Link>
          </RigthSide>
          {/* <Link to="/">
            <button>Voltar para home</button>
          </Link> */}
      </Grid>
      <Footer />
    </Container>
  );
}

export default Detalhes;



// export function Detalhes(){
//     return(
//         <div>
//             <Header/>
//             <main>
//                 Div/Main do meio
//                 <Link to="/">
//                     <button>Voltar para HOME</button>
//                 </Link>/>
//             </main>
//             <Footer />
//         </div>
//     )
// }