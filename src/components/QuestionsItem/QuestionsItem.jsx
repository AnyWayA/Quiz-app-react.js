import React from 'react';
import styles from './QuestionsItem.module.css'

const QuestionsItem = ({ question, nextQuestion }) => {
    return (
        <>
            <h2 className={styles.title}>
                {question.title}
            </h2>

            <ul>
                {question.options.map(option =>
                    <li
                        className={styles.option}
                        onClick={() => nextQuestion(option)}
                        key={option}
                    >
                        {option}
                    </li>
                )}
            </ul>
        </>
    );
};

export default QuestionsItem;
