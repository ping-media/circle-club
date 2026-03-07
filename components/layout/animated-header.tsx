"use client";

import { motion } from "framer-motion";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants/nav-list";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { X } from "lucide-react";

const AnimatedHeader = ({ phase }: { phase: AnimatedHeaderPhase }) => {
  const [showCenter, setShowCenter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    if (window.scrollY === 0) {
      setShowCenter(true);
    }
  }, []);

  return (
    <>
      {/* Center State */}
      {phase === "center" && showCenter && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="fixed inset-0 flex items-center md:items-start justify-center md:justify-start top-24 md:left-60"
        >
          <Logo size="large" />
        </motion.div>
      )}

      {/* Header State */}
      {phase !== "center" && (
        <header className="absolute top-0 inset-x-0 z-40 w-full lg:max-w-6xl 2xl:max-w-7xl mx-auto py-5 px-4 lg:px-0">
          <div className="flex items-center justify-between">
            {/* Logo left aligned */}
            <Link href="/">
              <Logo />
            </Link>
            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={phase === "reveal" ? { opacity: 1, y: 0 } : {}}
                  // transition={{ delay: i * 0.1, duration: 0.4 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={item.href}
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
              // transition={{ delay: 0.5, duration: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <Button
                variant={isHome ? "outline" : "gold-gradient"}
                className={cn(
                  "text-xs 2xl:text-sm rounded-none font-bold uppercase tracking-[0.15em] hidden lg:flex",
                  isHome && "bg-gold-60 hover:bg-gold-60 border-none",
                )}
                asChild
              >
                <Link href="/request-access">Send a Request</Link>
              </Button>
            </motion.div>
            {/* menu button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={phase === "reveal" ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                className="bg-gold-50 rounded-none p-2 lg:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src="/icons/menu.svg"
                  alt="menu button"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Button>
            </motion.div>
          </div>
        </header>
      )}

      {/* mobile drawer  */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-3/4 bg-white p-8 flex flex-col gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-sm uppercase tracking-wider"
            >
              <X size={18} />
            </button>

            {/* Nav Items */}
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "uppercase text-sm tracking-[0.2em] font-bold",
                    pathname === item.href && "underline",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Button
              variant={isHome ? "outline" : "gold-gradient"}
              className={cn(
                "mt-auto rounded-none uppercase text-sm font-bold",
                isHome && "bg-gold-60 hover:bg-gold-60 border-none",
              )}
              asChild
            >
              <Link href="/request-access">Send a Request</Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AnimatedHeader;
