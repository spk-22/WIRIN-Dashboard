import React, { useState, useEffect } from 'react';
import styles from '../styles/FirstColumn.module.css';

interface FirstColumnProps {
    onSidebarClick: (category: string, items: string[]) => void;
    resetTextColor: boolean;
}

const FirstColumn: React.FC<FirstColumnProps> = ({ onSidebarClick, resetTextColor }) => {
    const [activeSidebar, setActiveSidebar] = useState<string | null>(null);

    useEffect(() => {
        if (resetTextColor) {
            setActiveSidebar(null); // Reset active sidebar when resetTextColor is true
        }
    }, [resetTextColor]);

    const handleSidebarClick = (category: string) => {
        setActiveSidebar(category);
        const items = miniSidebarButtons[category] || [];
        onSidebarClick(category, items);
    };

    const miniSidebarButtons: { [key: string]: string[] } = {
        'Battery': ['Voltage and Current', 'Charge Level', 'Battery Health', 'Cell Voltages', 'Charging Status', 'Battery Status'],
        'OBC': ['AC Voltage and Current', 'AC Power', 'Charging Time', 'DC Voltage and Current', 'OBC Status', 'Temperature Data'],
        'AC': ['Temperature', 'Fan Speed', 'AC Status'],
        'Seating and Lights': ['External Lighting', 'Internal Lighting', 'Table Status'],
        'Car Status': ['Car Mode', 'Bywire System', 'TV', 'Car Data Level1', 'Car Data Level2', 'Car Data Level3', 'Car Data Level4', 'Error Statuses'],
        'Doors and Tyres': ['Tyres', 'Side Doors', 'Roof and Boot Doors'],
        'Vehicular Control': ['Low Level Controls', 'PID Master Values', 'PID Controls', 'Control Unit 1', 'Control Unit 2', 'Control Unit 3']
    };

    const getIconSrc = (category: string) => {
        switch (category) {
            case 'Battery':
                return '/icons/battery.svg';
            case 'OBC':
                return '/icons/clock.svg';
            case 'AC':
                return '/icons/fan.svg';
            case 'Seating and Lights':
                return '/icons/seat.svg';
            case 'Car Status':
                return '/icons/steering wheel-small.svg';
            case 'Doors and Tyres':
                return activeSidebar === 'Doors and Tyres' ? '/active door.svg' : '/icons/door.svg';
            case 'Vehicular Control':
                return '/icons/Service.svg';
            default:
                return '';
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.iconsContainer}>
                {Object.keys(miniSidebarButtons).map((key) => (
                    <button
                        key={key}
                        className={`${styles.iconWrapper} ${activeSidebar === key ? styles.active : ''}`}
                        onClick={() => handleSidebarClick(key)}
                    >
                        <div className={styles.icon}>
                            <img src={getIconSrc(key)} alt={`${key} Icon`} />
                        </div>
                        <div className={`${styles.iconText} ${activeSidebar === key ? styles.activeText : styles.defaultTextColor}`}>
                            {key}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FirstColumn;
