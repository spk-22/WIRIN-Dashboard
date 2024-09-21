import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src="/boxes.svg" alt="boxes" className={`${styles.icon} ${styles.boxes}`} />
            <img src="/call.svg" alt="call" className={`${styles.icon} ${styles.call}`} />
            <img src="/music.svg" alt="music" className={`${styles.icon} ${styles.music}`} />
            <img src="/car.svg" alt="car" className={`${styles.icon} ${styles.car}`} />
            <img src="/arrow.svg" alt="arrow" className={`${styles.icon} ${styles.arrow}`} />
            <img src="/ac.svg" alt="ac" className={`${styles.icon} ${styles.ac}`} />
            <img src="/settings.svg" alt="settings" className={`${styles.icon} ${styles.settings}`} />
        </div>
    );
};

export default Footer;
