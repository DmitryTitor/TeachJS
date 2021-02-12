function throttle(func, ms) {
    let isThrottle = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottle) {  
            savedArgs = arguments;
            savedThis = this;

            return;
        }

        func.apply(this, arguments);
        isThrottle = true;
        setTimeout(function () {
            isThrottle = false;

            if (savedArgs) {
                wrapper.apply(savedArgs, savedThis);
                savedArgs = savedThis = null;
            }
        }, ms)

    }

    return wrapper;
}

function mouseMove() {
    console.log(new Date());
}

mouseMove = throttle(mouseMove, 3000);

setInterval(mouseMove, 1000);
