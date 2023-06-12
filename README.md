# Studio boilerplate

This is a repository that uses NextJS to create a boilerplate pattern with cognito integration and Elastic Search using Search UI.

To execute this project, it is necessary to have Node 16+ installed and create a file named .env with the following setup:

```
AWS_REGION=
AWS_POOL_ID=
AWS_CLIENT_ID=
CRYPTO_SECRET_KEY=

NEXT_PUBLIC_SEARCHKEY=
NEXT_PUBLIC_ENGINENAME=
NEXT_PUBLIC_ENDPOINTBASE=
```

These environments are based on Amazon AWS: `AWS_REGION`, `AWS_POOL_ID` `AWS_CLIENT_ID`, and `CRYPTO_SECRET_KEY` are necessary for Cognito integration. And these variables `NEXT_PUBLIC_SEARCHKEY`, `NEXT_PUBLIC_ENGINENAME`, and `NEXT_PUBLIC_ENDPOINTBASE` are required for Elastic Search Integration.

The setup must be done before running the project

## Project

### Development mode
To to execute this project on development mode follow this step

```
yarn && yarn dev
```
The project will running on port 3000

### Production mode

To to execute this project on production mode follow this step

```
yarn build && yarn start
```
The project will running on port 3000

## Storybook

The storybook is running on port 6006

```
yarn && yarn storybook
```

