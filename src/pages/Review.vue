<template>
    <main class="flex justify-center items-center w-full h-screen bg-gray-300 mt-[-5.3em]">
        <div class="relative z-100 bg-white w-4/5 max-w-lg opacity-100 p-3 rounded-md shadow">
            <h1 class="text-2xl text-center text-gray-900 font-bold my-3">This meeting has ended</h1>
            <p class="text-center text-gray-800">Would you mind dropping a review? It would help us make the experience better for you.</p>
            <div class="flex flex-col space-y-2 mt-4">
                <button class="bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-200 w-full p-2 rounded-md text-white font-medium"><router-link to="">Submit Review</router-link></button>
                <button class="border w-full p-2 rounded-md text-gray-800 font-medium hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"><router-link to="/">No thanks, please take me home</router-link></button>
            </div>
        </div>
    </main>
</template>