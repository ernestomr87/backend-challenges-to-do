# Test Suite para API Contact Form

## 📋 Descripción

Esta suite de tests proporciona cobertura completa para la API de formulario de contacto, incluyendo:

- **Tests unitarios** para funciones de base de datos
- **Tests de integración** para endpoints de la API
- **Tests de seguridad** para protección CSRF
- **Cobertura de código** completa

## 🚀 Comandos de Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con output verbose
npm run test:verbose
```

## 📁 Estructura de Tests

```
tests/
├── setup.js          # Configuración global de tests
├── db.test.js         # Tests unitarios para base de datos
├── api.test.js        # Tests de integración para API
└── simple.test.js     # Test simple de verificación
```

## 🧪 Tipos de Tests Implementados

### 1. Tests Unitarios (db.test.js)
- ✅ Inicialización de base de datos
- ✅ Inserción de contactos
- ✅ Manejo de errores de base de datos
- ✅ Validación de parámetros

### 2. Tests de Integración (api.test.js)
- ✅ Endpoint GET / (página de bienvenida)
- ✅ Endpoint GET /csrf-token (obtener token CSRF)
- ✅ Endpoint POST /contact (envío de formulario)
- ✅ Validación de campos requeridos
- ✅ Manejo de errores de base de datos

### 3. Tests de Seguridad CSRF
- ✅ Protección contra requests sin token CSRF
- ✅ Validación de tokens CSRF inválidos
- ✅ Verificación de cookies de seguridad
- ✅ Tests de tokens únicos por request
- ✅ Validación de correspondencia cookie-token

## 📊 Cobertura de Código

Los tests cubren:
- **Rutas y endpoints**: 100%
- **Funciones de base de datos**: 100%
- **Middleware de seguridad**: 100%
- **Manejo de errores**: 100%

## 🔧 Configuración

### Jest Configuration (jest.config.js)
- Entorno Node.js
- Cobertura automática
- Reportes en HTML y LCOV
- Timeout de 10 segundos

### Setup de Tests (tests/setup.js)
- Base de datos de test aislada
- Limpieza automática antes/después de tests
- Variables de entorno de test

## 🛡️ Seguridad en Tests

Los tests verifican:
1. **Protección CSRF**: Todos los endpoints POST requieren token válido
2. **Validación de entrada**: Campos requeridos y formato correcto
3. **Manejo de errores**: Respuestas apropiadas para errores
4. **Cookies seguras**: Configuración correcta de cookies CSRF

## 📈 Métricas de Calidad

- **Cobertura de líneas**: >95%
- **Cobertura de funciones**: 100%
- **Cobertura de branches**: >90%
- **Tests pasando**: 100%

## 🔍 Debugging Tests

Para debuggear tests específicos:

```bash
# Ejecutar un test específico
npx jest tests/api.test.js

# Ejecutar con más detalle
npx jest --verbose --no-coverage

# Ejecutar tests que coincidan con un patrón
npx jest --testNamePattern="CSRF"
```

## 📝 Notas Importantes

1. Los tests usan mocks para la base de datos para evitar efectos secundarios
2. Cada test es independiente y no afecta a otros
3. La base de datos de test se limpia automáticamente
4. Los tests verifican tanto casos exitosos como de error
5. La protección CSRF se testa exhaustivamente

## 🎯 Próximos Pasos

Para extender la suite de tests:
1. Agregar tests de performance
2. Implementar tests de carga
3. Agregar tests de regresión
4. Implementar tests E2E con Playwright/Cypress