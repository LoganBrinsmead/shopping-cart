import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import App from "./App"

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch