import React, { useContext, useEffect } from "react";
import Item from "../Item";
import { DataContext } from "../../Context/DataContext";

const View = ({ filter }) => {
  const [data, setData] = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid gap-x-2 md:gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-4 pt-36 md:pt-48 md:px-16 lg:px-32">
      {data
        .filter((d) => {
          return d.category === filter;
        })
        .map((d, i) => (
          <Item
            key={i}
            id={d._id}
            img={process.env.REACT_APP_PATH + d.imgs[3]}
            img2={process.env.REACT_APP_PATH + d.imgs[0]}
            img3={process.env.REACT_APP_PATH + d.imgs[1]}
            img4={process.env.REACT_APP_PATH + d.imgs[2]}
            name={d.name}
            price={d.price}
            description={d.description}
          />
        ))}
    </div>
  );
};

export default View;
