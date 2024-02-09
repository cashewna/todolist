class Observable {
    private observers: Function[];

    constructor() {
        this.observers = [];
    }

    public subscribe(observer: Function): void {
        this.observers.push(observer);
    }

    public notify() {
        this.observers.forEach(fn => fn());
    }
}

export { Observable };