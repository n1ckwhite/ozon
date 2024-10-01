class ProgressCircle {
    constructor(selector) {
        this.blockElem = document.querySelector(selector)
        this.progressElem = this.blockElem.querySelector('.progress-container');
        this.progressCircle = this.blockElem.querySelector('.progress-circle');
        this.valueElem = this.blockElem.querySelector('.setting__item.value');
        this.hideCheckElem = this.blockElem.querySelector('.setting__item.check.hide');
        this.animateCheckElem = this.blockElem.querySelector('.setting__item.check.animate');
        this.settingProgressBlock = this.blockElem.querySelector('.setting__flex.setting__progress');
        this.settingAnimateBlock = this.blockElem.querySelector('.setting__flex.setting__animate');
        this.init();
    }
    init() {
        this.setProgress(this.valueElem.value);
        this.bindEvents();
    }
    bindEvents() {
        this.hideCheckElem.addEventListener('change', (e) => this.toggleVisibility(e.target.checked));
        this.valueElem.addEventListener('change', (e) => this.handleValueChange(e.target.value));
        this.animateCheckElem.addEventListener('change', (e) => this.toggleAnimation(e.target.checked));
    }
    setProgress(value) {
        if (this.validateValue(value)) {
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (value / 100 * circumference);

            this.progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
            this.progressCircle.style.strokeDashoffset = `${offset}`;
            this.valueElem.style.border = '2px solid #1E1E1E'
        } else {
            this.valueElem.style.border = '2px solid red'
            console.error('Только цифры от 0 до 100!');
        }
    }
    validateValue(value) {
        const numValue = Number(value);
        return !isNaN(numValue) && numValue >= 0 && numValue <= 100;
    }
    toggleVisibility(isHidden) {
        const visibility = isHidden ? 'hidden' : 'visible';
        const opacity = isHidden ? '0' : '1';

        this.settingProgressBlock.style.opacity = opacity;
        this.settingProgressBlock.style.visibility = visibility;

        this.progressElem.style.opacity = opacity;
        this.progressElem.style.visibility = visibility;

        this.settingAnimateBlock.style.opacity = opacity;
        this.settingAnimateBlock.style.visibility = visibility;
    }
    toggleAnimation(isAnimated) {
        if (isAnimated) {
            this.progressElem.classList.add('rotate');
        } else {
            this.progressElem.classList.remove('rotate');
        }
    }
    handleValueChange(value) {
        this.setProgress(value);
    }
    updateProgress(value) {
        this.valueElem.value = value;
        this.setProgress(value);
    }
    hide() {
        this.hideCheckElem.checked = true;
        this.toggleVisibility(true);
    }
    show() {
        this.hideCheckElem.checked = false;
        this.toggleVisibility(false);
    }
    animate() {
        this.animateCheckElem.checked = true;
        this.toggleAnimation(true);
    }
    stopAnimation() {
        this.animateCheckElem.checked = false;
        this.toggleAnimation(false);
    }
}

const block_1 = new ProgressCircle('#block1')
const block_2 = new ProgressCircle('#block2')
const block_3 = new ProgressCircle('#block3')
const block_4 = new ProgressCircle('#block4')
block_1.animate()
block_2.updateProgress(10)
block_2.stopAnimation()
block_3.animate()
block_4.hide()
