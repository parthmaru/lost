import React from "react";
import { FonsiStyle } from "./Styles";

const Fonsi = () => {
  return (
    <>
      <div>
        <svg viewBox="0 0 1950.2 507">
          <defs>
            <style>
              {
                ".a{fill:none;stroke:#fff;stroke-width:2px;opacity:0.5;}.m{filter:url(#a);}"
              }
            </style>
            <filter
              id="a"
              x={0}
              y={39.467}
              width={1950.2}
              height={229.947}
              filterUnits="userSpaceOnUse"
            >
              <feOffset dx={15} dy={15} input="SourceAlpha" />
              <feGaussianBlur stdDeviation={5} result="b" />
              <feFlood floodColor="#07374e" floodOpacity={0.651} />
              <feComposite operator="in" in2="b" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="translate(-1.978 -3576)">
            <g className="m" transform="matrix(1, 0, 0, 1, 1.98, 3576)">
              <path
                className="a"
                d="M2197.273-18306.652s276.923-5.27,706.813,0,383.077,225.26,698.9,192.326,342.857-63.232,514.286-94.848"
                transform="translate(-2197.25 18349.49)"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Fonsi;
