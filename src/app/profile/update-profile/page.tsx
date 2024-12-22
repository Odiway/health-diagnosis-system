import { auth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    // Get the authenticated user's ID
    const { userId } = auth();
    if (!userId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    // Parse the request body
    const { age, weight, height } = await request.json();

    // Update the user's public metadata
    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        age,
        weight,
        height,
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error updating user metadata:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
