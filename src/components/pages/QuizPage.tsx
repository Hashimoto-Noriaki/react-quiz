import Display from '../../Display/Display';
import quizData from '../../data/quiz';

export default function QuizPage () {
    const quizIndex  = 0;
    return (
        <>
            <Display>
                <p>{`Q1.${quizData[quizIndex].question}`}</p>
            </Display>
        </>
    )
}
