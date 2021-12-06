import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);