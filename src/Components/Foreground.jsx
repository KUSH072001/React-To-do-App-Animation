import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref=useRef()
  const data = [
    {
      desc: " new dataLorem ipsum dolor Lorem ipsum dolor sit. sit amet.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Downlod Now",
        tagColor: "green",
      },
    },
    {
      desc: " new dataLorem ipsum dolor Lorem ipsum dolor sit. sit amet.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Downlod Now",
        tagColor: "blue",
      },
    },
    {
      desc: " new dataLorem ipsum dolor Lorem ipsum dolor sit. sit amet.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Downlod Now",
        tagColor: "green",
      },
    },
    {
      desc: " new dataLorem ipsum dolor Lorem ipsum dolor sit. sit amet.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Downlod Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <>
      <div ref={ref} className="w-full h-full z-[3] fixed  top-0 left-0 flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
