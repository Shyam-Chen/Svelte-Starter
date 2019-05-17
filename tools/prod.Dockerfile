FROM node:10

ENV HOME /Svelte-Play

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

ENV NODE_ENV production

# envs --

# -- envs

RUN yarn build
