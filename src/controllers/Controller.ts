import View from "../views/View";

class Controller {
    #view: View;
    constructor(view: View) {
        this.#view = view;
    }
    
    public render(): void {
        this.#view.render();
    }
}

export default Controller;