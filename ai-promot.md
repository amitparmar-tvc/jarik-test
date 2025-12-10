# User Dashboard Application – Reusable Prompt

Use this prompt with any AI coding assistant to build a modern, production‑ready user dashboard application.

---

## Project Overview

Create a **modern, responsive user dashboard** that displays user data from an external API.  
The app should feel professional, support multiple languages, and work well on mobile, tablet, and desktop screens.

---

## Tech Stack

- **Framework:** Next.js 14+ with App Router  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Icons:** Heroicons  
- **Data Source:** JSONPlaceholder Users API  
  - Endpoint: `https://jsonplaceholder.typicode.com/users`

---

## Core Features

### 1. Multi‑language support

- Implement internationalization using a dynamic route segment: `[lang]`.  
- Support at least **two languages** (for example, English plus one other).  
- Build a simple **dictionary system** for translations.  
- Provide translations for at least:
  - Page title  
  - Search input placeholder  
  - Loading text  
  - Error message  
  - Retry button  
  - Pagination labels:
    - Previous / Next  
    - "Showing X of Y" text  
  - "No results" / empty state message  

### 2. Data fetching

- Create a custom React hook called **`useUsers`** to fetch data from the JSONPlaceholder users endpoint.  
- Handle all main states:
  - Loading (e.g., spinner and loading text)  
  - Error (error message and a retry action)  
  - Success (fetched list of users)  
- Add a **retry** function in case the request fails.  
- Define proper **TypeScript interfaces** for the API response.

### 3. User interface

#### Layout

- Use a clean, modern design with:
  - Subtle shadows and rounded corners  
  - Light gray background (`bg-gray-50`)  
- Implement **full dark mode support** across the app.  
- Ensure the layout is responsive on **mobile, tablet, and desktop**.

#### Header section

- Show:
  - The page title (localized)  
  - A user counter indicating **filtered vs total** number of users.

#### Search functionality

- Add a search bar with an icon.  
- Enable **real‑time filtering** across the following fields:
  - `name`  
  - `email`  
  - `username`  
  - `phone`  
- Whenever the search query changes, automatically reset pagination to **page 1**.

#### Data table

Display the users in a professional‑looking table with these columns:

- **Name column**
  - Full name in bold, using the primary color.  
  - Username with an `@` prefix, styled like a clickable link.

- **Contact column**
  - Email with an envelope icon and clickable `mailto:` link.  
  - Phone with a phone icon.  
  - Website with a globe icon, opening in a new tab (with proper security attributes).

- **Company column**
  - Company name in bold.  
  - Company catchphrase in muted/subtle text.

- **Location column**
  - City name in bold.  
  - Street address with suite.  
  - Zipcode.  
  - A **hover tooltip** that displays latitude and longitude coordinates.

#### Table styling

- White background with a soft shadow.  
- Comfortable spacing and padding.  
- Dividers between rows.  
- Fully compatible with dark mode.  
- Allow horizontal scroll on small screens (mobile) if needed.

#### Pagination

- Show **5 users per page**.  
- Include **Previous** and **Next** buttons:
  - Proper disabled states at the start/end.  
- Show a page counter such as: "Page 1 of 2".  
- Use buttons with light shadows and hover effects.

---

## 4. TypeScript types

Define a complete `User` type that matches the JSONPlaceholder user schema:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
```

---

## 5. Interactive elements

- **Hover effects**
  - Tooltips on the location cells showing latitude and longitude.  

- **Clickable links**
  - Usernames styled as links (e.g., blue text).  
  - Website links open in a new tab with safe attributes (`rel="noopener noreferrer"`).  

- **Loading state**
  - Centered spinner plus loading text.  

- **Error state**
  - Error icon, clear message, and a retry button that calls the retry logic from `useUsers`.  

- **Empty state**
  - Show a "No results" style message when the search returns no matches.

---

## 6. Design details

### Color scheme

- Primary: Indigo / blue tones.  
- Success: Green.  
- Error: Rose / red.  
- Neutral: Grays.  
- Provide appropriate **dark mode variants** for all major colors.

### Icons

- Use **Heroicons**, preferably 20px solid variants.  
- Icons:
  - Envelope for email  
  - Phone for phone  
  - Globe for website  
- Apply a consistent gray color for icons, adjusting for dark mode.

### Spacing and layout polish

- Use generous padding in table cells.  
- Keep a clear gap between each icon and its text.  
- Maintain consistent margins and spacing across all sections.

### Accessibility

- Use **semantic HTML** for structure.  
- Provide appropriate **ARIA labels** (e.g., for loading regions, error messages, tooltips).  
- Ensure good **screen reader support**.  
- Support **keyboard navigation**, especially for pagination and interactive elements.

---

## File structure

Organize the project in a clear and scalable way, for example:

```
app/
  [lang]/
    page.tsx        // Main dashboard page
    layout.tsx      // Layout with language handling
dictionaries.ts     // Translation dictionaries
hooks/
  useUsers.ts       // Custom hook for fetching and managing users
```

---

## Additional requirements

- **Performance**
  - Use React hooks efficiently (for example, `useMemo` for filtering and derived values).  

- **Code quality**
  - Clean, readable TypeScript code with meaningful names.  
  - Keep comments focused and helpful, not noisy.

- **Responsiveness**
  - Mobile‑first layout that scales up gracefully to larger screens.

- **Error handling**
  - Clear and friendly error states, always with a retry option.

- **User experience**
  - Smooth hover and focus effects.  
  - Consistent look in both light and dark modes.

---

## Expected behavior

When the application is running:

- The app loads and fetches users from the JSONPlaceholder API.  
- Users can search across all relevant text fields (name, email, username, phone).  
- Pagination updates to reflect the **filtered** results, not just the full list.  
- Hovering over a location shows a tooltip with the coordinates.  
- All links (email, website, username) behave correctly and safely.  
- Dark mode toggles correctly and applies across the entire UI.  
- The layout remains usable and attractive on all screen sizes.

---

## Customization options

This prompt is meant to be reusable. It can be adapted by:

- Changing the API endpoint to your own backend or another service.  
- Adding more columns (for example, status badges or action buttons).  
- Implementing sorting by columns.  
- Adding filters (dropdowns, checkboxes, etc.).  
- Implementing CRUD operations (Create, Update, Delete).  
- Adding a user detail modal or detail page.  
- Exporting data (CSV, Excel, etc.).  
- Including charts, statistics, or analytics cards.

---

## How to use this prompt

Provide this entire prompt to an AI coding assistant and specify:

- Which languages you want for i18n.  
- Any extra features you would like to add.  
- If you want to use a different API endpoint instead of JSONPlaceholder.  
- Any particular styling or branding preferences.

The assistant should then generate a complete, production‑ready **Next.js user dashboard application** that follows these guidelines.