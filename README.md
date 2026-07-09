# Palabras encadenadas
Aplicación web desarrollada en React para el **Trabajo Final Integrador** de la materia _Construcción de Interfaces de Usuario_ - UNQ.

## Descripción
El juego consiste en formar la cadena más larga posible de palabras válidas antes de que se agote el tiempo. La primera palabra puede ser cualquier palabra válida y será la que inicie la cadena. A partir de la segunda palabra, cada nueva palabra debe comenzar con la última letra de la palabra válida anterior.

### Dinámica del Juego
* **Inicio:** La partida comienza libre; podés ingresar cualquier palabra que sea válida para inaugurar la cadena.
* **Encadenamiento:** A partir de la segunda palabra, cada nuevo intento **debe comenzar estrictamente con la última letra** de la palabra válida anterior (ej: *Cas**a*** ➡️ ***A*** rbo*l* ➡️ *Lun**a***).

### Tiempo y Puntuación
* **El Cronómetro:** Disponés de **15 segundos** por intento. El tiempo empieza a correr con la primera palabra y **se reinicia a 15 segundos** con cada acierto. Si llega a 0, la partida termina.
* **Puntaje:** Cada letra de una palabra válida otorga **1 punto** al marcador global de la partida.
### Validación de Palabras
Para que una palabra sea aceptada por el sistema, debe cumplir simultáneamente:

1. Existir en el diccionario oficial en español
2. No haber sido utilizada previamente en la misma partida.
3. Respetar la regla de la letra inicial encadenada.

## Cómo iniciar el juego

### Requisitos previos
* git instalado 
* NodeJs 

1. Descargar el código fuente
```bash
git clone https://github.com/PullolilEzequiel/unq-ui-ezequiel-karottupullolil-trabajo-final && cd ./unq-ui-ezequiel-karottupullolil-trabajo-final
``` 

2. Instalar dependencias  
```bash
npm install
``` 

3.  Iniciar Proyecto
```bash
 npm run start 
```

4. En caso de que no se haya abierto una pestaña, ir a `http://localhost:4173/`

