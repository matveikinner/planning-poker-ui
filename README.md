# Planning Poker

Planning Poker UI

> Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development.

This repository relates to and depends upon [this](https://github.com/matveikinner/planning-poker-server) server implementation

## Known Issues

- Latest `@types/dotenv-webpack^7.x.x` has incompatible types with `@types/webpack^5.x.x` due to having `@types/webpack^4.x.x` as a dependency whereas `@types/dotenv-webpack^6.x.x` has `@types/webpack *` as a dependency. Temporary solution is to use latest `dotenv-webpack^7.x.x` with `@types/dotenv-webpack^6.x.x` until patch is available to fix incompatible types
