import IEvent from "../../../helpers/interfaces/event";
import React from "react";
import styles from './event-card.module.css';
import Button from "../../ui/button/button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";
import Helpers from "../../../helpers/helpers";
import Image from "next/image";

type Props = {
    event: IEvent;
}

const EventCard: React.FC<Props> = ({event}) => {
    const displayDate = Helpers.getDisplayDate(event.date);
    const displayAddress = Helpers.getDisplayAddress(event.location);

    return (
        <li className={styles.item}>
            <Image src={event.image} alt={event.title} width={250} height={160}/>
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
