import './App.css';
import Header from './components/Header'
import ActionBar from './components/ActionBar'
import Toolbar from './components/Toolbar'
import Editor from './components/Editor'
import Game from './components/Game'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <ActionBar />

        <div className="row">
          <Toolbar />
          <Editor />
        </div>

        <Game />
      </div>
    </div>
  );
}

export default App;
