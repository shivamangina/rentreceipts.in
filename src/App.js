// // import logo from "./logo.svg";
// import "./App.scss";
// import Footer from "./components/Footer";
// import LandingPage from "./components/LandingPage";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import "./components/LandingPage.scss";
// import About from "./components/About";

// function App() {
//   return (
//     <div >

//       <Header />
//       <LandingPage />
//       <div className="App"><Form /></div>
//       {/* <About /> */}
//       <Footer />

//       </div>
//   );
// }

// export default App;
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Form from "./components/Form";
import "./components/LandingPage.scss";
import About from "./components/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path={"/"} exact component={LandingPage} />
            <Route path={"/About"} exact component={About} />
            <Route path={"/Form"} component={Form} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
