import { getTimeofDay } from "../context/TimeOfDay"

export default function Landing() {
    const timeOfDay = getTimeofDay(new Date().getHours())

    return (
    <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display font-bold italic text-ink text-5xl text-center">Welcome to Dephie's café!</h1>
        <p className="font-mono text-ink text-xl text-muted mt-4 text-center">What can I get you on this lovely {timeOfDay}?</p>
    </div>
    )
}