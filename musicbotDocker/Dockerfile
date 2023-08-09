FROM ibmjava:jre

WORKDIR  /usr/src/app/

COPY . .

RUN apt-get update && apt-get install -y gettext nodejs

CMD envsubst < config_template.txt > config.txt && ./listener.js & java -Dnogui=true -jar JMusicBot-0.3.9.jar
