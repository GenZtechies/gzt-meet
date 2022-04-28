<template>
    <div>
        <main id="meet" class="w-screen h-screen fixed top-0 bg-[#000]" />

        <section v-if="loading == true" className="flex flex-col items-center justify-center w-screen h-[95vh] md:h-screen fixed top-0 bg-[#000] text-white">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white" />
                </div>
                <h1 className="text-3xl font-black mt-4">Loading ⚡️{{meetingId}}⚡️</h1>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    // Get the meeting id from the url
    mounted() {
        const createdMeetings = JSON.parse(localStorage.getItem('meetings')) || [];
        const meetingId = this.meetingId;

        const isModerator = createdMeetings.includes(meetingId);
    
        // API mock to check if the meeting id is valid
        setTimeout(() => {
            // Initialize the meeting
            const meetAPI = new JitsiMeetExternalAPI("meet.jit.si", {
                roomName: meetingId,
                width: "100%",
                parentNode: document.querySelector('#meet'),
                chromeExtensionBanner: false,
                interfaceConfigOverwrite: {
                    APP_NAME: 'GenZtechies',
                    MOBILE_APP_PROMO: false,
                    SHOW_JITSI_WATERMARK: false,
                    HIDE_DEEP_LINKING_LOGO: true,
                    NATIVE_APP_NAME: 'GenZtechies',
                    // DEFAULT_BACKGROUND: '#5D5CD6',
                    JITSI_WATERMARK_LINK: "https://meet.genztechies.com",
                    SHOW_CHROME_EXTENSION_BANNER: false,
                    VIDEO_QUALITY_LABEL_DISABLED: true,
                    SETTINGS_SECTIONS: ['devices', 'moderator', 'profile', 'sounds'],
                },
                configOverwrite: {
                    disableInviteFunctions: true,
                    dynamicBrandingUrl: "https://meet.genztechies.com",
                    hideConferenceSubject: true,
                    disableThirdPartyRequests: true,
                    defaultRemoteDisplayName: 'A GenZ User',
                    disabledSounds: ['REACTION_SOUND'],
                    autoKnockLobby: true,
                    toolbarButtons: [
                        'camera',
                        'chat',
                        'closedcaptions',
                        'desktop',
                        'download',
                        'etherpad',
                        'fullscreen',
                        'hangup',
                        'livestreaming',
                        'microphone',
                        'mute-everyone',
                        'mute-video-everyone',
                        'participants-pane',
                        'profile',
                        'raisehand',
                        'recording',
                        'security',
                        'select-background',
                        'settings',
                        'shareaudio',
                        'sharedvideo',
                        'shortcuts',
                        'toggle-camera',
                        '__end',
                    ],
                },
                onload: () => {
                    this.loading = false;
                }
            });

            meetAPI.addEventListener('participantRoleChanged', function(event) {
                if (event.role === "moderator" && isModerator) {
                    meetAPI.executeCommand('toggleLobby', true);
                }
            });

            // If user ends the meeting, redirect to the home page
            meetAPI.on('readyToClose', () => {
                this.$router.push('/');
            });
        }, 2000);
    },
    data() {
        return {
            meetingId: this.$route.params.id,
            loading: true,
        };
    },
};
</script>
