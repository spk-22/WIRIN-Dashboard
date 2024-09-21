import React from 'react';
import styles from '../styles/Side.module.css'; // Ensure this path is correct

interface SideComponentProps {
    title1: string;
    title2: string;
    status1: string;  // Status value for the first box
    status2: string;  // Status value for the second box
    top1: number;
    left1: number;
    top2: number;
    left2: number;
    svgSrc1: string;
    svgSrc2: string;
}

const SideComponent: React.FC<SideComponentProps> = ({
    title1,
    title2,
    status1,  // This will be displayed as "Open/Close/Opening/Closing" for the first box
    status2,  // This will be displayed as "Open/Close/Opening/Closing" for the second box
    top1,
    left1,
    top2,
    left2,
    svgSrc1,
    svgSrc2
}) => {
    return (
        <div className={styles.sideContainer}>
            <div
                className={styles.box}
                style={{ top: `${top1}px`, left: `${left1}px` }}
            >
                <div className={styles.text}>{title1}</div>
                <div className={styles.openText}>Open</div>
                <div className={styles.statusLabel}>Status</div>
                <div className={styles.statusValue}>{status1}</div>  {/* This will show the status for the first box */}
            </div>
            <div
                className={styles.box}
                style={{ top: `${top2}px`, left: `${left2}px` }}
            >
                <div className={styles.text}>{title2}</div>
                <div className={styles.openText}>Open</div>
                <div className={styles.statusLabel}>Status</div>
                <div className={styles.statusValue}>{status2}</div>  {/* This will show the status for the second box */}
            </div>
            <div className={styles.svgContainer}>
                <img src={svgSrc1} alt="SVG 1" className={styles.sideSvg1} />
                <img src={svgSrc2} alt="SVG 2" className={`${styles.sideSvg2} ${styles.overlay}`} />
                <div className={styles.horizontalLineLeft}></div>
                <div className={styles.verticalLineLeft}></div>
                <div className={styles.horizontalLineRight}></div>
                <div className={styles.verticalLineRight}></div>
            </div>
        </div>
    );
};

export default SideComponent;
