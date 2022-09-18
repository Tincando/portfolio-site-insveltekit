<script>
	import ProjectCard from "../lib/components/project-card.svelte";

    export let data;
  </script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h1>Recent Projects by Me</h1>

<div>
    {#each data.projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
  </div>