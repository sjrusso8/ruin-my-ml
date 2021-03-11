# Ruin my Machine Learning Model

Life got in the way and I did not get to finish this project.  I have moved onto other topics on my github.

Currently a work in progress. Need to wire everything together and allow a user to retrain the model with bad data.

## The Concept
The idea behind this small project is to demonstrate what happens when nefarious users purposely send incorrect data to a deployed ML model.  The model is just a simple CNN based on the MNIST dataset and it tries to predict what a user draws on a canvas.  

The premise is that the user then has the option to provide an 'incorrect' answer to the ML model which the model uses to retrain on.

For instance, a user draws a '7' and relabels it as '3'.  The model will then be retrained on bad data which will cause the model to drift away from its original accurarcy.

### Why do this?
I was inspired by a podcast from "Data Skeptic" on [Sybil Attacks on Federated Learning]( https://podcasts.google.com/feed/aHR0cHM6Ly9kYXRhc2tlcHRpYy5saWJzeW4uY29tL3Jzcw/episode/MTM1MGRkZGEtOTY3ZC00ODBjLWE4NzctMWRhYTY3Yjc2Zjlh?hl=en&ved=2ahUKEwiz-cy3woztAhXIi54KHdpjDgMQieUEegQIExAF&ep=6)

Is this small MNIST ML model using federated learning? God no.  I wanted to experiment with Tensorflow.js, and data visualization to show in real time what happens to the accuracy of a ML model when users are sending it fake data.

### Has this happened elsewhere?
You betcha!  Microsoft released the twitter bot 'Tay' and users began to send it a boat load of horrible tweets.  Tay then learned to become a rasict bot in just a matter of days.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
