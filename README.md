# Integration Solutions — evaluación AUY1102

Proyecto demostrativo en JavaScript para pruebas unitarias, cobertura, CI y análisis de seguridad. El código se crea desde cero; **no es fork**. Confirmar con el docente si esto reemplaza el fork exigido en la pauta.

## Requisitos
- Windows + PowerShell o Git Bash, Node.js 22 (versión LTS compatible) y npm, Git y acceso a GitHub.
- VS Code recomendado, no obligatorio.

## Inicio — Windows PowerShell
1. Descomprime el ZIP en una carpeta local fuera de OneDrive si genera problemas.
2. Abre la carpeta en VS Code. Terminal → New Terminal (PowerShell).
3. Verifica herramientas:

```powershell
node --version
npm --version
git --version
```

4. En la carpeta raíz (donde está `package.json`):

```powershell
npm install
npm test
npm run test:coverage
npm audit
```

- `npm install`: obtiene Jest y crea `package-lock.json`.
- `npm test`: ejecuta pruebas, informa los test fallidos con expectativa y resultado.
- `npm run test:coverage`: genera tabla en consola, `coverage/lcov.info` y reporte HTML (`coverage/lcov-report/index.html`).
- `npm audit`: revisa vulnerabilidades conocidas en dependencias; 0 hallazgos es válido.
- Si Jest no se reconoce, primero verifica que terminó `npm install` y que estás en la carpeta correcta; evita instalar Jest global.

5. Abre `coverage/lcov-report/index.html` en un navegador para observar líneas sin cubrir.

## Crear repositorio en GitHub
**No crees el repositorio remoto con README, .gitignore o licencia**, pues esos archivos ya están localmente.
1. En GitHub → New repository → nombre sugerido `integrationsolutions-calidad-auy1102` → Public (si no hay información sensible ni restricciones docentes) → Create.
2. Copia la URL HTTPS real de TU repositorio, por ejemplo `https://github.com/TU_USUARIO/integrationsolutions-calidad-auy1102.git`.
3. En PowerShell, dentro de esta carpeta:

```powershell
git init
git branch -M main
git add .
git commit -m "Proyecto inicial con pruebas y cobertura"
git remote add origin https://github.com/TU_USUARIO/integrationsolutions-calidad-auy1102.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu usuario real; no ejecutes la URL de ejemplo literalmente. Si Git pide identidad, configura nombre y correo solo para este proyecto con `git config user.name "Tu nombre"` y `git config user.email "tu-correo@ejemplo.cl"`, y repite el commit. GitHub puede pedir iniciar sesión en el navegador (no acepta contraseñas de cuenta normales por HTTPS).

## Verificación de CI
GitHub → Actions → `Pruebas unitarias y cobertura` → abre la ejecución. Debe mostrar tests ejecutados y guardar artefacto `cobertura-jest`.

## Integraciones, errores y evidencias
- `docs/SONAR_Y_SNYK.md`: conecta SonarQube Cloud y Snyk cuando el repositorio exista.
- `docs/CAPTURAS.md`: 16 evidencias sugeridas y demostración controlada de un test fallido.
- En GitHub, Settings → Advanced Security: verificar habilitación de Dependabot alerts, CodeQL (Default setup) y Secret scanning según características disponibles. Si una opción no aparece, registra el plan/permiso y consulta al docente; **no inventes un escaneo**.
- `sonar-project.properties.ejemplo`: únicamente plantilla; renombrar y completar claves después de crear el proyecto en Sonar.

## Limitaciones relevantes
La evaluación original exige un fork de repositorio docente. Esta base de cero no cumple literalmente ese punto sin autorización expresa.
No se garantiza un hallazgo de vulnerabilidad. Un reporte limpio sirve como evidencia de escaneo ejecutado.
No compartir tokens, contraseñas ni datos personales en capturas. No usar `npm audit fix --force` para forzar cero alertas.
