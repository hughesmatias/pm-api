# PEER MEDICAL API

## Use

### Install dependencies

```javascript
npm install
```

### Excecute

```javascript
npm run dev
```

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
    "text": "http://images.google.com/elavatar.jpg",
    "text": "Lorem",
    "tags": "['History']"
}'
```

- [x] Edit an article

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

- [ ] Delete an article
- [x] Return all articles (from all users) that contains the given tag(s) (1 or more)


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

DataBase is in mlab.
Also it's possible use local database. Set en .env of url mongo db.
