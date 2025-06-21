import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const';
import Display  from '../Display/Display';
import quizData  from '../../data/quiz';
import Button from '../Button/Button';

export default function QuizPage()  {
    const [quizIndex,setQuizIndex] = useState(0);
    const [answerLogs,setAnswerLogs] = useState([]);//[]は空の配列。これは答えを保存しておく
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;

    const handleClick = (clickedIndex) => {
        //ここは関数型更新
        if(clickedIndex === quizData[quizIndex].answerIndex){
            setAnswerLogs(prev => [...prev, true]);//...はスプレッド構文 より簡単な書き方で配列に要素を追加して保存
        } else {
            setAnswerLogs((prev) => [...prev,false]);
        }
        setQuizIndex((prev) => prev + 1);//次の問題に進むための処理 現在のquizIndexに1足して保存する
    }

    useEffect(()=> {
        if(answerLogs.length === MAX_QUIZ_LEN){
            const correctNum = answerLogs.filter((answer)=> {//filterは配列に対して使えるメソッドで、配列の中から条件に合うものだけを取り出して新しい配列を作る
                return answer === true
            })
            navigation(ROUTES.RESULT, {
                state: {
                    maxQuizLen: MAX_QUIZ_LEN,
                    correctNum: correctNum.length
                }
            });
        }
    },[answerLogs])

    return (
        <>
            {quizData[quizIndex] && <Display>{`Q1. ${quizData[quizIndex].question}`}</Display>}
            {quizData[quizIndex] && quizData[quizIndex].options.map((option,index)=> {
                return <Button key={`option-${index}`}onClick={()=>handleClick(index)}>{option}</Button>
            })
            }
        </>
    )
}
