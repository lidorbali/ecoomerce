import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="py-3">
        <HomeScreen />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
