import { Link,useLocation } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function Resultpage() {
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen
    const correctNumLen = location.state.correctNumLen
    return (
        <>
            <h1>結果発表</h1>
            <p>正解数は....</p>
            <p>{`正解数は${maxQuizLen}問中、${correctNumLen}問正解です‼︎`}</p>
            <Link path={ROUTES.QUIZ}>もう一度チャレンジ</Link>
        </>
    )
}
