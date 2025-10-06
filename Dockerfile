FROM node:18-alpine


# install the dependancies separetely
COPY package*.json ./
RUN npm install


# copy the rest of the files
COPY . .


#  run as non root user
USER node  

# expose the port
EXPOSE 3000

# start the app
CMD ["npm", "start"]