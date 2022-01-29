<template>
    <div class="">
        <div class="carousel relative">
            <div class="carousel-inner relative overflow-hidden w-full">
                <!--Slide 1-->
                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
                <div class="carousel-item absolute opacity-0">
                    <section class="flex flex-col justify-center min-h-full py-10 md:py-0">
                        <div class="flex mx-auto py-5">
                            <img src="/assets/images/how-1.png" alt="how-it-works" class="max-w-full w-80" srcset="">
                        </div>
                        <h2 class="text-4xl text-center font-semibold">1. Create a Meeting</h2>
                        <div class="mx-auto">
                            <p class="text-center py-4 px-2 tracking-wider max-w-xl">Create a More secure, more flexible, and
                                completely free video conference </p>
                        </div>
                    </section>
                </div>
                <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-lg">‹</label>
                <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-lg">›</label>
                
                <!--Slide 2-->
                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                <div class="carousel-item absolute opacity-0">
                    <section class="flex flex-col justify-center min-h-full py-10 md:py-0">
                        <div class="flex mx-auto py-5">
                            <img src="/assets/images/how-2.png" alt="how-it-works" class="max-w-full w-80" srcset="">
                        </div>

                        <h2 class="text-4xl text-center font-semibold">2. Share the invite</h2>

                        <div class="mx-auto">
                            <p class="text-center py-4 px-2 tracking-wider max-w-xl">Create a More secure, more flexible, and
                                completely free video conference </p>
                        </div>
                    </section>
                </div>
                <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-lg">‹</label>
                <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-lg">›</label> 
                
                <!--Slide 3-->
                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
                <div class="carousel-item absolute opacity-0">
                    <section class="flex flex-col justify-center min-h-full py-10 md:py-0">
                        <div class="flex mx-auto py-5">
                            <img src="/assets/images/how-3.png" alt="how-it-works" class="max-w-full w-80">
                        </div>

                        <h2 class="text-4xl text-center font-semibold">3. Join meeting</h2>

                        <div class="mx-auto">
                            <p class="text-center py-4 px-2 tracking-wider max-w-xl">Create a More secure, more flexible, and
                                completely free video conference </p>
                        </div>
                    </section>
                </div>
                <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto shadow-lg">‹</label>
                <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto shadow-lg">›</label>
            
                <ol class="carousel-indicators">
                    <li class="inline-block mr-3">
                        <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl hover:text-green-600 text-gray-400">•</label>
                    </li>
                    <li class="inline-block mr-3">
                        <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-green-600">•</label>
                    </li>
                    <li class="inline-block mr-3">
                        <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-green-600">•</label>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
<style>
	.carousel-open:checked + .carousel-item {
		position: static;
		opacity: 100;
	}
	.carousel-item {
		-webkit-transition: opacity 0.6s ease-out;
		transition: opacity 0.6s ease-out;
	}
	#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				text-align: center;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: rgb(22, 163, 74);
			}
</style>