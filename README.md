# i18n User Dashboard

A multi-language user dashboard built with Next.js 16, featuring internationalization (i18n) routing, real-time search, pagination, and responsive design.

## Features

- **🌍 Multi-language Support**: English (`/en/`) and French (`/fr/`) routes
- **🔍 Real-time Search**: Filter users by name or email (case-insensitive)
- **📄 Pagination**: Display 5 users per page with navigation controls
- **⚡ Loading States**: Elegant loading spinner during data fetch
- **❌ Error Handling**: User-friendly error messages with retry functionality
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **🎨 Modern UI**: Clean, professional interface with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16.0.8 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Data Source**: JSONPlaceholder API
- **State Management**: Custom React hooks

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd jarik
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - English: [http://localhost:3000/en/](http://localhost:3000/en/)
   - French: [http://localhost:3000/fr/](http://localhost:3000/fr/)

## Available Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
jarik/
├── app/
│   ├── [lang]/              # Dynamic language route
│   │   ├── layout.tsx       # Root layout with lang parameter
│   │   └── page.tsx         # User dashboard page
│   ├── dictionaries.ts      # Translation dictionary
│   └── globals.css          # Global styles
├── hooks/
│   └── useUsers.ts          # Custom hook for user data fetching
├── public/                  # Static assets
└── package.json
```

## Key Implementation Details

### i18n Routing
The application uses Next.js dynamic routes with the `[lang]` folder structure. The language parameter is automatically passed to all components, enabling seamless translation switching.

### Data Fetching
A custom `useUsers` hook manages:
- Asynchronous data fetching from JSONPlaceholder API
- Loading state management
- Error handling with retry capability
- Clean separation of concerns

### Search & Pagination
- **Client-side filtering**: Real-time search without API calls
- **Optimized pagination**: Calculates pages based on filtered results
- **Auto-reset**: Returns to page 1 when search query changes

### Responsive Design
- **Desktop**: Table layout with hover effects
- **Mobile**: Stacked card layout for better readability
- **Tailwind CSS**: Utility-first approach for rapid development

## Translation Support

The application currently supports:
- **English** (`en`): Default language
- **French** (`fr`): Full translation coverage

All UI text is localized, including:
- Page titles
- Search placeholders
- Pagination controls
- Error messages
- Loading states

## API Reference

**Endpoint**: `https://jsonplaceholder.typicode.com/users`

**Response**: Array of user objects with properties:
- `id`: Unique identifier
- `name`: Full name
- `email`: Email address
- `username`: Username
- `phone`: Phone number
- `website`: Website URL

## Development Notes

- Built as a 1-hour coding challenge demonstrating Next.js, i18n, and API integration
- Follows clean code principles with TypeScript for type safety
- Granular commit history showing development progression
- No AI-generated boilerplate - custom implementation throughout

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project was created as a coding challenge demonstration.

---

**Created by**: [Your Name]  
**Date**: December 2025  
**Next.js Version**: 16.0.8
