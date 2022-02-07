<template>
    <main >
        <form action="" class="flex justify-center items-center w-full h-screen bg-zinc-400 mt-[-5.3em]">
            <div class="relative z-100 bg-white w-4/5 max-w-lg opacity-100 p-3 rounded-md shadow">
                <h1 class="text-2xl text-center text-gray-900 font-bold my-3">This meeting has ended</h1>
                <p class="text-center text-gray-800">Would you mind dropping a review? It would help us make the experience better for you.</p>
                <textarea name="" id="" cols="30" rows="4" class="p-2 border w-full my-3 rounded-sm focus:outline-zinc-400" placeholder="Your review here..."></textarea>
                <div class="flex flex-col space-y-2 mt-2">
                    <button class="bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-200 w-full p-2 rounded text-white font-medium" type="submit"><router-link to="">Submit Review</router-link></button>
                    <button class="border w-full p-2 rounded text-gray-800 font-medium hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"><router-link to="/">No thanks, please take me home</router-link></button>
                </div>
            </div>
        </form>
    </main>
</template>