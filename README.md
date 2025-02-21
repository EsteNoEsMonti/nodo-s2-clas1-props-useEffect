# Uso de Props y useEffect en React

Este proyecto demuestra el uso de `props` y el Hook `useEffect` en React, conceptos fundamentales para manejar la comunicación entre componentes y los efectos secundarios en aplicaciones funcionales.

## Props en React

Las "props" (abreviatura de propiedades) son parámetros que se pasan de un componente padre a un componente hijo. Permiten que los componentes sean reutilizables y dinámicos al recibir datos o funciones desde sus padres.

### Ejemplo de Uso de Props

```jsx
// Componente Padre
import React from 'react';
import Saludo from './Saludo';

function App() {
  const nombre = 'Juan';
  return (
    <div>
      <Saludo nombre={nombre} />
    </div>
  );
}

export default App;

// Componente Hijo
import React from 'react';

function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

export default Saludo;
```

En este ejemplo, el componente `App` pasa la prop `nombre` al componente `Saludo`, que la utiliza para mostrar un saludo personalizado.

## Hook useEffect

El Hook `useEffect` permite manejar efectos secundarios en componentes funcionales, como suscripciones, llamadas a APIs o manipulación directa del DOM. Se ejecuta después de que el componente se renderiza y puede configurarse para ejecutarse nuevamente cuando ciertas dependencias cambian.

### Ejemplo de Uso de useEffect

```jsx
import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
  }, [contador]);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}

export default Contador;
```

En este ejemplo, cada vez que el estado `contador` cambia, el título del documento se actualiza para reflejar el número actual de clics.

## Integración de Props y useEffect

Combinar `props` y `useEffect` es común cuando un componente necesita realizar un efecto secundario basado en cambios en las props que recibe.

### Ejemplo: Fetch de Datos al Cambiar una Prop

```jsx
import React, { useState, useEffect } from 'react';

function Usuario({ userId }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data));
  }, [userId]);

  if (!usuario) {
    return <p>Cargando usuario...</p>;
  }

  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
      <p>Teléfono: {usuario.phone}</p>
    </div>
  );
}

export default Usuario;
```

En este ejemplo, el componente `Usuario` recibe una prop `userId`. Cada vez que `userId` cambia, el Hook `useEffect` realiza una solicitud para obtener los datos del usuario correspondiente y actualiza el estado local `usuario` con la información recibida.

## Nuevo Ejemplo: Temporizador con Inicio Personalizado

A continuación, se presenta un nuevo ejemplo que combina el uso de `props` y `useEffect`. Se trata de un temporizador que inicia desde un valor específico recibido como prop y cuenta hacia abajo hasta cero.

```jsx
import React, { useState, useEffect } from 'react';

function Temporizador({ inicio }) {
  const [contador, setContador] = useState(inicio);

  useEffect(() => {
    if (contador === 0) return;

    const intervalo = setInterval(() => {
      setContador((prevContador) => prevContador - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [contador]);

  return (
    <div>
      <h1>Tiempo restante: {contador} segundos</h1>
    </div>
  );
}

export default Temporizador;
```

En este componente, `Temporizador` recibe una prop `inicio` que establece el número de segundos desde el cual el temporizador comienza. El Hook `useEffect` configura un intervalo que disminuye el contador en uno cada segundo. Cuando el contador llega a cero, el intervalo se limpia para detener la cuenta regresiva.

Este ejemplo demuestra cómo las props pueden usarse para inicializar el estado y cómo `useEffect` puede manejar efectos secundarios basados en ese estado.

## Recursos Adicionales

Para profundizar en estos conceptos, puedes consultar los siguientes recursos:

- [Documentación oficial de React sobre Props](https://es.reactjs.org/docs/components-and-props.html)
- [Documentación oficial de React sobre useEffect](https://es.reactjs.org/docs/hooks-effect.html)
- [Explicación detallada de useEffect por Dmitri Pavlutin](https://dmitripavlutin.com/react-useeffect-explanation/)

Estos recursos ofrecen información adicional y ejemplos prácticos para mejorar tu comprensión de `props` y `useEffect` en React.
