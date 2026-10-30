import { goto } from '$app/navigation';
import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient();

const errorMessages: Record<string, string> = {
	INVALID_EMAIL_OR_PASSWORD: 'Incorrect email or password. Please try again.',
	INVALID_EMAIL: 'Please enter a valid email address.',
	INVALID_PASSWORD: 'Incorrect password. Please try again.',
	PASSWORD_TOO_SHORT: 'Your password must be at least 8 characters long.',
	USER_ALREADY_EXISTS: 'An account with this email already exists. Try signing in instead.',
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
		'An account with this email already exists. Try signing in instead.'
};

export function safeRedirect(target: string | null | undefined, fallback = '/'): string {
	if (target && target.startsWith('/') && !target.startsWith('//')) {
		return target;
	}

	return fallback;
}

export function authErrorMessage(
	error: unknown,
	fallback = 'Something went wrong. Please try again.'
): string {
	if (!error) return fallback;

	const code =
		typeof error === 'object' && error !== null && 'error' in error
			? (error as { error?: { code?: string } }).error?.code
			: undefined;

	if (code && errorMessages[code]) {
		return errorMessages[code];
	}

	if (error instanceof Error && error.message) {
		return error.message;
	}

	if (typeof error === 'object' && error !== null && 'message' in error) {
		const message = (error as { message?: unknown }).message;
		if (typeof message === 'string' && message) return message;
	}

	return fallback;
}

export async function signOutUser(redirectTo = '/login'): Promise<void> {
	await authClient.signOut();
	await goto(redirectTo, { replaceState: true });
}
