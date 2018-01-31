# React Native Calculator

Calculator created in React Native. Computes postfix expressions.

For example, to do 5+5, the sequence of buttons is at follows:

5, =, 5, +

Noticeable differences to original assignment: 
Layout does not match, specifically the container of the operation buttons. I ran the app on my iPhone using Expo and got a strange bug when using the same shade of red as the original. I decided to change the background color of the operation buttons to white. This can be fixed easily. 
Calculator computes postfix expressions. It uses a stack implementation to push numbers and call an operation on them. The calculator could be changed to accept infix expressions if need be.
				Infix: 5 + 5 = 10
				Postfix: 5 = 5 + 10

So to calculate 5 + 5 using the calculator, the sequence of buttons to press is as follows: 5, =, 5, +

Difficulties and things to improve:
App does not respond to keyboard input. I have a good idea at how this would be done, and with a little more time to play around in React-Native I believe I could implement it.
Jest Snapshot tests are poor. I have never used Jest and need more time to learn it before I can write better tests. 


## Getting Started

### Prerequisites

```
"react-native": "0.50.3" or higher
 "jest": "^22.1.4" or higher
```

## Running the tests

Navigate to project directory and run 

```
npm test
```

### Test functions

Tests that app renders appropriately, store is created, and operation function loads correctly.

## Deployment

Navigate to project direction and run

```
npm start
```

Scan QR code with Expo app (ios).

## Built With

* [React-Native](https://facebook.github.io/react-native/) 

## Authors

* **William Raffaelle** - *Initial work* - [wor3835](https://github.com/wor3835)

## Acknowledgments

* Ben Awad's YouTube Tutorials

