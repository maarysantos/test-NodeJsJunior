const findLowestCostNode = (distance, processed) => {
    const knownNodes = Object.keys(distance);

    const lowestCostNode = knownNodes.reduce((lowest, node) => {
        if (lowest === null && !processed.includes(node)) {
            lowest = node;
        }

        if (distance[node] < distance[lowest] && !processed.includes(node)) {
            lowest = node;
        }

        return lowest;
      }, null);

   return lowestCostNode;
};


// function that returns the minimum distance and path to reach Finish
const dijkstra = (graph) => {

   console.log('Graph: ')
   console.log(graph)

// track lowest distance to reach each node
    const trackeddistance = Object.assign({finish: Infinity}, graph.start);

// track paths
    const trackedParents = {finish: null};
        for (let child in graph.start) {
           trackedParents[child] = 'start';
        }

// track nodes that have already been processed
    const processedNodes = [];

// Set initial node. Pick lowest cost node.
    let node = findLowestCostNode(trackeddistance, processedNodes);
    console.log('Initial `node`: ', node)

    while (node) {
        let costToReachNode = trackeddistance[node];
        let childrenOfNode = graph[node];

        for (let child in childrenOfNode) {
            let costFromNodetoChild = childrenOfNode[child]
            let costToChild = costToReachNode + costFromNodetoChild;
    
            if (!trackeddistance[child] || trackeddistance[child] > costToChild) {
                trackeddistance[child] = costToChild;
                trackedParents[child] = node;
            }
        }

        processedNodes.push(node);

        node = findLowestCostNode(trackeddistance, processedNodes);
    }

    let optimalPath = ['finish'];
    let parent = trackedParents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = trackedParents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: (trackeddistance.finish) - 2,
        path: optimalPath
    };

    return results;
};
//End


module.exports = dijkstra;