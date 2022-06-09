<template>
  <div class="home">
    <div class="banner flex justify-center items-center text-white">
      <div class="overlay"></div>
      <!-- car search here -->
      <div class="serch-content">
        <h2
          class="text-white text-center mb-4 font-bold text-2xl md:text-3xl capitalize"
        >
          Search for your dream car
        </h2>
        <p class="text-center mb-4">Find it at the right price and advice.</p>
        <div class="search-form bg-white p-6 px-8 rounded">
          <form action="#" class="flex flex-row text-autocheck-blue">
            <div class="flex flex-col w-full lg:flex-row gap-4">
              <div class="form-group flex flex-col">
                <label class="text-autocheck-blue font-semibold" for="make">
                  Make
                </label>
                <select
                  name="make"
                  id="make"
                  class="w-full shadow-sm rounded-md"
                >
                  <option value="">Select Make</option>
                  <option
                    v-for="(make, index) in makes"
                    :key="index"
                    :value="make.id"
                  >
                    {{ make.name }}
                  </option>
                </select>
              </div>
              <div class="form-group flex flex-col">
                <label class="text-autocheck-blue font-semibold" for="min">
                  Min Price (Ksh)
                </label>
                <input
                  type="text"
                  id="min"
                  class="w-full border-gray-400 shadow-sm rounded-md"
                  placeholder="0"
                />
              </div>
              <div class="form-group flex flex-col">
                <label class="text-autocheck-blue font-semibold" for="max">
                  Max Price (Ksh)</label
                >

                <input
                  type="text"
                  id="max"
                  class="w-full rounded-md border-gray-400 shadow-sm"
                  placeholder="10,000,000"
                />
              </div>
              <div class="flex self-end">
                <button
                  class="px-4 py-2 rounded bg-autocheck-yellow text-autocheck-blue"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- featured cars  -->
    <div class="featured-cars container mx-auto pb-16">
      <h2 class="text-center my-10 font-bold text-3xl capitalize">
        Featured Cars
      </h2>

      <div class="featured-container gap-4 grid grid-cols-2 lg:grid-cols-4">
        <!-- sidebar filters here -->
        <div class="sidebar-filters col-span-2 lg:col-span-1 order-0">
          <div class="filters-container px-4">
            <h4
              class="text-left mb-4 border-b border-slate-300 font-semibold text-xl capitalize"
            >
              Filters
            </h4>
            <div class="filters-content">
              <div class="filter-item">
                <label class="text-autocheck-blue" for="make"> Make </label>
                <select
                  name="make"
                  id="make"
                  v-model="selectedMake"
                  class="w-full shadow-sm rounded-md"
                >
                  <option value="">Select Make</option>
                  <option
                    v-for="(make, index) in makes"
                    :key="index"
                    :value="make.name"
                  >
                    {{ make.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- car grid here -->
        <div class="cars-grid col-span-2 lg:col-span-3 grid">
          <div
            class="grid grid-cols-1 col-start-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <CarCard
              v-for="(car, index) in filteredMake"
              :key="index"
              :car="car"
            />
          </div>
          <div class="col-span-3 text-center">
            <button
              class="px-10 py-2 rounded-md bg-autocheck-yellow text-autocheck-blue"
              @click="fetchMoreCars"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      selectedMake: '',
    }
  },
  created() {
    this.fetchMake()
    this.fetchAllCars()
  },
  computed: {
    ...mapGetters({
      makes: 'CarMakes',
      cars: 'FilteredCars',
    }),
    filteredMake() {
      return this.cars(this.selectedMake)
    },
  },
  methods: {
    fetchMake() {
      this.$store.dispatch('getCarMakes')
    },
    fetchAllCars() {
      this.$store.dispatch('getAllCars')
    },
    fetchMoreCars() {
      this.$store.dispatch('getMoreCars')
    },
  },
})
</script>
<style>
.banner {
  position: relative;
  height: 70vh;
  background-image: url('@/assets/imgs/autocheck.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(6, 24, 65, 0.8),
    rgba(6, 24, 65, 0.5)
  );
}
.serch-content {
  z-index: 2;
}
</style>
