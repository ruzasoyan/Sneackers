import { lazy } from "react"

export const HomePage = lazy(async () => ({
    default: (await import("./home.jsx")).HomePage,
}));
export const AccountPage = lazy(async () => ({
    default: (await import("./account.jsx")).AccountPage,
}));