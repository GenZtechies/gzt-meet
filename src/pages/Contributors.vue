<template>
    <main class="flex flex-col justify-center min-h-full py-10 md:py-0">
        <h1 class="text-5xl md:text-6xl text-center text-gray-900 font-semibold">The team!</h1>

        <div class="grid grid-cols-1 lg:grid-cols-2 w-3/4 m-auto py-5 gap-5">
            <div v-for="member in members" :key="member.id" class="bg-contain w-56 h-56 lg:w-64 lg:h-64 mx-auto my-4 rounded-full" :style="{ 'background-image': `url('${member.avatar_url}')` }" >
                <h2 class="text-center text-white text-2xl font-semibold bg-green-600 rounded relative top-full p-1">{{ member.login }}</h2>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    mounted() {
        fetch('https://api.github.com/repos/genztechies/gzt-meet/contributors')
            .then(response => response.json())
            .then(data => {
                this.members = data.reverse();
            })
            .catch(error => console.error(error));
    },
    data(){
        return {
            members: []
        }
    }
}
</script>