---
titulo: Docker com Postgres e PGAdmin4
descricao: code in your Next.js blog
autor: Rodrigo Dias Noronha
slug: postgres-com-pg-admin-4
data: Tue Apr 27 2021 22:10:35 GMT-0300 (Horário Padrão de Brasília)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://pbs.twimg.com/profile_images/1340832167778238465/twOdLLSa_400x400.jpg
---

Hey, guys!

Vim mostrar pra vocês, neste tutorial de hoje, como criar uma conexão com Docker e o PG Admin da maneira mais fácil que há com o Docker.

Primeiro, você precisa ter o Docker instalado e rodando na sua máquina

E por último, criar um arquivo `docker-compose.yml` na raiz do seu projeto e colar o código abaixo nele:

```yml
version: '3.8'
services:
    db:
        container_name: postgres_database_container
        image: postgres
        restart: always
        environment:
            POSTGRES_USER: docker
            POSTGRES_PASSWORD: docker
            POSTGRES_DB: docker_db
        ports:
            - '5432:5432'
    pgadmin:
        container_name: postgres_pgadmin4_container
        image: dpage/pgadmin4
        restart: always
        environment:
            PGADMIN_DEFAULT_EMAIL: admin@admin.com
            PGADMIN_DEFAULT_PASSWORD: docker
        ports:
            - '5050:80'
```

É um arquivo .yml bem simples. Não se esqueça de rodar o `docker-compose up` parar dar `start` nos seus containers.

Sua aplicação estará rodando em `localhost:5050`.

Super simples, é isso, guys. Até a próxima!
