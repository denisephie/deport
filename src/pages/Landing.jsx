import { getTimeofDay } from "../context/TimeOfDay"

export default function Landing() {
    const timeOfDay = getTimeofDay(new Date().getHours())

    return (
    <div>
        <h1 className="text-ink">Welcome to Dephie's café!</h1>
        <p className="text-ink">What can I get you on this lovely {timeOfDay}?</p>
    </div>
    )
}