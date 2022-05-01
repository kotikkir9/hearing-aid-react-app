import { Routes, Route, Navigate } from 'react-router-dom';
import SelectModel from './pages/SelectModel';
import Connect from './pages/Connect';
import Dashboard from './pages/Dashboard';
import SelectSound from './pages/SelectSound';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate replace to="/select-model" />} />
				<Route path="/select-model" element={<SelectModel />} />
				<Route path="/connect" element={<Connect />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/select-sound" element={<SelectSound />} />
			</Routes>
		</>
	);
}

export default App;
