import React, { useState } from 'react';
import { useTodosStore } from '../stores/todos';

export function Todos(): JSX.Element {
	const [text, setText] = useState('');
	const todos = useTodosStore((s) => s.todos);
	const add = useTodosStore((s) => s.add);
	const toggle = useTodosStore((s) => s.toggle);
	const remove = useTodosStore((s) => s.remove);
	const clearDone = useTodosStore((s) => s.clearDone);

	return (
		<div>
			<div className="row" style={{ marginBottom: 12 }}>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Aggiungi todo"
					aria-label="todo-input"
				/>
				<button onClick={() => { if (text.trim()) { add(text.trim()); setText(''); } }}>
					Aggiungi
				</button>
			</div>

			<ul>
				{todos.map((t) => (
					<li key={t.id}>
						<label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
							<span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
							<button onClick={() => remove(t.id)} style={{ marginLeft: 'auto', background: '#ef4444' }}>Elimina</button>
						</label>
					</li>
				))}
			</ul>

			<div className="row">
				<span className="badge">{todos.filter((t) => !t.done).length} aperti</span>
				<span className="badge">{todos.filter((t) => t.done).length} fatti</span>
				<button onClick={clearDone} disabled={todos.every((t) => !t.done)}>Pulisci completati</button>
			</div>
		</div>
	);
}


