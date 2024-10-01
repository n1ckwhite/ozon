const hideCheckElem = document.querySelector('#hide');
const valueElem = document.querySelector('#value');
const animateCheckElem = document.querySelector('#animate');
const settingProgressBlock = document.querySelector('.setting__progress');
const settingAnimateBlock = document.querySelector('.setting__animate');
const progressCircle = document.querySelector('.progress-circle');
const progressElem = document.querySelector('.progress');
const setProgress = (value) => {
    const radius = 60; 
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100 * circumference);

    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = `${offset}`;
}
setProgress(valueElem.value);
hideCheckElem.addEventListener('change', (e) => {
    hideAndVisibleBlock(e.target.checked);
});
valueElem.addEventListener('change', (e) => {
    setProgress(e.target.value);
});
const hideAndVisibleBlock = (check) => {
    if (check) {
        settingProgressBlock.style.opacity = '0';
        settingProgressBlock.style.visibility = 'hidden';

        progressElem.style.opacity = '0';
        progressElem.style.visibility = 'hidden';

        settingAnimateBlock.style.opacity = '0';
        settingAnimateBlock.style.visibility = 'hidden';
    } else {
        settingProgressBlock.style.opacity = '1';
        settingProgressBlock.style.visibility = 'visible';

        progressElem.style.opacity = '1';
        progressElem.style.visibility = 'visible';

        settingAnimateBlock.style.opacity = '1';
        settingAnimateBlock.style.visibility = 'visible';
    }
}
animateCheckElem.addEventListener('change', (e) => {
    if (e.target.checked) {
        progressElem.classList.add('rotate');
    } else {
        progressElem.classList.remove('rotate');
    }
});
