import styles from './results-title.module.css';
import React from "react";
import Button from '../../ui/button/button';

type Props = {
    date: Date;
}
const ResultsTitle: React.FC<Props> = ({date}) => {

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className={styles.title}>
            <h1>Events in {humanReadableDate}</h1>
            <Button link='/events'>Show all events</Button>
        </section>
    );
}

export default ResultsTitle;
