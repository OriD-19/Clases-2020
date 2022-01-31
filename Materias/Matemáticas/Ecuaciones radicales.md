---
tags: Matemáticas 26/01/2022
---

# Ecuaciones radicales
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el 26/01/2022</div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el 26/01/2022</div>

**Logros**: 
1) Calcula las soluciones de ecuaciones radicales que pueden reducirse a ecuaciones lineales.
2) Resuelve ecuaciones radicales que puede reducirse a ecuaciones lineales o cuadráticas.

## ¿Qué son las ecuaciones radicales?

Son ecuaciones que poseen raíces o radicales en alguno de sus términos. 

## Resolución de ecuaciones radicales

La intención es construir una ecuación equivalente a la original. Esto con la finalidad de reducir la complejidad de la ecuación.
Por ejemplo, cuando un término se encuentra bajo una raíz, no se puede operar de manera normal. No podemos despejar, ni operar los términos dentro de la raíz.

Dentro de esos procedimientos existen varias metodologías.

### Elevar al cuadrado para eliminar la raíz.

Para eliminar la raíz en alguno de los términos, elevamos al cuadrado **ambos lados de la ecuación**.

#### Ejemplo 1:

$$\large \sqrt{2t - 1}^2 = 1^2$$

Ahora, podemos cancelar la raíz con el cuadrado, y podemos operar normalmente con la ecuación:

$$\large 2t - 1 = 1$$

Despejando $t$, tenemos que $\large t = 1$.

**Sin embargo, este tipo de procedimiento produce soluciones diferentes a la ecuación original**.

Para comprobar si la solución es correcta, podemos sustituir en la solución original:

$$\large \sqrt{2(1) - 1}^2 = 1$$
$$\large 1 = 1$$

Si el resultado satisface la ecuación, entonces quiere decir que está resuelta. Sino concuerda, entonces *quiere decir que el conjunto solución queda vacío*.

--- 
#### Ejemplo dos:

$$\LARGE x = 2\sqrt{-x-1}$$

Primero, elevamos al cuadrado ambos lados de la ecuación:

$$\large x^2 = (2\sqrt{-x-1})^2$$
$$\large x^2 = 4(-x-1)$$

Ahora, desarrollamos normalmente la ecuación:

Distribuimos la multiplicación: $\large x^2 = -4x - 4$
Finalmente, podemos resolverlo como una ecuación de segundo grado:

$$\large x^2 + 4x + 4 = 0$$
Trinomio cuadrado perfecto: $\large (x+2)^2$

Por tanto, el resultado es $\LARGE x = -2$

Por último, comprobamos si el resultado satisface la igualdad original:

$$\large -2 = 2\sqrt{-(-2)-1}$$
$$\large -2 = 2\sqrt{2-1}$$
$$\large -2 = 2\sqrt{1}$$

En este punto, tenemos que saber que, en el caso de la $\large \sqrt{1}$, no podemos tomar el valor negativo. **Sólo es válido el valor principal de la raíz**, por lo tanto, el conjunto solución **de esta ecuación es vacío**.

---

#### Ejemplo 3:

$$\LARGE \sqrt{3 - x + x^2} = x - 2$$

Primero, elevamos al cuadrado ambos lados de la ecuación:

$$\large 3 - x + x^2 = (x - 2)^2$$

En el lado derecho, tenemos un caso de productos notables:

$$\large 3 - x + x^2 = x^2 - 4x + 4$$

Como vemos, ambos términos de segundo grado se eliminan. Luego, desarrollamos con normalidad:

$$\large -x + 4x = 4 - 3$$
$$\large 3x = 1$$
$$\large x = \frac{1}{3}$$

Finalmente, comprobamos si la **solución satisface la ecuación original**:

$$\large \sqrt{3 - \frac{1}{3} + (\frac{1}{3})^2} = \frac{1}{3} - 2$$

$$\large \sqrt\frac{25}{9} = -\frac{5}{3}$$

Ahora, como bien habíamos visto anteriormente, las raíces cuadradas, en el caso de las ecuaciones radicales, **no se puede operar con el valor negativo de una raíz cuadrada**. Por ello, la igualdad es falsa, y el **conjunto solución está vacío**.

$$\LARGE \frac{5}{3} = -\frac{5}{3}$$

## Ejemplo 4:

$$\Large \sqrt{4x + 1} + x = 5$$

El primer paso sería, para motivos de conveniencia, **pasar la x hacia el otro lado de la igualdad.**

$$\large \sqrt{4x + 1} = 5 - x$$

Luego, elevamos al cuadrado ambos lados de la igualdad.
$$\large 4x + 1 = (5 - x)^2$$
Resolvemos el caso de factoreo que se nos presenta.
$$\large 4x + 1 = 25 - 10x + x^2$$
Después, reducimos términos semajantes

$$\large 0 = x^2 - 14x + 24$$

Finalmente, resolvemos la ecuación cuadrática resultante:

$$\large (x - 12)(x - 2)$$
$$\large x = 12$$
$$\large x = 2$$
EL último paso para resolver esta ecuación es sustituir en la ecuación original.
$$\large \sqrt{4(2) + 1} + 2 = 5$$
Resultado final: $\large 5 = 5$

## Ejemplo 5: Utilizando otro método para resolver las ecuaciones radicales

$$\Large \sqrt{5x + 1} - \sqrt{2x + 1} = 2$$

### Utilizando el método convencional

Primero, movemos la raíz hacia el otro lado de la igualdad:

$$\large \sqrt{5x + 1} = 2 + \sqrt{2x + 1}$$

Luego, elevamos al cuadrado ambos miembros de la igualdad.

$$\large 5x + 1 = 4 + 4\sqrt{2x + 1} + (2x + 1)$$

Después, reducimos términos semejantes para quedarnos con otra ecuación radical:

$$\large 3x - 4 = 4\sqrt{2x + 1}$$
Por último, volvemos a elevar al cuadrado, y conseguimos una ecuación cuadrática.

$$\large (3x - 4)^2 = (4\sqrt{2x + 4})^2$$

<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['MATEMÁTICAS]]