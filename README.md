# docker-cntlm

Crie na raiz do projeto o arquivo cntlm.conf. O projeto possui cntlm-template.conf para se usar como base

Para iniciar utilize o docker-compose
```
docker-compose up -d
```

Execute o seguinte comando para entrar na VPN
```
docker exec -it --privileged docker-cntlm_proxy_1 openconnect
```

Adicione nas configurações de proxy a seguinte url 

```
http://localhost:8128/proxy.pac
```

Personalize o arquivo nginx/proxy.pac com os dominios que deseja redirecionar para o proxy