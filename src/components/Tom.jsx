import React, { useRef } from "react";
import { navData, divData } from "../data";

const Tom = () => {
  const listRef = useRef();
  
  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="box">
      <nav>
        {navData?.map((data) => {
          return (
            <button key={data.id} onClick={() => scrollToIndex(data.id)}>
              {data.name}
            </button>
          );
        })}
      </nav>
      <div>
        <ul ref={listRef}>
          {divData?.map((data) => {
            return (
              <li key={data.id}>
                <img src={data.photo} alt={data.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tom;
