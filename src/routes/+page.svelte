<script>
	// @ts-nocheck
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		var smileImage = document.querySelector('.smile');

		if (smileImage) {
			smileImage.addEventListener('mouseenter', function () {
				if (smileImage && !smileImage.classList.contains('spin')) {
					smileImage.classList.add('spin');

					// Wait for the animation to finish, then remove the spin class
					smileImage.addEventListener(
						'animationend',
						function () {
							if (smileImage) {
								smileImage.classList.remove('spin');
							}
						},
						{ once: true }
					);
				}
			});
		}
	});
</script>

<div class="main">
	<div class="hero-container">
		<div class="hero-text">
			<img class="smile" src="/images/smile.svg" alt="smile" />
			<h1 class="text-h">
				Hi, I'm
				<span class="text-name">Raul!</span>
			</h1>
		</div>
		<p class="text-p">I'm a 4th year Computer science major🎓 and past Full Stack Developer 👨🏽‍💻</p>
	</div>
	<div class="main">
		<div class="grid-container">
			<a href="/about" class="grid-item">
				<img class="card-img" src="/images/about.svg" alt="smile" />
				<h2 class="card-text">About</h2>
			</a>

			<a href="/projects" class="grid-item">
				<img class="card-img" src="images/projects.svg" alt="smile" />
				<h2 class="card-text">Projects</h2>
			</a>

			<a href="/experience" class="grid-item">
				<img class="card-img" src="images/exp.svg" alt="smile" />
				<h2 class="card-text">Experience</h2>
			</a>

			<a href="/contact" class="grid-item">
				<img class="card-img" src="images/contact.svg" alt="smile" />
				<h2 class="card-text">Contact</h2>
			</a>

		</div>
	</div>
</div>
