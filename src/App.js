import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const SelectModel = React.lazy(() => import('./pages/SelectModel'));
const Connect = React.lazy(() => import('./pages/Connect'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const SelectSound = React.lazy(() => import('./pages/SelectSound'));

function App() {
	return (
		<>
			<Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
				<Routes>
					<Route path="/" element={<Navigate replace to="/select-model" />} />
					<Route path="/select-model" element={<SelectModel />} />
					<Route path="/connect" element={<Connect />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/select-sound" element={<SelectSound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
