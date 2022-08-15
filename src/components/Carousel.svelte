<script lang="ts">
  import { fade, crossfade } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import IconCaretLeftFill from '~icons/bi/caret-left-fill'
  import IconCaretRightFill from '~icons/bi/caret-right-fill'
  import IconCircle from '~icons/bi/circle'
  import IconCircleFill from '~icons/bi/circle-fill'
  import IconButton from './atomics/IconButton.svelte'
	export let images: { path: string, description: string }[]
  let selected = 0
  function prev() {
    selected = selected === 0 ? images.length - 1 : selected - 1
  }
  function next() {
    selected = (selected + 1) % images.length
  }
  const [ send, receive ] = crossfade({
    duration: 800,
    easing: quintOut,
  })
</script>

<div class="flex flex-col items-center gap-4">
  <div class="flex items-center gap-4">
    <IconButton title="Previous Image" handleClick={prev} innerClass="text-slate-500">
      <IconCaretLeftFill class="text-2xl" />
    </IconButton>
    <div class="relative w-[70vw] h-[65vh] flex justify-center items-center bg-black bg-opacity-90 shadow-md rounded-xl overflow-hidden">
      {#key selected}
        <img transition:fade|local={{ duration: 400 }} src={images[selected].path} alt={images[selected].description} class="absolute w-full h-full object-contain" />
      {/key}
    </div>
    <IconButton title="Next Image" handleClick={next} innerClass="text-slate-500">
      <IconCaretRightFill class="text-2xl" />
    </IconButton>
  </div>
  <div class="flex gap-2 flex-wrap">
    {#each images as _, i}
      <IconButton title={`Go to image ${i}`} handleClick={() => selected = i} innerClass="relative w-4 flex justify-center items-center text-xs text-slate-400">
        {#if i === selected}
          <div in:receive={{ key: i }} out:send={{ key: i }} class="absolute inset-0">
            <IconCircleFill />
          </div>
        {:else}
          <div in:receive={{ key: i }} out:send={{ key: i }} class="absolute inset-0">
            <IconCircle />
          </div>
        {/if}
      </IconButton>
    {/each}
  </div>
</div>