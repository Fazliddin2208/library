import { ContributeIcon } from "@/lib/icons/ContributeIcon";
import { HomeIcon } from "@/lib/icons/HomeIcon";
import { SearchIcon } from "@/lib/icons/SearchIcon";
import { ShelfIcon } from "@/lib/icons/ShelfIcon";

export const sidebarLinks = [
    {
        title: "Home",
        icon: HomeIcon,
        url: "/"
    },
    {
        title: "Search",
        icon: SearchIcon,
        url: "/search"
    },
    {
        title: "My Shelf",
        icon: ShelfIcon,
        url: "/shelf"
    },
    {
        title: "Contribute",
        icon: ContributeIcon,
        url: "/contribute"
    },
]