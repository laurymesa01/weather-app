import { useRef, useEffect } from 'react'

const DaysDropdown = ({days, selectedDate, setSelectedDate, setIsDropdownOpen, triggerRef}) => {

    const menuRef = useRef(null);
    const initialDate = useRef(selectedDate);

    useEffect(() => {
        const items = Array.from(menuRef.current?.querySelectorAll('[role="menuitem"]') || []);
        const selectedIndex = days.findIndex(d => d.date === initialDate.current);
        (items[selectedIndex] || items[0])?.focus();
    }, [days]);

    const handleKeyDown = (e) => {
        const items = Array.from(menuRef.current?.querySelectorAll('[role="menuitem"]') || []);
        const currentIndex = items.indexOf(document.activeElement);

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                items[(currentIndex + 1) % items.length]?.focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                items[(currentIndex - 1 + items.length) % items.length]?.focus();
                break;
            case 'Home':
                e.preventDefault();
                items[0]?.focus();
                break;
            case 'End':
                e.preventDefault();
                items[items.length - 1]?.focus();
                break;
            case 'Escape':
                e.preventDefault();
                setIsDropdownOpen(false);
                triggerRef?.current?.focus();
                break;
            case 'Tab':
                setIsDropdownOpen(false);
                break;
            default:
                break;
        }
    };

    const handleSelectedDate = (date) => {
        setSelectedDate(date);
        setIsDropdownOpen(false);
        triggerRef?.current?.focus();
    };

  return (
    <div id="days-dropdown" className="z-10 w-44 absolute top-full right-0 mt-2 animate-dropdown-open origin-top" onKeyDown={handleKeyDown}>
        <div className="dropdown-panel" aria-labelledby="days-dropdown-trigger">
          <ul ref={menuRef} className="flex flex-col gap-2" role="menu" aria-label="Select day">
            {days.map((day) => (
                <li key={day.date} role="none" className="rounded-md p-1.5 hover:bg-neutral-700 hover:border hover:border-neutral-600 focus-within:bg-neutral-700 focus-within:border focus-within:border-neutral-600">
                    <button
                        role="menuitem"
                        aria-current={day.date === selectedDate ? "true" : undefined}
                        className="text-preset-7 text-neutral-0 w-full text-start cursor-pointer focus:outline-none"
                        onClick={() => handleSelectedDate(day.date)}>
                            {day.label}
                    </button>
                </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default DaysDropdown
