import { BookOpenText, Home, NotebookText, User2 } from "lucide-react";

export const navItems = [
    {
        id: 1,
        label: "Inicio",
        path: "/",
        icon: Home
    },
    {
        id: 2,
        label: "Usuarios",
        path: "/users",
        icon: User2
    },
    {
        id: 3,
        label: "Libros",
        path: "/books",
        icon: BookOpenText
    },
    {
        id: 4,
        label: "Alquiler",
        path: "/rent",
        icon: NotebookText
    },
];