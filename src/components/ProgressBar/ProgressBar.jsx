import React from 'react';
import styles from './ProgressBar.module.css'

const ProgressBar = ({progress}) => {
    return (
        <div className={styles.progress}>
                <span
                    className={styles.progressDone}
                    style={{ width: `${progress + 5}%` }}
                />
        </div>
    );
};

export default ProgressBar;
