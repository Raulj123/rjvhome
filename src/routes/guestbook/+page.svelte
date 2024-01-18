<script lang="ts">
	// @ts-nocheck
	import '../../app.css';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ signs } = data);
</script>

<div class="contain">
	<h2 class="white">GuestBook</h2>
	<p>Sign in and leave me a message!</p>
	{#if $page.data.session?.user}
		<form method="POST" action="?/sign">
			<input name="name" type="hidden" value={$page.data.session.user.name} />
			<div class="wrapper">
				<input name="message" placeholder="hello?" type="text" value={$page.data.session.user.id} />
				<button class="white">Sign</button>
			</div>
		</form>
		<button class="guestOut" on:click={signOut}>Sign out</button>
	{:else}
		<button class="signBtn" on:click={() => signIn('github')}>
			<img class="signImg" src="/icons/github.svg" alt="git" />
			Sign in with GitHub
		</button>
	{/if}
	{#each signs.slice().reverse() as s}
		<div class="guestRow">
			<p class="guestName">{s.userName}: <span class="guestCon">{s.content}</span></p>
		</div>
	{/each}
</div>
