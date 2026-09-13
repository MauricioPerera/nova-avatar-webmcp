# Nova Avatar WebMCP

Configurador estático de personajes para Nova basado en CSS Peeps. Expone dos herramientas WebMCP para que un agente pueda consultar las combinaciones válidas y aplicar una al avatar visible, sin editar JSON manualmente.

## Herramientas

- `get_avatar_options`: consulta variantes, formato de color y configuración actual.
- `apply_avatar_design`: aplica una combinación validada de cabeza, rostro, cuerpo y paleta.

Los cambios son locales, temporales y reversibles. El sitio no almacena la configuración ni controla OBS.

## Desarrollo local

Abra `index.html` desde un servidor HTTP local. WebMCP necesita un contexto HTTP(S), por ejemplo:

```powershell
python -m http.server 8182
```

Luego navegue a `http://127.0.0.1:8182`.

## Dependencias

El SDK `@nekuda/webmcp-sdk` 0.5.0 está incluido como un módulo ESM local y la ilustración usa `css-peeps` mediante su hoja de estilos compatible.
