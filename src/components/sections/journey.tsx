"use client";

import React, { useRef } from "react";
import { JOURNEY_IMAGES } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import Image from "next/image";

const JourneySection = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper
      id="journey"
      className="flex flex-col items-center justify-center min-h-[80vh] py-20"
    >
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex items-center justify-between mb-12 md:mb-16 mt-0">
          <SectionHeader
            id="journey"
            title="My Journey"
            desc="Moments, hackathons, and memories."
            className="mb-0 mt-0"
          />
          <div className="flex items-center gap-2 pr-4">
            <button 
              onClick={() => {
                if (targetRef.current) {
                  targetRef.current.scrollBy({ left: -400, behavior: "smooth" });
                }
              }}
              className="p-2 rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => {
                if (targetRef.current) {
                  targetRef.current.scrollBy({ left: 400, behavior: "smooth" });
                }
              }}
              className="p-2 rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={targetRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-10 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none",  // IE and Edge
          }}
        >
          {JOURNEY_IMAGES.map((item, index) => (
            <JourneyCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </SectionWrapper>
  );
};

const JourneyCard = ({
  item,
  index,
}: {
  item: (typeof JOURNEY_IMAGES)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 5) * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="snap-center shrink-0 w-[85vw] md:w-[450px] flex flex-col rounded-xl border border-border bg-card shadow-xl overflow-hidden group"
    >
      {/* Image Container: fixed height to keep cards aligned, object-contain to show full image perfectly without cropping */}
      <div className="relative w-full h-[250px] md:h-[300px] bg-muted/20 flex items-center justify-center p-2">
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 85vw, 450px"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-card">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-mono text-primary bg-primary/10 inline-flex px-3 py-1 rounded-full">
            {item.date}
          </div>
          <div className="text-xs font-medium text-muted-foreground">
            #{item.id}
          </div>
        </div>
        <h3 className="mb-2 font-bold text-xl text-foreground leading-tight">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default JourneySection;
