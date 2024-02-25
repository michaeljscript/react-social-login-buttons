import React from "react";

import { createButton } from "./create-button";

const config = {
  activeStyle: { background: "#EFF0EE" },
  icon: Icon,
  style: { background: "white", color: "black" },
  text: "Log in with Google",
};

export const GoogleLoginButton = createButton(config);

function Icon({ size }: { size: string | number; color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size}>
      <linearGradient
        id="95yY7w43Oj6n2vH63j6HJb"
        x1="29.401"
        x2="29.401"
        y1="4.064"
        y2="106.734"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff5840" />
        <stop offset=".007" stopColor="#ff5840" />
        <stop offset=".989" stopColor="#fa528c" />
        <stop offset="1" stopColor="#fa528c" />
      </linearGradient>
      <path
        fill="url(#95yY7w43Oj6n2vH63j6HJb)"
        d="M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37	c-4.94,0.83-9.17,3.85-11.64,
        7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46	C48.81,10.83,49.13,13.71,47.46,15.5z"
      />
      <linearGradient
        id="95yY7w43Oj6n2vH63j6HJc"
        x1="12.148"
        x2="12.148"
        y1=".872"
        y2="47.812"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#feaa53" />
        <stop offset=".612" stopColor="#ffcd49" />
        <stop offset="1" stopColor="#ffde44" />
      </linearGradient>
      <path
        fill="url(#95yY7w43Oj6n2vH63j6HJc)"
        d="M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22	c-1.06-6.88,0.54-13.38,
        3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"
      />
      <linearGradient
        id="95yY7w43Oj6n2vH63j6HJd"
        x1="29.76"
        x2="29.76"
        y1="32.149"
        y2="-6.939"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#42d778" />
        <stop offset=".428" stopColor="#3dca76" />
        <stop offset="1" stopColor="#34b171" />
      </linearGradient>
      <path
        fill="url(#95yY7w43Oj6n2vH63j6HJd)"
        d="M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05	C19.78,43.81,
        25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"
      />
      <linearGradient
        id="95yY7w43Oj6n2vH63j6HJe"
        x1="46"
        x2="46"
        y1="3.638"
        y2="35.593"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#155cde" />
        <stop offset=".278" stopColor="#1f7fe5" />
        <stop offset=".569" stopColor="#279ceb" />
        <stop offset=".82" stopColor="#2cafef" />
        <stop offset="1" stopColor="#2eb5f0" />
      </linearGradient>
      <path
        fill="url(#95yY7w43Oj6n2vH63j6HJe)"
        d="M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15
        c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z"
      />
    </svg>
  );
}
