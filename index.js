const produceDrivingRange = function (blockRange) {
    return function (startingBlock, endingBlock) {
        let start = parseInt(startingBlock);
        let end = parseInt(endingBlock);
        let difference
        
        if (start <= end) {
            difference = end - start
        } else {
            difference = start - end
        }

        if (difference <= blockRange) {
            return `within range by ${Math.abs(difference)}`
        } else {
            return `${Math.abs(difference) - blockRange} blocks out of range`
        }
    }
}

const produceTipCalculator = function (percent) {
    return function (total) {
        return total * percent
    }
}

function createDriver () {
    let driverId = 0;

    return class {
      constructor(name) {
        this.id = ++driverId;
        this.name = name; 
      }    
    }
}
