# Generate-Password

## Diagram: UML
![Diagram: UML](./materials/generated-password.jpeg "Diagram: UML")

## Docker

### Main way

#### Run from docker-compose.yml
```bash
$ docker-compose up -d -V --build 
```

### Alternative way

#### Download
```bash
$ docker pull karba/generate-password:latest
```

### Run container
```bash
$ docker run -it -p 3000:3000 karba/generate-password
```

## App
### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
