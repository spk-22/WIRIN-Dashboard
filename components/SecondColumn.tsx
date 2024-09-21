import React from 'react';
import styles from '../styles/SecondColumn.module.css';

interface SecondColumnProps {
    items: string[];
    activeSidebar: string;
    onItemClick: (item: string) => void; // Callback when an item is clicked
}

const SecondColumn: React.FC<SecondColumnProps> = ({ items, activeSidebar, onItemClick }) => {
    return (
        <div className={styles.secondColumn}>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li
                        key={item}
                        className={`${styles.listItem} ${activeSidebar === item ? styles.active : ''}`}
                        onClick={() => onItemClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecondColumn;
