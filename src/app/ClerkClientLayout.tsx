// app/ClerkClientLayout.tsx (Client Component)

'use client';

import { UserButton } from '@clerk/nextjs'; // Clerk's user button component

export default function ClerkClientLayout() {
  return (
    <div className="flex items-center space-x-4">
      <UserButton />
    </div>
  );
}
