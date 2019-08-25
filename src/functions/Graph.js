const graph = {
    start: {},
    A: {C: 20, B: 10},
    B: {D: 15, E: 50},
    C: {A: 20, D: 30},
    D: {B: 15, E: 30},
    E: {B: 50, D: 30},
    finish: {}
};

module.exports = graph;