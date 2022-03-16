class StudioSelect {
    constructor() {
        this.selected = document.querySelector('.selected-studio');
        this.optionsContainer = document.querySelector('.options-container-studio');
        this.optionList = document.querySelectorAll('.option-studio');
        this.events()
    }

    events() {
        this.selected.addEventListener('click', () => this.toggleTheMenu());
        this.optionList.forEach(o => o.addEventListener('click', () => this.newSelected(o)));
    }

    toggleTheMenu() {
        this.optionsContainer.classList.toggle('active');
    }

    newSelected(o) {
        this.selected.innerHTML = o.querySelector('label').innerHTML;
        this.optionsContainer.classList.remove('active');
    }
}

export default StudioSelect;