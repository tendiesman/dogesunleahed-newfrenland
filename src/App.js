import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://bdhjwyivindi2bhlnotszwj5i3vmgfs2iacouud54s5l5bdn54.arweave.net/CM-6bYRVDRo0E62unLNk9RurDFlpABOpQfeS6voRt78?ext=png'} alt="description of image" />
        <h1>Hi, I will be your companion on this trip</h1>
        <p><Typical
            wrapper='b'
            steps={["Are you ready to begin?", 100]}
          
            />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          To Newfrenland
        </a>
      </header>
    </div>
  );
}

export default App;
