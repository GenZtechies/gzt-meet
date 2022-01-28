<template>
    <div>
        <nav class="relative mx-auto">
        <div class="flex justify-between bg-transparent text-black w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                <a class="text-3xl font-bold font-heading" href="/">
                    Gzt-Web
                </a>
                <ul class="flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <li class="hidden md:block"><a class="text-sm" href="/">How It Works</a></li>
                    <li class="hidden md:block"><a class="text-sm" href="/">Team</a></li>
                </ul>
                <div class="flex space-x-5 items-center">
                    <a class="flex items-center" href="/new">
                        <button class="bg-green-600 px-5 py-2 rounded-full font-bold text-white text-sm">
                            Create A Meeting
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    </div>
</template>
<script>
export default {
    
}
</script>