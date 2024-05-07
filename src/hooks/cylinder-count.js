import { create } from 'zustand';

export const useCylinderCount = create(set => ({
	cylinderCount: 0,
	increment: () => set(state => ({ cylinderCount: state.cylinderCount + 1 })),
	decrement: () => set(state => ({ cylinderCount: state.cylinderCount - 1 })),
}));
