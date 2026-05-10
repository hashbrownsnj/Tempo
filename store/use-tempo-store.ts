"use client";

import { create } from "zustand";

type ViewMode = "list" | "kanban";

type TempoState = {
  commandOpen: boolean;
  focusMinutes: number;
  viewMode: ViewMode;
  toggleCommand: () => void;
  setCommandOpen: (open: boolean) => void;
  setFocusMinutes: (minutes: number) => void;
  setViewMode: (mode: ViewMode) => void;
};

export const useTempoStore = create<TempoState>((set) => ({
  commandOpen: false,
  focusMinutes: 25,
  viewMode: "list",
  toggleCommand: () => set((state) => ({ commandOpen: !state.commandOpen })),
  setCommandOpen: (commandOpen) => set({ commandOpen }),
  setFocusMinutes: (focusMinutes) => set({ focusMinutes }),
  setViewMode: (viewMode) => set({ viewMode }),
}));
