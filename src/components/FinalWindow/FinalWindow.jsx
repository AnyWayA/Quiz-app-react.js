import React from 'react';
import styles from './FinalWindow.module.css'
import { GiPartyPopper } from "react-icons/gi";

const FinalWindow = ({ answers, numberOfQuestions }) => {
    return (
        <div className={styles.final}>
            <GiPartyPopper className={styles.icon} />

            <p>
                {answers === numberOfQuestions ? 'Ого'
                : answers !== 0 ? 'Ура'
                : 'Упс'}, у Вас {answers} из {numberOfQuestions} правильных ответов</p>

            <a className={styles.button} href="/"><span>Попробовать еще раз</span></a>
        </div>
    );
};

export default FinalWindow;
