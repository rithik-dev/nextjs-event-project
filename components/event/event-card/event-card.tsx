import IEvent from "../../../lib/interfaces/event";
import React from "react";
import styles from './event-card.module.css';
import Button from "../../ui/button/button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

type Props = {
    event: IEvent;
}

const EventCard: React.FC<Props> = ({event}) => {

    const displayDate = new Date(event.date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const displayAddress = event.location.replace(', ', '\n');

    return (
        <li className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={event.image} alt={event.title}/>
            <div className={styles.content}>
                <div>
                    <h2>{event.title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{displayDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{displayAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={`/events/${event.id}`}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventCard;
