import React from 'react';
import ThemeProvider from "react-bootstrap/ThemeProvider"
import BasePage from "./pages/base/BasePage";


function App() {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <BasePage />
        </ThemeProvider>
    );
}

export default App;
