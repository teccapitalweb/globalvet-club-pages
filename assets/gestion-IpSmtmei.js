import{a as e,o as t,t as n,z as r}from"./shell-CI3nPyUh.js";import{a as i,n as a,o}from"./index-tdZkMXTa.js";import{vacio as s}from"./contenido-DzsJTbnx.js";var c=864e5;function l(e,t=Date.now()){return e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>t?{vip:!0,etiqueta:`Cortesía`,chip:`chip--primary`}:e.plan===`cupon`&&e.cuponHasta&&new Date(e.cuponHasta).getTime()>t?{vip:!0,etiqueta:`Cupón VIP`,chip:`chip--primary`}:(e.plan===`mensual`||e.plan===`anual`)&&e.vence&&new Date(e.vence).getTime()>t?{vip:!0,etiqueta:e.plan===`anual`?`VIP anual`:`VIP mensual`,chip:`chip--accent`}:e.esAdmin?{vip:!0,etiqueta:`Administrador`,chip:`chip--primary`}:e.esVip?{vip:!0,etiqueta:`VIP`,chip:`chip--accent`}:{vip:!1,etiqueta:`Sin membresía`,chip:``}}var u=e=>e?new Date(e.length===10?e+`T12:00:00`:e).toLocaleDateString(`es-MX`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,d=e=>{if(!e)return`Sin registro`;let t=new Date(e);return Number.isNaN(t.getTime())?`Sin registro`:t.toLocaleString(`es-MX`,{day:`numeric`,month:`short`,year:`numeric`,hour:`2-digit`,minute:`2-digit`})},f=(e,t,n,r)=>`<div class="admin-overview__kpi"><span class="admin-overview__kpi-icon"><i data-lucide="${e}" class="i"></i></span><span class="admin-overview__kpi-label">${t}</span><strong>${n}</strong><small>${r}</small></div>`,p=(e,t,n,r,i)=>`<a class="admin-workspace__link" href="${e}"><span class="admin-workspace__icon"><i data-lucide="${t}" class="i"></i></span><span><strong>${n}</strong><small>${r}</small></span><b>${i}</b><i data-lucide="arrow-up-right" class="i admin-workspace__arrow"></i></a>`;function m(){let t=r.modo===`api`,n=t?a.resumen():null;if(t&&!n)return s(`No se pudo cargar el resumen`,`Comprueba la conexión con el backend y vuelve a intentarlo.`);let i=e=>!t||a.disponible(e),o=i(`cursos`)?r.cursos():[],d=i(`materiales`)?r.materiales():[],m=i(`quizzes`)?r.quizzes():[],h=i(`eventos`)?r.eventos():[],g=i(`miembros`)?r.miembros():[],_=Date.now(),v=g.filter(e=>l(e,_).vip),y=g.filter(e=>{let t=new Date(e.alta).getTime();return Number.isFinite(t)&&t<=_&&_-t<30*c}).length,b=g.filter(e=>{let t=new Date(e.cortesiaHasta||e.cuponHasta||e.vence||``).getTime();return Number.isFinite(t)&&t>_&&t-_<=7*c}).slice(0,5),x=o.reduce((e,t)=>e+t.clases.filter(e=>/^Clase \d+$/i.test(e.titulo)).length,0),S=o.reduce((e,t)=>e+t.clases.filter(e=>!e.videoId?.trim()).length,0),C=m.filter(e=>e.estado===`borrador`).length,w=d.filter(e=>e.estado===`proximamente`).length,T=h.filter(e=>e.publicado!==!1&&new Date(e.fecha).getTime()>_).length,E=(e,t)=>i(e)?String(t):`—`,D=n?.cursosTop||[],O=Math.max(1,...D.map(e=>e.vistas));return`
  <section class="admin-overview" aria-labelledby="admin-overview-title">
    <div class="admin-overview__intro">
      <span class="admin-overview__eyebrow"><i data-lucide="activity" class="i"></i> CENTRO DE OPERACIONES · ${t?`DATOS CONECTADOS`:`VISTA DE DEMOSTRACIÓN`}</span>
      <h1 id="admin-overview-title">Tu club, bajo control.</h1>
      <p>${t?`Actividad verificada y estado del contenido en un solo lugar.`:`Explora la administración con datos ficticios guardados en este navegador.`}</p>
      <div class="admin-overview__actions"><a class="btn btn--brand" href="#/admin/cursos">Gestionar cursos <i data-lucide="arrow-up-right" class="i"></i></a><a class="btn btn--secondary" href="#/admin/miembros">Ver miembros</a></div>
    </div>
    <div class="admin-overview__stamp"><span>Hoy</span><strong>${new Date().toLocaleDateString(`es-MX`,{day:`2-digit`,month:`short`})}</strong><small>${new Date().toLocaleDateString(`es-MX`,{weekday:`long`,year:`numeric`})}</small></div>
  </section>
  <div class="admin-overview__kpis">
    ${t?`
      ${f(`users-round`,`Miembros con acceso`,String(n.miembrosActivos),`Acceso vigente`)}
      ${f(`user-round-plus`,`Altas · 30 días`,String(n.altas30d),`${n.bajas30d} bajas registradas`)}
      ${f(`circle-play`,`Clases vistas · 30 días`,String(n.clasesVistas30d),`Actividad registrada`)}
      ${f(`award`,`Certificados · 30 días`,String(n.certificados30d),`${n.temasForo30d} temas de comunidad`)}`:`
      ${f(`users-round`,`Miembros demo con acceso`,String(v.length),`Cuentas de ejemplo`)}
      ${f(`user-round-plus`,`Altas demo · 30 días`,String(y),`Fechas de la muestra local`)}
      ${f(`book-open`,`Cursos publicados`,String(o.filter(e=>e.publicado!==!1).length),`${o.length} en el catálogo demo`)}
      ${f(`library`,`Materiales disponibles`,String(d.filter(e=>e.estado===`disponible`).length),`${d.length} fichas demo`)}`}
  </div>
  <div class="admin-overview__body">
    <section class="card admin-workspace" aria-labelledby="admin-workspace-title">
      <div class="admin-panel-head"><div><span class="eyebrow">ACCESOS DIRECTOS</span><h2 id="admin-workspace-title">Gestionar contenido</h2></div><span class="admin-panel-head__note">Catálogo actual</span></div>
      <div class="admin-workspace__grid">
        ${p(`#/admin/cursos`,`graduation-cap`,`Cursos`,`${E(`cursos`,o.filter(e=>e.publicado!==!1).length)} publicados`,E(`cursos`,o.length))}
        ${p(`#/admin/materiales`,`library`,`Materiales`,`${E(`materiales`,d.filter(e=>e.estado===`disponible`).length)} disponibles`,E(`materiales`,d.length))}
        ${p(`#/admin/quizzes`,`brain`,`Quizzes`,`${E(`quizzes`,C)} en revisión`,E(`quizzes`,m.length))}
        ${p(`#/admin/en-vivo`,`radio`,`En vivo`,`${E(`eventos`,T)} próximos`,E(`eventos`,h.length))}
      </div>
    </section>
    <section class="card admin-attention" aria-labelledby="admin-attention-title">
      <div class="admin-panel-head"><div><span class="eyebrow">REVISIÓN EDITORIAL</span><h2 id="admin-attention-title">Por atender</h2></div><i data-lucide="list-checks" class="i"></i></div>
      ${!i(`cursos`)||!i(`quizzes`)||!i(`materiales`)?`<p class="admin-attention__note">Algunos datos no pudieron cargarse. Los guiones indican información no disponible, no cero pendientes.</p>`:``}
      <a href="#/admin/cursos"><span>Clases con título genérico</span><strong>${E(`cursos`,x)}</strong><i data-lucide="chevron-right" class="i"></i></a>
      <a href="#/admin/cursos"><span>Clases sin video asociado</span><strong>${E(`cursos`,S)}</strong><i data-lucide="chevron-right" class="i"></i></a>
      <a href="#/admin/quizzes"><span>Quizzes en borrador</span><strong>${E(`quizzes`,C)}</strong><i data-lucide="chevron-right" class="i"></i></a>
      <a href="#/admin/materiales"><span>Materiales próximos</span><strong>${E(`materiales`,w)}</strong><i data-lucide="chevron-right" class="i"></i></a>
    </section>
  </div>
  <div class="admin-overview__body admin-overview__body--secondary">
    <section class="card admin-insight" aria-labelledby="admin-insight-title">
      <div class="admin-panel-head"><div><span class="eyebrow">${t?`ÚLTIMOS 30 DÍAS`:`ACTIVIDAD`}</span><h2 id="admin-insight-title">Cursos más vistos</h2></div><a href="#/admin/analitica">Ver analítica <i data-lucide="arrow-up-right" class="i"></i></a></div>
      ${t&&D.length?D.slice(0,5).map((t,n)=>`<div class="admin-insight__row"><b>${String(n+1).padStart(2,`0`)}</b><span>${e(t.titulo)}</span><div class="progress"><span style="width:${Math.max(0,Math.min(100,t.vistas/O*100))}%"></span></div><strong>${t.vistas}</strong></div>`).join(``):`<p class="admin-insight__empty">${t?`Todavía no hay clases vistas registradas en este periodo.`:`La actividad de ejemplo no representa vistas de toda la plataforma.`}</p>`}
    </section>
    <section class="card admin-attention" aria-labelledby="admin-members-title">
      <div class="admin-panel-head"><div><span class="eyebrow">MIEMBROS</span><h2 id="admin-members-title">Acceso y vencimientos</h2></div><a href="#/admin/miembros">Ver todos <i data-lucide="arrow-up-right" class="i"></i></a></div>
      ${i(`miembros`)?b.length?b.map(t=>`<a href="#/admin/miembros/${encodeURIComponent(t.uid)}"><span>${e(t.nombre)}<small>${e(l(t,_).etiqueta)} · vence ${u(t.cortesiaHasta||t.cuponHasta||t.vence)}</small></span><i data-lucide="chevron-right" class="i"></i></a>`).join(``):`<p class="admin-insight__empty">No hay vencimientos registrados en los próximos 7 días.</p>`:`<p class="admin-insight__empty">No se pudo consultar la lista de miembros.</p>`}
    </section>
  </div>`}function h(i,c){if(r.modo===`api`&&!a.disponible(`miembros`))return s(`No se pudieron cargar los miembros`,`Revisa la conexión con el servidor y vuelve a cargar esta página. No se muestran cuentas de demostración en modo API.`);let f=(c.get(`q`)||``).toLowerCase(),p=c.get(`estado`)||``,m=r.miembros();f&&(m=m.filter(e=>(e.nombre+e.email).toLowerCase().includes(f))),p===`vip`&&(m=m.filter(e=>l(e).vip&&!e.cortesiaHasta)),p===`cortesia`&&(m=m.filter(e=>e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>Date.now())),p===`sin`&&(m=m.filter(e=>!l(e).vip));let h=(e,t)=>`<a class="chip ${p===e?`chip--primary`:`chip--outline`}" href="#/admin/miembros?${new URLSearchParams({q:f,estado:e})}">${t}</a>`,g=r.miembros(),_=[{nombre:`Acceso vigente`,valor:g.filter(e=>l(e).vip).length,tono:`vip`},{nombre:`Sin membresía`,valor:g.filter(e=>!l(e).vip).length,tono:`free`},{nombre:`Cortesías`,valor:g.filter(e=>e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>Date.now()).length,tono:`gift`}],v=Math.max(1,..._.map(e=>e.valor));return`
  ${n(`Miembros`,`${r.miembros().length} cuentas · ${r.miembros().filter(e=>l(e).vip).length} con acceso`,`<a class="btn btn--secondary" href="#/admin/cupones"><i data-lucide="ticket-percent" class="i"></i>Cupones</a>`)}
  <section class="admin-members-summary" aria-label="Distribución de miembros">
    ${_.map(e=>`<div class="admin-members-summary__item is-${e.tono}"><span>${e.nombre}</span><strong>${e.valor}</strong><div class="admin-members-summary__track" role="img" aria-label="${e.valor} ${e.nombre.toLowerCase()}"><i style="width:${e.valor/v*100}%"></i></div></div>`).join(``)}
  </section>
  <div class="admin-members-note"><i data-lucide="clock-3" class="i"></i><span><strong>Ingresos y actividad son datos distintos.</strong> La fecha de ingreso sólo aparece si un servidor la registra. ${r.modo===`demo`?`Esta demostración no registra sesiones de los miembros de ejemplo.`:`Cuando la API no entrega una fecha de ingreso, se muestra “Sin registro”.`} Nunca se infiere a partir de clases vistas.</span></div>
  <div class="row" style="justify-content:space-between">
    <form class="search" style="flex:1;max-width:420px" data-form="buscar-miembro"><i data-lucide="search" class="i"></i><input class="input" name="q" value="${e(f)}" placeholder="Buscar por nombre o correo"></form>
    <div class="row" style="gap:6px">${h(``,`Todos`)}${h(`vip`,`VIP`)}${h(`cortesia`,`Cortesía`)}${h(`sin`,`Sin membresía`)}</div>
  </div>
  ${m.length?`<div class="card dtable-wrap"><table class="dtable"><thead><tr><th>Miembro</th><th>Estado</th><th>Vence</th><th>Clases vistas</th><th>Último ingreso</th><th>Última actividad</th><th></th></tr></thead><tbody>
    ${m.map(n=>{let r=l(n);return`<tr>
      <td><a class="dtable__main" href="#/admin/miembros/${n.uid}"><span class="avatar" style="width:34px;height:34px;font-size:12px">${t(n.nombre)}</span><span><strong>${e(n.nombre)}</strong><br><span class="faint">${e(n.email)}</span></span></a></td>
      <td><span class="chip ${r.chip}">${r.etiqueta}</span></td><td>${u(n.cortesiaHasta||n.vence)}</td><td class="mono">${n.clasesVistas}</td><td>${d(n.ultimoIngreso)}</td><td>${n.ultimaActividad?o(n.ultimaActividad):`Sin registro`}</td>
      <td><a class="btn btn--ghost btn--icon btn--xs" href="#/admin/miembros/${n.uid}"><i data-lucide="chevron-right" class="i"></i></a></td></tr>`}).join(``)}
  </tbody></table></div>`:s(`Sin resultados`,`Prueba con otro nombre o filtro.`)}`}function g(n){if(r.modo===`api`){let r=a.detalleMiembro(n.uid);if(!r)return s(`Miembro no encontrado`,`No se pudo cargar esta cuenta.`,`<a class="btn btn--brand" href="#/admin/miembros">Volver</a>`);let i=!!(r.cortesiaHasta&&new Date(r.cortesiaHasta).getTime()>Date.now()),o=r.esAdmin?`Administrador`:i?`Cortesía`:r.plan===`cupon`?`Cupón VIP`:r.esVip?`VIP activo`:`Sin membresía`,c=r.esVip?`chip--accent`:``,l=r.esAdmin?`Administrador`:r.plan===`anual`?`Anual`:r.plan===`mensual`?`Mensual`:r.plan===`cortesia`?`Cortesía`:r.plan===`cupon`?`Cupón`:`Sin plan`,f=r.progreso||[],p=r.certificados||[];return`
    <a class="section-head__cta" href="#/admin/miembros" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Miembros</a>
    <div class="card card--pad row" style="gap:18px;align-items:center">
      <div class="avatar avatar--lg">${t(r.nombre)}</div>
      <div style="flex:1"><h1 class="display" style="font-size:var(--fs-xl)">${e(r.nombre)}</h1><p class="muted">${e(r.email||`Correo no disponible`)}</p></div>
      <span class="chip ${c}" style="height:32px;font-size:var(--fs-sm)">${o}</span>
    </div>
    <div class="kpis">
      <div class="kpi"><span class="kpi__label">Plan</span><strong class="kpi__val" style="font-size:var(--fs-lg)">${l}</strong><span class="kpi__nota">vence ${u(r.vence)}</span></div>
      <div class="kpi"><span class="kpi__label">Clases vistas</span><strong class="kpi__val">${f.reduce((e,t)=>e+t.vistas.length,0)}</strong><span class="kpi__nota">en ${f.length} cursos</span></div>
      <div class="kpi"><span class="kpi__label">Certificados</span><strong class="kpi__val">${p.length}</strong><span class="kpi__nota">emitidos por el sistema</span></div>
    </div>
    <div class="admin-members-note"><i data-lucide="history" class="i"></i><span><strong>Último ingreso: ${d(r.ultimoIngreso)}.</strong> La actividad de cursos no equivale a una sesión iniciada. El historial de accesos requiere un registro de servidor con permisos de administrador.</span></div>
    ${r.accesoCupon?`<div class="card card--pad"><strong>Acceso por cupón</strong><p class="muted" style="font-size:var(--fs-sm)">Último código: <code>${e(r.accesoCupon.ultimoCodigo||`—`)}</code> · vigencia hasta ${u(r.cuponHasta||r.accesoCupon.hasta)}</p></div>`:``}
    <div class="admin-grid admin-grid--even">
      <form class="card card--pad stack" style="gap:12px" data-form="cortesia" data-uid="${r.uid}">
        <h3 class="admin-card-title">Acceso de cortesía</h3>
        ${i?`<p style="font-size:var(--fs-sm)">Vigente hasta <strong>${u(r.cortesiaHasta)}</strong>${r.cortesia?.motivo?` · ${e(r.cortesia.motivo)}`:``}</p>`:`<p class="muted" style="font-size:var(--fs-sm)">Da acceso VIP sin cobro por un periodo.</p>`}
        <div class="form-grid"><div class="field"><label>Días</label><div class="row" style="gap:6px">${[7,15,30,90].map(e=>`<button type="button" class="chip chip--outline" data-dias="${e}">${e}</button>`).join(``)}</div><input class="input" type="number" min="1" max="3650" name="dias" value="30" required></div>
        <div class="field"><label>Motivo</label><input class="input" name="motivo" required placeholder="Ponente, alianza, compensación…"></div></div>
        <div class="row"><button class="btn btn--brand"><i data-lucide="gift" class="i"></i>${i?`Extender cortesía`:`Dar cortesía`}</button>${i?`<button type="button" class="btn btn--danger" data-revocar-cortesia="${r.uid}">Revocar</button>`:``}</div>
      </form>
      <div class="card card--pad stack" style="gap:10px">
        <h3 class="admin-card-title">Suscripción</h3>
        ${r.suscripcion?`<div class="row" style="justify-content:space-between"><span>Estado</span><strong>${e(r.suscripcion.estado||`—`)}</strong></div><div class="row" style="justify-content:space-between"><span>Plan</span><strong>${e(r.suscripcion.plan||`—`)}</strong></div><div class="row" style="justify-content:space-between"><span>Fin del periodo</span><strong>${u(r.suscripcion.periodoFin)}</strong></div>`:r.miembro?`<p class="muted" style="font-size:var(--fs-sm)">Membresía heredada del sistema anterior · plan ${e(r.miembro.plan||`sin especificar`)}.</p>`:`<p class="muted" style="font-size:var(--fs-sm)">No existe una suscripción de pago asociada.</p>`}
        <p class="faint" style="font-size:var(--fs-xs)">Los cobros, cancelaciones y reembolsos se administran directamente en Stripe.</p>
      </div>
    </div>
    <div class="card card--pad stack" style="gap:10px"><h3 class="admin-card-title">Progreso por curso</h3>
      ${f.length?f.map(t=>`<div class="row" style="justify-content:space-between"><span><strong>${e(t.titulo)}</strong><br><span class="faint">${t.vistas.length} de ${t.total} clases</span></span><span class="chip ${t.certificado?`chip--accent`:``}">${t.certificado?`Certificado`:`${t.total?Math.round(t.vistas.length/t.total*100):0}%`}</span></div>`).join(``):`<p class="muted">Aún no ha iniciado cursos.</p>`}
    </div>`}let i=r.miembros().find(e=>e.uid===n.uid);if(!i)return s(`Miembro no encontrado`,``,`<a class="btn btn--brand" href="#/admin/miembros">Volver</a>`);let c=l(i),f=i.cortesiaHasta&&new Date(i.cortesiaHasta).getTime()>Date.now();return`
  <a class="section-head__cta" href="#/admin/miembros" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Miembros</a>
  <div class="card card--pad row" style="gap:18px;align-items:center">
    <div class="avatar avatar--lg">${t(i.nombre)}</div>
    <div style="flex:1"><h1 class="display" style="font-size:var(--fs-xl)">${e(i.nombre)}</h1><p class="muted">${e(i.email)} · alta ${u(i.alta)}</p></div>
    <span class="chip ${c.chip}" style="height:32px;font-size:var(--fs-sm)">${c.etiqueta}</span>
  </div>
  <div class="kpis">
    <div class="kpi"><span class="kpi__label">Plan</span><strong class="kpi__val" style="font-size:var(--fs-lg)">${{mensual:`Mensual`,anual:`Anual`,cortesia:`Cortesía`,cupon:`Cupón`,ninguno:`Sin plan`}[i.plan]}</strong><span class="kpi__nota">vence ${u(i.vence)}</span></div>
    <div class="kpi"><span class="kpi__label">Clases vistas</span><strong class="kpi__val">${i.clasesVistas}</strong><span class="kpi__nota">de ${r.cursos().reduce((e,t)=>e+t.clases.length,0)}</span></div>
    <div class="kpi"><span class="kpi__label">Última actividad</span><strong class="kpi__val" style="font-size:var(--fs-lg)">${o(i.ultimaActividad)}</strong><span class="kpi__nota">${u(i.ultimaActividad)}</span></div>
  </div>
  <div class="admin-members-note"><i data-lucide="history" class="i"></i><span><strong>Último ingreso: ${d(i.ultimoIngreso)}.</strong> El demo no registra accesos de miembros; la última actividad mostrada arriba procede de datos de ejemplo.</span></div>
  <form class="card card--pad stack" style="gap:12px" data-form="perfil-miembro-demo" data-uid="${e(i.uid)}">
    <div><h3 class="admin-card-title">Ficha del miembro</h3><p class="muted" style="font-size:var(--fs-sm)">Edición local de demostración. No cambia Firebase Auth, la membresía ni los cobros.</p></div>
    <div class="form-grid"><div class="field"><label>Nombre</label><input class="input" name="nombre" value="${e(i.nombre)}" required maxlength="100"></div><div class="field"><label>Correo de la ficha</label><input class="input" type="email" name="email" value="${e(i.email)}" required maxlength="254"></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn btn--secondary"><i data-lucide="check" class="i"></i>Guardar ficha demo</button></div>
  </form>
  <div class="admin-grid admin-grid--even">
    <form class="card card--pad stack" style="gap:12px" data-form="cortesia" data-uid="${i.uid}">
      <h3 class="admin-card-title">Acceso de cortesía</h3>
      ${f?`<p style="font-size:var(--fs-sm)">Vigente hasta <strong>${u(i.cortesiaHasta)}</strong>${i.cortesiaMotivo?` · ${e(i.cortesiaMotivo)}`:``}</p>`:`<p class="muted" style="font-size:var(--fs-sm)">Da acceso VIP sin cobro por un periodo: ponentes, alianzas, compensaciones.</p>`}
      <div class="form-grid"><div class="field"><label>Días</label><div class="row" style="gap:6px">${[7,15,30,90].map(e=>`<button type="button" class="chip chip--outline" data-dias="${e}">${e}</button>`).join(``)}</div><input class="input" type="number" min="1" max="730" name="dias" value="30" required></div>
      <div class="field"><label>Motivo (queda registrado)</label><input class="input" name="motivo" required placeholder="Ponente invitada, compensación…"></div></div>
      <div class="row"><button class="btn btn--brand"><i data-lucide="gift" class="i"></i>${f?`Extender cortesía`:`Dar cortesía`}</button>${f?`<button type="button" class="btn btn--danger" data-revocar-cortesia="${i.uid}">Revocar</button>`:``}</div>
    </form>
    <div class="card card--pad stack" style="gap:10px">
      <h3 class="admin-card-title">Suscripción en Stripe</h3>
      <p class="muted" style="font-size:var(--fs-sm)">Cancelar, reembolsar o cambiar de plan se hace desde Stripe para que los cobros y la membresía nunca se desincronicen. Con el backend conectado, aquí aparece el historial de pagos y el enlace directo al cliente en Stripe.</p>
      <div class="row"><button class="btn btn--secondary" disabled><i data-lucide="credit-card" class="i"></i>Ver en Stripe</button><button class="btn btn--secondary" disabled><i data-lucide="x-circle" class="i"></i>Cancelar al final del periodo</button></div>
    </div>
  </div>`}function _(){if(r.modo===`api`&&!a.disponible(`foro`))return s(`No se pudo cargar la comunidad`,`Revisa la conexión con el servidor y vuelve a cargar esta página.`);let c=r.modo===`api`?a.foro().map(e=>({...e,respuestasTotal:Array.isArray(e.respuestas)?e.respuestas.length:Number(e.respuestas)||0,util:Number(e.util)||0})):i.todos();return`
  ${n(`Comunidad`,`${c.length} temas · ${c.filter(e=>e.oculto).length} ocultos`)}
  ${c.length?`<div class="stack" style="gap:10px">${c.map(n=>`
    <div class="card card--pad" style="display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:start;${n.oculto?`opacity:.6`:``}">
      <div class="avatar">${t(n.autor)}</div>
      <div><div class="row" style="gap:8px"><strong style="font-size:var(--fs-sm)">${e(n.autor)}</strong><span class="faint" style="font-size:var(--fs-xs)">${o(n.fecha)} · ${n.respuestasTotal} respuestas · ${n.util} útil</span>${n.oculto?`<span class="chip">Oculto</span>`:``}</div>
        <a href="#/comunidad/${n.id}" target="_blank" style="font-family:var(--font-display);font-weight:700;color:var(--text)">${e(n.titulo)}</a>
        <p class="muted" style="font-size:var(--fs-sm)">${e(n.texto.slice(0,220))}${n.texto.length>220?`…`:``}</p></div>
      <button class="btn btn--sm ${n.oculto?`btn--secondary`:`btn--danger`}" data-ocultar-hilo="${n.id}">${n.oculto?`Mostrar`:`Ocultar`}</button>
    </div>`).join(``)}</div>`:s(`Sin temas`,`Cuando los miembros abran temas aparecerán aquí para moderarlos.`)}`}function v(){if(r.modo===`api`&&!a.disponible(`avisos`))return s(`No se pudieron cargar los avisos`,`Revisa la conexión con el servidor y vuelve a cargar esta página.`);let t=r.avisos();return`
  ${n(`Avisos`,`Mensajes que aparecen en la campana de notificaciones de todos los miembros.`)}
  <form class="card card--pad stack" style="gap:12px;max-width:820px" data-form="aviso">
    <div class="field"><label>Título</label><input class="input" name="titulo" required maxlength="80" placeholder="Título del curso pecuario"></div>
    <div class="field"><label>Mensaje</label><textarea class="input" name="texto" rows="3" required maxlength="400" placeholder="Ya está disponible completo en tu catálogo…"></textarea></div>
    <div class="field"><label>Enlace (opcional)</label><input class="input" name="enlace" placeholder="#/cursos o https://…"></div>
    <div class="row" style="justify-content:flex-end"><button class="btn btn--brand btn--pill-arrow">Publicar aviso <span class="arrow"><i data-lucide="send" class="i"></i></span></button></div>
  </form>
  <div class="stack" style="gap:10px;max-width:820px">${t.map(t=>`
    <div class="card card--pad row" style="justify-content:space-between;align-items:flex-start;flex-wrap:nowrap">
      <div><strong>${e(t.titulo)}</strong><p class="muted" style="font-size:var(--fs-sm)">${e(t.texto)}</p><span class="faint" style="font-size:var(--fs-xs)">${o(t.fecha)}${t.enlace?` · ${e(t.enlace)}`:``}</span></div>
      <button class="btn btn--ghost btn--icon btn--xs" data-borrar-aviso="${t.id}" aria-label="Borrar"><i data-lucide="trash-2" class="i"></i></button>
    </div>`).join(``)||s(`Sin avisos publicados`,`El primero aparecerá en la campana de todos los miembros.`)}</div>`}function y(){if(r.modo===`api`&&!a.disponible(`config`))return s(`No se pudieron cargar los ajustes`,`Revisa la conexión con el servidor antes de modificar la configuración.`);let t=r.config();return`
  ${n(`Ajustes`,`Precios, contacto y administración del club.`)}
  <form class="card card--pad stack" style="gap:14px;max-width:820px" data-form="config">
    <h3 class="admin-card-title">Membresía</h3>
    <div class="form-grid form-grid--3">
      <div class="field"><label>Precio mensual (MXN)</label><input class="input" type="number" min="1" name="precioMensual" value="${t.precioMensual}" ${r.modo===`api`?`disabled`:``}></div>
      <div class="field"><label>Precio anual (MXN)</label><input class="input" type="number" min="1" name="precioAnual" value="${t.precioAnual}" ${r.modo===`api`?`disabled`:``}></div>
      <div class="field"><label>Descuento VIP en vivo (%)</label><input class="input" type="number" min="0" max="100" name="descuentoVIP" value="${t.descuentoVIP}"></div>
    </div>
    <p class="admin-pricing-note"><i data-lucide="shield-alert" class="i"></i><span>${r.modo===`demo`?`Estos importes sólo sirven para previsualizar la oferta en este navegador. No cambian cobros ni suscripciones.`:`Los importes están bloqueados: el contrato actual no permite crear y activar un nuevo precio de Stripe de forma segura. Puedes editar contacto y descuento; el precio de cobro requiere integración de servidor, revisión y confirmación explícita.`}</span></p>
    <h3 class="admin-card-title" style="margin-top:8px">Contacto</h3>
    <div class="form-grid">
      <div class="field"><label>WhatsApp de soporte (con lada, solo números)</label><input class="input mono" name="whatsappSoporte" value="${e(t.whatsappSoporte)}" pattern="[0-9]{10,15}"></div>
      <div class="field"><label>Canal o grupo de WhatsApp</label><input class="input" type="url" name="canalWhatsApp" value="${e(t.canalWhatsApp)}"></div>
    </div>
    <div class="row" style="justify-content:flex-end"><button class="btn btn--brand btn--pill-arrow">Guardar ajustes <span class="arrow"><i data-lucide="check" class="i"></i></span></button></div>
  </form>
  <div class="card card--pad stack" style="gap:10px;max-width:820px">
    <h3 class="admin-card-title">Quién puede entrar al admin</h3>
    <p style="font-size:var(--fs-sm)">En el producto conectado, el permiso debe venir de Firebase y verificarse también en cada endpoint del servidor. Esta interfaz no incluye una herramienta comprobada para asignar administradores; el acceso demo no representa permisos reales.</p>
    <p class="faint" style="font-size:var(--fs-xs)">Antes de habilitar cuentas operadoras: definir roles, probar 401/403 con dos usuarios y auditar cada cambio administrativo.</p>
  </div>
  <div class="card card--pad row" style="justify-content:space-between;max-width:820px">
    <div><strong>Modo de datos: ${r.modo===`demo`?`demo`:`conectado`}</strong><p class="faint" style="font-size:var(--fs-xs)">${r.modo===`demo`?`Todo se guarda en este navegador. Restablecer borra tus cambios y vuelve a los datos iniciales.`:`Conectado al backend.`}</p></div>
    ${r.modo===`demo`?`<button class="btn btn--danger" data-restablecer-demo><i data-lucide="rotate-ccw" class="i"></i>Restablecer demo</button>`:``}
  </div>`}export{y as adminAjustes,v as adminAvisos,_ as adminComunidad,g as adminMiembro,h as adminMiembros,m as adminResumen,l as estadoMiembro};