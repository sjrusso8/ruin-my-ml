/* eslint-disable prettier/prettier */
import * as tf from "@tensorflow/tfjs";
// import * as tfVis from "@tensorflow/tfjs-vis";

let MNISTmodel = null

tf.loadLayersModel("./model/model.json").then(function (model) {
    MNISTmodel = model;
});

export default MNISTmodel;
