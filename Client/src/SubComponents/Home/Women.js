import React from "react";

const Women = ({ data }) => {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-scroll relative scrollbar-none text-black">
      {data
        .filter((d) => {
          return d.category === "women";
        })
        .map((d, i) => (
          <div
            key={i}
            className="h-full w-full snap-always snap-start sticky top-0"
          >
            <img
              src={
                window.innerWidth < 418
                  ? process.env.REACT_APP_PATH + d.imgs[1]
                  : window.innerWidth > 417 && window.innerWidth < 810
                  ? process.env.REACT_APP_PATH + d.imgs[0]
                  : process.env.REACT_APP_PATH + d.imgs[2]
              }
              alt="abc"
              className="h-full w-full object-cover"
            />
            <p className="w-full text-end absolute z-40 bottom-0 font-bold text-sm p-10">
              {d.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Women;
