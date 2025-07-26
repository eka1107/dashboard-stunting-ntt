import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import ThematicMap from './pages/ThematicMap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Skripsi TA 2024/2025</p>
                <p>D-IV Komputasi Statistik, Politeknik Statistika STIS</p>
                <p>Email: 222112300@stis.ac.id</p>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;


