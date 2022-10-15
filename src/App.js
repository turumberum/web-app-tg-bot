import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
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
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
