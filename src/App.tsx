import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ROUTES } from './const';
import HomePage from './components/pages/HomePage';
import QuizPage from './components/pages/QuizPage';
import ResultPage from './components/pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage/>}/>
        <Route path={ROUTES.QUIZ} element={<QuizPage/>}/>
        <Route path={ROUTES.RESULT} element={<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
