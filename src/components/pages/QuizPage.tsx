import Display  from '../Display/Display';
import quizData  from '../../data/quiz';
import Button from '../Button/Button';

export default function QuizPage()  {
    const quizIndex = 0;
    const handleClick = (clickedIndex) => {
        console.log("clickedIndex", clickedIndex);
    }
    return (
        <>
            <Display>
                {`Q1. ${quizData[quizIndex].question}`}
            </Display>
            {quizData[quizIndex].options.map((option,index)=> {
                return <Button key={`option-${index}`}onClick={()=>handleClick(index)}>{option}</Button>
            })
            }
        </>
    )
}
