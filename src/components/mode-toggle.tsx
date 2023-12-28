"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

import "../app/globals.css"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    })

    return (
        mounted ?
            <Button variant="outline" size="icon" onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
            }}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 icon-transition rotate-transition dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 icon-transition rotate-transition dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>

            : <></>
    )
}