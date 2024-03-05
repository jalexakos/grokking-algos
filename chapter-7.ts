// implementation
const graph = {
    'start': {
        'A': 6,
        'B': 2
    },
    'A': {
        'fin': 1
    },
    'B': {
        'A': 3,
        'fin': 5
    },
    'fin': {}
};

let costs: Record<string, number> = {
    'A': 6,
    'B': 2,
    'fin': Infinity
};

let parents: Record<string, string> = {
    'A': 'start',
    'B': 'start',
    'fin': ''
};

function djikstraAlgo () {
    let processed: Array<string> = [];
    let node = findLowestCostNode(processed);
    while (node) {
        let cost = costs[node];
        let neighbors: Record<string,number> = graph[node];
        for (let neighbor in Object.keys(neighbors)) {
            let newCost = cost + neighbors[neighbor];
            if (costs[neighbor] > newCost) {
                costs[neighbor] = newCost;
                parents[neighbor] = node;
            }
        }
        processed.push(node);
        node = findLowestCostNode(processed);
    }
}

function findLowestCostNode(processed: any[]) {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

djikstraAlgo();

console.log(costs.fin);

// 7.1
// A: 8
// B: 60, but can't perform Djikstra due to cycle (I guess we can?)
// C: can't perform Djikstra due to cycle & negative edge