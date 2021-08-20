require('readline')
  .createInterface({ input: process.stdin })
  .on('line', line => console.log(line + ' => ' + toBerlinClock(line)))

function toBerlinClock(line) {
    const [ hours, minutes, seconds] = line.split(':', 3)
    const secondsOutput = getSeconds(seconds)
    const hourOutput = getHours(hours)
    const minuteOutput = getMinutes(minutes)
    const outpuString = `${secondsOutput} ${hourOutput} ${minuteOutput}`
    return outpuString;
}

function getSeconds(seconds){
    return seconds%2 ? 'X' : '.'
}

function getHours(hours){
    const litInSecondLine = hours%5
    const litInFirsLine = (hours-litInSecondLine)/5
    
    let firstLine = ''
    Array(4).fill(0).map((x, i)=> {
        const symbol = i < litInFirsLine ? 'X' : '.' 
        firstLine+=symbol
    })

    let secondLine = ''
    Array(4).fill(0).map((x, i)=> {
        const symbol = i < litInSecondLine ? 'X' : '.' 
        secondLine+=symbol
    })
    return `${firstLine} ${secondLine}`
}

function getMinutes(minutes){
    const litInSecondLine = minutes%5
    const litInFirsLine = (minutes-litInSecondLine)/5

    let firstLine = ''
    Array(11).fill(0).map((x, i)=> {
        const symbol = i < litInFirsLine ? 
        i%3==2 ? '|' : 'X' : 
        '.' 
        firstLine+=symbol
    })

    let secondLine = ''
    Array(4).fill(0).map((x, i)=> {
        const symbol = i < litInSecondLine ? 'X' : '.' 
        secondLine+=symbol
    })
    return `${firstLine} ${secondLine}`
}