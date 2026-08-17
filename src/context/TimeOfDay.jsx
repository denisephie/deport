import { createContext, useContext, useEffect, useState } from "react"
/* useState manages local data of a component and triggers re-renders when it changes 
useEffect handles side effects for actions outside the normal component rendering flow, like data fetching/timer setup */
const TimeOfDayContext = createContext(null) /* default value only used when no wrapper */

export function getTimeofDay(hour) { /* export so oth modules can import it */
    if (hour >= 5 && hour < 11) return "morning";
    if (hour >= 11 && hour < 16) return "afternoon";
    if (hour >= 16 && hour < 19) return "evening";
    if (hour >= 19 || hour < 5) return "night";
}

/* define component TimeOfDayProvider */
/* destructure using { children } 
unpack the key of properties in children
for it to be called by its own name */

export function TimeOfDayProvider({ children }) {
    const [TimeOfDay, setTimeOfDay] = useState(() => getTimeofDay(new Date().getHours())) /* destructuring */ 

    useEffect(() => { /* where the side effects go */
        /* new Date() makes Date object for right now */
        document.documentElement.setAttribute("data-time", TimeOfDay) /* up to Element -> html, setAttribute adds data-time = night to it */
    }, [TimeOfDay]) /* dependency array, run once every time timeOfDay changes */

    return (
        <TimeOfDayContext.Provider value={TimeOfDay}>
            { children }
        </TimeOfDayContext.Provider>
    )
}
/* use .Provider, whatever we pass as value becomes available to everything nested inside */

export function useTimeOfDay() {
    return useContext(TimeOfDayContext)
}