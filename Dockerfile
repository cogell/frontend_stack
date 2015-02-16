FROM avant/nodejs:0.12.0
MAINTAINER cedric@avant.org

ENV SRC /app

WORKDIR $SRC

ADD package.json $SRC/package.json
RUN npm install --unsafe-perm

ENTRYPOINT ["npm"]
CMD ["start"]


