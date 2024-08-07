const model = tf.sequential();
model.add(tf.layers.dense({ units: 128, inputShape: [3], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'linear' }));

model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

const xs = tf.tensor2d([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
const ys = tf.tensor2d([
    [1],
    [2],
    [3]
]);

model.fit(xs, ys, { epochs: 100 }).then(() => {
    const newData = tf.tensor2d([
        [10, 20, 30],
        [40, 50, 60]
    ]);
    const predictions = model.predict(newData);
    console.log(predictions.dataSync());
});