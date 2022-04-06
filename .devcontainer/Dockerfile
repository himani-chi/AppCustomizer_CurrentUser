FROM node:14.19.0

RUN npm i -g gulp yo @microsoft/generator-sharepoint@1.13.1

VOLUME /usr/app/spfx
WORKDIR /usr/app/spfx
RUN useradd --create-home --shell /bin/bash spfx && \
    usermod -aG sudo spfx && \
    chown -R spfx:spfx /usr/app/spfx

USER spfx

CMD /bin/bash
