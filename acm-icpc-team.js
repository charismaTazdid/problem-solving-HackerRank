// Problem: https://www.hackerrank.com/challenges/acm-icpc-team

function acmTeam(topic) {
    let [maxTopic, maxTeam, count] = [0, 0, 0]
    for (let i = 0; i < topic.length - 1; i++)
        for (let j = i + 1; j < topic.length; j++) {
            for (let k = 0; k < topic[0].length; k++)
                if (topic[i][k] === '1' || topic[j][k] === '1') count++
            if (maxTopic === count) maxTeam++
            else if (maxTopic < count) {
                maxTopic = count
                maxTeam = 1
            }
            count = 0
        }
    return [maxTopic, maxTeam]
}