<script>
	// @ts-nocheck
	import '../app.css';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	export let data;

	let sidebarOpen = false;

	function showSideBar() {
		const sidebar = document.querySelector('.sidebar');
		const main = document.querySelector('.main');
		sidebar.style.display = 'flex';
		sidebarOpen = true;
	}

	function close() {
		const sidebar = document.querySelector('.sidebar');
		sidebarOpen = false;
		sidebar.style.display = 'none';
	}

	let route = page.route;
	page.subscribe(($page) => {
		route = $page.route.id;
	});

	export function load({ url }) {
		return {
			url: url.pathname
		};
	}
</script>

<!-- <nav>
	<ul class="sidebar">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
	</ul>

	<ul>
		<li class="hide"><a href="/" class:active={route == '/'}>Home</a></li>
		<li class="hide"><a href="/about" class:active={route == '/about'}>About</a></li>
		{#if sidebarOpen}
			<li class="close">
				<button on:click={close}>
					<img src="/images/close.svg" alt="close" />
				</button>
			</li>
		{:else}
			<li class="menu-btn">
				<button on:click={showSideBar}>
					<img src="/images/menu.svg" alt="menu" />
				</button>
			</li>
		{/if}
	</ul>
</nav> -->

{#key data.url}
	<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
		<slot />
	</div>
{/key}
