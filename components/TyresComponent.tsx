import React from 'react';
import styles from '../styles/Tyres.module.css'; // Adjust the path if needed

interface TyresComponentProps {
    title: string;
    top: number;
    left: number;
    svgSrc?: string; // Optional prop for SVG source
    boxNumber: number; // Used to determine which lines to show
}

const TyresComponent: React.FC<TyresComponentProps> = ({ title, top, left, svgSrc, boxNumber }) => {
    // Determine class names based on boxNumber
    const horizontalLineClass = `horizontalLineBox${boxNumber}`;
    const verticalLineClass = `verticalLineBox${boxNumber}`;

    return (
        <div className={styles.tyresBox} style={{ top: `${top}px`, left: `${left}px` }}>
            {svgSrc && (
                <img src={svgSrc} alt="Tyre Icon" className={styles.tyreSvg} />
            )}
            <div className={styles.text}>{title}</div>
            <div className={styles.pressure1}>Tyre Pressure</div>
            <div className={styles.pressure2}>(0 to 50 psi)</div>
            <div className={styles.pressure3}>45 psi</div>
            {/* Container for lines */}
            <div className={styles.linesWrapper}>
                {/* Horizontal lines */}
                <div className={`${styles.line} ${styles[horizontalLineClass]}`} />
                {/* Vertical lines */}
                <div className={`${styles.line} ${styles[verticalLineClass]}`} />
            </div>
        </div>
    );
};

export default TyresComponent;
