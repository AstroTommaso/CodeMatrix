# ZustandProva

Demo React + TypeScript con Zustand (counter + todos persistenti con `persist` e `immer`).

## Requisiti
- Node.js 18+

## Installazione
```bash
cd ZustandProva
npm install
```

## Sviluppo
```bash
npm run dev
```
Apri `http://localhost:5173`.

## Build
```bash
npm run build
npm run preview
```

## Struttura
```
ZustandProva/
├─ src/
│  ├─ components/
│  │  ├─ Counter.tsx
│  │  └─ Todos.tsx
│  ├─ stores/
│  │  ├─ counter.ts
│  │  └─ todos.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Note
- I todos sono persistiti su `localStorage` con chiave `todos-store`.
- `immer` semplifica gli update immutabili.
