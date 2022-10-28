import React from 'react';
import ReactDOM from 'react-dom/client';
import TripsList from './components/TripsList/TripsList';

import 'normalize.css';
import './style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TripsList />);
