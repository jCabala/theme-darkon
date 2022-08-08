//components
import Logo from '../Logo';
//styles
import styles from '../../styles/modules/Header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
      </div>
    </header>
  );
}

