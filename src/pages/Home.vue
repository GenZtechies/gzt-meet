<template>
    <main class="max-w-7xl mx-auto overflow-x-hidden container px-2 py-10 lg:py-20">
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="mx-auto my-auto text-center md:text-left px-3 lg:pl-24">
                <h1 class="text-4xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-extrabold">
                    Premium Meetings free for everyone 🤘🏾
                </h1>
                <h3 class="font-normal text-xl py-5">
                    Create a More secure, more flexible, and completely free video
                    conference
                </h3>

                <div class="box-shadow shadow bg-white p-3 rounded-full flex justify-between my-2 space-x-3">
                    <input v-model="meetingCode" type="text" placeholder="Enter a Meeting Code or Link" class="outline-none ml-3 w-full text-sm placeholder:font-medium" />
                    <input @click="joinMeeting" :disabled="enabledJoinButton == false" type="submit" value="Join Meeting" class="font-semibold bg-green-600 px-5 py-3 rounded-full hover:bg-green-700 focus:bg-green-700 transition duration-300 ease-in-out text-white cursor-pointer" />
                </div>
            </div>
            <div class="grid place-items-center">
                <img src="/assets/images/camera.png" alt="video-camera" class="max-w-full w-[400px]" srcset="">
            </div>
        </section>
    </main>
</template>

<script>
export default {

    data(){
        return {
            meetingCode: "",
            enabledJoinButton: false,
        }
    },
    watch: {
        meetingCode(val){
            let meetingCode = val.trim();
            if (val.includes("https://") || val.includes("http://")) {
                meetingCode = meetingCode.split("/").pop();
            }
            if (meetingCode.split("-").length >= 3 && meetingCode.length >= 11) {
                this.enabledJoinButton = true;
            } else {
                this.enabledJoinButton = false;
            }
        }
    },
    methods: {
        joinMeeting(){
            if (this.enabledJoinButton) {
                if (this.meetingCode.includes("https://") || this.meetingCode.includes("http://")) {
                    this.meetingCode = this.meetingCode.split("/").pop();
                }

                this.$router.push({
                    name: "meeting-room",
                    params: {
                        id: this.meetingCode
                    }
                })
            }
        }
    }

}
</script>
