## Prerequisite

1. Install the node js 
    ```
    node --version 
    v16.19.0 
    ```
2. docker and docker compose

## Project setup using docker ( recommended )

* If you are facing some issue while running the project locally you can using the docker compose to test. 

* Use this command to build the container 

```
docker-compose up 
or
docker compose up
```

* Project will start on this url 

```
http://localhost:5173/
```

## Project setup local

1. clone the project

2. Use make command for initial setup

    ```
    make
    ```

## Runing the project
* Run both frontend and backend

    ```
    make run
    ```
* Run frontend 

    ```
     make run-frontend
    ```
* Run backend 
    ```
     make run-backend
    ```
