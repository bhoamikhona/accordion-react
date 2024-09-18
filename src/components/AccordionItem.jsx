import React from "react";

function AccordionItem({ item: { title, content, id }, onSelect, selected }) {
  return (
    <div className="accordion-item">
      <div className="accordion-title-container" onClick={() => onSelect(id)}>
        <h2 className="accordion-title">{title}</h2>
        <button className="accordion-button">
          {selected ? (
            <img
              className="button-icon"
              src="./assets/images/icon-minus.svg"
              alt="minus icon"
            />
          ) : (
            <img
              className="button-icon"
              src="./assets/images/icon-plus.svg"
              alt="plus icon"
            />
          )}
        </button>
      </div>

      <div
        className={`accordion-content-container ${selected ? "expanded" : ""}`}
      >
        <p className="accordion-content">{content}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
