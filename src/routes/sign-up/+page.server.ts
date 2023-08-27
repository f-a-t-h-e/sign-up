import type { Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, locals, request }) => {
		const form = await request.formData();
		const username = String(form.get('username') || ''),
			email = String(form.get('email') || ''),
			password = String(form.get('password') || '');

		let names = username.match(/[\u0621-\u064A\u0660-\u0669]{2,}/g)?.join(' ') || [];
		let isNameValid = names.length > 1;
		let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
		let isPasswordValid = /.{6,50}/.test(password);

        await new Promise((resolve) =>
				setTimeout(() => {
					resolve(true);
				}, 1000)
			);

        if (isNameValid && isEmailValid && isPasswordValid) {
            return {
                success: true
            }
        }
		return { 
            errors: {
                username: isNameValid ? undefined : "غير هذا الاسم",
                email: isEmailValid ? undefined : "غير هذا البريد",
                password: isPasswordValid ? undefined : "غير كلمة المرور هذه"
            }
         };
	} 
} satisfies Actions;
