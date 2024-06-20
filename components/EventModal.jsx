import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelColors = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "pink",
  "yellow",
  "orange",
];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelColors.find((lbl) => lbl === selectedEvent.label)
      : labelColors[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-gray-200 w-1/2 rounded-lg shadow-2xl">
        <header className="bg-blue-200 rounded px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-blue-400">
            edit_calendar
          </span>

          <div>
            {selectedEvent && (
              <abbr title="Delete Event">
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined w-9 text-red-500 cursor-pointer"
                >
                  delete_forever
                </span>
              </abbr>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3 mx-auto">
          <div className="grid grid-cols-1 gap-y-7">
            <div className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-2">
                schedule
              </span>
              <p className="text-lg font-medium text-orange-500">
                {daySelected.format("dddd, MMMM DD")}
              </p>
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-2">
                segment
              </span>
              <input
                type="text"
                name="title"
                placeholder="Event title..."
                value={title}
                required
                className="pt-2 pb-2 w-full text-sm text-blue-400 rounded border border-blue-200 focus:outline-none focus:ring-0 focus:border-yellow-400"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 mr-2">
                history_edu
              </span>
              <textarea
                name="description"
                placeholder="Event description..."
                value={description}
                required
                rows="4"
                className="pt-2 pb-2 w-full text-sm text-gray-600 rounded border border-gray-300 focus:outline-none focus:ring-0 focus:border-yellow-400"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined text-gray-400 mr-2">
                bookmark_border
              </span>
              <div className="flex gap-x-2">
                {labelColors.map((lblClass, i) => {
                  const dynamicClassName = `bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`;

                  return (
                    <span
                      key={i}
                      onClick={() => setSelectedLabel(lblClass)}
                      className={dynamicClassName}
                    >
                      {selectedLabel === lblClass && (
                        <span className="material-icons-outlined text-white text-sm">
                          check
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-400 hover:bg-blue-500 px-5 py-1 mr-2 mb-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
