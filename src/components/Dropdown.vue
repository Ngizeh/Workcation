<template>
  <div class="relative z-20">
        <button @click="toggle" type="button" class="block">
         <slot name="trigger"></slot>
        </button>
        <div :class="!isOpen ? 'sm:hidden' : 'sm:block'">
        <button @click="isOpen = false" class="hidden sm:fixed sm:inset-0 sm:block sm:w-full sm:h-full sm:cursor-default"></button>
         <slot name="dropdown"></slot>
        </div>
  </div>
</template>

<script>
export default {
data(){
	return {
		isOpen : false
	}
},
methods : {
	toggle(){
		this.isOpen = !this.isOpen 
	}
},
mounted() {
const onEscape = (e) => {
	if (!this.isOpen || e.key !=='Escape'){
		return
	}
	this.isOpen = false;
	}
	document.addEventListener('keydown', onEscape)

	this.$on('hook:destroyed', () => {
	document.addEventListener('keydown', onEscape)	
	})
},
}
</script>

<style>

</style>