import Image from "next/image";
import React from "react";

import style from "./card.module.css";

type Tag = {
  name: string;
  color: string;
};

type CardProps = {
  image?: string;
  altText?: string;
  children: React.ReactNode;
  className?: string;
  tags?: Tag;
};

const Card = ({ image, altText, children, className, tags }: CardProps) => {
  let tagDivs = [];

  if (tags) {
    tagDivs = tags.map((tagItem, index) => (
      <div className={`absolute text-xs p-0.5 font-bold left-0 ${tagItem.color}`} style={{ bottom: `${index * 1.25}rem` }} key={index}>
        {tagItem.name}
      </div>
    ));
  }

  return (
    <>
      <div className={`flex flex-col p-2 ${style.card} ${className}`}>
        {image && (
          <div className="w-full h-40 min-h-0 relative">
            <div className="w-full h-32 min-h-0 relative">
              <Image src={image} alt={altText} height={200} width={200} className="mx-auto h-full object-contain object-center" />
            </div>
            {tagDivs}
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export { Card as default, Tag };
