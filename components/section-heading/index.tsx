import React, { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return <p className="text-[2rem] font-medium capitalize mb-8">{children}</p>;
}
