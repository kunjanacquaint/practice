FROM node
# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install   

RUN npm install
# define the port number the container should expose
EXPOSE 3000

# run the command
CMD ["npm","run","start"]