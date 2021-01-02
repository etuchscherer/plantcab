FROM tuchscherer/plantcab

COPY . /usr/share/app

WORKDIR /usr/share/app/useless-bay

RUN npm install
RUN npm run build

EXPOSE 5000
CMD ["npm", "start"]