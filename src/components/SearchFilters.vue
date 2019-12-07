<template>
    <section class="bg-gray-800 xl:w-72">
        <div class="flex justify-between px-4 py-3 xl:hidden">
            <div class="relative max-w-xs w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </div>
                <input class="block w-full bg-gray-900 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:bg-white focus:text-gray-500" placeholder="Search by keywords">
            </div>
            <button @click="toggle()" class="inline-flex ml-4 bg-gray-700 shadow rounded-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline pl-3 pr-4 ">
                <svg class="h-6 w-6 fill-current text-gray-500 mt-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"/></svg>
                <span class="mt-2 text-white font-medium">Filters</span>
            </button>
        </div>
        <form :class="{'hidden' : isOpen , 'xl:block' : isOpen }" @submit.prevent="postData" class="xl:h-full xl:flex xl:flex-col xl:justify-between">
            <div class="lg:flex xl:block xl:overflow-y-auto">
                <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-l xl:border-t-0">
                    <div class="flex flex-wrap -mx-2">
                        <label class="block w-1/2 px-2 sm:w-1/2 lg:w-1/2">
                            <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
                            <select class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                        <label class="block w-1/2 px-3 lg:w-1/2">
                            <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
                            <select class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </label>
                    </div>
                    <div class="mt-4 sm:w-1/2 sm:mt-4 lg:mt-4 lg:w-full">
                        <label>
                            <span class="text-sm font-semibold text-gray-500">Price Range</span>
                            <select class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
                                <option>Up to $2,000</option>
                                <option>Up to $3,000</option>
                                </select>
                        </label>
                    </div>
                </div>
                <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-l">
                    <span class="text-sm font-semibold text-gray-500 block">Propetry Type</span>
                    <div class="sm:flex lg:block lg:mx-0">
                    <label class="flex items-center mt-3 sm:w-1/4 lg:w-full lg:px-0">
                        <input class="bg-gray-900 form-radio text-2xl" type="radio" name="propertyType" value="house">
                        <span class="ml-2 text-white">House</span>
                    </label>
                    <label class="flex items-center mt-3 sm:w-1/4 lg:w-full lg:px-0">
                        <input class="bg-gray-900 form-radio text-2xl" type="radio" name="propertyType" value="apartment">
                        <span class="ml-2 text-white">Apartment</span>
                    </label>
                    <label class="flex items-center mt-3 sm:w-1/4 lg:w-full lg:px-0">
                        <input class="bg-gray-900 form-radio text-2xl" type="radio" name="propertyType" value="pool">
                        <span class="ml-2 text-white">Pool</span>
                    </label>
                    <label class="flex items-center mt-3 sm:w-1/4 lg:w-full lg:px-0">
                        <input class="bg-gray-900 form-radio text-2xl" type="radio" name="propertyType" value="townhouse">
                        <span class="ml-2 text-white">TownHouse</span>
                    </label>
                    </div>
                </div>
                <div class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:w-full lg:border-l">
                    <span class="text-sm font-semibold text-gray-500 block">Amenities</span>
                    <div class="sm:flex sm:-mx-2 sm:flex-wrap">
                    <label class="flex sm:w-1/4 lg:w-1/2 xl:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="balcony">
                        <span class="text-white ml-2">Balcony</span>
                    </label>
                    <label class="flex sm:w-1/4 lg:w-1/2 xl:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="pool">
                        <span class="text-white ml-2">Pool</span>
                    </label>
                    <label class="flex sm:w-1/4 lg:w-1/2 xl:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="beach">
                        <span class="text-white ml-2">Beach</span>
                    </label>
                    <label class="flex sm:w-1/4 lg:w-1/2 xl:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="pet">
                        <span class="text-white ml-2">Pet friendly</span>
                    </label>
                    <label class="flex sm:w-1/4 lg:w-1/2 xl:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="kidFriendly">
                        <span class="text-white ml-2">Kid friendly</span>
                    </label>
                    <label class="flex sm:w-1/4 lg:w-1/2 xl:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="parking">
                        <span class="text-white ml-2">Parking</span>
                    </label>
                    <label class="flex sm:w-1/2 lg:w-full sm:px-2 items-center mt-3">
                        <input class="bg-gray-900 form-checkbox text-2xl" type="checkbox" name="airConditioning">
                        <span class="text-white ml-2">Air Conditioning</span>
                    </label>
                    </div>
                </div>
            </div>
            <div class="bg-gray-900 px-4 py-4">
                <button class="xl:w-full xl:block sm:w-auto block w-full bg-indigo-500 hover:bg-indigo:400 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
  data(){
      return {
          isOpen : true,
          xl : true
      }
  },
  methods : {
      toggle(){
          this.isOpen = !this.isOpen
      },
      postData() {
        return "Sometext";
      }
  },
}
</script>

<style>

</style>