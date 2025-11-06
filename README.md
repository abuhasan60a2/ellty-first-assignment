# Page Selection Component

A React implementation of a page selector component based on Figma design specifications.

## Overview

This project implements a multi-page selection interface with a master "All pages" toggle and individual page checkboxes, along with a confirmation button.

## Tech Stack

- React 19.1.1
- Vite 7.1.7
- Tailwind CSS 4.1.14
- JavaScript (ES6+)

## Setup

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Implementation Details

### Component Structure

```
src/
├── components/
│   ├── Checkbox.jsx          # Reusable checkbox component
│   └── PageSelector.jsx       # Main page selector container
├── App.jsx                    # Application root
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

### Key Features

- **Custom styled checkboxes** matching design specifications
- **Master toggle** that selects/deselects all pages
- **State synchronization** between individual and master checkboxes
- **Keyboard accessible** with proper focus management
- **Screen reader compatible** using semantic HTML

### Design Specifications

Typography:
- Font: Montserrat (Regular, 400)
- Size: 14px
- Line height: 130%
- Color: #1F2128

Colors:
- Primary action: #FFCE22
- Checkbox active: #5087F8
- Text: #1F2128
- Background: #F5F5F5

Layout:
- Checkbox items: 370px × 42px
- Button: 370px × 46px
- Card padding: 30px vertical, 15px horizontal

### Technical Approach

The custom checkbox is implemented using:
- Hidden native `<input type="checkbox">` for accessibility
- Custom styled `<div>` for visual presentation
- CSS `::after` pseudo-element for the checkmark
- Label wrapper for proper click area

State management uses React hooks:
- `useState` for checkbox states
- `useCallback` for event handlers
- `useMemo` for derived state (all pages selected)
- `memo` for component optimization

## Browser Compatibility

Tested on modern browsers (Chrome, Firefox, Safari, Edge).

## Code Quality

- ESLint configured with React rules
- No linter errors or warnings
- TypeScript type definitions included
- Font smoothing for consistent rendering across platforms

## License

This project was created as part of a technical assignment.
