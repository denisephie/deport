import { useEffect } from "react"

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
    useEffect(() => { /* where the side effects go */
        const bucket = getTimeofDay(new Date().getHours())
        /* new Date() makes Date object for right now */
        document.documentElement.setAttribute("data-time", bucket) /* up to Element -> html, setAttribute adds data-time = night to it */
    }, []) /* dependency array, run once after the first (NOT EVERY -> infinite loop) render */

    return children
}