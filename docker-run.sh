docker run -d --network host --name mongoDb \
    -e MONGO_INITDB_DATABASE=peer-medical \
    mongo