class Sidebar {
    #hamburger: HTMLElement;
    constructor() {
        this.#hamburger = document.getElementById("hamburger");
    }

    public render() {
        this.#hamburger.addEventListener("click", () => {
            const sidebar = document.getElementById("sidebar");
            if (sidebar) {
                sidebar.classList.toggle("open");
            }
            this.#hamburger.classList.toggle("open");
        });
    }
}

export { Sidebar };