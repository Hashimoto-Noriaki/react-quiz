import { useState } from 'react';
import Display  from '../Display/Display';
import quizData  from '../../data/quiz';
import Button from '../Button/Button';

export default function QuizPage()  {
    const [quizIndex,setQuizIndex] = useState(0);
    const [answerLogs,setAnswerLogs] = useState([]);//[]は空の配列。これは答えを保存しておく
    const handleClick = (clickedIndex) => {
        //ここは関数型更新
        if(clickedIndex === quizData[quizIndex].answerIndex){
            setAnswerLogs([...answerLogs((prev) => [...prev,true])]);//...はスプレッド構文 より簡単な書き方で配列に要素を追加して保存
        } else {
            setAnswerLogs((prev) => [...prev,false]);
        }
        setQuizIndex((prev) => prev + 1);//次の問題に進むための処理 現在のquizIndexに1足して保存する
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
