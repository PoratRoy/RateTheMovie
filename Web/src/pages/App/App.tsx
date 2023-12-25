import Providers from "../../context/Providers";
import Game from "../Game";
import "./App.css";

function App() {
    return (
        <Providers>
            <Game />
        </Providers>
    );
}

export default App;
