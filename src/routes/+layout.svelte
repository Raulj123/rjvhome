<script>
	// @ts-nocheck
	import '../app.css';
	import { page } from '$app/stores';

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
</script>

<nav>
	<ul class="sidebar">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/experience">Experience</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>

	<ul>
		<li class="hide"><a href="/" class:active={route == '/'}>Home</a></li>
		<li class="hide"><a href="/about" class:active={route == '/about'}>About</a></li>
		<li class="hide"><a href="/projects" class:active={route == '/projects'}>Projects</a></li>
		<li class="hide"><a href="/experience" class:active={route == '/experience'}>Experience</a></li>
		<li class="hide"><a href="/contact" class:active={route == '/contact'}>Contact</a></li>
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
</nav>
<slot />
