// noinspection JSUnusedGlobalSymbols

import EventSummary from "../../components/event-detail/event-summary/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics/event-logistics";
import EventContent from "../../components/event-detail/event-content/event-content";
import Alert from "../../components/ui/alert/alert";
import {EventsRepository} from "../../helpers/repository/events-repository";
import {GetStaticPaths, GetStaticProps} from "next";
import IEvent from "../../helpers/interfaces/event";
import React from "react";

type Props = {
    event: IEvent | undefined;
}

const EventDetailsPage: React.FC<Props> = ({event}) => {
    if (!event) return (<Alert>Loading...</Alert>)

    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const {eventId} = params!;
    const event = await EventsRepository.getEventById(eventId as string);
    return {props: {event}, revalidate: 30}
}

export const getStaticPaths: GetStaticPaths = async () => {
    const events = await EventsRepository.getFeaturedEvents();
    return {
        paths: events.map(event => ({params: {eventId: event.id}})),
        fallback: true,
    };
}

export default EventDetailsPage;
