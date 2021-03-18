 ### Gerando script de migrations via CLI
            npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string"
 ## Gerando migrations a partir de cli
        npx sequelize-cli db:migrate
