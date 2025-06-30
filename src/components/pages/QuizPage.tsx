import Display from '../Display/Display';
import quizData from '../../data/quiz';
import Button from '../Button/Button';

export default function QuizPage () {
    const quizIndex  = 0;
    const handleClick = (clickedIndex) => {
        console.log("テスト",clickedIndex)
    }
    return (
        <>
            <Display>
                <p>{`Q1.${quizData[quizIndex].question}`}</p>
            </Display>
            {quizData[quizIndex].options.map((option,index)=> {
                return <Button key={`option-${index}`} onClick={()=> handleClick(index)}>{option}</Button>
            })}
        </>
    )
}
