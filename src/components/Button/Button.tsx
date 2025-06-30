import styles from './Button.module.css';

export default function Button({children,onClick}: {children: React.ReactNode}) {
    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.buttonInner}>{children}</span>
        </button>
    )
}

