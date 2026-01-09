---
title: Docker Installation
description: How to use Docker to setup a nanos world server
sidebar_position: 5
tags: [hosting]
---

How to use Docker to setup a nanos world server.


:::caution Community Resource

The Docker setup is maintained by the community. For more details, visit the open source GitHub repository: [nanos-world-server Docker](https://github.com/olivatooo/nanos-world-server).

:::


You can run nanos world server in a containerized environment using [Docker](https://www.docker.com/). This method works on any system that supports Docker (Linux, Windows, macOS).

## Prerequisites

* Docker (version 20.10 or higher)
* Docker Compose (version 2.0 or higher)
* At least 100MB of free disk space

## Quick Start with Docker Compose

#### 1. Create a `docker-compose.yml` file:

```yaml
services:
  nanos-world-server:
    image: olivatooo/nanos-world-server:latest
    restart: unless-stopped
    # Uncomment to always have the latest version
    # pull_policy: always
    ports:
      - "7777:7777/udp"
      - "7777:7777/tcp"
    volumes:
      - ./Packages:/app/Packages
      - ./Assets:/app/Assets
    # Uncomment and modify to pass parameters to the server
    # command: ["--port", "7777", "--map", "MyMap"]
```

#### 2. Start the server:

```shell
docker-compose up -d
```

#### 3. View logs:

```shell
docker-compose logs -f
```

#### 4. Stop the server:

```shell
docker-compose down
```

## Using Docker CLI

Alternatively, you can run the server directly with Docker:

```shell
docker run olivatooo/nanos-world-server
```

## Configuration

You can pass server parameters by modifying the `command` section in `docker-compose.yml`:

```yaml
command: ["--max-players", "32", "--announce"]
```

## Persistent Data

The Docker configuration mounts a volume to `/app` inside the container. This allows you to:
- Persist server configuration files
- Add custom packages and assets
- Access server logs
- Maintain saved data between container restarts

## Updating the Server

To update to the latest version:

```shell
docker-compose pull
docker-compose up -d
```
