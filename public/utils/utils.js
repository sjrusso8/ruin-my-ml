/* eslint-disable prettier/prettier */
import * as tf from "@tensorflow/tfjs";

function preprocess(img) {
    /**
     * Convert an Image from canvas to a tensor
     */

    return tf.tidy(() => {
        let tensor = tf.browser.fromPixels(img, 1);

        console.log(tensor)

        // resize
        const resized = tf.image.resizeBilinear(tensor, [28, 28], true).toFloat();

        console.log(resized)

        const offset = tf.scalar(255.0)
        const normalized = tf.scalar(1.0).sub(resized.div(offset))

        const batched = normalized.expandDims(0);

        console.log("batched", batched)

        return batched
    })
}

export {
    preprocess
}