import React, { ReactElement, ReactNode, useState } from "react";
import { Alert } from "../Alert";

interface Props {
  items: string[];
  heading: string;
  children: ReactNode;
  onSelectItem: (item: string) => void;
}

export const ListGroup = ({
  items,
  heading,
  onSelectItem,
  children,
}: Props) => {
  let message = items.length === 0 && <p>Message: No items found</p>;
  const [selectedIndex, setIndex] = useState(-1);
  return (
    <>
      <h1> {heading}</h1>
      {message ? (
        message
      ) : items.length != 0 ? (
        <>
          <ul className="list-group">
            {items.map((city, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={city}
                onClick={() => {
                  setIndex(index);
                  onSelectItem(city);
                }}
              >
                {city}
              </li>
            ))}
          </ul>

          {selectedIndex  >= 0 && children}
        </>
      ) : (
        <p>No items, sorry</p>
      )}
    </>
  );
};
