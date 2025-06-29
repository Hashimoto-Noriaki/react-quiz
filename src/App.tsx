import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ROUTES } from './const'
import TopPage from './components/pages/TopPage'
import QuizPage from './components/pages/QuizPage'
import ResultPage from './components/pages/ResultPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<TopPage/>}/>
        <Route path={ROUTES.QUIZ} element={<QuizPage/>}/>
        <Route path={ROUTES.RESULT} element={<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
