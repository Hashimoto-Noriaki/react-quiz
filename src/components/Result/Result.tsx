import styles from './Result.module.css';

export default function Result({maxQuizLen, correctNumLen}) {
    return (
        <div className={styles.result}>
            <p>あなたの正解数は</p>
            <span className={styles.resultHightLight}>
                <p>{`${maxQuizLen}問中、${correctNumLen}問正解です。`}</p>
            </span>
        </div>
    )
}

