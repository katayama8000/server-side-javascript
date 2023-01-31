```bash
# createUser
curl --location --request POST 'localhost:3000/users/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"katayama",
    "password":"123456789",
    "email":"tattu.0310@gmail.com"
}'

# getAllUser
curl --location --request GET 'localhost:3000/users/all'
```

```bash
docker compose up -d
docker compose down
```
