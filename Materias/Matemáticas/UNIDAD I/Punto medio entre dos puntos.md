---
tags: Matemáticas 15/02/2022
---

# Punto medio entre dos puntos
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el 15/02/2022</div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el 15/02/2022</div>

Dados dos puntos A y B, siempre existirá un punto medio entre ellos, el cual cumple que, **la distancia desde el punto medio y cualquiera de los otros puntos siempre será igual a la mitad de la longitud total entre ambos puntos A y B**.

## Fórmula para calcular el punto medio

La fórmula utilizada para calcular el punto medio entre dos puntos es:

$$\LARGE M(x,y) = (\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2})$$

### Origen de la fórmula

Al tener dos puntos $A(x_1, y_1)$ y $B(x_2, y_2)$, y definiendo su *punto medio* como $P_m$ tenemos que:

- La distancia que hay entre A y $P_m$ sería igual que la distancia entre este último y B.
- Teniendo esto, podemos trazar **dos triángulos rectángulos** cuya hipotenusa corresponde a la longitud de cada uno de los segmentos.
Utilizando algunos conceptos de *ángulos congruentes*, podemos determinar el valor de los ángulos de cada uno de los triángulos.

Sabiendo lo anterior, y teniendo en cuenta que los dos triángulos son **iguales**, debido a la medida de sus ángulos, entonces, podemos calcular las longitudes de cada triángulo de la siguiente manera:

- Primero, podemos determinar la longitud de cada lado como la distancia entre un punto $x$ y otro punto $x_1$. De esta manera, podemos efectuar una resta, para establecer la longitud de los puntos. Lo mismo aplica para los valores de $y$ de ambos puntos.
- Ahora, podemos *establecer una igualdad*, en la cual los dos segmentos son congruentes.


## Ejemplo 1

> Determine las coordenadas del punto que está a la mitad del segmento que une los puntos A(-2,1) y B(8,-4)

Para ello, utilizamos la fórmula del punto medio.

$$\large M(x,y) = (\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2})$$

Entonces, ahora sólo tenemos que sustituir en la fórmula anterior. Si A es el punto 1, y B es el punto 2, entonces:

$$\large M(x,y) = (\frac{-2 + 8}{2}, \frac{1 + (-4)}{2})$$

Operando lo anterior, tenemos:

$$\large M(x,y) = (\frac{6}{2}, -\frac{3}{2})$$

$$\large \large M(x,y) = (3, -\frac{3}{2})$$

## Ejemplo 3

> El vértice A de un triángulo ABC tiene coordenadas (-2,4). Si los puntos medios de los lados AB y BC son (-3,1) y (1,0) respectivamente, ¿cuáles son las coordenadas de los vértices B y C?

### Planteamiento

El problema brinda **un vértice y dos puntos medios**. 
Primero, tenemos que determinar *¿a cuál de los vértices corresponde cada punto medio?*

Con lo anterior, podemos establecer ciertas relaciones:
- Primero que nada, tenemos que el punto medio AB es equivalente a utiizar la fórmula para los puntos A(-2,4) y $B(x_1, y_1)$. Por ello, podemos aplicar la siguiente regla:

$$\large (-3, 1) = (\frac{-2 + x_1}{2}, \frac{4 + y_1}{2})$$
Ahora, los puntos en un plano cumplen la siguiente propiedad:
- Cuando un punto es igual a otro, podemos establecer que **sus componentes x y sus componenetes en y también tienen que ser iguales**. Por tanto, podemos decir lo siguiente:

$$\large -3 = \frac{-2 + x_1}{2} = -6 = -2 + x_1$$
$$\large -4 = x_1$$
Y la misma lógica aplicamos para la coordenada Y.

Al final, tendremos lo siguiente:

$$\Large B = (-4, -2)$$

#### Calculando C

Luego de haber calculado el procedimiento para el vértice B, entonces tendremos información suficiente para **calcular el vértice B**, pues también tenemos información entre el punto medio de B y de C.

Lo hacemos de la siguiente manera:

$$\Large (1, 0) = (\frac{-4 + x_2}{2}, \frac{-2 + y_2}{2})$$

Siguiente la misma lógica que utilizamos para calcular el punto B, entonces llegaremos a las siguientes ecuaciones:

$$\large 1 = \frac{-4 + x_2}{2}; 0 = \frac{-2 + y_2}{2}$$

Finalmente, llegaremos a la siguiente respuesta:

$$\Large C = (6, 2)$$
Ahora, ya tenemos la respuesta final.
![[Pasted image 20220216164407.png]]


<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['MATEMÁTICAS]]