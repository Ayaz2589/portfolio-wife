"use client";

import { useEffect } from "react";
import { useActiveSection } from "@/hooks";
import { useInView } from "react-intersection-observer";
import { ActiveSectionType } from "@/context";

type Props = {
  sectionName: ActiveSectionType;
  threshold?: number;
};

export default function useSectionInView({
  sectionName,
  threshold = 0.5,
}: Props) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref };
}
