FROM buildpack-deps:jessie

ENV app /Vanilla-Starter-Kit
ENV NODE 7
ENV DEBIAN_FRONTEND noninteractive
ENV DISPLAY :99.0
ENV CHROME_BIN /usr/bin/chromium

WORKDIR ${app}
ADD . $app

RUN curl -sL https://deb.nodesource.com/setup_$NODE.x | bash - && \
    apt-get update && \
    apt-get install -y \
    nodejs xvfb chromium libgconf-2-4 openjdk-7-jre-headless && \
    rm -rf /var/lib/apt/lists/*

RUN chmod a+x scripts/window.sh

ENTRYPOINT ["/Vanilla-Starter-Kit/scripts/window.sh"]

# RUN curl -o- -L https://yarnpkg.com/install.sh | bash
# RUN yarn

# RUN npm install yarn -g
# RUN yarn

RUN npm install

EXPOSE 3000 9876

CMD npm start
