<script>
	import '../app.css';
	import { Github, Mail, Linkedin } from 'lucide-svelte';
</script>

<div class="main">
	<div class="hero-container">
		<div class="hero-section bio">
			<h1 class="hero-title">おはよう!</h1>
			<p class="hero-text">
				Hi, I'm Raul. 20 something y/o who codes professionally & for fun. I enjoy anything to do
				with computers. Currently building internal tools, backend services, and automation
				solutions @Beckman
			</p>
			<p class="hero-text">
				I have <a href="https://github.com/Raulj123/MyDogsWebsite">two dogs</a> and play Fornite when
				I can. Reach out for a chat or a 1v1.
			</p>
		</div>
		<div class="hero-section">
			<img src="/images/pfp.jpg" alt="me" />
		</div>
	</div>
</div>

<div class="contact-container">
	<h1>Contact</h1>
	<p>I dont use Twitter. All other socials are inactive. Someone convince me to get Mastodon.</p>
	<ul style="list-style-type: none; padding:0; margin:0;">
		<li>
			<div class="icons">
				<Github />
				<p class="iconName"><a href="https://github.com/Raulj123/">GitHub</a></p>
			</div>
		</li>
		<li>
			<div class="icons">
				<Linkedin />
				<p class="iconName"><a href="https://www.linkedin.com/in/rauljarquin/">LinkedIn</a></p>
			</div>
		</li>
		<li>
			<div class="icons">
				<Mail />
				<p class="iconName"><a href="mailto:jarquinr121@gmail.com" target="_blank">Email</a></p>
			</div>
		</li>
	</ul>
</div>

<div class="stalk">
	<p>
		Psss Im tracking you ....
		<a href="https://umami.libme.duckdns.org/share/Dt6f3Ebkj1BHBVkS/rjvhome.vercel.app">Umami</a>
	</p>
</div>
