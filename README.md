# AirBnB Database Web Application Interface

## About

AirBnB database web application interface. Allowing for querying of listings and bookings.

## Usage

Prerequistes: Node.js v22

1. Make `.env` file, `touch .env`
2. Edit `.env`

```.env
USERNAME=[username]
PASSWORD=[password]
PORT=[port]
```

If add `PORT` edit `client/src/service/config.ts`.

3. `cd server/ && npm i`
4. `npm run dev`
5. Run new instance of shell, `cd ../client/ && npm i`
6. `npm run dev`

## Todo

- fix json return for form
- random listings
- seperate form
- confirmation page (no validation)
- add api endpoint for finding bookings

Extra

- pagination of listings
- add icon to errors
- show information of listing in booking/id
- ListingResults
