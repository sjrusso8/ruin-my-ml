# fake-this-ml

## The Concept
The idea behind this small project is to demonstrate what happens when nefarious users purposely send incorrect data to a deployed ML model.  The model is just a simple CNN based on the MNIST dataset and it tries to predict what a user draws on a canvas.  

The premise is that the user then has the option to correct the answer the ML model provides which the model uses to retrain on.

### Why do this?
I was inspired by a podcast from "Data Skeptic" on Sybil Attacks on Federated Learning (link here https://podcasts.google.com/feed/aHR0cHM6Ly9kYXRhc2tlcHRpYy5saWJzeW4uY29tL3Jzcw/episode/MTM1MGRkZGEtOTY3ZC00ODBjLWE4NzctMWRhYTY3Yjc2Zjlh?hl=en&ved=2ahUKEwiz-cy3woztAhXIi54KHdpjDgMQieUEegQIExAF&ep=6).  

Is this small MNIST ML model using federated learning? God no.  I wanted to experiment with Tensorflow.js, Vue, and data visualization to show in real time what happens to the accuracy of a ML model when users are sending it fake data.


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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
