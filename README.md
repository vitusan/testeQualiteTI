# VGA Sales Page
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/vitusan/testeQualiteTI/blob/main/LICENSE) 

# Sobre o projeto

https://vga-salespage.netlify.app

VGA Sales Page é uma aplicação full stack web construída durante a 5ª edição da **Semana DevSuperior** (#sds5), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um dashboard de vendas que recebe os dados do backend implantado no Heroku e os exibe de forma organizada em diferentes gráficos assim como uma lista de todos os dados armazenados no Banco de Dados.

## Layout web
![Web 1](https://github.com/vitusan/vgasalespage/blob/main/assets/web1.png)

![Web 2](https://github.com/vitusan/vgasalespage/blob/main/assets/web2.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/vitusan/vgasalespage/blob/main/assets/sds5-mc.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- Apex Charts
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/vitusan/vgasalespage

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/vitusan/vgasalespage

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Victor Gonçalves de Andrade

https://www.linkedin.com/in/vitusan-li/