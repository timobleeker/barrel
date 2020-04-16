# README

## Description
This is a mini project I built as part of a technical review process for a job application.
The goal was to create an app to store and rate whiskeys you have enjoyed.

## Requirements
`ruby 2.6.5`

`node`

`postgres`

## Setup
After cloning it locally, run `bundle install`, `yarn install` followed by `rails db:setup db:seed`

To start the app, run `rails s`. Webpack will compile and start the app on `localhost:3000`.

## Testing
To run eslint and javascript tests: `yarn test`

To run rspec: `bundle exec rspec`

## Features

### Viewing whiskeys
The home page lists all whiskeys, their title and the first few words of the description. To see more, click "View Details" on a card.
Use the dot menu on the card to edit or delete whiskeys.


### Logging new whiskeys
Click "Add new whiskey" and fill in the fields to log a new whiskey.

### Quick search
I've implemented a simple front-end text search that searches in the name and description of whiskeys.

### Advanced search
If you click on "Advanced Search" you will see the same form used to add a new whiskey. Here I have reused this component to provide a more advanced search feature.
This search will let you set minimum ratings, as well as search based on text. The text search here uses a simple `ILIKE` query, so it will not find results when entering seperate words that are not present in that exact order.
Given more time, I would implement full-text search using `pg_trgm`.

### API
The front-end app simply makes calls to the Rails backend. This api can be accessed directly by going to `/api/whiskeys`.
E.g. to perform a search for whiskeys with the name "Balvenie" and at least a taste rating of 3 or higher, visit `localhost:3000/api/whiskeys/search?name=Balvenie&taste=3`
