# *Dockerize Everything!* 🐋

[![Build blog](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-blog.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-blog.yml)
[![Build catalog](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-catalog.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-catalog.yml)
[![Build restaurant](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-restau.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/build-restau.yml)
[![MegaLinter](https://github.com/Jayllyz/dockerize-project/actions/workflows/mega-linter.yml/badge.svg)](https://github.com/Jayllyz/dockerize-project/actions/workflows/mega-linter.yml)

This project aims to demonstrate how to properly use Docker for any kind of project.

It contains 3 services:

- [Blog](./blog) (Rust)
- [Catalog](./tv-shows-catalog) (Node.js)
- [Restaurant](./restaurant-website) (Php)

For each service, there is a development and production environment, and a CI pipeline to make sure everything is building correctly.

## Good practices 🚀

Docker is a powerful tool, but it can be hard to use properly. 

Here are some good practices we followed:

- Use multi-stage builds to reduce the size of the final image.
- Use `.dockerignore` to avoid copying unnecessary files.
- Don't use `latest` tag for images, use a specific version instead.
- Don't use `root` user in your container, use a non-root user instead.
- Use environment variables to configure your application.
- Optimize layers cache by ordering your commands.
- Use `HEALTHCHECK` to check if your application is running correctly.

Learn more about good practices in the [Docker documentation](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).

## Authors 👨‍💻

- [@Jayllyz](https://www.github.com/Jayllyz)
- [@Metololo](https://www.github.com/Metololo)
- [@userMeh](https://www.github.com/userMeh)

## License 📝

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
