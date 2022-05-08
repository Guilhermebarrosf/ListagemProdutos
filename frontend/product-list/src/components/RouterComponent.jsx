import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import AddListProductComponent from './AddListProductComponent';
import ListProductComponent from './ListProductComponent';

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/AddListProduct" element={<AddListProductComponent />} />
                    <Route path="/" element={<ListProductComponent />} />

                </Routes>
            </Router>
        </div>)
}
export default AppRouter;