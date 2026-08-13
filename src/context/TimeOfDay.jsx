export function getTimeofDay(hour) {
    if (hour >= 5 && hour < 11) return "morning";
    if (hour >= 11 && hour < 16) return "afternoon";
    if (hour >= 16 && hour < 19) return "evening";
    if (hour >= 19 || hour < 5) return "night";
}

getTimeofDay(4)