FROM buildpack-deps:jessie

ENV HOME /Vanilla-Starter-Kit
ENV NODE 7
ENV DEBIAN_FRONTEND noninteractive
ENV PATH $HOME/.yarn/bin:$PATH
# ENV DISPLAY :99.0
# ENV CHROME_BIN /usr/bin/chromium

WORKDIR ${HOME}
ADD . $HOME

RUN curl -sL https://deb.nodesource.com/setup_$NODE.x | bash - && \
    curl -o- -L https://yarnpkg.com/install.sh | bash && \
    apt-get update && \
    apt-get install -y \
      # git \
      nodejs \
      # xvfb \
      # chromium \
      # libgconf-2-4 \
      openjdk-7-jre-headless \
      --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# RUN chmod a+x scripts/window.sh
# ENTRYPOINT ["/Vanilla-Starter-Kit/scripts/window.sh"]

# RUN yarn install
RUN npm install

EXPOSE 3000 9876

CMD npm start
