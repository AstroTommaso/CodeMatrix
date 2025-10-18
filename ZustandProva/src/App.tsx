import React from 'react';
import { Counter } from './components/Counter';
import { Todos } from './components/Todos';

export default function App(): JSX.Element {
	return (
		<div className="container">
			<h1>Zustand Prova</h1>
			<p>Demo di gestione stato con Zustand (counter e todos persistenti).</p>
			<div className="grid">
				<section>
					<h2>Counter</h2>
					<Counter />
				</section>
				<section>
					<h2>Todos</h2>
					<Todos />
				</section>
			</div>
		</div>
	);
}


