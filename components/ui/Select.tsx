"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface SelectProps {
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}

export default function Select({
  options,
  placeholder = "Select an option",
  value = "",
  onChange,
  className = "",
  ariaLabel,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-left ${
          isOpen 
            ? "border-coral ring-2 ring-coral/20" 
            : "border-paper-line"
        } ${className}`}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        <span className={selectedValue ? "text-ink" : "text-ink-soft/60"}>
          {selectedValue || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform text-ink-soft ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-paper-card border border-paper-line rounded-lg shadow-xl max-h-60 overflow-y-auto">
          {options.map((option) => {
            const isSelected = selectedValue === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-paper transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  isSelected ? "bg-paper" : ""
                }`}
              >
                <span className={isSelected ? "text-coral font-medium" : "text-ink"}>
                  {option}
                </span>
                {isSelected && (
                  <Check size={16} className="text-coral shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
