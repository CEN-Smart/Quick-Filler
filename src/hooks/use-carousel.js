import { create } from 'zustand';

export const useCarousel = create(set => ({
	index: 0,
	setIndex: selectedIndex => set({ index: selectedIndex }),
}));
