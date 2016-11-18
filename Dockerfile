FROM buildpack-deps:jessie

ENV app /Vanilla-Starter-Kit
ENV NODE 7

WORKDIR ${app}
ADD . $app

RUN curl -sL https://deb.nodesource.com/setup_$NODE.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs openjdk-7-jre-headless

RUN npm install

EXPOSE 3000 9876

CMD npm start
