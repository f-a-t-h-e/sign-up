<script lang="ts">
	import GlassBg from '$lib/components/glass/GlassBG.svelte';
	import { beforeUpdate, onMount } from 'svelte';
	import InputMsg from '$lib/components/InputMsg.svelte';
	import LockSvg from '$lib/components/LockSvg.svelte';
	import { enhance } from '$app/forms';
	import MailSvg from '$lib/components/MailSvg.svelte';

	let email: string = '',
		password: string = '';
	$: isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	$: isPasswordValid = /.{6,50}/.test(password);
	const states: TState[] = ['default', 'invalid', 'submitting', 'succeeded', 'failed'];
	type TState = 'default' | 'invalid' | 'submitting' | 'succeeded' | 'failed';
	let state: TState = 'default';
	let isErr: boolean = false;

	async function submit() {
		state = 'submitting';
		/* @todo */
		// var arNumbers = '٠١٢٣٤٥٦٧٨٩',
		// 	reg_arNumbers = /^[\u0660-\u0669]{10}$/;
		if (!isEmailValid || !isPasswordValid) {
			state = 'invalid';
			return;
		}
		try {
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve(true);
				}, 1000)
			);
			state = 'succeeded';
			// redirect is handled from +layout.svelte
			// goto($page.data.redirect)
		} catch (error) {
			console.log(error);
			state = 'failed';
			return;
		}
	}
	let novalidate = false;
	onMount(() => {
		novalidate = true;
	});
	beforeUpdate(() => {
		// @todo : remove this and find a better solution
		// make sure that the state updates properly
		if (state === 'invalid' && !(!isEmailValid || !isPasswordValid)) {
			state = 'default';
			return;
		}
	});
</script>

<svelte:head>
	<title>سجل الدخول</title>
	<meta name="description" content="سجل الدخول و عد إلى حسابك" />
</svelte:head>

<div
	class="back-g"
>
	<!-- <div class="h-[25rem] w-[20rem] bg-red-500"> -->
	<GlassBg size="auto">
		<h1 class="m-1 mt-3 text-center text-2xl text-white">سجل الدخول</h1>
		<form {novalidate} class="" method="post" use:enhance={submit}>
			<div class="" class:invalid={!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && !!email}>
				<label for="email">
					<input
						bind:value={email}
						dir="rtl"
						type="email"
						name="email"
						id="email"
						placeholder="البريد الإلكتروني"
						required
					/><span><MailSvg /></span>
				</label>
				<InputMsg
					show={isErr}
					state={!email
						? 'warning'
						: !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
						? 'bad'
						: 'good'}
				>
					{!email
						? 'ادخل البريد'
						: !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
						? 'تأكد من هذا البريد'
						: 'هذا يبدو جيداً'}
				</InputMsg>
			</div>
			<div class="" class:invalid={!/.{6,50}/.test(password) && !!password}>
				<label for="password">
					<input
						bind:value={password}
						dir="rtl"
						type="password"
						name="password"
						id="password"
						required
						minlength="6"
						maxlength="50"
						placeholder="••••••"
					/><span><LockSvg /></span></label
				>
				<InputMsg
					show={isErr}
					state={!password ? 'warning' : !/.{6,50}/.test(password) ? 'bad' : 'good'}
				>
					{!password
						? 'ادخل كلمة مرور'
						: !/.{6,50}/.test(password)
						? 'ادخل كلمة مرور اقوى'
						: 'هذه جيده'}
				</InputMsg>
			</div>
			<div>
				<div class="flex justify-between">
					<a href="/sign-up" class="hover:underline">أنشئ حساب</a>
					<span>ليس لديك حساب ؟</span>
				</div>
				<div class="my-3 flex items-center justify-center">
					<button class="bg-black px-8 py-1">تسجيل</button>
				</div>
			</div>
		</form>
	</GlassBg>
	<!-- </div> -->
</div>

<style lang="postcss">
	form {
		@apply flex flex-col gap-3 p-5 text-white;
	}
	/* div {
		@apply flex items-center bg-black p-1;
	} */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-background-clip: text;
		-webkit-text-fill-color: #ffffff;
		transition: background-color 5000s ease-in-out 0s;
		box-shadow: inset 0 0 20px 20px #23232329;
	}

	form > div > label {
		@apply flex h-10 items-center gap-x-1 bg-black pr-1 [&_span]:h-7 [&_span]:w-7;
	}
	form > div > label > input {
		@apply bg-transparent p-1 pr-2 outline-none;
	}
</style>
