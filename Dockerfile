FROM buildpack-deps:jessie

ENV DEBIAN_FRONTEND noninteractive
ENV app /Vanilla-Starter-Kit
ENV NODE 7

WORKDIR ${app}
ADD . $app

RUN curl -sL https://deb.nodesource.com/setup_$NODE.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs xvfb libgconf-2-4 openjdk-7-jre-headless && \
    rm -rf /var/lib/apt/lists/*

RUN chmod a+x protractor.sh

ENTRYPOINT ["/Vanilla-Starter-Kit/protractor.sh"]

RUN npm install && \
    npm install -g firebase-tools

EXPOSE 3000 9876

CMD [ "npm", "start" ]
