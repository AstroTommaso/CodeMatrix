import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';

export type Todo = {
	id: string;
	text: string;
	done: boolean;
};

type TodosState = {
	todos: Todo[];
	add: (text: string) => void;
	toggle: (id: string) => void;
	remove: (id: string) => void;
	clearDone: () => void;
};

export const useTodosStore = create<TodosState>()(
	persist(
		(set, get) => ({
			todos: [],
			add: (text) =>
				set(
					produce<TodosState>((draft) => {
						draft.todos.push({ id: crypto.randomUUID(), text, done: false });
					})
				),
			toggle: (id) =>
				set(
					produce<TodosState>((draft) => {
						const t = draft.todos.find((x) => x.id === id);
						if (t) t.done = !t.done;
					})
				),
			remove: (id) =>
				set(
					produce<TodosState>((draft) => {
						draft.todos = draft.todos.filter((x) => x.id !== id);
					})
				),
			clearDone: () =>
				set(
					produce<TodosState>((draft) => {
						draft.todos = draft.todos.filter((x) => !x.done);
					})
				),
		}),
		{ name: 'todos-store' }
	)
);


