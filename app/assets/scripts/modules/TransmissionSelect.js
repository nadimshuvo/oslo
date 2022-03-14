class TransmissionSelect {
    constructor() {
        this.menuIcon = document.querySelector('#cta');
        this.transmissionType = document.querySelector('.transmission-type')
        this.selectTransmission = document.querySelector('.select-transmission')
        this.events()
    }
    events() {
        this.menuIcon.addEventListener('click', () => this.newMenu())
    }

    newMenu() {
        this.transmissionType.classList.toggle('transmission-type--is-hidden');
        this.selectTransmission.classList.toggle('select-transmission--is-visible')
    }
}

export default TransmissionSelect;