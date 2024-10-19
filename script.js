 <script>
    const overlay = document.querySelector('.overlay');
    const sliderContainer = document.querySelector('.slider-container');

    sliderContainer.addEventListener('mousemove', (e) => {
        const { left, width } = sliderContainer.getBoundingClientRect();
        const x = e.clientX - left;
        const percentage = (x / width) * 100;
        overlay.style.width = `${percentage}%`;
    });

    sliderContainer.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const { left, width } = sliderContainer.getBoundingClientRect();
        const x = touch.clientX - left;
        const percentage = (x / width) * 100;
        overlay.style.width = `${percentage}%`;
    });
</script>
