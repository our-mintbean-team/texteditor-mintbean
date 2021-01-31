import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Scroller";

import TextEditor from "./pages/TextEditor";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          {/*
          <Route path="/home" component={Homepage} />
        */}
          <Route path="/about" component={About} />
          <Route path="/" component={TextEditor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
