import View from './View';

class ContentView implements View {
    contructor(): void {
        
    }
    
    public render(): void {
        this.adjustContentHeight();
    }
    
    private adjustContentHeight(): void {
        const headerHeight = document.querySelector('header')?.offsetHeight;
        const footerHeight = document.querySelector('footer')?.offsetHeight;
        const content = document.querySelector('#content') as HTMLElement;

        if (headerHeight && footerHeight && content) {
            content.style.height = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
        }
    }
}

export default ContentView;