const events = [
    {
        title: "AI Workshop",
        speaker: "Dr. Smith",
        time: "10:00",
        category: "Workshop",
        image: "https://tse2.mm.bing.net/th/id/OIP.HB5z8NkFEmup5GclLq6Q_QHaE7?pid=Api&P=0&h=180"
    },
    {
        title: "Web Developer",
        speaker: "Ms. Johnson",
        time: "09:00",
        category: "Keynote",
        image: "https://tse2.mm.bing.net/th/id/OIP.PZZKsGUbd40Me9yACy0F2QHaEM?pid=Api&P=0&h=180"
    },
    {
        title: "Full Stack",
        speaker: "Industry Experts",
        time: "14:00",
        category: "Panel",
        image: "https://tse3.mm.bing.net/th/id/OIP.cIObCSLIZ7CduIINnd_TYgHaG2?pid=Api&P=0&h=180"
    },
    {
        title: "Web Workshop",
        speaker: "Mr. Lee",
        time: "15:00",
        category: "Workshop",
        image: "https://tse4.mm.bing.net/th/id/OIP._WQZHXv2kfi50aTAT-FPCAHaHa?pid=Api&P=0&h=180"
    }
];
const container = document.getElementById("eventContainer");
function renderEvents(eventList) {
    container.innerHTML = ""; 

    eventList.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card", event.category);

        card.innerHTML = `
            <img src="${event.image}">
            <h3>${event.title}</h3>
            <p><b>Speaker:</b> ${event.speaker}</p>
            <p><b>Time:</b> ${event.time}</p>
            <p><b>Category:</b> ${event.category}</p>
        `;

        container.appendChild(card);
    });
}

renderEvents(events);
function filterCategory(category) {
    if (category === "All") {
        renderEvents(events);
    } else {
        const filtered = events.filter(event => event.category === category);
        renderEvents(filtered);
    }
}
function filterTime(timePeriod) {
    const filtered = events.filter(event => {
        const hour = parseInt(event.time.split(":")[0]);

        if (timePeriod === "Morning") {
            return hour < 12;
        } else {
            return hour >= 12;
        }
    });

    renderEvents(filtered);
}
