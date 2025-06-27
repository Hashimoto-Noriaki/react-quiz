import { Link,useLocation } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function ResultPage() {
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen
    const correctNumLen = location.state.correctNumLen;
    return (
        <>
            <h1>結果発表</h1>
            <p>あなたの正解数は...</p>
            <p>{`${maxQuizLen}問中、${correctNumLen}問正解です。`}</p>
            <Link to={ROUTES.HOME}>もう一度チャレンジ</Link>
        </>
    )
}
