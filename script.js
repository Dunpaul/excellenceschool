    const text = "The Excellence School - Nairobi"; // Your text here
    const speed = 50; // Typing speed in milliseconds
    const targetElement = document.getElementById('typewriter-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            targetElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Start the typing animation
    typeWriter();
