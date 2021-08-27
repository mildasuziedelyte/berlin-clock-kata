require('readline')
  .createInterface({ input: process.stdin })
  .on('line', line => console.log(line + ' => ' + toBerlinClock(line)))

Number.prototype.remainder = function (operand) {
    return this % operand;
}
Number.prototype.isEven = function () {
    return this%2===0? true : false
}
Number.prototype.divide = function (divisor) {
    return this / divisor;
}
Number.prototype.substract = function (number) {
    return this - number
}

class BerlinClock {
    constructor(line) {
        [this.hours, this.minutes, this.seconds] = line.split(':', 3)
    }

    getSeconds = () => {
        return (+this.seconds).isEven() ? '.' : 'X'
    }

    getLitInSecondLine(number){
        return (+number).remainder(5)
    }

    getHours(){
        const litInSecondLine = this.getLitInSecondLine(this.hours)
        const litInFirstLine = ((+this.hours).substract(litInSecondLine)).divide(5)
        const firstLine = 'X'.repeat(litInFirstLine) + '.'.repeat(4-litInFirstLine)
        const secondLine = 'X'.repeat(litInSecondLine) + '.'.repeat(4-litInSecondLine)
        return `${firstLine} ${secondLine}`
    }

    getMinutes(){
        const litInSecondLine = this.getLitInSecondLine(this.minutes)
        const litInFirstLine = ((+this.minutes).substract(litInSecondLine)).divide(5)
        const firstLine = 'X'.repeat(litInFirstLine) + '.'.repeat(11-litInFirstLine)
        const newA = firstLine.split('').map((x,i) => i < litInFirstLine ? (i + 1) % 3 ? x : '|' : '.').toString()
        const secondLine = 'X'.repeat(litInSecondLine) + '.'.repeat(4-litInSecondLine)
        return `${newA.replaceAll(',', '')} ${secondLine}`
    }


    display = () => {
        return `${this.getSeconds()} ${this.getHours()} ${this.getMinutes()}`
    }

}

function toBerlinClock(line) {
    return new BerlinClock(line).display()
}