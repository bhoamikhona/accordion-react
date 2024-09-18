import React, { useState } from "react";
import AccordionItem from "./AccordionItem.jsx";

function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  function handleSelected(id) {
    setSelected(selected !== id ? id : null);
  }

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.title}
          item={item}
          selected={selected === item.id}
          onSelect={handleSelected}
        />
      ))}
    </div>
  );
}

export default Accordion;
