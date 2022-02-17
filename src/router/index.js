import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import Contributors from "../pages/Contributors.vue";
import CreateMeeting from "../pages/CreateMeeting.vue";
import HowItWorks from "../pages/HowItWorks.vue";
import MeetingRoom from "../pages/MeetingRoom.vue";
import Review from "../pages/Review.vue";
import NotFound from "../pages/NotFound.vue";

// Vue Router Configuration
const router = createRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/contributors",
            name: "contributors",
            component: Contributors,
        },
        {
            path: "/new",
            name: "create-meeting",
            component: CreateMeeting,
        },
        {
            path: "/how-it-works",
            name: "how-it-works",
            component: HowItWorks,
        },
        {
            path: "/review",
            name: "review",
            component: Review,
        },

        {
            path: "/404",
            name: "not-found",
            component: NotFound,
        },
        {
            path: "/:id",
            name: "meeting-room",
            component: MeetingRoom,
        },
        {
            path: "/:catchAll(.*)",
            redirect: "/404",
        },
    ],
    history: createWebHistory(),
});

export default router;
