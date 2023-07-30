import styles from './Header.module.css';

import todoLogo from '../../assets/rocket-logo.svg'

export function Header() {

    return (
        <div className={styles.header}>
            <img src={todoLogo} alt="Logotipo do todo" className={styles.logo} />
            <h1 className={styles.title}>to<span>do</span></h1>
        </div>
    )
}