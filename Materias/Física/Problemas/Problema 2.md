---
tags: Problemas 28/01/2022
---

# Problema 2
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el 28/01/2022</div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el 28/01/2022</div>

> Una máquina de Atwood consiste en una polea simple con masas suspendidas a ambos lados unidas por un cable. Se trata de una versión simplificada de gran número de sistemas industriales en los cuales se utilizan contrapesos para equilibrar. Suponga que la asa del lado derecho es de 10kg y que la masa de lado izquierdo es de 1kg. 
   **(a)** ¿Cuál es la aceleración del sistema? 
   **(b)** ¿Cuál es la tensión en la cuerda?

![[Pasted image 20220128134015.png]]

Primero que nada, debemos hacer unos cuantos cambios en el diagrama de fuerzas del segundo cuerpo (el de la derecha), pues este está cayendo, por lo que habría una **contradicción con respecto al primer peso**. Ambos pesos van avanzando, por lo que es más correcto invertir los valores del eje Y para el segundo peso.

- Para analizar los cuerpos, debemos comenzar calculando las fuerzas de cada uno (segunda ley de Newton):

$$\large \Sigma F_y = ma_y$$

Luego, tendríamos la siguiente fórmula:

$$\large T - w = ma_y$$

Con los valores que tenemos:

$$\large T - (2)(9.8) = 2a_y$$

- Segundo, necesitamos calcular las fuerzas del segundo peso (teniendo cuidado de invertir los signos a la hora de sustituir las fuerzas):

$$\large \Sigma F_y = ma_y$$
$$\large w - T = ma_y$$

Ahora, también podemos sustituir los valores que ya conocíamos (masa, y el peso es calculable): 

$$\large 98 - T = 10a_y$$

**Como la aceleración es la misma para todo el sistema, entonces podemos obviar el eje**
Finalmente, simultaneamos ambas ecuaciones para resolver el sistema:

*Caja A:* $\large T = 2a - 19.6$

*Caja B:* $\large T = 98 - 10a$

Luego, resolvemos con el método de preferencia (en este caso igualación):

$$\large 2a + 19.6 = 98 - 10a$$
$$\large 12a = 78.4$$
$$\LARGE a = 6.53 \frac{m}{s^2}$$

---

Para el inciso B, simplemente debemos sustituir el valor de $\large a$ en una de las ecuaciones que ya teníamos despejadas anteriormente:

$$\large T = 2a + 19.6$$
$$\large T = 2(6.53) + 19.6$$
$$\LARGE T = 32.66 N$$

## Respuesta final

a. La aceleración del sistema es igual a $\LARGE a = 6.53 \frac{m}{s^2}$

b. La tensión de la cuerda es igual a $\LARGE T = 32.66 N$

<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['PROBLEMAS]]
