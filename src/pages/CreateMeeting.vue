<template>
<div>
    <div class="py-10"></div>

    <section v-if="loading == true" class="flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center">
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500" />
        </div> 
        <h1 class="text-3xl font-bold mt-4">Loading...</h1>
        <p class="text-lg font-light mt-4">Please wait while we create a new meeting room.</p>
    </section>

    <section v-if="loading == false" class="flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center">
        <div className="flex justify-center items-center">
            <img src="/assets/images/copy.svg" class="h-32 w-32" alt="copy-link-icon">
        </div> 
        <h1 class="text-3xl font-bold mt-4">Copy Link</h1>

        <p class="text-lg font-light my-2">Please copy the link below and share it with your friends</p>
        <p class="text-lg font-bold my-1 break-all">{{ meetingLink }}</p>

        <p class="text-lg font-light mt-4"> or share the code</p>
        <p class="text-lg font-bold mt-1 break-all">{{ meetingCode }}</p>

        <!-- Copy Link to Clipboard -->
        <div class="justify-center mt-8 space-x-3">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="copyLink">Copy Link</button>
        </div>

        <!-- Continue to meeting room -->
        <div class="justify-center mt-8">
            <button class="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="continueToMeetingRoom">Continue To Meeting</button>
        </div>
    </section>
</div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    mounted() {
        const uniqueId = `${nanoid(3)}-${nanoid(3)}-${nanoid(3)}`.toUpperCase();
        this.uuid = uniqueId;

        // Mock API call to save meeting id
        setTimeout(() => {
            const createdMeetings = JSON.parse(localStorage.getItem('meetings')) || [];
            createdMeetings.push(uniqueId);
            localStorage.setItem('meetings', JSON.stringify(createdMeetings));

            this.loading = false;
        }, 2000);
    },
    data() {
        return {
            uuid: null,
            loading: true,
        };
    },
    computed: {
        meetingCode() {
            return this.uuid;
        },
        meetingLink() {
            return window.location.origin + "/" + this.uuid;
        }
    },
    methods: {
        async copyLink() {
            await navigator.clipboard.writeText(this.meetingLink);
            alert("Link copied to clipboard");
        },
        continueToMeetingRoom() {
            return this.$router.push("/" + this.uuid);
        },
    },
};
</script>
