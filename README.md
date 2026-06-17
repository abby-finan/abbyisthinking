# Abby is thinking

Abby's collection of thoughts.

A minimal personal portfolio with an interactive 3D aesthetic — inspired by [Thrive Capital](https://www.thrivecap.com), [Cursor Compile](https://cursor.com/compile), and [Cursor Origin](https://cursor.com/origin).

## Features

- Live date & time header
- Interactive 3D "abby is thinking" title — rotates with your cursor, Thrive-style
- Abstract gradient background
- 8 read-only content sections with a bare-bones typographic layout

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All content lives in `src/lib/defaultData.ts`. Edit that file directly to add or update entries, then refresh the page.

Update your birth date, cities, countries, and family origin in the same file under the top-level fields.

## Stack

- Next.js 15 + React 19
- React Three Fiber + drei (3D)
- Framer Motion (transitions)
- Tailwind CSS 4
