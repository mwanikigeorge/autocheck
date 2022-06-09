<template>
  <div
    class="carcard bg-white border prose prose-img:m-0 prose-hr:mb-3 prose-hr:mt-1 prose-a:no-underline border-gray-300 p-3 rounded-lg hover:shadow"
  >
    <nuxt-link :to="car.id">
      <div class="thumbnail aspect-video rounded-lg overflow-hidden">
        <!-- placeholder image -->
        <img class="rounded-lg" :src="car.imageUrl" :alt="car.title" />
      </div>
      <div class="caption flex flex-col">
        <h4 class="font-bold text-autocheck-heading text-sm">
          {{ car.marketplacePrice | toCurrency }}
        </h4>
        <h4 class="font-bold text-autocheck-heading text-sm">
          {{ car.title }} - {{ car.year }}
        </h4>

        <p v-if="car.gradeScore" class="text-sm flex space-x-2 items-center">
          <span class="flex items-center capitalize">
            <img src="@/static/road.png" alt="road" /> &nbsp; {{ car.mileage }}
            {{ car.mileageUnit }}</span
          >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-stars"
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
              <path
                d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
              />
              <path
                d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
              />
              <path
                d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
              /></svg></span
          ><span>Grade ({{ car.gradeScore.toFixed(1) }})</span>
        </p>
        <p class="text-sm flex space-x-2 items-center" v-else>
          <span class="flex items-center capitalize">
            <img src="@/static/road.png" alt="road" /> &nbsp; {{ car.mileage }}
            {{ car.mileageUnit }}</span
          >
          <span>Grade (N/A)</span>
        </p>
      </div>
      <hr />
      <div class="footer flex flex-row text-sm space-x-4 text-slate-500">
        <span class="flex items-center capitalize">
          <img src="@/static/pump.png" alt="pump" />&nbsp;
          {{ car.fuelType }}</span
        >
        <span class="flex items-center capitalize">
          <img src="@/static/gear.png" alt="gears" /> &nbsp;
          {{ car.transmission }}</span
        >
      </div>
    </nuxt-link>
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
