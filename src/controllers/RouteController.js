const graph = require('../functions/Graph');
const dijkstra = require('../functions/routeMap');
const calculateExpense = require('../functions/calculateExpense');

module.exports = {

    async store(req, res){

        try{
            const { origin, destination, capacity, priceLiter } = req.body;

            Object.keys(graph).forEach( e => delete graph[e].finish );

            graph.start[origin] = 1;
            graph[destination].finish = 1;

            const routeMap = dijkstra(graph);
            const expense = calculateExpense(routeMap.distance, capacity, priceLiter);
          
            return res.status(200).send({expense, routeMap});

        }
        catch(error){
            return res.status(400).json({"error": error});
        }

    }
}