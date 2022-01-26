---
tags: Problemas 25/01/2022
---

# Problema 1
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el 25/01/2022</div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el 25/01/2022</div>

>  En la figura, dos cajas están conectadas mediante una cuerda que corre sobre una polea. El coeficiente de fricción cinética entra la caja A y la mesa es 0.20. Se desea encontrar la aceleración a del sistema, que tendrá la misma magnitud para ambas cajas si se supone que la cuerda no se estira. Coforme la caja B se mueve hacia abajo, la caja A se mueve hacia la derecha.

![[Pasted image 20220125173400.png]]

Como el movimiento se efectúa hacia abajo, *a modo de conveniencia*, podemos **cambiar las direcciones y los valores del plano cartesiano**.

En este caso, *invertimos los valores del eje Y* (Hacia arriba es negativo, hacia abajo es positivo). Esto debido al movimiento que describe el problema, el cual avanza hacia la derecha y hacia abajo.

*Caja A: aceleración horizontal; Caja B: aceleración vertical*.

- Utilizamos la Segunda Ley de Newton para despejar la **Caja A**, y conseguir la siguiente fórmula:

$$\large T - f_k = ma_x$$

- Luego, podemos conseguir la fuerza normal, y, por tanto, conseguir la fricción cinética. Lo hacemos de la siguiente manera:

$$f_k = u_kn$$

Despejando la $n$, sabiendo que no hay aceleración en y (primera ley):

$$n = 5 * 9.8$$
$$f_k = 0.20 * 49$$
$$f_k = 9.8 N$$

Por lo tanto, ahora podemos sustituir en la fórmula que teníamos anteriormente:

$$\large T - 9.8 = 5a$$
(Donde m = 5kg, por lo que también puede ser sustituida).

---

- Ahora, debemos utilizar la segunda caja para completar el sistema de ecuaciones (incógnitas $T$ y $a$):

$$\large \Sigma F_y = ma$$

Para el siguiente paso, debemos tener en cuenta uno de los conceptos importantes que definimos al comenzar el ejercicio: **Invertimos el eje Y**. Por lo tanto, podemos hacer lo siguiente:
   - Como los ejes están invertidos, tomamos los ángulos que corresponderían a cada uno de los ejes con su valor o signo correspondiente. Es decir, si hacia arriba eran 90°, ahora dicho ángulo correspondera *hacia abajo*, y viceversa para el ángulo de 270°.

Asi, con las consideraciones anteriores, tendríamos la siguiente ecuación para la caja B:

$$\LARGE T\sin{270°} + w\sin{90°} = ma$$

- Luego, simplificamos con normalidad, sustituyendo cada seno por su valor en unidades (-1 y 1, respectivamente):

$$\large w - T = ma$$

Calculamos el peso, usando la fórmula $w = mg$:

$$\large 19.6 - T = 2a$$
(sustituyendo la masa, la cual es 2.0kg para la caja B)

---

Luego de todo lo anterior, tenemos las siguientes ecuaciones:

- Caja A: $\large T - 9.8 = 5a$
- Caja B: $\large 19.6 - T = 2a$

Finalmente, debemos resolver el sistema de ecuaciones como normalmente lo haríamos. En este caso, podemos despejar $T$ en ambas ecuaciones:

- Caja A: $T = 5a + 9.8$
- Caja B: $T = 19.6 - 2a$

Utilizamos el método de preferencia. Para el ejemplo, se utiliza igualación:

$$T_A = T_B$$
Como ambas tensiones son iguales, podemos sustitiur:

$$\large 5a - 9.8 = 19.6 - 2a$$
$$\large 5a + 2a = 19.6 + 9.8$$
$$\large 7a = 29.4 N$$
$$\large \frac{29.4}{7} \ =\ a$$
$$\LARGE a = 4.2 \frac{m}{s^2}$$

## Respuesta final

Por lo tanto, la respuesta a la pregunta inicial:

> Se desea encontrar la aceleración $\large a$ del sistema...

Sería 

$$\LARGE a = 4.2 \frac{m}{s^2}$$

<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['FÍSICA]]