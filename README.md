# School API

A Node.js + Express.js REST API with MySQL to manage school data. Allows adding schools and listing them sorted by proximity to a given location.

## Endpoints

### POST /addSchool
- Add a school
- Payload: `{ name, address, latitude, longitude }`

### GET /listSchools?lat=...&lng=...
- List schools sorted by proximity

## Tech
- Node.js
- Express
- MySQL
