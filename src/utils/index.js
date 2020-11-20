/* eslint-disable prettier/prettier */
import * as tf from "@tensorflow/tfjs";
import * as loader from "./loader";
import { preprocess } from "./utils";
// import * as tfVis from "@tensorflow/tfjs-vis";

// const MNIST_MODEL_PATH = "/model/model.json"

class mnistCNNModel {
    /**
     * Initial the MNIST
     */
    async init(path) {
        this.path = path;
        this.model = await loader.loadMNISTPretrainedMode(path);

        return this;
    }

    predictDrawing(img) {
        tf.tidy(() => {
            try {
                let preprocessd_img = preprocess(img);
                let softmax = this.model.predict(preprocessd_img).dataSync();
                let preds = Array.from(softmax).map(n => parseFloat(n.toPrecision(4)));
                console.log(preds);

                // return this.model.predict(preprocessd_img).dataSync();
            } catch (e) {
                console.log(e)
            }
        });
    }
};

function disposeTFVariables() {
    tf.disposeVariables();
};

export {
    mnistCNNModel,
    disposeTFVariables
}
