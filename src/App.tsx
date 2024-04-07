import './App.css';
import Greeting from './components/Greeting';
import Time from './components/Time';
import Weather from './components/Weather';

function App() {

  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', background: 'black', fontFamily: 'sans-serif'}}>
      <div style={{position: 'absolute', left: 0, top: 0, color: 'white'}}>
        <Greeting />
      </div>
      <div style={{position: 'absolute', right: 0, top: 0, color: 'white'}}>
        <Time />
      </div>
      <div style={{position: 'absolute', right: 0, top: '13rem', color: 'white'}}>
        <Weather />
      </div>
    </div>
  )
}

export default App
