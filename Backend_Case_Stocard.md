# A REST-based weather service

If you have any question, feel free to contact me mail (barth@stocard.de).

Please use git for tracking your progress. For handing the case in, please share a link to a public git repo or use git-bundle (https://git-scm.com/blog/2010/03/10/bundles.html) and share the file with me.

Feel encouraged to dockerize your test and add a meaningful set of tests.

## Routes

```js
```
```js
{
  "code":"BadRequestError",
  "message":"lat/lng required"	
}

```js
```
```js
{
}
```

### `GET /cities/{city_id}/weather`

* `HTTP 200 Ok` with body:
```js
{
  "type_description": "clear sky",
  "sunrise": "2016-08-23T08:00:00.000Z",
  "sunset": "2016-08-23T22:00:00.000Z",
  "temp": 29.72,
```

```js
{
}
```
* postman (https://www.getpostman.com/) or curl to test the service