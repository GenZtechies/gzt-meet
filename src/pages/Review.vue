<template>
    <main >
        <form action="" class="flex justify-center items-center w-full h-screen bg-zinc-400 mt-[-5.3em]">
            <div class="relative z-100 bg-white w-4/5 max-w-lg opacity-100 p-6 rounded-md shadow">
                <h1 class="text-2xl text-center text-gray-900 font-bold my-3">This meeting has ended</h1>
                <p class="text-center text-gray-800">Would you mind dropping a review? It would help us make the experience better for you.</p>
                <textarea name="" id="" cols="30" rows="4" class="p-2 border w-full my-3 rounded-sm focus:outline-zinc-400" placeholder="Your review here..."></textarea>
                <div class="py-3 sm:flex sm:flex-row-reverse">
                    <button type="submit" class="w-full inline-flex justify-center rounded border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:mr-0 sm:text-sm">Submit Review</button>
                    <button class="mt-3 w-full inline-flex justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-300 sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm"><router-link to="/">No thanks, take me home</router-link></button>
                </div>
            </div>
        </form>
    </main>
</template>