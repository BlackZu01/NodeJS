function showTopic(topic) {
    console.log(`I'm learning ${topic}`)
}

// setTimeout(showTopic, 1000, 'NodeJS');

console.log('Before setInmediate');

setImmediate(showTopic, 'NodeJS');

console.log('After setInmediate');

setInterval(showTopic, 1000, 'NodeJS');