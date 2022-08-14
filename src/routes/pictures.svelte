<script lang="ts">
  import Content from '$components/Content.svelte'
  import Carousel from '$components/Carousel.svelte'
  import images from '$lib/pictures'
  const title = 'Pictures'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title} constrain={false}>
  <Carousel {images} />
</Content>