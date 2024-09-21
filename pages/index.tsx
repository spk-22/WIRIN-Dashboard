
import React, { useState } from 'react';
import FirstColumn from '../components/FirstColumn';
import Footer from '../components/Footer';
import SecondColumn from '../components/SecondColumn';
import BlueLayout from '../components/BlueLayout';
import TyresComponent from '../components/TyresComponent';
import SideComponent from '../components/SideComponent';
import RoofBootComponent from '../components/RoofBootComponent';
import styles from '../styles/Tyres.module.css';

const Home: React.FC = () => {
    const [activeSidebar, setActiveSidebar] = useState<string | null>(null);
    const [items, setItems] = useState<string[]>([]);
    const [showSecondColumn, setShowSecondColumn] = useState<boolean>(false);
    const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
    const [showTyres, setShowTyres] = useState<boolean>(false);
    const [showSideComponents, setShowSideComponents] = useState<boolean>(false);
    const [showRoofBoot, setShowRoofBoot] = useState<boolean>(false);
    const [resetTextColor, setResetTextColor] = useState<boolean>(false); // Track text color reset

    const handleSidebarClick = (category: string, items: string[]) => {
        setActiveSidebar(category);
        setItems(items);
        setShowSecondColumn(true);
        setShowTyres(false);
        setShowSideComponents(false);
        setShowRoofBoot(false);
        setShowBackArrow(false);
        setResetTextColor(false); // Ensure resetTextColor is false when clicking a sidebar item
    };

    const handleItemClick = (item: string) => {
        setActiveSidebar(item);
        setShowBackArrow(true);
        setShowTyres(item === 'Tyres');
        setShowSideComponents(item === 'Side Doors');
        setShowRoofBoot(item === 'Roof and Boot Doors');
    };

    const handleBackArrowClick = () => {
        setActiveSidebar(null);
        setItems([]);
        setShowSecondColumn(false);
        setShowBackArrow(false);
        setShowTyres(false);
        setShowSideComponents(false);
        setShowRoofBoot(false);
        setResetTextColor(true); // Trigger text color reset
    };

    return (
        <BlueLayout showBackArrow={showBackArrow} onBackArrowClick={handleBackArrowClick}>
            <div className={styles.layoutContainer}>
                <FirstColumn onSidebarClick={handleSidebarClick} resetTextColor={resetTextColor} />
                {showSecondColumn && activeSidebar && (
                    <SecondColumn items={items} activeSidebar={activeSidebar} onItemClick={handleItemClick} />
                )}
                {showTyres && (
                    <>
                        <img
                            src="/tyres car.svg"
                            alt="Tyre Icon"
                            className={styles.tyresDiagram}
                        />
                        <TyresComponent
                            title="Front Right Wheel"
                            top={150}
                            left={2200}
                            boxNumber={1}
                        />
                        <TyresComponent
                            title="Back Left Wheel"
                            top={1450}
                            left={3900}
                            boxNumber={4}

                        />
                        <TyresComponent
                            title="Front Left Wheel"
                            top={1400}
                            left={2250}
                            boxNumber={2}
                        />
                        <TyresComponent
                            title="Back Right Wheel"
                            top={150}
                            left={4050}
                            boxNumber={3}
                        />
                    </>
                )}
                {showSideComponents && (
                    <SideComponent
                        title1="Left Door"
                        title2="Right Door"
                        status1="(Open/Close/Opening/Closing)"
                        status2="(Open/Close/Opening/Closing)"
                        top1={-700}
                        left1={500}
                        top2={400}
                        left2={-850}
                        svgSrc1="/correct car.svg"
                        svgSrc2="/platform.svg"
                    />
                )}
                {showRoofBoot && (
                    <RoofBootComponent
                        title1="Roof Door"
                        title2="Boot Door"
                        status1="(Open/Close/Opening/Closing)"
                        status2="(Open/Close/Opening/Closing)"
                        top1={-700}
                        left1={500}
                        top2={400}
                        left2={-850}
                        svgSrc1="/correct car.svg"
                        svgSrc2="/platform.svg"
                    />
                )}
            </div>
            <Footer />
        </BlueLayout>
    );
};

export default Home;