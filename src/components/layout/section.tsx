import React from "react";

import Link from "next/link";
import VerticalAlign from "./vertical-align";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  link?: string;
};

const Section = ({ children, title, subtitle, link }: LayoutProps) => {
  return (
    <div className="flex flex-col w-full mt-12">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex mb-2">
        <span className="text-slate-700 text-sm">{subtitle}</span>
        <div className="flex-1" />
        <Link href="#" className="link flex">
          <VerticalAlign>
            {link && (
              <Link href={`/${encodeURIComponent(link)}`}>
                <span>View More</span>
              </Link>
            )}
          </VerticalAlign>
          <VerticalAlign>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </VerticalAlign>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Section;
