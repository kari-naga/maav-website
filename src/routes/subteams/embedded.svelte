<script lang="ts">
  import Content from '$components/Content.svelte'
  import basePath from '$lib/basePath'
  import Circuits from '$assets/images/circuits.png'
  const title = 'Embedded Systems'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <a href={`${basePath}/subteams/`} class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a>
  <img src={Circuits} alt="Circuit Board" class="w-11/12">
  <h3 class="text-xl font-medium">Circuitry</h3>
  <p>
    The Embedded Systems subteam designs and builds the vehicles' electrical hardware and electronics for testing motors and materials. The vehicles' printed circuit boards (PCB) have to provide platforms for the control software to run and communicate with the navigation software, as well as manage the safety of the batteries, motors, and operators. We design with Eagle and use Subversion for collaboration.
  </p>
  <h3 class="text-xl font-medium">Driver Software</h3>
  <p>
    Embedded Systems also develops driver sofware for interfacing with the low level sensors on the vehicle for our Texas Instruments TIVA Microprocessor. This subteam works closely with circuits to ensure reliable sensor communication and data throughput.
  </p>
</Content>