# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Vite Tailwind

https://tailwindcss.com/docs/guides/vite

# React form hooks

https://www.react-hook-form.com/

# React icons

https://react-icons.github.io/react-icons/

# antd desing

https://ant.design/components/overview

# LEVANTAMIENDO DEL PROGRAMA

1. npm install (dentro de la carpeta front)
2. back/api/env. -> cambiar a los valores de tu conexion de mysql
3. back/api/sql -> copiar los scripts y ejecutar en este orden
   1. gestiones.sql
   2. insert.sql
   3. procedure.sql
4. Levantamiento del programa "npm run dev" (dentro de la carpeta front)

NOTA : LA URL del archivo front/src/utilities/request /
en la constante const dev colocar la direccion del servidor que corre php ejemplo => "const dev = 'http://localhost:8080/gestiones/back/';";
