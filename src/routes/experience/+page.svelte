<script>
	import '../../app.css';
	import { jobs } from './jobs';
</script>

<div class="contain">
	<h2 class="white">Experience</h2>
	<p>
		I've had quite a few jobs in the past, doing everything from labor to customer service. Here,
		I'll highlight the ones that matter most to programming.
	</p>
	{#each jobs as job}
		<div style="margin-top: 20px;">
			<h3 class="white">{job.company}</h3>
			<div class="sec">
				<h4 style="margin-right: 10px;">{job.position}</h4>
				<h4 style="margin-left: auto;">{job.date}</h4>
			</div>
		</div>
		<ul class="jobdec">
			<li>{job.description}</li>
		</ul>
	{/each}
</div>
