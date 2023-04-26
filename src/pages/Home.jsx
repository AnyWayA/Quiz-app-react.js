import { useState } from 'react';
import styles from './Home.module.css'

import QuestionsItem from '../components/QuestionsItem/QuestionsItem';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import FinalWindow from '../components/FinalWindow/FinalWindow';

function Home() {
    const questions = [
        {
            title: 'React - это ... ?',
            options: ['Фреймворк', 'Библиотека', 'Приложение'],
            answer: 1
        },
        {
            title: 'Чистая функция ... ?',
            options: ['Не изменяет данные', 'Не имеет props', 'Не имеет выхода'],
            answer: 0
        },
        {
            title: 'Это приложение ... ?',
            options: ['Quiz', 'Todo', 'Counter'],
            answer: 0
        },
        {
            title: 'Props Это ... ?',
            options: ['Выход функции', 'Константы функции', 'Параметры на вход функции'],
            answer: 2
        }
    ];

    const [step, setStep] = useState(0);

    const question = questions[step];
    const numberOfQuestions = questions.length;

    let progress = Math.round(((step) / numberOfQuestions) * 100)

    const [answers, setAnswers] = useState(0);

    function nextQuestion(option) {
        setStep(step + 1)

        if (+question.options.indexOf(option) === question.answer) {
            setAnswers(answers + 1)
            // console.log('correct!')
        }
    }


    return (
        <div className={styles.layout}>
            <div className={styles.form}>
                {(step !== numberOfQuestions) ?
                    <div>
                        <ProgressBar progress={progress} />
                        <QuestionsItem question={question} nextQuestion={nextQuestion} />
                        <p>{step + 1} из {numberOfQuestions}</p>
                    </div>
                    :
                    <FinalWindow answers={answers} numberOfQuestions={numberOfQuestions} />
                }
            </div>
        </div>
    );
}

export default Home;
