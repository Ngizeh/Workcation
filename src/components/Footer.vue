<template>
    <div class="">
        <div class="bg-gray-800 lg:pt-6">
            <div class="sm:flex sm:text-sm lg:h-64">
                <div class="text-gray-500 sm:w-1/4 sm:py-0 py-4 mx-3 lg:mx-8">
                    <h2 class="px-1 uppercase text-lg font-normal py-2 border-b border-gray-700 leading-loose tracking-wide">Useful Links</h2>
                    <div class="sm:flex">
                        <ul class="flex justify-between sm:flex sm:flex-col lg:pt-2">
                            <li class="my-2 py-2 px-2 sm:py-0 sm:my-1 sm:hover:text-gray-300 hover:bg-gray-700 text-gray-400 rounded-lg"><a href="#">Listings</a></li>
                            <li class="my-2 py-2 px-2 sm:py-0 sm:my-1 sm:hover:text-gray-300 hover:bg-gray-700 text-gray-400 rounded-lg"><a href="#">About Us</a></li>
                            <li class="my-2 py-2 px-2 sm:py-0 sm:my-1 sm:hover:text-gray-300 hover:bg-gray-700 text-gray-400 rounded-lg"><a href="#">Trips</a></li>
                            <li class="my-2 py-2 px-2 sm:py-0 sm:my-1 sm:hover:text-gray-300 hover:bg-gray-700 text-gray-400 rounded-lg"><a href="#">Messages</a></li>
                        </ul>
                    </div>
                </div>
                <div class="text-gray-500 sm:w-1/4 mx-3">
                    <h2 class="px-1 uppercase text-lg font-normal py-2 border-b border-gray-700 leading-loose tracking-wide">News Letter</h2>
                    <input type="text" class="mt-4 py-2 px-4 w-full rounded-lg bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-500" placeholder="Enter your Email Address">
                    <div class="my-5">
                        <button type="button" class="py-2 px-3 block w-full rounded-lg text-white font-medium bg-indigo-500">Notify Me!</button>
                    </div>
                </div>
                <div class="text-gray-500 sm:w-1/4  mx-3">
                    <h2 class="px-1 uppercase text-lg font-normal  py-2 border-b border-gray-700 leading-loose tracking-widr">Follow US</h2>
                    <div class="flex justify-start mt-6">
                        <p class="pr-6">
                            <i class="fab fa-facebook fa-2x"></i>
                        </p>
                        <p class="pr-6">
                            <i class="fab fa-twitter fa-2x"></i>
                        </p>
                        <p class="pr-6">
                            <i class="fab fa-instagram fa-2x"></i>
                        </p>
                        <p class="pr-6">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </p>
                    </div> 
                </div>
                <div class="text-gray-500 sm:w-1/4 sm:pt-0 pt-4 pb-8 mx-3">
                    <h2 class="px-1 uppercase text-lg font-normal py-2 border-b border-gray-700 leading-loose tracking-wide">Contact Us</h2>
                    <h2 class="my-1 font-semibold leading-loose">Workcation Limited Co.</h2>
                    <p class="mt-2 text-xs font-light"> 
                        <i class="fas fa-map-marker-alt text-gray-600"></i>
                        <span class="text-gray-200 text-base mx-2 sm:text-sm"> Thika, Ngoingwa Kenya</span>
                    </p>
                    <p class="mt-2 text-xs font-light"> 
                        <i class="fas fa-envelope text-gray-600"></i>
                        <span class="text-gray-200 text-base mx-2 sm:text-sm"> Workcation@mail.ke.org</span>
                    </p>
                    <p class="mt-2 text-xs font-light"> 
                        <i class="fas fa-phone-alt text-gray-600"></i>
                        <span class="text-gray-200 text-base mx-2 sm:text-sm"> +254 725 688 030</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-gray-900 py-4 flex justify-center text-gray-400 text-sm sm:text-lg">
            <div>
                Workcation &copy; {{ date.getFullYear('Y')}} . All rights Preserved
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            date : new Date()
        }
    }
}
</script>

<style lang="css">
 .height{
     height: 24rem;
 }
</style>