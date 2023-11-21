<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Qui sunt adipisicing commodo laborum eu adipisicing duis dolor sint
      eiusmod quis anim officia occaecat. Aliquip occaecat ad sint cillum dolore
      irure eu do mollit culpa cupidatat esse nostrud laboris. Nulla commodo in
      exercitation irure elit et elit deserunt minim laborum deserunt aliquip.
      Ullamco id velit sint fugiat id ullamco sunt do culpa ad pariatur.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
