import { app } from './app.js';

const PORT = process.env.PORT || Math.floor(Math.random() * 1000) + 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

// Manejar cierre del servidor correctamente
process.on('SIGTERM', () => {
    console.log('Recibida señal de terminación (SIGTERM). Cerrando servidor...');
    server.close(() => {
      console.log('Servidor cerrado correctamente.');
      process.exit(0);
    });
  });
  
  process.on('SIGINT', () => {
    console.log('Interrupción del proceso (SIGINT). Cerrando servidor...');
    server.close(() => {
      console.log('Servidor cerrado correctamente.');
      process.exit(0);
    });
  });