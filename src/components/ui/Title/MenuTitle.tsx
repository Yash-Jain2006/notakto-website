import { AnimatedTitle } from "@/components/ui/Effects/AnimatedTitle";

export const MenuTitle = ({ text }: { text: string }) => (
  <AnimatedTitle
    text={text}
    // Responsive margin to prevent overlap with buttons
    className="mb-4 sm:mb-6 md:mb-8 lg:-mb-2 xl:-mb-10"
    textClassName="text-red-600 text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[180px]"
  />
);