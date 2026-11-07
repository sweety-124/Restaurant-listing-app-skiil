
A small restaurant listing app built with React. It displays restaurant cards, includes a top-rated filter, and shows a shimmer placeholder when the restaurant list is empty.

## Requirements

- Node.js and npm

## Getting started

Install the dependencies and start the Parcel development server:

```bash
npm install
npm start
```

Parcel will print the local URL in the terminal. Open it in a browser to view the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app with Parcel in development mode. |
| `npm run build` | Create a production build with Parcel. |
| `npm test` | Run the Jest test script. |

## Data

The app starts with sample restaurant data from `src/utils/mockData.js`, then attempts to load restaurant data from the Swiggy API in `src/components/Body.js`. The API request may fail depending on network access or browser cross-origin restrictions; when it does, the sample data remains visible.

## Project structure

```text
.
├── app.js
├── index.css
├── index.html
└── src
    ├── components
    │   ├── Body.js
    │   ├── Header.js
    │   ├── RestaurantCard.js
    │   └── Shimmer.js
    └── utils
        ├── constants.js
        └── mockData.js
```
