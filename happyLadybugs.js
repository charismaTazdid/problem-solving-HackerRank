// Problem: https://www.hackerrank.com/challenges/happy-ladybugs/

function happyLadybugs(b) {
    const ladybugs = b.split("");
    const ladybugsSet = [...new Set(ladybugs)];

    if (!ladybugsSet.includes("_")) {
        for (let i = 0; i < ladybugs.length; i++) {
            if (ladybugs[i - 1] !== ladybugs[i] && ladybugs[i] !== ladybugs[i + 1]) return "NO";
        }
        return "YES";
    } else {
        for (const ladybug of ladybugsSet) {
            if (ladybug !== "_") {
                if (ladybugs.filter((color) => color === ladybug).length === 1) return "NO";
            }
        }
        return "YES";
    }
}

