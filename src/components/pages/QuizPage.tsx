import Display  from '../Display/Display';
import quizData  from '../../data/quiz';
import Button from '../Button/Button';

export default function QuizPage()  {
    const quizIndex = 0;
    return (
        <>
            <Display>
                {`Q1. ${quizData[quizIndex].question}`}
            </Display>
            <Button>{quizData[quizIndex].options[0]}</Button>
            <Button>{quizData[quizIndex].options[1]}</Button>
            <Button>{quizData[quizIndex].options[2]}</Button>
            <Button>{quizData[quizIndex].options[3]}</Button>
            <Button>{quizData[quizIndex].options[4]}</Button>
        </>
    )
}
