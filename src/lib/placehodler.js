import {
    ArrowUpRight,
    Files,
    LayoutDashboard,
    LogOut,
    UserRound,
} from "lucide-react";
export const NavigationContent = [
    {
        id: 1,
        name: "Home",
        link: "/",
        icon: ArrowUpRight
    },
    {
        id: 2,
        name: "Job Vacancy",
        link: "/job-vacancy",
        icon: ArrowUpRight

    },
    {
        id: 3,
        name: "About",
        link: "/",
        icon: ArrowUpRight

    },
]
export const DropdownNavigation = [
    {
        id: 1,
        name: "Dashboard",
        link: "/dashboard",
        icon: LayoutDashboard
    },
    {
        id: 2,
        name: "Upload job",
        link: "/dashboard/create-job",
        icon: Files

    },
    {
        id: 3,
        name: "Profile",
        link: "/dashboard/profile",
        icon: UserRound

    },
]


export const CardSkeletonData = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
   
]