"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function LanguageSwitch() {
  const [locale, setLocale] = useState<"sk" | "en">("sk");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "en" || saved === "sk") {
      setLocale(saved);
    }
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "sk" ? "en" : "sk";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    window.dispatchEvent(new CustomEvent("localeChange", { detail: newLocale }));
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="font-medium text-sm"
    >
      {locale === "sk" ? "EN" : "SK"}
    </Button>
  );
}

export function useLocale() {
  const [locale, setLocale] = useState<"sk" | "en">("sk");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "en" || saved === "sk") {
      setLocale(saved);
    }

    const handleLocaleChange = (e: CustomEvent) => {
      setLocale(e.detail);
    };

    window.addEventListener("localeChange", handleLocaleChange as EventListener);
    return () => {
      window.removeEventListener("localeChange", handleLocaleChange as EventListener);
    };
  }, []);

  return locale;
}