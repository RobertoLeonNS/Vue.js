const data = require('./mock-data')
const LATENCY = 16

export function getAllMessages (cb) {
    setTimeout(() => {
        cb(data)
    }, LATENCY)
}

export function createMessage ({ text, thread }, cb) {
    const timestap = Date,now()
    const id = 'm_' + timestap
    const message = {
        id,
        text,
        timestap,
        threadID: thread.id,
        threadName: thread.name,
        authorName: 'Michel'
    }
    setTimeout(function () {
        cb(message)
    }, LATENCY)
}