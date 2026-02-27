"use client";

import { createContext, useContext, useState } from "react";

type AnimationContextType = {
  hasHeroAnimated: boolean;
  setHasHeroAnimated: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
);

export const AnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasHeroAnimated, setHasHeroAnimated] = useState(false);

  return (
    <AnimationContext.Provider value={{ hasHeroAnimated, setHasHeroAnimated }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within AnimationProvider",
    );
  }
  return context;
};
