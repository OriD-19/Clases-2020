---
tags: Matemáticas 24/01/2022
---

# Ecuaciones bicuadráticas
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el 24/01/2022</div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el 25/01/2022</div>

**Logros para la clase: resolver ecuaciones del tipo $Ax^4 + Bx^2 + C = 0$**

Toda aquella ecuación que mantiene una relación 2:1 entre los exponentes del primer término y del segundo término es considerada una **ecuación bicuadrática**.

Son ecuaciones del tipo $Ax^4 + Bx^2 + C = 0$. *Poseen 4 soluciones*, y estas soluciones pueden ser:

- Cuatro soluciones reales.
- Dos soluciones complejas y dos soluciones reales. Las soluciones complejas **siempre** vienen en pares, y por ello sólo pueden haber dos de ellas.
- Cuatro soluciones complejas

Se solucionan haciendo **un cambio de variable**; por ejemplo $u = x^2$. Luego se sustituyen todas las instancias de esa nueva variable, para simplificar el proceso de resolución tratandola como una **ecuación cuadrática**.

## Cómo solucionar ecuaciones bicuadráticas

Ejemplo: Resolver las siguientes ecuaciones bicuadráticas:

1. $x^4 - 5x^2 + 4 = 0$
2. $x^4 - 8x^2 - 9 = 0$

Respuestas:

1.Para resolver esta ecuación, hacemos lo siguiente: 
   - Primero, efectuamos un cambio de variables. En este caso, podemos llamar a la variable $u = x^2$. Ahora, en lugar de tener la ecucación elevada al cuadrado, tenemos lo siguiente:
$$u^2 - 5u + 4 = 0$$
   - Después de sustituir, podemos resolver por factoreo o por fórmula general, como lo haríamos con una *ecuación cuadrática norma*:

$$(u - 4)(u - 1) = 0$$
$$u - 4 = 0 -> u = 4$$
$$u - 1 = 0 -> u = 1$$

   - Finalmente, al tener ambas variables despejadas, sustitumos por el valor original, el que había antes de sustituir:
$$x^2 = 4$$
$$x^2 = 1$$

    Obtenemos la raíz de ambos lados, y podemos determinar el conjunto solución:

$$\sqrt{x^2} = \sqrt{4}$$
$$\sqrt{x^2} = \sqrt{1}$$

   Por ello, el conjunto solución final es:

$${-2, -1, 1, 2}$$

---

2. 
   - Primero, sustituir por una variable $u = x^2$:

$$u^2 - 8u - 9 = 0$$
   - Luego, factorizamos con normalidad:
$$(u - 9)(u + 1) = 0$$
$$u - 9 = 0 \rightarrow u = 9$$
$$u + 1 = 0 \rightarrow u = -1$$

   - Después, regresamos a los valores originales de cada variable:
$$x^2 = 9 \rightarrow \sqrt{x^2} = \sqrt{9}$$
$$x^2 = -1 \rightarrow \sqrt{x^2} = \sqrt{-1}$$

   *En este caso, tenemos un número imaginario en la segunda raíz: $\sqrt{-1}$, lo cual es igual a la unidad imaginaria $i$*
   
   - Finalmente, el conjunto solución sería:

$-3, -i, i, +3$

---

En los dos anteriores casos se cumple la regla del principio, la cual establece que **no pueden haber más de cuatro soluciones, y sólo dos posibles soluciones imaginarias.**

Otro tema importante es el [[Discriminante de la ecuación cuadrática]], pues nos da información sobre las raíces.

---

Ejemplos: Factorizar polinomios a través del método de tijeras:

1. $6a^2 + 5a - 4$

   - Primero, tenemos que descomponer *el primer y el tercer término* en factores.
   - Después, multiplicamos en cruz los factores obtenidos.
   - Finalmente, si la suma algebraica de los resultados equivale al segundo término, quiere decir que los factores son correctos. De lo contrario, **volver al paso número uno,** con diferentes factores para los términos.

2. $4x^2 - 5x^2 + 1 = 0$

   - En el caso de esta ecuación, al hacer la factorización debemos **cambiar el signo de ambos factores de los terminos**, para que el resultado de la suma sea igual al segundo término (incluyendo el signo).

<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['MATEMÁTICAS]]