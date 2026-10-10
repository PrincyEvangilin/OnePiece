/* =====================================================
   ONE PIECE — MANY CONSEQUENCES
   RELIABLE STORY ANIMATION CONTROLLER
===================================================== */


/* =====================================================
   START BUTTON
===================================================== */

const startStory = document.getElementById("startStory");

if (startStory) {
    startStory.addEventListener("click", () => {

        const firstScene =
            document.querySelector(".scene-one");

        if (firstScene) {

            firstScene.scrollIntoView({
                behavior: "smooth"
            });

        }

    });
}


/* =====================================================
   HELPER
===================================================== */

function isInViewport(element) {

    if (!element) return false;

    const rect =
        element.getBoundingClientRect();

    return (
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2
    );
}


/* =====================================================
   SCENE 01
   PERSON WALKS → WASTE DROPS
===================================================== */

const person =
    document.getElementById("person");

const waste =
    document.getElementById("waste");

let sceneOneStarted = false;

function startSceneOne() {

    if (sceneOneStarted) return;

    sceneOneStarted = true;


    /*
        PERSON STARTS WALKING
    */

    if (person) {

        setTimeout(() => {

            person.classList.add("walking");

        }, 400);

    }


    /*
        WASTE DROPS AFTER PERSON WALKS
    */

    if (waste) {

        setTimeout(() => {

            waste.classList.add("dropped");

        }, 3000);

    }

}


/* =====================================================
   SCENE 02
   TIME CHANGES
===================================================== */

const sceneTwo =
    document.querySelector(".scene-two");

const timeText =
    document.getElementById("timeText");

let sceneTwoStarted = false;

const times = [

    "8:47 PM",
    "10:12 PM",
    "12:30 AM",
    "2:16 AM",
    "4:42 AM",
    "6:32 AM"

];

function startTimeAnimation() {

    if (sceneTwoStarted) return;

    sceneTwoStarted = true;

    if (!timeText) return;


    let index = 0;


    const timer =
        setInterval(() => {

            index++;

            if (index >= times.length) {

                clearInterval(timer);

                return;

            }

            timeText.textContent =
                times[index];

        }, 900);

}


/* =====================================================
   SCENE 03
   RAIN + TRASH MOVEMENT
===================================================== */

const sceneThree =
    document.querySelector(".scene-three");

let sceneThreeStarted = false;

function startRainAnimation() {

    if (sceneThreeStarted) return;

    sceneThreeStarted = true;


    /*
        Add active class
        for additional rain movement
    */

    if (sceneThree) {

        sceneThree.classList.add(
            "rain-active"
        );

    }

}


/* =====================================================
   SCENE 05
   ANIMAL WALKS IN
===================================================== */

const animal =
    document.getElementById("animal");

let sceneFiveStarted = false;

function startAnimalAnimation() {

    if (sceneFiveStarted) return;

    sceneFiveStarted = true;


    if (animal) {

        setTimeout(() => {

            animal.classList.add("enter");

        }, 500);

    }

}


/* =====================================================
   SCENE VISIBILITY
===================================================== */

function checkScenes() {


    /* -----------------------------------------
       SCENE 01
    ----------------------------------------- */

    const firstScene =
        document.querySelector(".scene-one");

    if (
        firstScene &&
        isInViewport(firstScene)
    ) {

        startSceneOne();

    }


    /* -----------------------------------------
       SCENE 02
    ----------------------------------------- */

    if (
        sceneTwo &&
        isInViewport(sceneTwo)
    ) {

        startTimeAnimation();

    }


    /* -----------------------------------------
       SCENE 03
    ----------------------------------------- */

    if (
        sceneThree &&
        isInViewport(sceneThree)
    ) {

        startRainAnimation();

    }


    /* -----------------------------------------
       SCENE 05
    ----------------------------------------- */

    if (
        document.querySelector(".scene-five") &&
        isInViewport(
            document.querySelector(".scene-five")
        )
    ) {

        startAnimalAnimation();

    }


    /* -----------------------------------------
       ALL STORY SCENES
       Add visible class
    ----------------------------------------- */

    document
        .querySelectorAll(".story-scene")
        .forEach(scene => {

            if (isInViewport(scene)) {

                scene.classList.add("visible");

            }

        });

}


/* =====================================================
   SCROLL
===================================================== */

window.addEventListener(
    "scroll",
    checkScenes,
    {
        passive: true
    }
);


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    () => {

        /*
            Give browser time to render
        */

        setTimeout(() => {

            checkScenes();

        }, 300);

    }
);


/* =====================================================
   MOUSE PARALLAX
===================================================== */

const sun =
    document.querySelector(".sun");

document.addEventListener(
    "mousemove",
    event => {

        if (!sun) return;


        const x =
            event.clientX /
            window.innerWidth -
            0.5;

        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        sun.style.transform =
            `
            translate(
                ${x * 18}px,
                ${y * 12}px
            )
            `;

    }
);


/* =====================================================
   FINAL CHOICE
===================================================== */

const goodChoice =
    document.getElementById("goodChoice");

const badChoice =
    document.getElementById("badChoice");

const choiceSection =
    document.getElementById("choiceSection");

const ending =
    document.getElementById("ending");


/* -----------------------------------------
   GOOD CHOICE
----------------------------------------- */

if (goodChoice) {

    goodChoice.addEventListener(
        "click",
        () => {

            if (choiceSection) {

                choiceSection.style.display =
                    "none";

            }


            if (ending) {

                ending.classList.add("show");

                setTimeout(() => {

                    ending.scrollIntoView({
                        behavior: "smooth"
                    });

                }, 100);

            }

        }
    );

}


/* -----------------------------------------
   BAD CHOICE
----------------------------------------- */

if (badChoice) {

    badChoice.addEventListener(
        "click",
        () => {

            choiceSection.innerHTML = `

                <div class="choice-content">

                    <span class="eyebrow">
                        THE STORY CONTINUES
                    </span>

                    <h2>
                        “It's only one.”
                        <em>But one becomes many.</em>
                    </h2>

                    <p>
                        What feels small in one moment
                        can become part of a much bigger
                        problem when the same choice is
                        repeated again and again.
                    </p>

                    <button
                        class="start-btn"
                        id="tryAgain"
                    >
                        MAKE A DIFFERENT CHOICE
                        <span>→</span>
                    </button>

                </div>

            `;


            const tryAgain =
                document.getElementById(
                    "tryAgain"
                );


            if (tryAgain) {

                tryAgain.addEventListener(
                    "click",
                    () => {

                        window.location.reload();

                    }
                );

            }

        }
    );

}


/* =====================================================
   RESTART
===================================================== */

const restart =
    document.getElementById("restart");

if (restart) {

    restart.addEventListener(
        "click",
        () => {

            window.location.reload();

        }
    );

}


/* =====================================================
   DEBUG
===================================================== */

console.log(
    "🌱 Story animation system ready"
);