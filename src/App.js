import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import './App.css';

function App() {

  const {onToggleButton} = useTelegram
  const tg = window.Telegram.WebApp
  
  useEffect( () => {
    tg.ready()
    // eslint-disable-next-line
  }, [])


  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
