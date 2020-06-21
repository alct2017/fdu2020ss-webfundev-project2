FROM mysql
ENV MYSQL_DATABASE=web-pj2 \
    MYSQL_USER=user \
    MYSQL_PASSWORD=mypassword
COPY ./sql/*.sql /docker-entrypoint-initdb.d