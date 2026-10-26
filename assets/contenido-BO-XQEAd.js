import{c as e,i as t,l as n,n as r,r as i}from"./index-CM1hXvAY.js";var a=[`PDF`,`Libro`,`Presentación`],o=[`Básico`,`Intermedio`,`Avanzado`],s=(e,n)=>e.map(e=>`<option ${e===n?`selected`:``}>${t(e)}</option>`).join(``),c=(e,t,n=``)=>`<div class="card card--pad" style="text-align:center;padding:48px"><h3>${e}</h3><p class="muted" style="margin:6px 0 14px">${t}</p>${n}</div>`,l=(e,t)=>n.modo===`api`&&!r.disponible(e)?c(`No se pudieron cargar ${t}`,`Revisa la conexión con el servidor y vuelve a cargar esta página. No se muestran datos de demostración en modo API.`):null;function u(){let e=l(`cursos`,`los cursos`)||l(`quizzes`,`los quizzes`);if(e)return e;let r=n.cursos(),a=n.quizzes();return`
  ${i(`Cursos`,`${r.length} cursos · ${r.reduce((e,t)=>e+t.clases.length,0)} clases · ${r.filter(e=>e.publicado!==!1).length} publicados`,`<a class="btn btn--brand btn--pill-arrow" href="#/admin/cursos/nuevo">Nuevo curso <span class="arrow"><i data-lucide="plus" class="i"></i></span></a>`)}
  <div class="card dtable-wrap"><table class="dtable">
    <thead><tr><th style="width:44px">#</th><th>Curso</th><th>Área</th><th>Clases</th><th>Títulos</th><th>Quizzes</th><th>Estado</th><th style="width:120px"></th></tr></thead>
    <tbody>${r.map((e,n)=>{let i=e.clases.filter(e=>/^Clase \d+$/.test(e.titulo)).length,o=a.filter(t=>t.cursoId===e.id);return`<tr>
        <td class="mono faint">${n+1}</td>
        <td><a class="dtable__main" href="#/admin/cursos/${e.id}"><img src="${e.portada}" alt=""><span><strong>${t(e.titulo)}</strong><br><span class="faint">${t(e.instructor)}</span></span></a></td>
        <td>${t(e.area)}</td><td class="mono">${e.clases.length}</td>
        <td>${i?`<span class="chip chip--warn">${i} sin título</span>`:`<span class="chip chip--accent">Completos</span>`}</td>
        <td><span class="chip">${o.filter(e=>e.estado===`aprobado`).length}/${e.clases.length}</span></td>
        <td><button class="switch" role="switch" aria-checked="${e.publicado!==!1}" data-toggle-publicado="${e.id}" title="Publicado"></button></td>
        <td><div class="row" style="gap:4px;flex-wrap:nowrap">
          <button class="btn btn--ghost btn--icon btn--xs" data-mover-curso="${e.id}:-1" ${n===0?`disabled`:``} aria-label="Subir"><i data-lucide="arrow-up" class="i"></i></button>
          <button class="btn btn--ghost btn--icon btn--xs" data-mover-curso="${e.id}:1" ${n===r.length-1?`disabled`:``} aria-label="Bajar"><i data-lucide="arrow-down" class="i"></i></button>
          <a class="btn btn--ghost btn--icon btn--xs" href="#/admin/cursos/${e.id}" aria-label="Editar"><i data-lucide="pencil" class="i"></i></a>
        </div></td></tr>`}).join(``)}</tbody></table></div>`}function d(e){let r=l(`cursos`,`los cursos`)||l(`quizzes`,`los quizzes`);if(r)return r;let a=e.id===`nuevo`,u=a?{id:``,titulo:``,area:``,nivel:`Básico`,instructor:``,portada:`/cursos/curso-01.webp`,descripcion:``,aprenderas:[],orden:n.cursos().length+1,publicado:!1,bunnyCollectionId:``,clases:[]}:n.cursos().find(t=>t.id===e.id);if(!u)return c(`Curso no encontrado`,`Puede que se haya borrado.`,`<a class="btn btn--brand" href="#/admin/cursos">Volver</a>`);let d=[...new Set(n.cursos().map(e=>e.area))].sort();return`
  <a class="section-head__cta" href="#/admin/cursos" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Cursos</a>
  <form class="stack" style="gap:20px" data-form="curso" data-id="${u.id}">
    ${i(a?`Nuevo curso`:t(u.titulo),a?`Llena los datos y agrega las clases con su ID de video de Bunny.`:`${u.clases.length} clases · biblioteca Bunny ${n.libraryId}`,`${a?``:`<a class="btn btn--secondary" href="#/curso/${u.id}" target="_blank"><i data-lucide="eye" class="i"></i>Ver como miembro</a>`}<button class="btn btn--brand btn--pill-arrow">Guardar <span class="arrow"><i data-lucide="check" class="i"></i></span></button>`)}
    <div class="admin-grid">
      <div class="card card--pad stack" style="gap:14px">
        <h3 class="admin-card-title">Datos del curso</h3>
        <div class="field"><label>Título</label><input class="input" name="titulo" value="${t(u.titulo)}" required maxlength="140"></div>
        <div class="form-grid">
          <div class="field"><label>Área</label><input class="input" name="area" value="${t(u.area)}" list="areas" required><datalist id="areas">${d.map(e=>`<option value="${t(e)}">`).join(``)}</datalist></div>
          <div class="field"><label>Nivel</label><select class="input" name="nivel">${s(o,u.nivel)}</select></div>
        </div>
        <div class="field"><label>Ponente</label><input class="input" name="instructor" value="${t(u.instructor)}" placeholder="Dra. Nombre Apellido"></div>
        <div class="field"><label>Descripción</label><textarea class="input" name="descripcion" rows="3">${t(u.descripcion)}</textarea></div>
        <div class="field"><label>Lo que aprenderás (uno por línea)</label><textarea class="input" name="aprenderas" rows="4">${t((u.aprenderas||[]).join(`
`))}</textarea></div>
        <div class="form-grid">
          <div class="field"><label>ID de colección en Bunny</label><input class="input mono" name="bunnyCollectionId" value="${t(u.bunnyCollectionId)}"></div>
          <div class="field"><label>Publicado</label><select class="input" name="publicado"><option value="1" ${u.publicado===!1?``:`selected`}>Sí, visible para miembros</option><option value="0" ${u.publicado===!1?`selected`:``}>No, oculto</option></select></div>
        </div>
      </div>
      <div class="card card--pad stack" style="gap:12px">
        <h3 class="admin-card-title">Portada 3:4</h3>
        <div class="cover-drop"><img src="${u.portada}" alt="" data-preview="portada"><label class="btn btn--secondary btn--sm"><i data-lucide="upload" class="i"></i>Subir imagen<input type="file" accept="image/*" hidden data-subir-imagen="portada"></label></div>
        <input type="hidden" name="portada" value="${t(u.portada)}">
        <p class="faint" style="font-size:var(--fs-xs)">Usa las imágenes generadas con la guía de Flow. Se optimizan al subir.</p>
      </div>
    </div>
    <div class="card card--pad stack" style="gap:12px">
      <div class="row" style="justify-content:space-between"><h3 class="admin-card-title">Clases</h3><button type="button" class="btn btn--secondary btn--sm" data-clase-accion="agregar"><i data-lucide="plus" class="i"></i>Agregar clase</button></div>
      ${u.clases.length?`<div class="dtable-wrap"><table class="dtable dtable--form"><thead><tr><th style="width:40px">#</th><th>Título</th><th style="width:30%">ID de video en Bunny</th><th style="width:90px">Min</th><th style="width:70px">Gratis</th><th style="width:110px"></th></tr></thead><tbody>
        ${u.clases.map((e,n)=>`<tr>
          <td class="mono faint">${n+1}</td>
          <td><input class="input input--sm" name="clase-${n}-titulo" value="${t(e.titulo)}" required>${/^Clase \d+$/.test(e.titulo)?`<span class="faint" style="font-size:10px">Título genérico · se reemplaza con la transcripción</span>`:``}</td>
          <td><input class="input input--sm mono" name="clase-${n}-videoId" value="${t(e.videoId)}" required></td>
          <td><input class="input input--sm mono" name="clase-${n}-duracion" type="number" min="0" value="${e.duracion??``}"></td>
          <td style="text-align:center"><input type="checkbox" name="clase-${n}-gratis" ${e.gratis?`checked`:``}></td>
          <td><div class="row" style="gap:2px;flex-wrap:nowrap">
            <button type="button" class="btn btn--ghost btn--icon btn--xs" data-clase-accion="subir:${n}" ${n===0?`disabled`:``}><i data-lucide="arrow-up" class="i"></i></button>
            <button type="button" class="btn btn--ghost btn--icon btn--xs" data-clase-accion="bajar:${n}" ${n===u.clases.length-1?`disabled`:``}><i data-lucide="arrow-down" class="i"></i></button>
            <button type="button" class="btn btn--ghost btn--icon btn--xs" data-clase-accion="quitar:${n}"><i data-lucide="trash-2" class="i"></i></button>
          </div></td></tr>`).join(``)}
      </tbody></table></div>`:c(`Sin clases`,`Agrega la primera clase con su ID de video de Bunny.`)}
    </div>
    ${a?``:`<div class="card card--pad row" style="justify-content:space-between"><div><strong>Borrar curso</strong><p class="faint" style="font-size:var(--fs-xs)">Solo si nadie lo ha empezado. En producción el backend lo impide si hay progreso.</p></div><button type="button" class="btn btn--danger" data-borrar-curso="${u.id}"><i data-lucide="trash-2" class="i"></i>Borrar</button></div>`}
  </form>`}function f(){let e=l(`quizzes`,`los quizzes`)||l(`cursos`,`los cursos`);if(e)return e;let r=n.quizzes(),a=n.cursos(),o=r.filter(e=>e.estado===`aprobado`).length;return`
  ${i(`Quizzes`,`${o} aprobados · ${r.length-o} en borrador · ${a.reduce((e,t)=>e+t.clases.length,0)-r.length} clases sin quiz`)}
  ${v(`Cómo se generan`,`Los quizzes salen de la transcripción de cada video (scripts/pipeline) y entran como <b>borrador</b>. Un especialista los revisa, corrige y aprueba aquí. Solo los aprobados los ven los miembros.`)}
  <div class="stack" style="gap:12px">${a.map(e=>`
    <details class="card acc" ${r.some(t=>t.cursoId===e.id)?`open`:``}>
      <summary><img src="${e.portada}" alt=""><strong>${t(e.titulo)}</strong><span class="chip">${r.filter(t=>t.cursoId===e.id&&t.estado===`aprobado`).length}/${e.clases.length}</span></summary>
      <div class="acc__body">${e.clases.map(n=>{let i=r.find(t=>t.cursoId===e.id&&t.n===n.n),a=i?i.estado===`aprobado`?`<span class="chip chip--accent">Aprobado</span>`:`<span class="chip chip--warn">Borrador</span>`:`<span class="chip">Sin quiz</span>`;return`<a class="acc__row" href="#/admin/quizzes/${e.id}/${n.n}"><span class="mono faint">${n.n}</span><span>${t(n.titulo)}</span>${a}${i?`<span class="faint" style="font-size:var(--fs-xs)">${i.preguntas.length} preguntas</span>`:``}<i data-lucide="chevron-right" class="i"></i></a>`}).join(``)}</div>
    </details>`).join(``)}</div>`}function p(e){let r=l(`quizzes`,`los quizzes`)||l(`cursos`,`los cursos`);if(r)return r;let a=n.cursos().find(t=>t.id===e.cursoId),o=Number(e.n),s=a?.clases.find(e=>e.n===o);if(!a||!s)return c(`Clase no encontrada`,``,`<a class="btn btn--brand" href="#/admin/quizzes">Volver</a>`);let u=n.quiz(a.id,o)||{id:`${a.id}_${o}`,cursoId:a.id,n:o,estado:`borrador`,preguntas:[],actualizado:``};return`
  <a class="section-head__cta" href="#/admin/quizzes" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Quizzes</a>
  <form class="stack" style="gap:18px" data-form="quiz" data-id="${u.id}" data-curso="${a.id}" data-n="${o}">
    ${i(`Quiz · clase ${o}`,`${t(a.titulo)} · ${t(s.titulo)}`,`<span class="chip ${u.estado===`aprobado`?`chip--accent`:`chip--warn`}">${u.estado===`aprobado`?`Aprobado`:`Borrador`}</span>
       <button class="btn btn--secondary" name="accion" value="borrador">Guardar borrador</button>
       <button class="btn btn--brand btn--pill-arrow" name="accion" value="aprobar">Aprobar y publicar <span class="arrow"><i data-lucide="check" class="i"></i></span></button>`)}
    ${u.preguntas.map((e,n)=>`
    <div class="card card--pad stack" style="gap:10px">
      <div class="row" style="justify-content:space-between"><span class="eyebrow">Pregunta ${n+1}</span><button type="button" class="btn btn--ghost btn--icon btn--xs" data-quiz-accion="quitar:${n}"><i data-lucide="trash-2" class="i"></i></button></div>
      <textarea class="input" name="p-${n}-q" rows="2" required>${t(e.q)}</textarea>
      <label class="field"><span>Formato de actividad</span><select class="input" name="p-${n}-tipo"><option value="seleccion" ${(e.tipo??`seleccion`)===`seleccion`?`selected`:``}>Selección múltiple</option><option value="caso" ${e.tipo===`caso`?`selected`:``}>Caso / decisión de campo</option><option value="relacionar" ${e.tipo===`relacionar`?`selected`:``}>Relacionar conceptos</option><option value="ordenar" ${e.tipo===`ordenar`?`selected`:``}>Ordenar procedimiento</option></select></label>
      <div class="stack quiz-edit-choice" data-quiz-choice ${[`relacionar`,`ordenar`].includes(e.tipo||``)?`hidden`:``} style="gap:6px">${[0,1,2,3].map(r=>`
        <label class="quiz-edit-opt"><input type="radio" name="p-${n}-correcta" value="${r}" ${e.correcta===r?`checked`:``}><span class="k">${`ABCD`[r]}</span><input class="input input--sm" name="p-${n}-o-${r}" value="${t(e.opciones[r]||``)}" placeholder="Opción ${r+1}"></label>`).join(``)}</div>
      <div class="quiz-edit-interactive" data-quiz-interactive ${[`relacionar`,`ordenar`].includes(e.tipo||``)?``:`hidden`}><p class="faint" style="font-size:var(--fs-xs)">Para las actividades interactivas, escribe un elemento por renglón y usa índices desde 0, separados por comas, para la solución correcta.</p>
        <label class="field"><span>Lado A / pasos</span><textarea class="input" name="p-${n}-izquierda" rows="3" placeholder="Paso o concepto 1&#10;Paso o concepto 2">${t(e.izquierda?.join(`
`)||e.elementos?.join(`
`)||``)}</textarea></label>
        <label class="field"><span>Lado B (solo relacionar)</span><textarea class="input" name="p-${n}-derecha" rows="3" placeholder="Correspondencia 1&#10;Correspondencia 2">${t(e.derecha?.join(`
`)||``)}</textarea></label>
        <label class="field"><span>Solución · índices desde 0</span><input class="input mono" name="p-${n}-solucion" value="${t(e.solucion?.join(`,`)||``)}" placeholder="Ej. 1,0,2"></label>
      </div>
      <div class="field"><label>Explicación que ve el miembro al responder</label><input class="input" name="p-${n}-explicacion" value="${t(e.explicacion)}"></div>
    </div>`).join(``)||c(`Sin preguntas`,`Se generan de la transcripción del video. También puedes escribirlas a mano.`)}
    <button type="button" class="btn btn--secondary" style="justify-self:start" data-quiz-accion="agregar"><i data-lucide="plus" class="i"></i>Agregar pregunta</button>
  </form>`}function m(){let e=l(`materiales`,`los materiales`);if(e)return e;let r=n.materiales(),a=e=>e===`disponible`?`<span class="chip chip--accent">Disponible</span>`:e===`oculto`?`<span class="chip">Oculto</span>`:`<span class="chip chip--warn">Próximamente</span>`;return`
  ${i(`Materiales`,`${r.length} recursos · ${r.filter(e=>e.estado===`disponible`).length} disponibles`,`<a class="btn btn--brand btn--pill-arrow" href="#/admin/materiales/nuevo">Nuevo material <span class="arrow"><i data-lucide="plus" class="i"></i></span></a>`)}
  <div class="card dtable-wrap"><table class="dtable">
    <thead><tr><th>Material</th><th>Tipo</th><th>Área</th><th>Págs.</th><th>Estado</th><th style="width:60px"></th></tr></thead>
    <tbody>${r.map(e=>`<tr>
      <td><a class="dtable__main dtable__main--book" href="#/admin/materiales/${e.id}"><img src="${e.portada}" alt=""><span><strong>${t(e.titulo)}</strong><br><span class="faint">${t(e.categoria)}</span></span></a></td>
      <td>${t(e.tipo)}</td><td>${t(e.area)}</td><td class="mono">${e.paginas}</td><td>${a(e.estado)}</td>
      <td><a class="btn btn--ghost btn--icon btn--xs" href="#/admin/materiales/${e.id}"><i data-lucide="pencil" class="i"></i></a></td></tr>`).join(``)}</tbody></table></div>`}function h(e){let r=l(`materiales`,`los materiales`)||l(`cursos`,`los cursos`);if(r)return r;let o=e.id===`nuevo`,u=o?{id:``,titulo:``,tipo:`PDF`,categoria:`Guía de campo`,area:``,autor:`Equipo académico GlobalVet`,paginas:1,portada:`/materiales/portadas/material-pecuario.svg`,cursoId:null,descripcion:``,estado:`proximamente`,url:``}:n.materiales().find(t=>t.id===e.id);if(!u)return c(`Material no encontrado`,``,`<a class="btn btn--brand" href="#/admin/materiales">Volver</a>`);let d=n.cursos();return`
  <a class="section-head__cta" href="#/admin/materiales" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Materiales</a>
  <form class="stack" style="gap:20px" data-form="material" data-id="${u.id}">
    ${i(o?`Nuevo material`:t(u.titulo),`PDF, libro o presentación para la biblioteca de miembros.`,`${u.url?`<a class="btn btn--secondary" href="${u.url}" target="_blank"><i data-lucide="file-text" class="i"></i>Abrir archivo</a>`:``}<button class="btn btn--brand btn--pill-arrow">Guardar <span class="arrow"><i data-lucide="check" class="i"></i></span></button>`)}
    <div class="admin-grid">
      <div class="card card--pad stack" style="gap:14px">
        <div class="field"><label>Título</label><input class="input" name="titulo" value="${t(u.titulo)}" required maxlength="120"></div>
        <div class="form-grid form-grid--3">
          <div class="field"><label>Tipo</label><select class="input" name="tipo">${s(a,u.tipo)}</select></div>
          <div class="field"><label>Categoría</label><input class="input" name="categoria" value="${t(u.categoria)}" placeholder="Guía clínica, Formato…"></div>
          <div class="field"><label>Páginas o láminas</label><input class="input" type="number" min="1" name="paginas" value="${u.paginas}"></div>
        </div>
        <div class="form-grid">
          <div class="field"><label>Área</label><input class="input" name="area" value="${t(u.area)}" required></div>
          <div class="field"><label>Autor</label><input class="input" name="autor" value="${t(u.autor)}"></div>
        </div>
        <div class="field"><label>Curso relacionado</label><select class="input" name="cursoId"><option value="">Recurso general</option>${d.map(e=>`<option value="${e.id}" ${u.cursoId===e.id?`selected`:``}>${t(e.titulo)}</option>`).join(``)}</select></div>
        <div class="field"><label>Descripción</label><textarea class="input" name="descripcion" rows="3">${t(u.descripcion)}</textarea></div>
        <div class="form-grid">
          <div class="field"><label>Archivo PDF</label>${n.modo===`api`?`<input class="input" type="file" name="archivoPdf" accept="application/pdf"><span class="faint" style="font-size:var(--fs-xs)">${u.url?`Archivo actual: ${t(u.url)}`:`Puedes subirlo al guardar el material.`}</span>`:`<input class="input mono" name="url" value="${t(u.url||``)}" placeholder="/materiales/archivo.pdf">`}</div>
          <div class="field"><label>Estado</label><select class="input" name="estado">${[[`disponible`,`Disponible`],[`proximamente`,`Próximamente`],[`oculto`,`Oculto`]].map(([e,t])=>`<option value="${e}" ${u.estado===e?`selected`:``}>${t}</option>`).join(``)}</select></div>
        </div>
        <p class="faint" style="font-size:var(--fs-xs)">${n.modo===`demo`?`En modo demo el archivo se indica con su ruta. Con el backend conectado, aquí subes el PDF y se guarda en Firebase Storage con descarga solo para miembros.`:`El PDF se guarda en Firebase Storage; la descarga es solo para miembros.`}</p>
      </div>
      <div class="card card--pad stack" style="gap:12px">
        <h3 class="admin-card-title">Portada 3:4</h3>
        <div class="cover-drop cover-drop--book"><img src="${u.portada}" alt="" data-preview="portada"><label class="btn btn--secondary btn--sm"><i data-lucide="upload" class="i"></i>Subir portada<input type="file" accept="image/*" hidden data-subir-imagen="portada"></label></div>
        <input type="hidden" name="portada" value="${t(u.portada)}">
      </div>
    </div>
    ${o?``:`<div class="card card--pad row" style="justify-content:space-between"><div><strong>Borrar material</strong><p class="faint" style="font-size:var(--fs-xs)">Si solo quieres esconderlo, cambia el estado a Oculto.</p></div><button type="button" class="btn btn--danger" data-borrar-material="${u.id}"><i data-lucide="trash-2" class="i"></i>Borrar</button></div>`}
  </form>`}function g(){let e=l(`eventos`,`los eventos`);if(e)return e;let r=n.eventos(),a=Date.now(),o=e=>new Date(e).toLocaleString(`es-MX`,{weekday:`short`,day:`numeric`,month:`short`,year:`numeric`,hour:`2-digit`,minute:`2-digit`});return`
  ${i(`En vivo`,`${r.filter(e=>new Date(e.fecha).getTime()>a).length} próximas · ${r.filter(e=>new Date(e.fecha).getTime()<=a).length} pasadas`,`<a class="btn btn--brand btn--pill-arrow" href="#/admin/en-vivo/nuevo">Programar clase <span class="arrow"><i data-lucide="plus" class="i"></i></span></a>`)}
  ${r.length?`<div class="card dtable-wrap"><table class="dtable"><thead><tr><th>Clase</th><th>Fecha</th><th>Ponente</th><th>Reservas</th><th>Estado</th><th style="width:60px"></th></tr></thead><tbody>
    ${r.map(e=>`<tr><td><a href="#/admin/en-vivo/${e.id}"><strong>${t(e.titulo)}</strong></a></td><td>${o(e.fecha)}</td><td>${t(e.ponente)}</td><td class="mono">${e.reservas||0}</td>
      <td>${new Date(e.fecha).getTime()<=a?`<span class="chip">Pasada</span>`:e.publicado===!1?`<span class="chip">Oculta</span>`:`<span class="chip chip--live">Próxima</span>`}</td>
      <td><a class="btn btn--ghost btn--icon btn--xs" href="#/admin/en-vivo/${e.id}"><i data-lucide="pencil" class="i"></i></a></td></tr>`).join(``)}</tbody></table></div>`:c(`Sin clases en vivo programadas`,`Programa la próxima transmisión: aparece en el inicio de todos los miembros y pueden reservar lugar.`,`<a class="btn btn--brand" href="#/admin/en-vivo/nuevo">Programar clase</a>`)}`}function _(r){let a=l(`eventos`,`los eventos`)||l(`cursos`,`los cursos`);if(a)return a;let o=r.id===`nuevo`,s=o?{id:``,titulo:``,ponente:``,fecha:new Date(Date.now()+6048e5).toISOString(),duracionMin:90,enlace:``,cursoId:``,publicado:!0}:n.eventos().find(e=>e.id===r.id);if(!s)return c(`Clase no encontrada`,``,`<a class="btn btn--brand" href="#/admin/en-vivo">Volver</a>`);let u=new Date(new Date(s.fecha).getTime()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16);return`
  <a class="section-head__cta" href="#/admin/en-vivo" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>En vivo</a>
  <form class="stack" style="gap:20px;max-width:820px" data-form="evento" data-id="${s.id}">
    ${i(o?`Programar clase en vivo`:t(s.titulo),`Se muestra en Inicio y En vivo; los miembros pueden reservar.`,`<button class="btn btn--brand btn--pill-arrow">Guardar <span class="arrow"><i data-lucide="check" class="i"></i></span></button>`)}
    <div class="card card--pad stack" style="gap:14px">
      <div class="field"><label>Título</label><input class="input" name="titulo" value="${t(s.titulo)}" required></div>
      <div class="form-grid form-grid--3">
        <div class="field"><label>Fecha y hora</label><input class="input" type="datetime-local" name="fecha" value="${u}" required></div>
        <div class="field"><label>Duración (min)</label><input class="input" type="number" min="15" name="duracionMin" value="${s.duracionMin}"></div>
        <div class="field"><label>Visible</label><select class="input" name="publicado"><option value="1" ${s.publicado===!1?``:`selected`}>Sí</option><option value="0" ${s.publicado===!1?`selected`:``}>No</option></select></div>
      </div>
      <div class="field"><label>Ponente</label><input class="input" name="ponente" value="${t(s.ponente)}" required></div>
      <div class="field"><label>Enlace de la transmisión (Zoom, Meet, YouTube)</label><input class="input" type="url" name="enlace" value="${t(s.enlace||``)}" placeholder="https://"></div>
      <div class="field"><label>Curso grabado cuando se suba (opcional)</label><select class="input" name="cursoId"><option value="">Aún no</option>${n.cursos().map(e=>`<option value="${e.id}" ${s.cursoId===e.id?`selected`:``}>${t(e.titulo)}</option>`).join(``)}</select></div>
    </div>
    <div class="card card--pad stack" style="gap:14px">
      <h3 class="admin-card-title">Oferta de la temporada</h3>
      <p class="faint" style="font-size:var(--fs-xs);margin:0">Con esto el curso aparece en «Cursos de la temporada» (Inicio y Cursos) y en la página pública, con su flyer, costo e inscripción por WhatsApp.</p>
      <div class="form-grid form-grid--3">
        <div class="field"><label>Área</label><input class="input" name="area" list="areas-evento" value="${t(s.area||``)}" placeholder="Avicultura"><datalist id="areas-evento">${[...new Set([...e,`Avicultura`,`Bovinos`,`Porcinos`,`Ovinos y caprinos`,`Equinos`,`Acuicultura`,`Apicultura`])].map(e=>`<option value="${t(e)}">`).join(``)}</datalist></div>
        <div class="field"><label>Modalidad</label><select class="input" name="modalidad">${[[`en-vivo`,`En vivo (transmisión)`],[`presencial`,`Presencial`],[`hibrido`,`En vivo y presencial`]].map(([e,t])=>`<option value="${e}" ${(s.modalidad||`en-vivo`)===e?`selected`:``}>${t}</option>`).join(``)}</select></div>
        <div class="field"><label>Inscripciones</label><select class="input" name="estado">${[[`disponible`,`Abiertas`],[`por-confirmar`,`Fecha o costo por confirmar`],[`cerrado`,`Cerradas`]].map(([e,t])=>`<option value="${e}" ${(s.estado||`disponible`)===e?`selected`:``}>${t}</option>`).join(``)}</select></div>
      </div>
      <div class="form-grid form-grid--3">
        <div class="field"><label>Costo (MXN, vacío = por confirmar)</label><input class="input" type="number" min="0" step="1" name="precio" value="${s.precio??``}" placeholder="450"></div>
        <div class="field"><label>Cupo (lugares; vacío = sin límite)</label><input class="input" type="number" min="1" step="1" name="cupo" value="${s.cupo??``}" placeholder="20"></div>
        <div class="field"><label>Lugar (si es presencial)</label><input class="input" name="lugar" value="${t(s.lugar||``)}" placeholder="Ciudad, estado o sede"></div>
      </div>
      <div class="field"><label>Descripción corta (lo que verán en la tarjeta)</label><textarea class="input" name="descripcion" rows="3" maxlength="300">${t(s.descripcion||``)}</textarea></div>
    </div>
    <div class="card card--pad stack" style="gap:12px">
      <h3 class="admin-card-title">Flyer 3:4</h3>
      <div class="cover-drop cover-drop--book"><img src="${t(s.portada||``)}" alt="" data-preview="portada"><label class="btn btn--secondary btn--sm"><i data-lucide="upload" class="i"></i>Subir flyer<input type="file" accept="image/*" hidden data-subir-imagen="portada"></label></div>
      <input type="hidden" name="portada" value="${t(s.portada||``)}">
      <p class="faint" style="font-size:var(--fs-xs)">Vertical 3:4 (por ejemplo 1080 × 1440 px). Mientras no haya flyer, la tarjeta se arma sola con el logo, el título y la fecha.</p>
    </div>
    ${o?``:`<div class="card card--pad row" style="justify-content:space-between"><strong>Borrar clase en vivo</strong><button type="button" class="btn btn--danger" data-borrar-evento="${s.id}"><i data-lucide="trash-2" class="i"></i>Borrar</button></div>`}
  </form>`}var v=(e,t)=>`<div class="admin-callout"><i data-lucide="info" class="i"></i><div><strong>${e}</strong><p>${t}</p></div></div>`;export{d as adminCurso,u as adminCursos,g as adminEnVivo,_ as adminEvento,h as adminMaterial,m as adminMateriales,p as adminQuiz,f as adminQuizzes,v as callout,c as vacio};