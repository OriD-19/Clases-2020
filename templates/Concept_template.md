<%*
  const dateFormat = "DD/MM/YYYY";
_%>
---
tags: <% tp.file.folder() %> <% tp.date.now(dateFormat) %>
---

# <% tp.file.title %>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Creado el <% tp.date.now(dateFormat) %></div>
<div style="text-align: right; opacity: 0.7; font-style: italic;">Última actualización el <% tp.file.last_modified_date(dateFormat) %></div>

<% tp.file.cursor(1) %>

<span style="opacity: 0.7; font-style: italic;">Página principal de la materia:</span> [['<% tp.file.folder().toUpperCase() %>]]