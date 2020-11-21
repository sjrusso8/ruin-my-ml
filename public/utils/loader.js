/**
 * Creating a few functions to handle loading the model
 */

/* eslint-disable prettier/prettier */

import * as tf from "@tensorflow/tfjs";

export async function loadMNISTPretrainedMode(path) {
    try {
        const model = await tf.loadLayersModel(path);
        return model
    } catch (err) {
        console.log(err)
    }
} 