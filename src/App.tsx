import './App.css';
import Weather from './components/Weather';

function App() {

  return (
    <div style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', background: 'black', fontFamily: 'sans-serif'}}>
      <div style={{position: 'absolute', left: 0, top: 0, color: 'white'}}>
        <Weather />
      </div>
      <div style={{position: 'absolute', right: 0, top: 0, color: 'white'}}>
        TIME
      </div>
    </div>
  )
}

export default App
