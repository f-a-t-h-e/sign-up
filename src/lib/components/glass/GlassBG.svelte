<script lang="ts">
	export let size: 'full' | 'auto' = 'auto';
</script>

{#if size === 'full'}
	<div class="parent h-full w-full rounded-3xl back-g-shadow">
		<div class="main h-full w-full">
			<slot />
		</div>
	</div>
{:else}
	<div class="rounded-3xl back-g-shadow">
		<div class="main">
			<slot />
		</div>
	</div>
{/if}

<style lang="postcss">
	/* input{
        @apply hover:bg-slate-600
    } */
	.main {
		@apply relative rounded-3xl border-[2.5px] border-[#2990cd] bg-sky-700;
	}
	.main:after {
		@apply absolute -left-[2.5px] top-1/4 block h-7 w-0;
		content: '';
		box-shadow:
			0px 0px 10px 3px #64f5ff;
	}
	.main:before {
		@apply absolute -right-[2.5px] top-2/3 block h-10 w-0;
		content: '';
		box-shadow:
        -3px 0px 48px 17px #64f5ff;
	}
</style>
