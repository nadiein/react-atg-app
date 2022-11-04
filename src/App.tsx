import React from 'react';
import ThemeProvider from "react-bootstrap/ThemeProvider"
import BasePage from "./pages/base/BasePage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <BasePage />
        </ThemeProvider>
    );
}

export default App;
