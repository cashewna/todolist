import { Sidebar } from "./Sidebar";
class Main {
    #sidebar: Sidebar;

    constructor() {
        const sidebar = this.#sidebar = new Sidebar();
        sidebar.render();
    }

    public render(): void {
        this.adjustMainViewHeight();
    }

    private adjustMainViewHeight(): void {
        const mainView = document.getElementById("content");
        if (mainView) {
            const headerHeight = document.querySelector("header")?.offsetHeight;
            const footerHeight = document.querySelector("footer")?.offsetHeight;
            mainView.style.minHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
        }
    }
}

export { Main };