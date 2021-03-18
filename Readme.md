### Foram usado os pacotes para desenvolvimento
    npm install body-parser express mysql2 path sequelize sequelize-cli
    npm install nodemon -D
### Usando SEQUELIZE-CLI para gerar configuração pré existente
     npx sequelize-cli init
### Gerando script de migrations via CLI
        npx sequelize-cli model:create --name Pessoas 
        --attributes nome:string,ativo:boolean,email:string,role:string"
### Gerando migrations a partir de cli
        npx sequelize-cli db:migrate

        
