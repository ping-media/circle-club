"use client";

import { motion } from "framer-motion";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants/nav-list";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AnimatedHeader = ({ phase }: { phase: AnimatedHeaderPhase }) => {
  const [showCenter, setShowCenter] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    if (window.scrollY === 0) {
      setShowCenter(true);
    }
  }, []);

  return (
    <>
      {/* Center State */}
      {phase === "center" && showCenter && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Logo size="large" />
        </div>
      )}

      {/* Header State */}
      {(phase === "nav" || phase === "reveal") && (
        <header className="absolute top-0 inset-x-0 z-40 w-full md:max-w-6xl 2xl:max-w-7xl mx-auto py-5">
          <div className="flex items-center justify-between">
            {/* Logo left aligned */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-9">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={phase === "reveal" ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    // className="text-xs 2xl:text-sm tracking-[0.2em] uppercase font-bold text-white hover:text-white/90 transition-colors"
                    className={cn(
                      "text-xs 2xl:text-sm tracking-[0.2em] uppercase font-bold text-white hover:text-white/90 transition-colors relative",
                      pathname === item.href
                        ? "underline decoration-2 underline-offset-3"
                        : "",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={phase === "reveal" ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                variant={isHome ? "outline" : "gold-gradient"}
                className="text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.15em]"
              >
                Send a Request
              </Button>
            </motion.div>
          </div>
        </header>
      )}
    </>
  );
};

export default AnimatedHeader;
