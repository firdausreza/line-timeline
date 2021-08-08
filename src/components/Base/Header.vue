<template>
  <nav class="flex flex-row bg-transparent justify-between items-center px-16 py-3">
    <h2 class="text-2xl font-bold">
      <span class="text-green-400">LINE </span><span class="text-black">TIMELINE</span>
    </h2>
    <div class="wrapper flex flex-row">
      <img src="@/assets/img/bell.svg" class="ml-4" width="38" height="38">
      <img src="@/assets/img/friends.svg" class="ml-4" width="38" height="38">
      <img src="@/assets/img/profile-user.svg" class="ml-4" width="38" height="38">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>