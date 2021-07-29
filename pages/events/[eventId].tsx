import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics/event-logistics";
import EventContent from "../../components/event-detail/event-content/event-content";
import Alert from "../../components/ui/alert/alert";

const EventDetailsPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId as string;

    const event = getEventById(eventId);

    if (!event) return (<Alert>No event found</Alert>)

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

export default EventDetailsPage;
