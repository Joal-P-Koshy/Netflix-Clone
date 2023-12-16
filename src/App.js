import './App.css';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';
import Row from './components/Row';
import { requests } from './request';
function App() {
  return (
    <div>
      {/* <h1 style={{color:"red"}}>Netflix</h1> */}

      <Navigationbar/>

      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Netflix Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Netflix Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Netflix Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Netflix Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Netflix Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Netflix Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Netflix Documentaries' fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
