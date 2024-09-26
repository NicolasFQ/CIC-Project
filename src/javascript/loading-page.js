window.onload = () => {
    window.scrollTo(1, 1);
 
    document.body.classList.add('hide-scrollbar');

    gsap.fromTo(
        ".loading-page",
        { opacity: 1 },
        {
            opacity: 0,
            duration: .6,
            delay: 3.0,
            onComplete: () => {
                document.querySelector(".loading-page").style.display = "none";
            }
        }
    );

    gsap.fromTo(
        ".logo-name",
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: .6,
            delay: 0.5,
        }
    );

    gsap.fromTo(
        ".loading",
        { opacity: 1 },
        {
            opacity: 0,
            duration: .5,
            delay: 5.0,
            onComplete: () => {
                document.querySelector(".loading").style.display = "none";
            }
        }
    );

    
    gsap.to('.animated-element', {
        duration: 5,
        x: 300,
        y: 300,
        onComplete: () => {
          
            document.body.classList.remove('hide-scrollbar');
        }
    });
};
