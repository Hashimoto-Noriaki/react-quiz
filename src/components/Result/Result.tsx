import styles from './Result.module.css';

export default function Result({maxQuizLen,correctNumLen}) {
    return (
        <div className={styles.result}>
            あなたの正解数は
            <span className={styles.resultHighLight}>
                <p>{`${maxQuizLen}問中、${correctNumLen}問正解`}</p>
            </span>
            でした。
        </div>
    )
}

