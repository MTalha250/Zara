import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Outlet, useLocation } from "react-router-dom";

function Search(props) {
  const location = useLocation();
  const [recent, setRecent] = useState([]);
  const [women, setWomen] = useState(
    "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
  );
  const [man, setMan] = useState("");
  const [kids, setKids] = useState("");
  return (
    <div>
      <div className="pt-20 md:pt-32 px-6">
        <div className=" text-xs flex w-full justify-center md:justify-start">
          <Link
            to=""
            className={
              location.pathname === "/search"
                ? "text-black font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "text-black"
            }
          >
            WOMEN
          </Link>
          <Link
            to="men"
            className={
              location.pathname === "/search/men"
                ? "text-black mx-4 font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "mx-4 text-black"
            }
          >
            MAN
          </Link>
          <Link
            to="kids"
            className={
              location.pathname === "/search/kids"
                ? "text-black font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "text-black"
            }
          >
            KIDS
          </Link>
        </div>
        <input
          type="text"
          className="peer my-10 md:my-4 py-3 w-full border-b border-black font-light text-xs outline-none uppercase"
          placeholder="SEARCH FOR AN ITEM..."
          value={props.input}
          onChange={(e) => props.getInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!recent.includes(props.input.toUpperCase())) {
                setRecent((r) => [...r, props.input.toUpperCase()]);
              }
            }
          }}
          autoFocus
        />

        {!props.input ? (
          recent.length != 0 ? (
            <div className="w-full flex justify-between my-3 text-xs">
              <span className="font-bold">RECENT</span>
              <span className="cursor-pointer" onClick={() => setRecent([])}>
                CLEAR
              </span>
            </div>
          ) : null
        ) : null}
        {!props.input
          ? recent.map((item, i) => (
              <button
                key={i}
                className="text-xs font-light border border-black py-2 pl-2 pr-8 m-2 relative"
                value={item}
                onClick={(e) => {
                  props.getInput(e.target.value);
                }}
              >
                {item}
                <CloseIcon
                  id={i}
                  className="cursor-pointer font-light text-gray-500 scale-75 absolute top-0 right-0"
                  onClick={(e) => {
                    recent.splice(e.target.id, 1);
                    setRecent([...recent]);
                  }}
                />
              </button>
            ))
          : null}
      </div>
      <Outlet />
    </div>
  );
}

export default Search;
