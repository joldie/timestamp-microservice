# Timestamp Microservice

REST API which converts a given date/time string into a valid UTC timestamp.

## Description

The API endpoint is:

`GET [site_url]/api/timestamp/:date_string?`

#### Input

A valid date/time string, parseable by `new Date(date_string)`.

Note that a unix timestamp needs to be an integer (not a string) specifying milliseconds.

#### Output

A JSON object with the following structure:

`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`

If no input given, the current timestamp will be returned. If an invalid input is received, the API returns the following JSON object:

`{"error" : "Invalid Date" }`.

#### Example usage:

- `[site_url]/api/timestamp/2015-12-15`
- `[site_url]/api/timestamp/1450137600000`
- `[site_url]/api/timestamp/`

#### Example output:

- `{ "unix": 1450137600, "natural": "December 15, 2015" }`

## Contributing

All contributions are welcome, particularly feedback on code quality, bug reports, tips and ideas for improvement.

## License

All code dedicated to the world-wide public domain under a [Creative Commons Zero v1.0 Universal License](https://creativecommons.org/publicdomain/zero/1.0/)
