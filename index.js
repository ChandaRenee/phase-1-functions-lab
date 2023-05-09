function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42)
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(pickUp, dropOff) {
    if (pickUp > dropOff) {
        return (pickUp - dropOff) * 264
    } else {
        return (dropOff - pickUp) * 264
    }
}

function calculatesFarePrice(pickUp, dropOff) {
    let distance = distanceTravelledInFeet(pickUp, dropOff)
    if (distance <= 400) {
        return distance * 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02 
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

}