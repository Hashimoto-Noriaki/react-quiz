import styles from './Result.module.css';
import Confetti from 'react-confetti'

export default function Result({maxQuizLen,correctNumLen}) {
    return (
        <>
        <div className={styles.result}>
                あなたの正解数は
                <span className={styles.resultHighLight}>
                    <p>{`全${maxQuizLen}問中、${correctNumLen}問`}</p>
                </span>
                でした‼︎
            </div>
        <Confetti gravity={10} wind={1} friction={0.5}/>
        </>
    )
}
