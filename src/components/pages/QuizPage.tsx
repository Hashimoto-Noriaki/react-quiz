import Display  from '../Display/Display';
import quizDate  from '../../data/quiz';

export default function QuizPage()  {
    const quizIndex = 0;
    return (
        <>
            <Display>
                {`Q1. ${quizDate[quizIndex].question}`}
            </Display>
        </>
    )
}
