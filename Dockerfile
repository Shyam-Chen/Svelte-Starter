FROM buildpack-deps:jessie

ENV HOME /Frontend-Starter-Kit
ENV NODE 7
ENV DEBIAN_FRONTEND noninteractive
ENV PATH $HOME/.yarn/bin:$PATH

WORKDIR ${HOME}
ADD . $HOME

RUN curl -sL https://deb.nodesource.com/setup_$NODE.x | bash - && \
    curl -o- -L https://yarnpkg.com/install.sh | bash && \
    apt-get update && \
    apt-get install -y nodejs

# wget
RUN apt-get update && apt-get install -y wget

# jdk 1.8
RUN wget -nv -O /tmp/jdk.tgz --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u121-b13/e9e7ea248e2c4826b92b3f075a80e441/jdk-8u121-linux-x64.tar.gz && tar zxf /tmp/jdk.tgz -C /opt
RUN update-alternatives --install /usr/bin/java java /opt/jdk1.8.0_121/bin/java 100
RUN update-alternatives --install /usr/bin/javac javac /opt/jdk1.8.0_121/bin/javac 100

# cleanup
RUN apt-get purge -y wget && apt-get -y autoremove
RUN rm -rf /var/lib/apt/lists/*

RUN java -version
RUN node -v
RUN npm -v

RUN yarn

EXPOSE 3000 9876
