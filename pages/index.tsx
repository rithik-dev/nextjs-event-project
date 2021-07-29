import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/event/event-list/event-list";

const FeaturedEventsPage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <EventList events={featuredEvents}/>
    )
}

export default FeaturedEventsPage;
