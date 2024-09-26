document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('range-letter');

    const updateFontSize = (value) => {
        const minFontSize = 57.5;
        const maxFontSize = 68.2;
        const minValue = 1;
        const maxValue = 3;

        const percentage = ((value - minValue) / (maxValue - minValue)) * (maxFontSize - minFontSize) + minFontSize;

        document.documentElement.style.fontSize = `${percentage}%`;
    };

    const storedValue = localStorage.getItem('sliderValue');
    if (storedValue !== null) {
        slider.value = storedValue;
        updateFontSize(storedValue);
    } else {
        updateFontSize(slider.value);
    }

    slider.addEventListener('input', () => {
        const value = slider.value;
        localStorage.setItem('sliderValue', value);
        updateFontSize(value);
    });
});