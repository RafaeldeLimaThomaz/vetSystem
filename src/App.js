import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home/Home';
import Exams from './pages/Exams/Exams';
import Clients from './pages/Clients/Clients';
import Finances from './pages/Finances/Finances';
import Vets from './pages/Vets/Vets';
import Logout from './pages/Logout/Logout';
import NewExam from './pages/NewExam/NewExam';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/exams' element={<Exams />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/finances' element={<Finances />} />
                    <Route path='/vets' element={<Vets />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/newExam' element={<NewExam />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
