import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function TopPage() {
    return (
        <div>
            <h1>QuizApp</h1>
            <Link to={ROUTES.QUIZ}>クイズスタート</Link>
        </div>
    )
}
