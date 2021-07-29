import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/event/event-list/event-list";
import EventSearch from "../../components/event/event-search/event-search";
import {useRouter} from "next/router";

const AllEventsPage = () => {
    const allEvents = getAllEvents();
    const router = useRouter();

    const findEventsHandler = async (year: string, month: string) => {
        await router.push(`/events/${year}/${month}`);
    }

    return (
        <>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList events={allEvents}/>
        </>
    )
}

export default AllEventsPage;
