<script lang="ts">
  import Content from '$components/Content.svelte'
  const title = 'Blog'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <p>
    Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that competes in the International Aerial Robotics Competition.
  </p>
  <p>
    MAAV strives to provide practical, hands-on experience for students by competing annually in the International Aerial Robotics Competition (IARC). Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) while furthering multiple areas of Computer Science and Aerospace Engineering research. Learn more about the current and past missions of the International Aerial Robotics Competition by clicking <a href="http://www.aerialroboticscompetition.org/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.
  </p>
</Content>