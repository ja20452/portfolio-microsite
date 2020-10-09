
var fireflies = 2;
var $container = $(".fire_move2");
var $containerWidth = $container.width();
var $containerHeight = $container.height();
var master = new TimelineMax();

for (var i = 0; i < fireflies; i++) {

    var firefly = $('<div class="firefly"></div>');
    var firefly2 = $('<div class="firefly2"></div>');


    TweenLite.set(firefly, {
        x: Math.random() * $containerWidth,
        y: Math.random() * $containerHeight
    });
    $container.append(firefly);
    flyTheFirefly(firefly);

    TweenLite.set(firefly2, {
        x: Math.random() * $containerWidth,
        y: Math.random() * $containerHeight
    });
    $container.append(firefly2);
    flyTheFirefly(firefly2);}





function flyTheFirefly(elm) {
    var flyTl = new TimelineMax();
    var fadeTl = new TimelineMax({
        delay: Math.floor(Math.random() * 10) + 1,
        repeatDelay: Math.floor(Math.random() * 3) +1,
        repeat: -1
    });

    fadeTl.to(
        [elm],
        2,
        { opacity: 0.25, transition: 5, yoyo: true, repeat: 5, repeatDelay: 3, yoyo: true },
        Math.floor(Math.random() * 2) + 0.5
    );

    flyTl
        .set(elm, {scale: Math.random() * 0.75 + 0.5})
        .to(elm, Math.random() * 50 + 50, {
            bezier: {
                values: [
                    {
                        x: Math.random() * $containerWidth,
                        y: Math.random() * $containerHeight
                    },
                    {
                        x: Math.random() * $containerWidth,
                        y: Math.random() * $containerHeight
                    }
                ]
            },
            onComplete: flyTheFirefly,
            onCompleteParams: [elm]
        });
}



