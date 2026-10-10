# Integración SonarQube Cloud (antes SonarCloud) y Snyk

## SonarQube Cloud
1. Asegúrate de que el repositorio ya está en GitHub y el workflow de Jest pasó.
2. Entra a https://sonarcloud.io y autentica con GitHub. Crea/importa un proyecto a partir del repositorio.
3. **Atención:** evita activar análisis automático si quieres importar la cobertura de Jest; para mostrar LCOV utiliza el análisis desde CI.
4. Copia `sonar-project.properties.ejemplo` como `sonar-project.properties` (quita `.ejemplo`) y sustituye `sonar.organization` y `sonar.projectKey` por los valores que aparecen en SonarQube Cloud.
5. Genera en SonarQube Cloud un token de análisis y guárdalo en el repositorio GitHub → Settings → Secrets and variables → Actions → New repository secret, nombre `SONAR_TOKEN`. NUNCA lo pegues en el chat, código, captura o repositorio.
6. Después de tener configuración y token, agrega al FINAL de los steps de `.github/workflows/pruebas.yml` (misma indentación que los demás steps):

```yaml
      - name: Analizar con SonarQube Cloud
        uses: SonarSource/sonarqube-scan-action@v6
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

7. Si la acción falla por actualización de versión, revisa el release estable en https://github.com/SonarSource/sonarqube-scan-action ; no uses versiones al azar.
8. Realiza un push, abre Actions y luego el dashboard de Sonar. Verifica que la cobertura no muestre 0% por falta de importación de LCOV.
9. Guarda captura de configuración, ejecución y análisis final.

## Snyk
1. Inicia sesión en https://app.snyk.io con GitHub.
2. En la configuración de la organización, conecta GitHub y autoriza acceso SOLO al repositorio de la evaluación cuando sea posible.
3. Projects → Add projects → GitHub → selecciona repositorio → import.
4. Asegúrate de que detecta el `package.json` y, si corresponde, el `package-lock.json` creado con `npm install`.
5. Configura Snyk Code si tu plan/interfaz lo permite; de lo contrario realiza al menos Snyk Open Source sobre las dependencias.
6. Ejecuta Retest now / Scan now cuando esté disponible.
7. Captura fecha, repositorio, tipo de análisis y resultado. Cero hallazgos es un resultado válido.

## Verificación profesional
Conectado != analizado. Es indispensable abrir los reportes finales y verificar la fecha del último escaneo.
