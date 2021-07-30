import React from "react";
import IEvent from "../../../helpers/interfaces/event";
import EventCard from "../event-card/event-card";
import styles from './event-list.module.css';

type Props = {
    events: Array<IEvent>;
}

const EventList: React.FC<Props> = ({events}) => {
    return (
        <ul className={styles.list}>
            {events.map(event => (
                <EventCard key={event.id} event={event}/>
            ))}
        </ul>
    )
}

export default EventList;
