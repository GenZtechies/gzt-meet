<template>
    <nav class="relative mx-auto">
        <div class="flex justify-between bg-transparent text-black w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                <router-link class="logo text-3xl font-bold font-heading" to="/">
                    GenZ-Meet
                </router-link>
                <ul class="flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <li class="hidden md:block">
                        <router-link class="text-sm transition-all" to="/how-it-works">How It Works</router-link>
                    </li>
                    <li class="hidden md:block">
                        <router-link class="text-sm transition-all" to="/contributors">Contributors</router-link>
                    </li>
                </ul>
                <div class="flex space-x-5 items-center">
                    <router-link class="flex items-center" to="/new">
                        <button class="bg-green-600 px-5 py-2 rounded font-bold text-white text-sm">
                            Create New Meeting
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.router-link-active {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: rgb(22, 163, 74);
    text-decoration-thickness: 4px;
    text-underline-offset: 4px;
    font-size: 1em;
}
.logo.router-link-active {
    text-decoration: none;
    font-size: 1.875rem;
    line-height: 2.25rem;
}
</style>
