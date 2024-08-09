const net = new brain.neuralNetwork([{
    hiddenLayers: [10, 10],
    activation: 'sigmoid',
}]);

net.train([
    {
        input: {
            unicode_upper: 'U+0041',
            unicode_lower: 'U+0061',
        },
        output: {
            letter_upper: 'A',
            letter_lower: 'a',
        },
    },
    {
        /* UNDER CONSTRUCTION */
    }
]);