import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage  from './components/pages/HomePage'
import QuizPage from './components/pages/QuizPage'
import ResultPage from './components/pages/ResultPage'
import { ROUTES } from './const'
import './App.css'

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
