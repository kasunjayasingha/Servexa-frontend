# Servexa Frontend

React + Vite frontend application for Servexa.

## Tech Stack

| Purpose | Tech |
|---------|------|
| Framework | React + Vite |
| Language | TypeScript |
| State | Redux Toolkit |
| UI | Material UI (MUI) + Tailwind CSS |
| Charts | Recharts |
| Auth | JWT |
| API | Axios |
| Routing | React Router v6 |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file (or copy from `.env.example`):

```
VITE_API_BASE_URL=http://localhost:3001/api
```

## Project Structure

```
src/
├── api/           # API layer (Axios instance, API modules)
├── assets/        # Images, icons, styles
├── components/    # Shared components (common, layout)
├── features/      # Feature modules (auth, customers, dashboard, inventory)
├── hooks/         # Custom React hooks
├── routes/        # Routing & protected routes
├── store/         # Redux store
└── utils/         # Constants, helpers, validators
```
