function homepageAnimation() {
    gsap.set('#marquee-container', {
        scale: 5
    });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#homepage",
            start: "top top",
            end: "bottom top",
            scrub: 3,
            pin: true
        }
    });

    tl
        .to('#video-container', {
            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to('#marquee-container', {
            scale: 1,
            ease: Power2,
        }, 'a')
        .to('.lft', {
            xPercent: -25,
            ease: Power4,
            stagger: 0.03
        }, 'b')
        .to('.rgt', {
            xPercent: 25,
            ease: Power4,
            stagger: 0.03
        }, 'b');
}
homepageAnimation();