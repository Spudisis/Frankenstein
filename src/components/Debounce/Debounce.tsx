import React from "react";

export const Debounce = (cb: any) => {
  let running = false;
  let i: any;
  return function () {
    if (running) {
      clearTimeout(i);
      i = setTimeout(() => {
        running = false;
        console.log("aaaaaa");
        cb();
      }, 300);
    } else {
      i = setTimeout(() => {
        running = false;
        console.log("aaaaaa");
        cb();
      }, 50);
    }

    running = true;
  };
};
