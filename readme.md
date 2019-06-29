# PEER MEDICAL API v.1

## Use

### Install dependencies

```javascript
npm install
```

### Execute

```javascript
npm run dev
```

### TOKEN
The application has a .env file where was defined a TOKEN variable. The header of the request will have the key TOKEN and value .env['TOKEN'].

## Endpoints

#### Create a new user

**URL** : `/api/user/`

**Method** : `POST`

**Token required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X POST \
  http://localhost:3000/user \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "name": "Joe",
    "avatar": "http://images.google.com/elavatar.jpg"
}'
```

#### List users

**URL** : `/api/user/`

**Method** : `GET`

**Auth required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X GET \
  http://localhost:3000/user \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```

#### Get user by Id

**URL** : `/api/user/:id`

**Method** : `GET`

**Parameter** : `id <- User`

**Auth required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X GET \
  http://localhost:3000/user/5d0c53746bd7da08eea7ea78 \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```

#### List articles

**URL** : `/api/article/`

**Method** : `GET`

**Auth required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X GET \
  http://localhost:3000/article \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```

#### Get article by Id with User

**URL** : `/api/article/:id/user`

**Method** : `GET`

**Parameter** : `id <- Article`

**Auth required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X GET \
  http://localhost:3000/article/5d0e6d98563cdb0f96d4132f/user \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```

#### Create a new article

**URL** : `/api/article/`

**Method** : `POST`

**Token required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X POST \
  http://localhost:3000/article \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "title": "The book of Joe",
    "text": "Lorem",
    "tags": ["History"]
}'
```

or

```curl
curl -X POST \
  http://localhost:3000/article \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "title": "The book of Joe",
    "text": "Lorem",
    "tags": ["History"],
    "userId": "5d142a14708e290a25e8eb2f"
}'
```

#### Edit an article

**URL** : `/api/article/:id`

**Method** : `PUT`

**Parameter** : `id <- Article`

**Token required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X PUT \
  http://localhost:3000/article/5d0e6d98563cdb0f96d4132f \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
  "title": "TitleStringString",
  "tags": ["Animals","Nature"]
}'
```

#### Delete an article

**URL** : `/api/article/:id`

**Method** : `DELETE`

**Parameter** : `id <- Article`

**Token required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X DELETE \
  http://localhost:3000/article/5d0e6d98563cdb0f96d4132f \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```

#### Return all articles (from all users) that contains the given tag(s) (1 or more)

**URL** : `/api/article/withTagsAndUser`

**Method** : `GET`

**Token required** : YES
***headers require***

```json
{
  "authorization": "5CD4ED173E1C95FE763B753A297D5",
  "content-type": "application/json",
  "cache-control": "no-cache",
}
```

***Curl***

```curl
curl -X GET \
  http://localhost:3000/article/withTagsAndUser \
  -H 'authorization: 5CD4ED173E1C95FE763B753A297D5' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```

## Resources

Database is in mlab. Also it's possible use local database. Set in .env the mongo db url . But you will set mongo in local: two ways: docker or mongo as application.
