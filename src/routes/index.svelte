<script lang="ts">
  import Logo from '$assets/resources/logo512-cropped.png'
  import Backdrop from '$assets/pictures/m-air.jpg'
  import InstagramEmbed from '$components/InstagramEmbed.svelte'
</script>

<svelte:head>
  <title>Michigan Autonomous Aerial Vehicles</title>
</svelte:head>

<div class="w-full h-80 overflow-hidden flex justify-center items-center">
  <img src={Logo} alt="Big Logo" class="absolute w-72" />
  <img src={Backdrop} alt="M-Air" class="-z-10 opacity-60 w-full h-full object-cover" />
</div>
<div class="p-12 sm:p-24 flex flex-col gap-8">
  <h1 class="text-3xl font-semibold">Michigan Autonomous Aerial Vehicles</h1>
  <p>
    Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that competes in the International Aerial Robotics Competition.
  </p>
  <p>
    MAAV strives to provide practical, hands-on experience for students by competing annually in the International Aerial Robotics Competition (IARC). Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) while furthering multiple areas of Computer Science and Aerospace Engineering research. Learn more about the current and past missions of the International Aerial Robotics Competition by clicking <a href="http://www.aerialroboticscompetition.org/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.
  </p>
  <p>
    Have a question? Send us an email at <a href="mailto:maav-leads@umich.org" class="underline hover:text-blue-600 active:text-blue-800">maav-leads@umich.edu</a>.
  </p>
</div>
<InstagramEmbed />