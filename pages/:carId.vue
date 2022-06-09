<template>
  <div class="container mx-auto bg-slate-50 px-4 py-4 md:py-8">
    <h2
      class="flex text-sm md:text-3xl font-bold text-autocheck-blue mb-4 justify-between"
    >
      <span>{{ car.carName }}</span>
      <span>{{ car.marketplaceOldPrice | toCurrency }}</span>
    </h2>
    <div class="wrapper grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="main md:col-span-2">
        <div class="media aspect-video rounded-lg overflow-hidden">
          <!-- <img class="w-full" :src="car.imageUrl" alt="" /> -->

          <img class="w-full" :src="currentMedia" alt="" />
        </div>

        <ul class="flex flex-row mt-2 h-12 overflow-hidden">
          <li
            v-for="(image, index) in media"
            :key="index"
            @click="updateMedia(index)"
          >
            <img class="w-full cursor-pointer" :src="image" alt="" />
          </li>
        </ul>

        <div class="detail prose prose-ul:pl-0 rounded-lg p-6 mt-6 bg-white">
          <h4>Details</h4>
          <ul>
            <li class="flex border-b pb-2 justify-between">
              <span>Capacity</span
              ><span class="font-semibold">{{ car.ccMeasurement }} cc</span>
            </li>
            <li class="flex border-b pb-2 justify-between">
              <span>Engine Type</span
              ><span class="font-semibold">{{ car.engineType }}</span>
            </li>
            <li class="flex border-b pb-2 justify-between">
              <span>Fuel Type</span
              ><span class="font-semibold">{{ car.fuelType }}</span>
            </li>
            <li class="flex border-b pb-2 justify-between">
              <span>Condition</span
              ><span class="font-semibold">{{ car.sellingCondition }}</span>
            </li>
            <li class="flex border-b pb-2 justify-between">
              <span>Exterior Color</span
              ><span class="font-semibold">{{ car.exteriorColor }}</span>
            </li>
            <li class="flex border-b pb-2 justify-between">
              <span>Interior Color</span
              ><span class="font-semibold">{{ car.interiorColor }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar ring-1 p-4 rounded-md bg-white">
        <div class="notice prose-sm prose-hr:my-2 prose-img:mt-0">
          <p class="text-center p-2">
            All our cars go thought the 150+ point inspection and are verified.
            We manage the entire transaction on your behalf making it convenient
            and hassle free for you
          </p>
          <hr />
          <div class="finance" v-if="car.hasFinancing">
            <p class="font-semibold">Get finance for this car</p>
            <p>Our Patners</p>
            <div class="flex w-full">
              <img
                class="w-1/2"
                src="https://media.autochek.africa/file/qRXmxTa7.jpg"
                alt=""
              />
              <img
                class="w-1/2"
                src="https://media.autochek.africa/file/mv06bgAB.png"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div class="actions mt-4">
            <button
              class="py-2 px-8 w-full transition-all hover:bg-yellow-500 bg-autocheck-yellow text-autocheck-blue"
            >
              Book Test Drive
            </button>
            <button
              class="py-2 px-8 mt-4 w-full text-autocheck-yellow bg-autocheck-blue"
            >
              Apply Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'carDetail',

  data() {
    return {
      car: {},
      details: {},
      activeMedia: 0,
      media: [],
    }
  },
  created() {
    this.fetchCar()
    this.fetchCarMedia()
  },
  computed: {
    currentMedia() {
      return this.media[this.activeMedia]
    },
  },
  methods: {
    updateMedia(index) {
      this.activeMedia = index
    },
    async fetchCar() {
      const response = await fetch(
        `https://api.staging.myautochek.com/v1/inventory/car/${this.$route.params.carId}`
      )
      const data = await response.json()
      this.car = data

      let {
        ccMeasurement,
        gradeScore,
        city,
        fuelType,
        engineType,
        sellingCondition,
        hasFinancing,
        ownerType,
        wheelType,
        exteriorColor,
        interiorColor,
        loanValue,
        marketplacePriceTypeLabel,
      } = data
      this.details = {
        ccMeasurement,
        gradeScore,
        city,
        fuelType,
        engineType,
        sellingCondition,
        hasFinancing,
        ownerType,
        wheelType,
        exteriorColor,
        interiorColor,
        loanValue,
        marketplacePriceTypeLabel,
      }
      console.log(data)
    },
    async fetchCarMedia() {
      const response = await fetch(
        `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${this.$route.params.carId}`
      )
      const data = await response.json()
      data.carMediaList.forEach((media) => {
        this.media.push(media.url)
      })
    },
  },
}
</script>
