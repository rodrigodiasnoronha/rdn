---
titulo: Laravel + Laradock
descricao: Uma colinha minha de como usar Docker junto com Laravel
autor: Rodrigo Dias Noronha
slug: laradock-containizando-aplicacoes-laravel
data: Thu Apr 08 2021 17:45:48 GMT-0300 (Horário Padrão de Brasília)
twitter: xxxkckkxkxxk
autorEmail: rodrigodnoronha@gmail.com
autorFoto: https://raw.githubusercontent.com/rodrigodiasnoronha/rdn/master/public/images/1612554444806.jpeg
---

Fala, pessoal, belê?!

Vim deixar uma colinha de como trabalhar com Docker e Laravel, utilizando o [Laradock](https://laradock.io/). Nesse exemplo, estarei utilizando o Postgres e o Nginx.

#### Passo 1

Criar um novo projeto Laravel e entrar nele

#### Passo 2

Clone o repositório do [Laradock](https://github.com/laradock/laradock) dentro da raiz do teu repositório.

#### Passo 3

Acesse a pasta `laradock`, dentro do seu projeto. Em seguida, você pode copiar todo o conteúdo do arquivo `env.example` para um novo arquivo `.env`

#### Passo 4

Agora, abra o TEU arquivo `.env`, o na raiz do teu projeto (não o do Laradock) e substitua as seguintes variáveis de ambiente:
```env
  
DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=default
DB_USERNAME=default
DB_PASSWORD=secret
```

Na verdade, essas variáveis estão no `.env` do Laradock, então você precisa deixar exatamente igual, para não houver erros de conexão.

#### Passo 5

Execute o seguinte comando
```bash
$ sudo docker-compose up -d nginx postgres
```

Para rodar as migrations e acessar o terminal pelo teu projeto:
```bash
$ sudo docker-compose exec workspace bash
```

Agora, você terá acesso ao terminal do projeto, você precisa rodar `composer install` e `php artisan migrate` ou comandos do PHP de sua preferência.



[Link da fonte (e também ele deve receber os créditos por isso rsrs)](https://medium.com/@arikardnoir/dockerize-sua-aplica%C3%A7%C3%A3o-laravel-postgres-usando-o-laradock-f228cc426638)

## Extra

 Para acessar via terminal o database, use o seguinte comando: 
 ```bash 
 docker exec -ti NAME_OF_CONTAINER psql -U YOUR_POSTGRES_USERNAME
```
