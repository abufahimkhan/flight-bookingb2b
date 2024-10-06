import { action } from "easy-peasy";

export const sidebarModel = {
    isSidebarOpen: false,
    setIsSidebarOpen: action((state: any, payload: boolean) => {
        state.isSidebarOpen = payload
    })
}