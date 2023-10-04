// It was an Interview task

export const getBanglaDayName = (day) => {
    const banglaDaysName = {
        Saturday: "শনিবার",
        Sunday: "রবিবার",
        Monday: "সোমবার",
        Tuesday: "মঙ্গলবার",
        Wednesday: "বুধবার",
        wednesday: "বুধবার",
        Thursday: "বৃহস্পতিবার",
        Friday: "শুক্রবার",
        Daily: "দৈনিক",
    };

    return banglaDaysName[day];
};

export const getFormattedDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const formattedTime = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
    });
    return {
        day,
        month,
        formattedTime,
    };
};