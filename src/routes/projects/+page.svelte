<script lang="ts">
	import '../../app.css';
	import { projects } from './projects';
</script>

<div class="tlistdiv" style="text-align: left;">
	<h2 class="white">Projects</h2>
	<p>
		A collection of programming projects I've done. You can find more on my <a
			href="https://github.com/Raulj123?tab=repositories">GitHub!</a
		>
	</p>
	{#each projects as project}
		<div class="itemProject">
			<div class="name">
				<h4 class="blue">
					{project.name}
					<span style="color: white; margin:2px;">|</span
					>{#each project.language as l, index (index !== project.language.length - 1)}
						<span class="lang"
							>{l}<span style="color: white;"
								>{index !== project.language.length - 1 ? ',' : ''}</span
							></span
						>
					{/each}
				</h4>
				<h4 style="margin-left: auto;"><a href={project.href}>Link</a></h4>
			</div>
			<div class="dec">
				<p style="margin-right:10px;">
					{project.description}
				</p>

				<img src={project.image} alt="project" />
			</div>
		</div>
	{/each}
</div>
