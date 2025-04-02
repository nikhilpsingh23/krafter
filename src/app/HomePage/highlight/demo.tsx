"use client";
import React from "react";

import { LampDemo1 } from "./lamp";

import { IconCloudDemo } from "./icon";

export function LampDemo() {
  return (
    <section className="w-full py-10">
      <div className="max-w-[1440px] mx-auto bg-[oklch(.129_.042_264.695)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 lg:gap-10 min-h-[60vh] ">
          <div className="w-full">
            <LampDemo1 />
          </div>
          <div className="w-full h-full flex items-center">
            <IconCloudDemo/>
          </div>
        </div>
      </div>
    </section>
  );
}
