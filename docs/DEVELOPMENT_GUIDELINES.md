# Development Guidelines

## Tech Stack Overview
- Next.js 14
- React 18
- TypeScript
- Supabase (Authentication and Database)
- Tailwind CSS
- Radix UI Components
- Zod (Schema Validation)
- React Hook Form
- SQLite (Local Database)
- Spline (3D Graphics)
- Framer Motion (Animations)

## Code Style and Structure

### General Principles
- Use functional components with TypeScript
- Implement responsive design with Tailwind CSS
- Follow Next.js 14 App Router conventions
- Use React Hook Form for form handling
- Implement Zod schemas for validation

### File Structure
```
project/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── admin/           # Admin pages
│   ├── form/           # Form pages
│   └── [other routes]  # Other app routes
├── components/          # React components
│   ├── ui/             # UI components
│   └── admin/          # Admin components
├── lib/                # Utility functions
│   ├── supabase/      # Supabase client
│   └── utils/         # Helper functions
├── public/            # Static assets
└── styles/           # Global styles
```

### Naming Conventions
- React Components: PascalCase (e.g., `FormProgress.tsx`)
- Utilities: camelCase (e.g., `colorUtils.ts`)
- Pages: page.tsx in corresponding route directory
- API Routes: route.ts in api directory

## Component Guidelines

### UI Components
- Use Radix UI primitives for accessible components
- Style with Tailwind CSS utility classes
- Implement responsive design patterns
- Use Framer Motion for animations

### Form Handling
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
	// schema definition
});

export function FormComponent() {
	const form = useForm({
		resolver: zodResolver(schema)
	});
}
```

## State Management
- Use React's built-in hooks for local state
- Implement context for shared state when needed
- Use Supabase for remote data management

## Database Guidelines
- Use Supabase for primary data storage
- SQLite for local data caching
- Follow database migration practices

## Authentication
- Implement Supabase authentication
- Use middleware for protected routes
- Handle auth state with Supabase hooks

## API Routes
- Create API routes in app/api directory
- Follow REST conventions
- Implement proper error handling
- Use Zod for request validation

## Error Handling
- Implement error boundaries
- Use toast notifications for user feedback
- Log errors appropriately
- Handle API errors gracefully

## Performance
- Use Next.js Image component for images
- Implement proper loading states
- Use dynamic imports when needed
- Follow Tailwind CSS best practices

## Testing Guidelines
- Write unit tests for critical components
- Test form validations
- Verify API routes
- Test authentication flows

## Security
- Validate all user inputs with Zod
- Implement proper CORS policies
- Use environment variables for sensitive data
- Follow Supabase security guidelines

## Development Workflow
- Use TypeScript strict mode
- Follow ESLint rules
- Format code with Prettier
- Review code thoroughly

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
