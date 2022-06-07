<template>
  <div
    class="carcard border prose prose-img:m-0 prose-hr:m-1 border-gray-300 p-3 rounded-lg"
  >
    <div class="thumbnail aspect-video rounded-lg overflow-hidden">
      <!-- placeholder image -->
      <img class="rounded-lg" :src="car.imageUrl" :alt="car.title" />
    </div>
    <div class="caption flex flex-col">
      <h4 class="font-bold text-autocheck-heading text-sm">
        {{ car.marketplacePrice }}
      </h4>
      <h4 class="font-bold text-autocheck-heading text-sm">
        {{ car.title }} - {{ car.year }}
      </h4>

      <p v-if="car.gradeScore" class="text-sm">
        Grade ({{ car.gradeScore.toFixed(1) }})
      </p>
      <p class="text-sm" v-else>Grade (N/A)</p>
    </div>
    <hr />
    <div class="footer flex flex-row text-sm text-slate-500">
      <span>{{ car.mileage }} {{ car.mileageUnit }}</span>
      <span
        ><span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-charging-pile"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#F5C34B"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="7" x2="17" y2="8" />
            <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
            <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
            <path d="M9 11.5l-1.5 2.5h3l-1.5 2.5" />
            <line x1="3" y1="20" x2="15" y2="20" />
            <line x1="4" y1="8" x2="14" y2="8" /></svg></span
        >{{ car.fuelType }}</span
      >
      <span>{{ car.transmission }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatGrade(grade) {
      return grade.toFixed(2)
    },
  },
}
</script>
<style>
.carcard {
  /* width: 300px; */
}
</style>
