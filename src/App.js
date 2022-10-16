import { useEffect } from "react";
// import { useTelegram } from './hooks/useTelegram';
import Header from "./components/Header/Header";
// import Button from './components/Button/Button';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    // const {onToggleButton} = useTelegram
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={"/form"} element={<Form />} />
            </Routes>

            {/* <Button onClick={onToggleButton}>Toggle</Button> */}
        </div>
    );
}

export default App;
