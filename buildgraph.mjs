class BuildGraph {
    constructor() {
        this.graph = new Map;
    }
    // Adding vertex(node) to graph
    addNode(node) {
        this.graph.set(node, new Map);
    }
    // Adding edges between nodes
    addEdge(node1, node2, weight = 0) {
        this.graph.get(node1).set(node2, weight);
        this.graph.get(node2).set(node1, weight);
    }
    // reomving edges
    removeEdge(node1, node2) {
        this.graph.get(node1).delete(node2);
        this.graph.get(node2).delete(node1);
    }
    // removing a node completely
    removeNode(node) {
        for(let key of this.graph.keys()) {
            if(this.graph.get(key).has(node)) { 
                this.graph.get(key).delete(node);
            }
        }
        this.graph.delete(node);
    }
    // Traversing graph with BFS
    traverseBFS(from) {
        let queue = [], visited = {};
        queue.push(from);
        while(queue.length) {
            let current = queue.shift();
            visited[current] = true;
            for(let node of this.graph.get(current).keys())
                if(!visited[node]) queue.push(node);
        }
    }
    // Traversing graph with DFS

    //  The traverseDFS works by recursively visiting all nodes
    traverseDFS(from) {
        let visited = {};
        return this._traverseDFS(from, visited)
    }
    _traverseDFS(from, visited) {
        visited[from] = true;
        for(let node of this.graph.get(from).keys()) 
            if(!visited[node]) this._traverseDFS(node, visited)
    }
    // calculating routes using BFS
    findRoute(from, to, graph) {
        console.log(graph)
        let work = [{at: from, route: []}];
        for(let i = 0;; i++) {
            let {at, route} = work[i];
            for(let node of graph.get(at).keys()) {
                if(node == to) return route.concat(node);
                if(!work.some(e => e.at == node)) work.push({at: node, route: route.concat(node)});
            }
        }
    }
}

const graph = new BuildGraph;
const findRoute = graph.findRoute;



graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addEdge("A", "B", 3)
graph.addEdge("A", "C", 3)
graph.addEdge("B", "C", 3)
graph.addEdge("B", "D", 3)
graph.addEdge("D", "C", 3)
// graph.removeEdge("A", "B")
// graph.traverseBFS("A")
// graph.traverseDFS("A", "D")
// console.log(graph)
// console.log(findRoute("C", "D", graph.graph))

export { graph }


