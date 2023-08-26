<script lang="ts">
	export let state: 'pending' | 'warning' | 'good' | 'bad' | 'loading' = 'pending';
	const states: ('pending' | 'warning' | 'good' | 'bad' | 'loading')[] = [
		'pending',
		'warning',
		'good',
		'bad',
		'loading'
	];
	let index = 0;
</script>

<div class="{state} flex h-7 items-center justify-between p-1">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<svg
		class="h-[90%]"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		on:click={() => {
			state = states[index++ % states.length];
		}}
	>
		<g class="relative">
			<title>حالة المدخلات</title>
			<!-- The circle -->
			<path class="borderer"
				stroke-width="4"
				fill-opacity=".3"
				d="m50,92.09184c-22.83234,0 -41.32653,-18.83668 -41.32653,-42.09184c0,-23.25516 18.49419,-42.09184 41.32653,-42.09184c22.83234,0 41.32653,18.83668 41.32653,42.09184c0,23.25516 -18.49419,42.09184 -41.32653,42.09184z"
			/>
			<line
				class="tleft"
				y2="68.87754878234864"
				x2="30.612243059082033"
				y1="31.122448782348627"
				x1="69.38775305908203"
				fill-opacity="0"
				stroke-width="4"
				fill="none"
			></line>
			<line
				class="tright"
				y2="69.64285363281249"
				x2="70.40816531066895"
				y1="30.357143632812495"
				x1="29.59183531066894"
				fill-opacity="0"
				stroke-width="4"
				fill="none"
			></line>
			<path
				fill-opacity="0"
				class="correct"
				stroke-width="4"
				d="M28.365386372575408,34.32692042394328 C34.519232434722106,43.942304896047496 38.36538622356379,61.24999694583511 39.173078848149025,65.67307485161118 C48.94230914287842,52.78845861038339 62.59615509326643,39.32692034943748 71.63461649704439,34.326920423943285 "
			/>
			<path
				d="m49.08935,62.52091l10.7578,9.37795l-7.30979,6.86836l-10.0682,-5.01918l6.62019,-11.22712z"
				class="dot"
			/>
			<path
				d="m43.18741,18.00038l13.62519,1.07144l-1.9612,37.23251l-10.42533,8.57151l-1.23866,-46.87546z"
				class="ln"
			/>
			<path
				d="M52.033547130504196,77.64491195640484 L43.415140993947745,77.64491195640484 L43.415140993947745,68.63323256903998 L52.033547130504196,68.63323256903998 L52.033547130504196,77.64491195640484 zM52.033547130504196,59.00995891188394 L52.033547130504196,61.99082018192769 L43.415140993947745,61.99082018192769 L43.415140993947745,58.322056957337836 C43.415140993947745,47.25026832016587 54.97456594276417,45.495993964976584 54.97456594276417,37.63433892956921 C54.97456594276417,34.045579122842405 52.033542800197225,31.294023224278305 48.17766439667814,31.294023224278305 C44.185675789238545,31.294023224278305 40.680379025753346,34.50061213183708 40.680379025753346,34.50061213183708 L35.777627297317565,27.854570091136246 C35.777627297317565,27.854570091136246 40.61024537652488,22.355087947598882 48.947354782142625,22.355087947598882 C56.86951686718449,22.355087947598882 64.22236918448,27.701704563446782 64.22236918448,36.7098486965355 C64.22656958209495,49.31761327732454 52.033542800197225,50.76615657713572 52.033542800197225,59.00995891188394 L52.033547130504196,59.00995891188394 z"
				stroke="0"
				class="ec"
			></path>
			<ellipse
				class="spinner"
				stroke-width="4"
                fill-opacity=0
				cx="50.00000160806941"
				cy="49.999999313062204"
				rx="30.07662790431374"
				ry="31.41762405291372"
			/>
			<path
				class="spinner"
				fill="none"
				fill-opacity="0"
				d="M 13.510700994245479 54.38287618176068 C 11.709120003400024 33.49389965090947 26.15232937948409 11.924930912328044 53.55235598750353 12.728916086724276"
			/>
		</g>
	</svg>
	<slot class="w-full grow">حالة المدخلات</slot>
</div>

<style lang="postcss">
	/* svg {
		@apply fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
	} */
	@tailwind components;
	@layer components {
		.pending {
			@apply bg-orange-500/30 fill-orange-500 stroke-orange-500 text-orange-500;
		}
		.pending path.ec {
			@apply animate-elastic translate-x-0 translate-y-0;
		}
		.warning {
			@apply bg-red-400/30 fill-red-400 stroke-red-400 text-red-400;
		}
		.warning .ln {
			@apply animate-elastic translate-x-0 translate-y-0;
		}
		.warning .dot {
			@apply translate-x-0 translate-y-0 delay-0;
		}
		.good {
			@apply bg-green-500/30 fill-green-500 stroke-green-500 text-green-500;
		}
		.good path.correct {
			@apply stroke-[4px];
		}
		.bad {
			@apply bg-red-500/30 fill-red-500 stroke-red-500 text-red-500;
		}
		.bad line.tleft,
		.bad line.tright {
			@apply translate-x-0 translate-y-0;
		}

		.loading {
			@apply bg-blue-500/30  fill-blue-500 stroke-blue-500 text-blue-500;
		}
        .loading path.borderer {
            @apply fill-[blue] stroke-0
        }
		.loading path.spinner,
		.loading ellipse.spinner {
			@apply stroke-[10px];
		}
	}
	line.tleft {
		@apply absolute -translate-x-[200%] translate-y-[200%] stroke-red-500 transition-all duration-300 ease-in-out;
	}
	line.tright {
		@apply translate-x-[200%] translate-y-[200%] stroke-red-500 transition-all duration-300 ease-in-out;
	}
	path.correct {
		@apply stroke-0 transition-all;
	}
	path.ln {
		@apply -translate-x-[200%] translate-y-[200%] fill-red-400 stroke-0 transition-all duration-300 ease-in-out;
	}

	path.dot {
		@apply -translate-x-[200%] translate-y-[200%] fill-red-400 stroke-0 transition-all delay-200 duration-300 ease-in-out;
	}
	path.ec {
		@apply -translate-y-[200%] translate-x-[200%] stroke-0 transition-all duration-300 ease-in-out;
	}
	path.spinner {
		@apply origin-center animate-spin fill-none stroke-0;
	}
	ellipse.spinner {
		@apply stroke-0 fill-transparent;
	}
</style>
