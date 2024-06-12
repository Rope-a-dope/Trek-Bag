import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      actions: {
        addItem: (newItemText) => {
          const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false,
          };

          set((state) => ({ items: [...state.items, newItem] }));
        },
        deleteItem: (id) => {
          set((state) => {
            const newItems = state.items.filter((item) => item.id !== id);
            return { items: newItems };
          });
        },
        toggleItem: (id) => {
          set((state) => {
            const newItems = state.items.map((item) => {
              if (item.id === id) {
                return { ...item, packed: !item.packed };
              }

              return item;
            });
            return { items: newItems };
          });
        },
        removeAllItems: () => {
          set(() => ({ items: [] }));
        },
        resetToInitial: () => {
          set(() => ({ items: initialItems }));
        },
        markAllAsComplete: () => {
          set((state) => {
            const newItems = state.items.map((item) => ({ ...item, packed: true }));

            return { items: newItems };
          });
        },
        markAllAsIncomplete: () => {
          set((state) => {
            const newItems = state.items.map((item) => ({ ...item, packed: false }));

            return { items: newItems };
          });
        },
      },
    }),
    {
      name: "items",
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export const useItems = () => useItemsStore((state) => state.items);
export const useItemsActions = () => useItemsStore((state) => state.actions);
