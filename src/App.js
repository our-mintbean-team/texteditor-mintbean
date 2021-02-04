import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/Scroller";
import TextEditor from "./pages/TextEditor";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/editor" component={TextEditor} />
          <Route path="/about" component={About} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
