"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "./disclosure";


export function DisclosureCardGrid() {
  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DisclosureCard 
            image="https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg"
            title="lesothers.studio"
            description="The 'This is trail running' campaign highlights the new trail collection from @salomon..."
          />
          <DisclosureCard 
            image="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            title="Mountain Peak"
            description="Discover the breathtaking views from the highest peaks..."
          />
          <DisclosureCard 
            image="https://images.unsplash.com/photo-1542224566-6e85f2e6772f"
            title="Forest Trail"
            description="Experience the serenity of hidden forest paths..."
          />
          <DisclosureCard 
            image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            title="Alpine Lake"
            description="Crystal clear waters reflect the surrounding mountains..."
          />
        </div>
      </div>
    </div>
  );
}

interface DisclosureCardProps {
  image: string;
  title: string;
  description: string;
}

function DisclosureCard({  }: DisclosureCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: "blur(0px)" },
    expanded: { scale: 1.1, filter: "blur(3px)" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
      <div onClick={() => setIsOpen(!isOpen)}>
        <motion.img
          src="https://images.beta.cosmos.so/5b21c112-ed1d-45cd-baf0-38186a15af8e?format=jpeg"
          alt="Les others studio - Que la montagne est belle ⛰"
          className="pointer-events-none h-auto w-full select-none"
          animate={isOpen ? "expanded" : "collapsed"}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className="absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50"
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className="w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            lesothers.studio
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className="flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700">
            <p>How beautiful the mountain is 🗻</p>
            <p className="line-clamp-3">
              The “This is trail running” campaign highlights the new trail
              collection from <strong className="font-medium">@salomon</strong>,
              trying to touch the (strong) sensations experienced by runners.
              With each model, its natural environment. To capture the Pulsar
              Trail Pro 2 in real conditions, we chose to take the athletes
              trudging in the French Alps, at 2,000 meters altitude.
            </p>
            <button
              className="mt-3 w-full rounded-[4px] border border-zinc-700 bg-zinc-900 px-4 py-1 text-zinc-50 transition-colors duration-300 hover:bg-zinc-800"
              type="button"
            >
              Learn More
            </button>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
}

export { DisclosureCard };