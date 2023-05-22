import React from "react";

const Men = ({ data }) => {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-scroll relative scrollbar-none text-cyan-700">
      {data
        .filter((d) => {
          return d.category === "men";
        })
        .slice(0, 1)
        .map((d, i) => (
          <div
            className="h-full w-full snap-always snap-start sticky top-0"
            key={i}
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
            <p className="absolute z-50 right-5 bottom-10 font-bold text-sm">
              {d.name}
            </p>
          </div>
        ))}
      {data
        .filter((d) => {
          return d.category === "men";
        })
        .slice(1, 2)
        .map((d, i) => (
          <div
            className="h-full w-full snap-always snap-start sticky top-0"
            key={i}
          >
            <video
              autoPlay
              loop
              muted
              src={
                window.innerWidth < 810
                  ? process.env.REACT_APP_PATH + d.imgs[0]
                  : process.env.REACT_APP_PATH + d.imgs[1]
              }
              alt="abc"
              className="h-full w-full object-cover"
            />
            <p className="absolute z-50 right-5 bottom-10 font-bold text-sm">
              {d.name}
            </p>
          </div>
        ))}
      {data
        .filter((d) => {
          return d.category === "men";
        })
        .slice(2)
        .map((d, i) => (
          <div
            className="h-full w-full snap-always snap-start sticky top-0"
            key={i}
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
            <p className="absolute z-50 right-5 bottom-10 font-bold text-sm">
              {d.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Men;
