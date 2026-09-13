# Nova Avatar WebMCP

Configurador estático de personajes para Nova basado en CSS Peeps. Expone dos herramientas WebMCP para que un agente pueda consultar las combinaciones válidas y aplicar una al avatar visible, sin editar JSON manualmente.

## Herramientas

- `get_avatar_options`: consulta variantes, formato de color y configuración actual.
- `apply_avatar_design`: aplica una combinación validada de cabeza, rostro, cuerpo y paleta.

Los cambios son locales, temporales y reversibles. El sitio no almacena la configuración ni controla OBS.

## Overlay para OBS

Utiliza la GitHub Page con `?mode=overlay` para mostrar únicamente el avatar sobre un fondo transparente:

```text
https://mauricioperera.github.io/nova-avatar-webmcp/?mode=overlay
```

Configura esa URL como una **Fuente de navegador** en OBS. No requiere chroma key: el modo overlay no dibuja fondo, bordes, texto ni controles.

Para ubicarlo y hacerlo mirar hacia la composición usa los parámetros `position` y `flip`:

```text
?mode=overlay&position=left&flip=true
?mode=overlay&position=right&flip=false
```

También puede ajustarse temporalmente desde un agente mediante `set_avatar_presentation`.

## Importar y exportar personajes

El configurador puede descargar un personaje con **Exportar personaje** y cargarlo con **Cargar personaje**. El JSON contiene únicamente la identidad visual y su presentación (posición y espejo); no incluye estado de animación, credenciales ni datos personales.

El panel **Armar personaje** ofrece selectores visuales para las variantes permitidas y colores. Los cambios se aplican inmediatamente y permanecen sincronizados con el JSON editable y con las herramientas WebMCP.

## Desarrollo local

Abra `index.html` desde un servidor HTTP local. WebMCP necesita un contexto HTTP(S), por ejemplo:

```powershell
python -m http.server 8182
```

Luego navegue a `http://127.0.0.1:8182`.

## Dependencias

El SDK `@nekuda/webmcp-sdk` 0.5.0 está incluido como un módulo ESM local y la ilustración usa `css-peeps` mediante su hoja de estilos compatible.
