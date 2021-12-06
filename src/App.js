import "./App.css";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <img className="bg-img" src="images/main-bg.png" alt="" />
      <div className="wrapper">
        <Header />
        <div className="home-form">
          <Home />
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
