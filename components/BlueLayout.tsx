import React from 'react';
import styles from '../styles/BlueLayout.module.css';

interface BlueLayoutProps {
    showBackArrow: boolean;
    onBackArrowClick: () => void;
    children: React.ReactNode;
}

const BlueLayout: React.FC<BlueLayoutProps> = ({
    showBackArrow,
    onBackArrowClick,
    children,
}) => {
    return (
        <div className={styles.blueLayout}>
            {showBackArrow && (
                <button className={styles.backArrow} onClick={onBackArrowClick}>
                    <img src="/backarrow.svg" alt="Back" />
                </button>
            )}
            {children}
        </div>
    );
};

export default BlueLayout;
