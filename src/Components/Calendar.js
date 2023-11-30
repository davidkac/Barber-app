import React, { useEffect, useState } from "react";
import { Scheduler } from "@aldabil/react-scheduler";

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      event_id: 1,
      title: 'Sisanje',
      start: new Date("2023/12/1 12:30"),
      end: new Date("2023/12/1 01:00"),
      bookedBy: 'Marko', // Dodajte informaciju o korisniku koji je zakazao termin
    },
    {
      event_id: 2,
      title: "Event 1",
      start: new Date("2021/5/2 09:30"),
      end: new Date("2021/5/2 10:30"),
      bookedBy: 'N/A', // Možete postaviti na N/A ili bilo šta što označava da nije zakazano od strane korisnika
    },
    {
      event_id: 3,
      title: "Event 2",
      start: new Date("2021/5/4 10:00"),
      end: new Date("2021/5/4 11:00"),
      bookedBy: 'N/A', // Isto kao i prethodni događaj
    },
  ]);

  const addEvent = () => {
    const newEvent = {
      event_id: events.length + 1,
      title: `Event ${events.length + 1}`,
      start: new Date(),
      end: new Date(),
      bookedBy: 'New User', // Postavite ime korisnika koji je zakazao termin
    };

    setEvents([...events, newEvent]);
  };

  useEffect(() => {
    addEvent();
  }, []);

  return (
    <div>
      <Scheduler
        view="month"
        events={events}
        onEventClick={(event) => {
          alert(`Zakazao: ${event.bookedBy}`);
        }}
      />
    </div>
  );
};

export default Calendar;
