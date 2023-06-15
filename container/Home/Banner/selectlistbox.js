import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import useCities from "../../../utils/Hooks/useCities";

// const people = [{ name: "Wade Cooper" }, { name: "Arlene Mccoy" }];

export default function SelectListBox() {
  const [selected, setSelected] = useState("");
    const { cities } = useCities();
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative h-full sm:min-w-[280px] min-w-full">
        <Listbox.Button className="relative w-full cursor-default rounded-[10px] bg-white sm:pl-2 pr-10 text-left h-full">
          <label className="block truncate text-black text-[15px] font-semibold leading-[21px]">
            Select City
          </label>
          <span className="block truncate font-normal text-gray-500 text-[14px] font-Lato">
            {selected?.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center pr-2">
            <HiOutlineChevronDown size={18} />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {cities.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `py-2 px-6 hover:bg-green/10 text-[14px] text-black/80 cursor-pointer ${
                    active ? "bg-green/10 text-black" : "text-black/80"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
