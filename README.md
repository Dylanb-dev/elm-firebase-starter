## Getting Started

### Install Elm

https://guide.elm-lang.org/install/elm.html

### Install Elm Language server extension for vscode

https://github.com/elm-tooling/elm-language-server

### Install spades for code gen ala angular

```
npm -g install git+https://github.com/rogeriochaves/spades.git
```

### Setup Firebase

After creating a firebase project rename firebaserc to .firebaserc and change project name to match the one you have on firebase.

## Usage

### Install Dependencies

`npm i && cd functions && npm i && cd ..`

### Start Firebase emulator locally

`npm start`

### Build app

`npm run build`

### Deploy to firebase (requires firebase cli)

`firebase deploy`

### The rest of this readme is copied from elm spades, you can read more there.

## Generators

### Add new component

```
elm-generate component Search
```

This is the coolest generator, it will create a Search
component under `src/`, update the main Model, Msg, Update, View and Routes for it

### Add new route

```
elm-generate route Contact
```

This will create a new Page type, route parser and route toPath case on the `src/Router/Routes.elm` file
