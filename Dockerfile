FROM buildpack-deps:jessie

ENV HOME /Frontend-Starter-Kit
ENV NODE 7
ENV DEBIAN_FRONTEND noninteractive
ENV PATH $HOME/.yarn/bin:$PATH

WORKDIR ${HOME}
ADD . $HOME

RUN curl -sL https://deb.nodesource.com/setup_$NODE.x | bash - && \
    curl -o- -L https://yarnpkg.com/install.sh | bash && \
    # apt-get install -y software-properties-common && \
    # add-apt-repository ppa:openjdk-r/ppa -y && \
    apt-get update && \
    apt-get install -y \
      nodejs \
      openjdk-7-jre-headless \
      # openjdk-8-jre-headless \
      --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN yarn

EXPOSE 3000 9876
