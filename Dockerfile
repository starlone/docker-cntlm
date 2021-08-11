
FROM nginx
COPY nginx /usr/share/nginx/html

RUN apt-get update && apt-get install -y \
    openconnect \
    cntlm \
    vim \
    && rm -rf /var/lib/apt/lists/*

ADD start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
