import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import Team from "../pages/Team.vue";
import CreateMeeting from "../pages/CreateMeeting.vue";
import HowItWorks from "../pages/HowItWorks.vue";
import MeetingRoom from "../pages/MeetingRoom.vue";
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
            path: "/team",
            name: "team",
            component: Team,
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
            path: "/:id",
            name: "meeting-room",
            component: MeetingRoom,
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound,
        },
    ],
    history: createWebHistory(),
});

export default router;
