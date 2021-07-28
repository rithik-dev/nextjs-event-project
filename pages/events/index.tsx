import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/event/event-list/event-list";

const AllEventsPage = () => {
    const allEvents = getAllEvents();

    return (
        <div>
            <EventList events={allEvents}/>
        </div>
    )
}

export default AllEventsPage;
