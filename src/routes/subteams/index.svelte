<script lang="ts">
  import Content from '$components/Content.svelte'
  import basePath from '$lib/basePath'
  import Office from '$assets/images/office.jpg'
  const title = 'Subteams'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <div class="flex justify-center items-center flex-wrap gap-4 font-light text-xl">
    <a href={`${basePath}/subteams/software/`} class="hover:text-blue-600 active:text-blue-800">Software</a>
    <div class="border-l-2 self-stretch" />
    <a href={`${basePath}/subteams/structures/`} class="hover:text-blue-600 active:text-blue-800">Structures</a>
    <div class="border-l-2 self-stretch" />
    <a href={`${basePath}/subteams/embedded/`} class="hover:text-blue-600 active:text-blue-800">Embedded Systems</a>
  </div>
  <img src={Office} alt="MAAV Office" class="w-11/12">
  <p>
    We split our work into subteams covering the three major aspects of the project: software, structures, and embedded systems. Each subteam is responsible for a different aspect of the project, and each subteam is led by a team lead. The team leads are responsible for managing their subteam and ensuring that the subteam is on track to meet its goals. The team leads are also responsible for communicating with the other subteams to ensure that the project is on track to meet its goals.
  </p>
</Content>