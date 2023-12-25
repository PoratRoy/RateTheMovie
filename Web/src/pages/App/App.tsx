import Providers from "../../context/Providers";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router/Router";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Providers>
                <Router />
            </Providers>
        </BrowserRouter>
    );
};

export default App;
