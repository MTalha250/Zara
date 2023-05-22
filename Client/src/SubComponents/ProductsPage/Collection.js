import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item";
const Collection = ({ data, view, filter }) => {
  return (
    <div className="pt-36 md:pt-48">
      {data
        ?.filter((d) => {
          return d.category === filter;
        })
        .slice(0, 3)
        .map((d, i) => (
          <Link
            to="view"
            key={i}
            className="flex flex-col items-center justify-center my-5 md:odd:mx-20 lg:odd:mx-36 md:even:mx-36 lg:even:mx-52"
          >
            <img className="" src={process.env.REACT_APP_PATH + d.img} />
          </Link>
        ))}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-3 md:px-10 lg:px-3 my-10 md:my-20">
        {view
          .filter((d) => {
            return d.category === filter;
          })
          .slice(0, 6)
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

      {data
        ?.filter((d) => {
          return d.category === filter;
        })
        .slice(3)
        .map((d, i) => (
          <Link
            to="view"
            key={i}
            className="flex flex-col items-center justify-center my-5 md:odd:mx-20 lg:odd:mx-36 md:even:mx-36 lg:even:mx-52"
          >
            <img className="" src={process.env.REACT_APP_PATH + d.img} />
          </Link>
        ))}
    </div>
  );
};

export default Collection;
