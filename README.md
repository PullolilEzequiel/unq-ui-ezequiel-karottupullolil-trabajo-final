# Palabras encadenadas
Aplicación web desarrollada en React para el **Trabajo Final Integrador** de la materia _Construcción de Interfaces de Usuario_ - UNQ.

## Descripción
El juego consiste en formar la cadena más larga posible de palabras válidas antes de que se agote el tiempo. La primera palabra puede ser cualquier palabra válida y será la que inicie la cadena. A partir de la segunda palabra, cada nueva palabra debe comenzar con la última letra de la palabra válida anterior.

* Cada letra de una palabra válida otorga 1 punto.
* Cada turno tiene una duración de 15 segundos. El contador comienza al ingresar la primera palabra y se reinicia al introducir una palabra válida. Si llega a 0, la partida termina.

## Cómo iniciar el juego

### Requisitos previos
* git instalado 
* NodeJs 

1. Descargar el código fuente
```bash
git clone https://github.com/PullolilEzequiel/unq-ui-ezequiel-karottupullolil-trabajo-final && cd ./unq-ui-ezequiel-karottupullolil-trabajo-final
``` 

2. Instalar dependencias e iniciar proyecto 
```bash
npm install && npm run start 
``` 

3. Jugar en el navegador en la pestaña que se abrio automaticamente 
4. En caso de que no se haya abierto una pestaña, ir a `http://localhost:4173/`

