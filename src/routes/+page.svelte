<script lang="ts">
	import GlassBg from '$lib/components/glass/GlassBG.svelte';
	import InputMsg from './InputMsg.svelte';
	import LockSvg from './LockSvg.svelte';
	import MailSvg from './MailSvg.svelte';
	import UserSvg from './UserSvg.svelte';

	let username: string, email: string, password: string;
	$: names = (username || "").match(/[\u0621-\u064A\u0660-\u0669]+/g)?.join(" ") || []
</script>

<svelte:head>
	<title>أنضم إلينا</title>
	<meta name="description" content="أنشئ حساب و أنضم إلينا الأن" />
</svelte:head>

<div
	class="flex h-screen w-screen items-center justify-center bg-gradient-to-t from-purple-100 to-red-500"
>
	<!-- <div class="h-[25rem] w-[20rem] bg-red-500"> -->
	<GlassBg size="auto">
		<h1 class="m-1 mt-3 text-center text-2xl text-white">أنضم إلينا</h1>
		<form class="">
			<div class="" class:invalid={(names.length < 1) && !!username}>
				<label for="username">
					<input
						bind:value={username}
						dir="rtl"
						type="text"
						name="username"
						id="username"
						required
						minlength="2"
						placeholder="اسم المستخدم"
					/><span><UserSvg /></span></label
				>
				<InputMsg >
					ادخل اسم مستخدم
				</InputMsg>
			</div>
			<div class="" class:invalid={!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email || "")) && !!email}>
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
				<div class="err">أدخل بريد إلكتروني صالح</div>
			</div>
			<div class="" class:invalid={!(/.{6,50}/.test(password || "")) && !!password}>
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
				<div class="err">أدخل كلمة مرور قوية</div>
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
	.err {
		@apply hidden
	}
	form .invalid .err{
		@apply block
	}
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
	/*
	form > input {
		@apply col-[1/2] ;
	}
	form > .err-b {
		@apply col-[1/3] border border-[#49c7e8];
	}*/
	label:invalid * {
		@apply border border-red-300;
	}
	form .err {
		@apply text-center text-red-600;
	}
	/*
	form > label[for='username'] {
		@apply row-[1/2];
	}
	form > input[name='username'] {
		@apply row-[1/2];
	}
	form > label[for='email'] {
		@apply row-[3/4];
	}
	form > input[name='email'] {
		@apply row-[3/4];
	}
	form > label[for='password'] {
		@apply row-[5/6];
	}
	form > input[name='password'] {
		@apply row-[5/6];
	}
	form > div:nth-child(7) {
		grid-area: 4 / 1 / 5 / 3;
	}
	form > div:nth-child(8) {
		grid-area: 5 / 1 / 6 / 3;
	} */
</style>
