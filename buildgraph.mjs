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
}

const graph = new BuildGraph;
graph.addNode("A")
graph.addNode("B")
graph.addEdge("A", "B", 3)
// graph.removeEdge("A", "B")
graph.removeNode("A")
console.log(graph)