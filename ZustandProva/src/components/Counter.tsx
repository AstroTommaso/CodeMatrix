import React from 'react';
import { useCounterStore } from '../stores/counter';

export function Counter(): JSX.Element {
	const count = useCounterStore((s) => s.count);
	const increase = useCounterStore((s) => s.increase);
	const decrease = useCounterStore((s) => s.decrease);
	const reset = useCounterStore((s) => s.reset);

	return (
		<div className="row">
			<button onClick={() => decrease()} aria-label="decrementa">-</button>
			<div style={{ textAlign: 'center' }}>
				<div style={{ fontSize: 36, fontWeight: 700 }}>{count}</div>
				<span className="badge">counter</span>
			</div>
			<button onClick={() => increase()} aria-label="incrementa">+</button>
			<button onClick={() => reset()} aria-label="reset">Reset</button>
		</div>
	);
}


