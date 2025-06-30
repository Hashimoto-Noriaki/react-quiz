import styles from './display.module.css';

export default function Display({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.display}>
            {children}
        </div>
    )
}
