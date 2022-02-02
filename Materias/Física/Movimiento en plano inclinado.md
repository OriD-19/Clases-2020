---
tags: Física 01/02/2022
---

# Movimiento en plano inclinado
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el 01/02/2022</div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el 01/02/2022</div>

Hasta ahora, hemos adoptado siempre sistemas de coordenadas con el eje X horizontal y el eje Y vertical. Sin embargo, esa no es la elección más adecuda en este caso, en el que el trineo se desplaza siguiendo una línea recta a lo largo del plano inclinado. Aquí, lo mjoer es definir el sistema de coordenadas como se muestra en la Figura, con el eje x positivo a lo largo del plano inclinado y el eje Y positivo perpendicular al mismo.

La rotación del eje depende de cuánta pendiente tiene la inclinación del plano. Por lo tanto, lo anterior evidencia que el plano cartesiano **no es un objeto fijo, y podemos adaptarlo como más convenga a la hora de analizar problemas**.

## Ventajas de modificar el plano

Inclinar el plano cartesiano tiene sus *ventajas a la hora de analizar un problema con un plano inclinado*.
La principal de ellas es, precisamente, facilitar los cálculos matemáticos a la hora de analizar el problema.

## Ejemplo 1:

> En la figura se observa la imagen de un esquiador que apenas ha comenzado a descender una pendiente de 30°. Suponiendo que le coeficiente de fricción cinética es 0.10, calcule su aceleración

Tenemos los siguientes datos:

- Pendiente: $\large 30°$
- Coeficiente de fricción cinética: $\large 0.10$

### Fuerzas que actúan sobre el esquiador

#### Previo a la rotación del eje

- Fuerza normal ($\large n$). En este caso, es **perpendicular con la rampa**. Y como la rampa tiene 30°, la fuerza normal es representada como un vector en diagonal.
- Peso ($\large w$). Siempre es hacia abajo.
- Fricción cinética ($\large f_k$). Se opone al movimiento, por lo que **también se encuentra en diagonal**

#### Luego de rotar el eje

Después de mover el eje de modo que quede sobre el plano inclinado, tendremos que los ángulos que corresponden a la fuerza normal y a la fricción cinética **quedan sobre los ejes horizontales.**

Para definir el signo de cada uno de los ejes, tenemos que fijarnos en algunos conceptos claves:
- Para el eje Y, tenemos que fijarnos en la *fuerza normal*, pues hacia donde vaya esta última será el eje positivo.
- Para el eje X, tenemos que fijarnos en el *movimiento del cuerpo en cuestión,* pues hacia donde se mueva corresponde al eje positivo.

Para el caso del peso, debemos **fijarnos en la pendiente del plano inclinado**. Para ello, debemos ver hacia dónde rotó, y calcular la cantidad de grados que aumentó o disminuyó con respecto al eje Y (270°).

Finalmente, sumamos las fuerzas que afectan a la aceleración. (Segunda Ley de Newton)

$$\Large \Sigma  F_x = ma_x$$
$$\large w\cos{300°} - f_k = ma_x$$
El peso posee ahora un **ángulo de 300°**, debido a la rotación que efectuamos previamente.

$$\large m*g(cos(300)) - u_k*n = ma_x$$
Hemos descompuesto la fórmula que teníamos originalmente.
Ahora, ya no podemos seguir progresando en por este lado, por lo que debemos obligatoriamente obtener la **suma de fuerzas en Y**.

### Suma de fuerzas en Y

$$\Large \Sigma F_y = 0 \rightarrow w\sin(300) + n = 0$$

Ahora, podemos obtener una fórmula que nos de información sobre la **fuerza normal**.
Despejamos la n de la ecución, y obtenemos lo siguiente:
$$\large n = -w\sin{300}$$
$$\large n = -mg\sin(300)$$

### Valores finales

Ahora, volvemos a sustituir en la suma de fuerzas en X.

$$\large -(0.10)(-mg\sin{300}) + (mg\cos{300}) = ma_x$$
Después de esto, podemos dividirlos a todos por la misma letra $\large m$, que corresponde a un mismo valor para todas las ecuaciones.

$$\large \frac{\large -(0.10)(-mg\sin{300}) + (mg\cos{300}) = ma_x}{m}$$
Simplificando...
$$\large (0.10)(9.8)(\sin{300}) + (9.8)(\cos{300}) = a_x$$

Por ende, la respuesta final será:

$$\LARGE a_x = 4.05 \frac{m}{s^2}$$

<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['FÍSICA]]