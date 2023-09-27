import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import videos from "./json/db.json"
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header/>
      <Banner image="princ"/>
      <Container>
        <h1> Hello World</h1>
        <section className="cards">
          {videos.map((video)=> <Card id={video.id} key={video.id}/>)}
        </section>      
      </Container>
      <Footer/>
    </>
  );
}

export default App;
