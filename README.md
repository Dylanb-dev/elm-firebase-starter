## Getting Started

### Install Elm Language server extension for vscode

https://github.com/elm-tooling/elm-language-server

### Setup Firebase

After creating a firebase change project name in .firebaserc to match the one you have on firebase.

## Usage

### Install Dependencies

`npm install`

Note: May take a while on first install

### Start Development Server

`npm start`

### Start Firebase emulator locally

`npm serve`

### Start Firebase emulator locally with production settings

`npm serve:prod`

### Deploy to firebase

`npm run deploy`

### The rest of this readme is copied from elm spades, you can read more there about the patterns used.

## Generators

### Add new component

```
npm run component Search
```

This is the coolest generator, it will create a Search
component under `src/`, update the main Model, Msg, Update, View and Routes for it

### Add new route

```
npm run route Contact
```

This will create a new Page type, route parser and route toPath case on the `src/Router/Routes.elm` file
