import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header/>
      <Banner image="princ"/>
      <Container>
        <h1> Hello World</h1>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
