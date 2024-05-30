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

function page3Animation() {
    gsap.to(".slide", {
        xPercent: -300,
        ease: Power4,
        scrollTrigger: {
            trigger: "#slides-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    });
}
page3Animation();

function page4Animation() {
    document.querySelectorAll('.listitem')
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector('.listitem-picture'), {
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    opacity: 1,
                    ease: Power4,
                    duration: 0.3,
                });
                gsap.to(this.querySelector('.bluelayer'), {
                    height: "100%",
                    ease: Power4,
                    duration: 0.3,
                });
            });
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector('.listitem-picture'), {
                    opacity: 0,
                    ease: Power4,
                    duration: 0.3,
                });
                gsap.to(this.querySelector('.bluelayer'), {
                    height: "0%",
                    ease: Power4,
                    duration: 0.3,
                });
            });
        });
}
page4Animation();

function page5Animation() {
    var clutter1 = "";
    document.querySelector('#review1').textContent.split("")
        .forEach(function (e) {
            if (e === " ") {
                clutter1 += `<span>&nbsp;</span>`;
            }
            clutter1 += `<span>${e}</span>`;
        });
    document.querySelector('#review1').innerHTML = clutter1;

    var clutter2 = "";
    document.querySelector('#review2').textContent.split("")
        .forEach(function (e) {
            if (e === " ") {
                clutter2 += `<span>&nbsp;</span>`;
            }
            clutter2 += `<span>${e}</span>`;
        });
    document.querySelector('#review2').innerHTML = clutter2;

    gsap.set("#review1 span", {
        opacity: 0.2
    });

    gsap.set("#review2 span", {
        opacity: 0.2
    });

    gsap.to("#review1 span", {
        opacity: 1,
        stagger: 0.02,
        ease: Power4,
        scrollTrigger: {
            trigger: "#review1",
            start: "top 80%",
            end: "top 40%",
            scrub: 3
        }
    });

    gsap.to("#review2 span", {
        opacity: 1,
        stagger: 0.02,
        ease: Power4,
        scrollTrigger: {
            trigger: "#review2",
            start: "top 80%",
            end: "top 40%",
            scrub: 3
        }
    });
}
page5Animation();

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();

function page6Animation() {
    gsap.to('.capsule:nth-child(2)', {
        transform: "translateY(0%) rotate(-20deg)",
        ease: Power4,
        scrollTrigger: {
            trigger: "#page6-right",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 5
        }
    });
    gsap.to('.capsule:nth-child(1)', {
        transform: "translateY(0%) rotate(-20deg)",
        ease: Power4,
        scrollTrigger: {
            trigger: "#page6-right",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 5
        }
    });
}
page6Animation();

function bodyColorChange() {
    document.querySelectorAll('.section')
        .forEach(function (el) {
            ScrollTrigger.create({
                trigger: el,
                start: "top 50%",
                end: "bottom 50%",
                markers: true,
                onEnter: function () {
                    document.body.setAttribute("theme", el.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", el.dataset.color);
                }
            });
        });
}
bodyColorChange();