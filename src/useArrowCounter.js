import {useEffect, useReducer} from 'react'

function currentCountReducer(currentSlideIndex, keyPressEvent) {
    console.log(keyPressEvent)
    switch (keyPressEvent.code){
        case "ArrowRight":
            return currentSlideIndex + 1;
        case "ArrowLeft":
            return currentSlideIndex -1;
    }
    return currentSlideIndex
}

export default function useArrowCounter(initialCount) {
    const [currentCount, changeCount] = useReducer(currentCountReducer, initialCount);
    useEffect(() => {
        window.addEventListener('keydown', changeCount
        )
        return () => {
            window.removeEventListener('keydown', changeCount)
        }
    }, [changeCount])

    return currentCount;
}