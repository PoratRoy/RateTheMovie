import Providers from "../../context/Providers";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router/Router";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const App = () => {
    return (
        <BrowserRouter>
            <Providers>
                <ReactNotifications />
                <Router />
            </Providers>
        </BrowserRouter>
    );
};

export default App;
