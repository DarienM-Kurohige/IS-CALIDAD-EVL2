# Matriz de evidencias para la evaluación
Cada pantallazo debe mostrar lo más importante: sitio/comando, proyecto, resultado y fecha si es visible. No mostrar secretos.

| ID | Captura | Qué demuestra | Qué NO demuestra |
|---|---|---|---|
| E01 | Estructura `src`, `tests`, `package.json` en VS Code | Proyecto creado | Que las pruebas pasan |
| E02 | GitHub repositorio con commits y ramas | Código versionado | Que se hizo fork autorizado |
| E03 | `npm --version` y `node --version` en PowerShell | Herramientas presentes | Que la app funciona |
| E04 | `npm test` mostrando test suites y tests exitosos | Ejecución de unitarias | Cobertura completa |
| E05 | `npm run test:coverage` y tabla por archivo | Porcentajes statements/branches/functions/lines | Ausencia de defectos |
| E06 | `coverage/lcov-report/index.html` resaltando líneas no cubiertas | Líneas o ramas sin probar | Falla funcional |
| E07 | Ejemplo temporal de un test fallido y salida roja | Jest identifica qué falló y por qué | Que el código final contiene fallas |
| E08 | GitHub Actions con job verde y commit | CI ejecutado | Que Sonar está conectado |
| E09 | SonarQube Cloud proyecto conectado a GitHub | Importación | Que terminó el análisis |
| E10 | SonarQube Cloud dashboard tras análisis | Bugs, vulnerabilidades, quality gate, cobertura | Que todas las rutas son seguras |
| E11 | Snyk repositorio importado | Integración | Que se ejecutó un escaneo |
| E12 | Snyk resultados de Scan/Retest | Análisis concreto y vulnerabilidades | Que no existen riesgos desconocidos |
| E13 | `npm audit` resultado completo | Auditoría de dependencias | Análisis de código fuente |
| E14 | GitHub Security → Dependabot alerts / dependency graph | Estado de dependencias | CodeQL o secreto escaneado |
| E15 | GitHub Security → Code scanning (CodeQL) | Análisis de código | Cobertura Jest |
| E16 | GitHub Security → Secret scanning | Estado escaneo de secretos | Que las contraseñas puedan subirse |

## Ficha para cada evidencia (material de estudio)
- **ID y nombre**
- **Objetivo:** qué requisito del docente cubre
- **Acción realizada:** comandos o clics exactos
- **Qué ocurre por debajo:** mecanismo de la herramienta
- **Resultado observado:** transcribir la cifra/estado real, sin inventar
- **Qué significa / qué no demuestra**
- **Error y solución:** si sucedió
- **Verificación independiente**

## Demostración controlada de prueba fallida
En `tests/ventas.test.js`, durante la práctica, cambia temporalmente SOLO esta expectativa:
`expect(calcularTotal(10000, 3)).toBe(30000);` → `expect(calcularTotal(10000, 3)).toBe(99999);`
Ejecuta `npm test`, toma E07 donde aparezcan el test y los valores esperados/recibidos. **Luego revierte a 30000 y vuelve a ejecutar `npm run test:coverage`**. No envíes la prueba artificialmente rota al repositorio final. La captura debe identificarse como demostración controlada.
