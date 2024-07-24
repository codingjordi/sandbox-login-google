export { default } from 'next-auth/middleware'

export const config = { matcher: ['/dashboard/:path*'] } 
// Acceso restringido a usuarios no identificados a la ruta dashboard y todas las rutas que estén por debajo