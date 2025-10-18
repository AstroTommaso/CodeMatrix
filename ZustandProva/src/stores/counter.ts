import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CounterState = {
	count: number;
	increase: (by?: number) => void;
	decrease: (by?: number) => void;
	reset: () => void;
};

export const useCounterStore = create<CounterState>()(
	persist(
		(set) => ({
			count: 0,
			increase: (by = 1) => set((state) => ({ count: state.count + by })),
			decrease: (by = 1) => set((state) => ({ count: Math.max(0, state.count - by) })),
			reset: () => set({ count: 0 }),
		}),
		{ name: 'counter-store' }
	)
);


