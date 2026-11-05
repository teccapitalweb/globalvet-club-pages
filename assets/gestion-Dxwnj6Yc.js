import{H as e,a as t,o as n,t as r}from"./shell-DoD-Ei4O.js";import{a as i,i as a,l as o,n as s,o as c,r as l,u}from"./index-BmrrS9ZM.js";import{vacio as d}from"./contenido-HUIPs24R.js";var f=864e5;function p(e,t=Date.now()){return e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>t?{vip:!0,etiqueta:`Cortesía`,chip:`chip--primary`}:e.plan===`cupon`&&e.cuponHasta&&new Date(e.cuponHasta).getTime()>t?{vip:!0,etiqueta:`Cupón VIP`,chip:`chip--primary`}:(e.plan===`mensual`||e.plan===`anual`)&&e.vence&&new Date(e.vence).getTime()>t?{vip:!0,etiqueta:e.plan===`anual`?`VIP anual`:`VIP mensual`,chip:`chip--accent`}:e.esAdmin?{vip:!0,etiqueta:`Administrador`,chip:`chip--primary`}:e.esVip?{vip:!0,etiqueta:`VIP`,chip:`chip--accent`}:{vip:!1,etiqueta:`Sin membresía`,chip:``}}var m=e=>e?new Date(e.length===10?e+`T12:00:00`:e).toLocaleDateString(`es-MX`,{day:`numeric`,month:`short`,year:`numeric`}):`—`,h=e=>{if(!e)return`Sin registro`;let t=new Date(e);return Number.isNaN(t.getTime())?`Sin registro`:t.toLocaleString(`es-MX`,{day:`numeric`,month:`short`,year:`numeric`,hour:`2-digit`,minute:`2-digit`})},g=(e,t,n,r)=>`<div class="admin-overview__kpi"><span class="admin-overview__kpi-icon"><i data-lucide="${e}" class="i"></i></span><span class="admin-overview__kpi-label">${t}</span><strong>${n}</strong><small>${r}</small></div>`,_=(e,t,n,r,i)=>`<a class="admin-workspace__link" href="${e}"><span class="admin-workspace__icon"><i data-lucide="${t}" class="i"></i></span><span><strong>${n}</strong><small>${r}</small></span><b>${i}</b><i data-lucide="arrow-up-right" class="i admin-workspace__arrow"></i></a>`;function v(){if(l())return c();let n=e.modo===`api`,r=n?s.resumen():null;if(n&&!r)return d(`No se pudo cargar el resumen`,`Comprueba la conexión con el backend y vuelve a intentarlo.`);let i=e=>!n||s.disponible(e),a=i(`cursos`)?e.cursos():[],o=i(`materiales`)?e.materiales():[],u=i(`quizzes`)?e.quizzes():[],h=i(`eventos`)?e.eventos():[],v=i(`miembros`)?e.miembros():[],y=Date.now(),b=v.filter(e=>p(e,y).vip),x=v.filter(e=>{let t=new Date(e.alta).getTime();return Number.isFinite(t)&&t<=y&&y-t<30*f}).length,S=v.filter(e=>{let t=new Date(e.cortesiaHasta||e.cuponHasta||e.vence||``).getTime();return Number.isFinite(t)&&t>y&&t-y<=7*f}).slice(0,5),C=a.reduce((e,t)=>e+t.clases.filter(e=>/^Clase \d+$/i.test(e.titulo)).length,0),w=a.reduce((e,t)=>e+t.clases.filter(e=>!e.videoId?.trim()&&!e.conVideo).length,0),T=u.filter(e=>e.estado===`borrador`).length,E=o.filter(e=>e.estado===`proximamente`).length,D=h.filter(e=>e.publicado!==!1&&new Date(e.fecha).getTime()>y).length,O=(e,t)=>i(e)?String(t):`—`,k=r?.cursosTop||[],A=Math.max(1,...k.map(e=>e.vistas));return`
  <section class="admin-overview" aria-labelledby="admin-overview-title">
    <div class="admin-overview__intro">
      <span class="admin-overview__eyebrow"><i data-lucide="activity" class="i"></i> CENTRO DE OPERACIONES · ${n?`DATOS CONECTADOS`:`VISTA DE DEMOSTRACIÓN`}</span>
      <h1 id="admin-overview-title">Tu club, bajo control.</h1>
      <p>${n?`Actividad verificada y estado del contenido en un solo lugar.`:`Explora la administración con datos ficticios guardados en este navegador.`}</p>
      <div class="admin-overview__actions"><a class="btn btn--brand" href="#/admin/cursos">Gestionar cursos <i data-lucide="arrow-up-right" class="i"></i></a><a class="btn btn--secondary" href="#/admin/miembros">Ver miembros</a></div>
    </div>
    <div class="admin-overview__stamp"><span>Hoy</span><strong>${new Date().toLocaleDateString(`es-MX`,{day:`2-digit`,month:`short`})}</strong><small>${new Date().toLocaleDateString(`es-MX`,{weekday:`long`,year:`numeric`})}</small></div>
  </section>
  <div class="admin-overview__kpis">
    ${n?`
      ${g(`users-round`,`Miembros con acceso`,String(r.miembrosActivos),`Acceso vigente`)}
      ${g(`user-round-plus`,`Altas · 30 días`,String(r.altas30d),`${r.bajas30d} bajas registradas`)}
      ${g(`circle-play`,`Clases vistas · 30 días`,String(r.clasesVistas30d),`Actividad registrada`)}
      ${g(`award`,`Certificados · 30 días`,String(r.certificados30d),`${r.temasForo30d} temas de comunidad`)}`:`
      ${g(`users-round`,`Miembros demo con acceso`,String(b.length),`Cuentas de ejemplo`)}
      ${g(`user-round-plus`,`Altas demo · 30 días`,String(x),`Fechas de la muestra local`)}
      ${g(`book-open`,`Cursos publicados`,String(a.filter(e=>e.publicado!==!1).length),`${a.length} en el catálogo demo`)}
      ${g(`library`,`Materiales disponibles`,String(o.filter(e=>e.estado===`disponible`).length),`${o.length} fichas demo`)}`}
  </div>
  <div class="admin-overview__body">
    <section class="card admin-workspace" aria-labelledby="admin-workspace-title">
      <div class="admin-panel-head"><div><span class="eyebrow">ACCESOS DIRECTOS</span><h2 id="admin-workspace-title">Gestionar contenido</h2></div><span class="admin-panel-head__note">Catálogo actual</span></div>
      <div class="admin-workspace__grid">
        ${_(`#/admin/cursos`,`graduation-cap`,`Cursos`,`${O(`cursos`,a.filter(e=>e.publicado!==!1).length)} publicados`,O(`cursos`,a.length))}
        ${_(`#/admin/materiales`,`library`,`Materiales`,`${O(`materiales`,o.filter(e=>e.estado===`disponible`).length)} disponibles`,O(`materiales`,o.length))}
        ${_(`#/admin/quizzes`,`brain`,`Quizzes`,`${O(`quizzes`,T)} en revisión`,O(`quizzes`,u.length))}
        ${_(`#/admin/en-vivo`,`radio`,`En vivo`,`${O(`eventos`,D)} próximos`,O(`eventos`,h.length))}
      </div>
    </section>
    <section class="card admin-attention" aria-labelledby="admin-attention-title">
      <div class="admin-panel-head"><div><span class="eyebrow">REVISIÓN EDITORIAL</span><h2 id="admin-attention-title">Por atender</h2></div><i data-lucide="list-checks" class="i"></i></div>
      ${!i(`cursos`)||!i(`quizzes`)||!i(`materiales`)?`<p class="admin-attention__note">Algunos datos no pudieron cargarse. Los guiones indican información no disponible, no cero pendientes.</p>`:``}
      <a href="#/admin/cursos"><span>Clases con título genérico</span><strong>${O(`cursos`,C)}</strong><i data-lucide="chevron-right" class="i"></i></a>
      <a href="#/admin/cursos"><span>Clases sin video asociado</span><strong>${O(`cursos`,w)}</strong><i data-lucide="chevron-right" class="i"></i></a>
      <a href="#/admin/quizzes"><span>Quizzes en borrador</span><strong>${O(`quizzes`,T)}</strong><i data-lucide="chevron-right" class="i"></i></a>
      <a href="#/admin/materiales"><span>Materiales próximos</span><strong>${O(`materiales`,E)}</strong><i data-lucide="chevron-right" class="i"></i></a>
    </section>
  </div>
  <div class="admin-overview__body admin-overview__body--secondary">
    <section class="card admin-insight" aria-labelledby="admin-insight-title">
      <div class="admin-panel-head"><div><span class="eyebrow">${n?`ÚLTIMOS 30 DÍAS`:`ACTIVIDAD`}</span><h2 id="admin-insight-title">Cursos más vistos</h2></div><a href="#/admin/analitica">Ver analítica <i data-lucide="arrow-up-right" class="i"></i></a></div>
      ${n&&k.length?k.slice(0,5).map((e,n)=>`<div class="admin-insight__row"><b>${String(n+1).padStart(2,`0`)}</b><span>${t(e.titulo)}</span><div class="progress"><span style="width:${Math.max(0,Math.min(100,e.vistas/A*100))}%"></span></div><strong>${e.vistas}</strong></div>`).join(``):`<p class="admin-insight__empty">${n?`Todavía no hay clases vistas registradas en este periodo.`:`La actividad de ejemplo no representa vistas de toda la plataforma.`}</p>`}
    </section>
    <section class="card admin-attention" aria-labelledby="admin-members-title">
      <div class="admin-panel-head"><div><span class="eyebrow">MIEMBROS</span><h2 id="admin-members-title">Acceso y vencimientos</h2></div><a href="#/admin/miembros">Ver todos <i data-lucide="arrow-up-right" class="i"></i></a></div>
      ${i(`miembros`)?S.length?S.map(e=>`<a href="#/admin/miembros/${encodeURIComponent(e.uid)}"><span>${t(e.nombre)}<small>${t(p(e,y).etiqueta)} · vence ${m(e.cortesiaHasta||e.cuponHasta||e.vence)}</small></span><i data-lucide="chevron-right" class="i"></i></a>`).join(``):`<p class="admin-insight__empty">No hay vencimientos registrados en los próximos 7 días.</p>`:`<p class="admin-insight__empty">No se pudo consultar la lista de miembros.</p>`}
    </section>
  </div>`}function y(a,o){if(l())return i(o);if(e.modo===`api`&&!s.disponible(`miembros`))return d(`No se pudieron cargar los miembros`,`Revisa la conexión con el servidor y vuelve a cargar esta página. No se muestran cuentas de demostración en modo API.`);let c=(o.get(`q`)||``).toLowerCase(),f=o.get(`estado`)||``,g=e.miembros();c&&(g=g.filter(e=>(e.nombre+e.email).toLowerCase().includes(c))),f===`vip`&&(g=g.filter(e=>p(e).vip&&!e.cortesiaHasta)),f===`cortesia`&&(g=g.filter(e=>e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>Date.now())),f===`sin`&&(g=g.filter(e=>!p(e).vip));let _=(e,t)=>`<a class="chip ${f===e?`chip--primary`:`chip--outline`}" href="#/admin/miembros?${new URLSearchParams({q:c,estado:e})}">${t}</a>`,v=e.miembros(),y=[{nombre:`Acceso vigente`,valor:v.filter(e=>p(e).vip).length,tono:`vip`},{nombre:`Sin membresía`,valor:v.filter(e=>!p(e).vip).length,tono:`free`},{nombre:`Cortesías`,valor:v.filter(e=>e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>Date.now()).length,tono:`gift`}],b=Math.max(1,...y.map(e=>e.valor));return`
  ${r(`Miembros`,`${e.miembros().length} cuentas · ${e.miembros().filter(e=>p(e).vip).length} con acceso`,`<a class="btn btn--secondary" href="#/admin/cupones"><i data-lucide="ticket-percent" class="i"></i>Cupones</a>`)}
  <section class="admin-members-summary" aria-label="Distribución de miembros">
    ${y.map(e=>`<div class="admin-members-summary__item is-${e.tono}"><span>${e.nombre}</span><strong>${e.valor}</strong><div class="admin-members-summary__track" role="img" aria-label="${e.valor} ${e.nombre.toLowerCase()}"><i style="width:${e.valor/b*100}%"></i></div></div>`).join(``)}
  </section>
  <div class="admin-members-note"><i data-lucide="clock-3" class="i"></i><span><strong>Ingresos y actividad son datos distintos.</strong> La fecha de ingreso sólo aparece si un servidor la registra. ${e.modo===`demo`?`Esta demostración no registra sesiones de los miembros de ejemplo.`:`Cuando la API no entrega una fecha de ingreso, se muestra “Sin registro”.`} Nunca se infiere a partir de clases vistas.</span></div>
  <div class="row" style="justify-content:space-between">
    <form class="search" style="flex:1;max-width:420px" data-form="buscar-miembro"><i data-lucide="search" class="i"></i><input class="input" name="q" value="${t(c)}" placeholder="Buscar por nombre o correo"></form>
    <div class="row" style="gap:6px">${_(``,`Todos`)}${_(`vip`,`VIP`)}${_(`cortesia`,`Cortesía`)}${_(`sin`,`Sin membresía`)}</div>
  </div>
  ${g.length?`<div class="card dtable-wrap"><table class="dtable"><thead><tr><th>Miembro</th><th>Estado</th><th>Vence</th><th>Clases vistas</th><th>Último ingreso</th><th>Última actividad</th><th></th></tr></thead><tbody>
    ${g.map(e=>{let r=p(e);return`<tr>
      <td><a class="dtable__main" href="#/admin/miembros/${e.uid}"><span class="avatar" style="width:34px;height:34px;font-size:12px">${n(e.nombre)}</span><span><strong>${t(e.nombre)}</strong><br><span class="faint">${t(e.email)}</span></span></a></td>
      <td><span class="chip ${r.chip}">${r.etiqueta}</span></td><td>${m(e.cortesiaHasta||e.vence)}</td><td class="mono">${e.clasesVistas}</td><td>${h(e.ultimoIngreso)}</td><td>${e.ultimaActividad?u(e.ultimaActividad):`Sin registro`}</td>
      <td><a class="btn btn--ghost btn--icon btn--xs" href="#/admin/miembros/${e.uid}"><i data-lucide="chevron-right" class="i"></i></a></td></tr>`}).join(``)}
  </tbody></table></div>`:d(`Sin resultados`,`Prueba con otro nombre o filtro.`)}`}function b(r){if(l())return a(r.uid);if(e.modo===`api`){let e=s.detalleMiembro(r.uid);if(!e)return d(`Miembro no encontrado`,`No se pudo cargar esta cuenta.`,`<a class="btn btn--brand" href="#/admin/miembros">Volver</a>`);let i=!!(e.cortesiaHasta&&new Date(e.cortesiaHasta).getTime()>Date.now()),a=e.esAdmin?`Administrador`:i?`Cortesía`:e.plan===`cupon`?`Cupón VIP`:e.esVip?`VIP activo`:`Sin membresía`,o=e.esVip?`chip--accent`:``,c=e.esAdmin?`Administrador`:e.plan===`anual`?`Anual`:e.plan===`mensual`?`Mensual`:e.plan===`cortesia`?`Cortesía`:e.plan===`cupon`?`Cupón`:`Sin plan`,l=e.progreso||[],u=e.certificados||[];return`
    <a class="section-head__cta" href="#/admin/miembros" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Miembros</a>
    <div class="card card--pad row" style="gap:18px;align-items:center">
      <div class="avatar avatar--lg">${n(e.nombre)}</div>
      <div style="flex:1"><h1 class="display" style="font-size:var(--fs-xl)">${t(e.nombre)}</h1><p class="muted">${t(e.email||`Correo no disponible`)}</p></div>
      <span class="chip ${o}" style="height:32px;font-size:var(--fs-sm)">${a}</span>
    </div>
    <div class="kpis">
      <div class="kpi"><span class="kpi__label">Plan</span><strong class="kpi__val" style="font-size:var(--fs-lg)">${c}</strong><span class="kpi__nota">vence ${m(e.vence)}</span></div>
      <div class="kpi"><span class="kpi__label">Clases vistas</span><strong class="kpi__val">${l.reduce((e,t)=>e+t.vistas.length,0)}</strong><span class="kpi__nota">en ${l.length} cursos</span></div>
      <div class="kpi"><span class="kpi__label">Certificados</span><strong class="kpi__val">${u.length}</strong><span class="kpi__nota">emitidos por el sistema</span></div>
    </div>
    <div class="admin-members-note"><i data-lucide="history" class="i"></i><span><strong>Último ingreso: ${h(e.ultimoIngreso)}.</strong> La actividad de cursos no equivale a una sesión iniciada. El historial de accesos requiere un registro de servidor con permisos de administrador.</span></div>
    ${e.accesoCupon?`<div class="card card--pad"><strong>Acceso por cupón</strong><p class="muted" style="font-size:var(--fs-sm)">Último código: <code>${t(e.accesoCupon.ultimoCodigo||`—`)}</code> · vigencia hasta ${m(e.cuponHasta||e.accesoCupon.hasta)}</p></div>`:``}
    <div class="admin-grid admin-grid--even">
      <form class="card card--pad stack" style="gap:12px" data-form="cortesia" data-uid="${e.uid}">
        <h3 class="admin-card-title">Acceso de cortesía</h3>
        ${i?`<p style="font-size:var(--fs-sm)">Vigente hasta <strong>${m(e.cortesiaHasta)}</strong>${e.cortesia?.motivo?` · ${t(e.cortesia.motivo)}`:``}</p>`:`<p class="muted" style="font-size:var(--fs-sm)">Da acceso VIP sin cobro por un periodo.</p>`}
        <div class="form-grid"><div class="field"><label>Días</label><div class="row" style="gap:6px">${[7,15,30,90].map(e=>`<button type="button" class="chip chip--outline" data-dias="${e}">${e}</button>`).join(``)}</div><input class="input" type="number" min="1" max="3650" name="dias" value="30" required></div>
        <div class="field"><label>Motivo</label><input class="input" name="motivo" required placeholder="Ponente, alianza, compensación…"></div></div>
        <div class="row"><button class="btn btn--brand"><i data-lucide="gift" class="i"></i>${i?`Extender cortesía`:`Dar cortesía`}</button>${i?`<button type="button" class="btn btn--danger" data-revocar-cortesia="${e.uid}">Revocar</button>`:``}</div>
      </form>
      <div class="card card--pad stack" style="gap:10px">
        <h3 class="admin-card-title">Suscripción</h3>
        ${e.suscripcion?`<div class="row" style="justify-content:space-between"><span>Estado</span><strong>${t(e.suscripcion.estado||`—`)}</strong></div><div class="row" style="justify-content:space-between"><span>Plan</span><strong>${t(e.suscripcion.plan||`—`)}</strong></div><div class="row" style="justify-content:space-between"><span>Fin del periodo</span><strong>${m(e.suscripcion.periodoFin)}</strong></div>`:e.miembro?`<p class="muted" style="font-size:var(--fs-sm)">Membresía heredada del sistema anterior · plan ${t(e.miembro.plan||`sin especificar`)}.</p>`:`<p class="muted" style="font-size:var(--fs-sm)">No existe una suscripción de pago asociada.</p>`}
        <p class="faint" style="font-size:var(--fs-xs)">Los cobros, cancelaciones y reembolsos se administran directamente en Stripe.</p>
      </div>
    </div>
    <div class="card card--pad stack" style="gap:10px"><h3 class="admin-card-title">Progreso por curso</h3>
      ${l.length?l.map(e=>`<div class="row" style="justify-content:space-between"><span><strong>${t(e.titulo)}</strong><br><span class="faint">${e.vistas.length} de ${e.total} clases</span></span><span class="chip ${e.certificado?`chip--accent`:``}">${e.certificado?`Certificado`:`${e.total?Math.round(e.vistas.length/e.total*100):0}%`}</span></div>`).join(``):`<p class="muted">Aún no ha iniciado cursos.</p>`}
    </div>`}let i=e.miembros().find(e=>e.uid===r.uid);if(!i)return d(`Miembro no encontrado`,``,`<a class="btn btn--brand" href="#/admin/miembros">Volver</a>`);let o=p(i),c=i.cortesiaHasta&&new Date(i.cortesiaHasta).getTime()>Date.now();return`
  <a class="section-head__cta" href="#/admin/miembros" style="align-self:flex-start"><span class="circle-btn circle-btn--glass" style="width:34px;height:34px"><i data-lucide="arrow-left" class="i" style="width:15px;height:15px"></i></span>Miembros</a>
  <div class="card card--pad row" style="gap:18px;align-items:center">
    <div class="avatar avatar--lg">${n(i.nombre)}</div>
    <div style="flex:1"><h1 class="display" style="font-size:var(--fs-xl)">${t(i.nombre)}</h1><p class="muted">${t(i.email)} · alta ${m(i.alta)}</p></div>
    <span class="chip ${o.chip}" style="height:32px;font-size:var(--fs-sm)">${o.etiqueta}</span>
  </div>
  <div class="kpis">
    <div class="kpi"><span class="kpi__label">Plan</span><strong class="kpi__val" style="font-size:var(--fs-lg)">${{mensual:`Mensual`,anual:`Anual`,cortesia:`Cortesía`,cupon:`Cupón`,ninguno:`Sin plan`}[i.plan]}</strong><span class="kpi__nota">vence ${m(i.vence)}</span></div>
    <div class="kpi"><span class="kpi__label">Clases vistas</span><strong class="kpi__val">${i.clasesVistas}</strong><span class="kpi__nota">de ${e.cursos().reduce((e,t)=>e+t.clases.length,0)}</span></div>
    <div class="kpi"><span class="kpi__label">Última actividad</span><strong class="kpi__val" style="font-size:var(--fs-lg)">${u(i.ultimaActividad)}</strong><span class="kpi__nota">${m(i.ultimaActividad)}</span></div>
  </div>
  <div class="admin-members-note"><i data-lucide="history" class="i"></i><span><strong>Último ingreso: ${h(i.ultimoIngreso)}.</strong> El demo no registra accesos de miembros; la última actividad mostrada arriba procede de datos de ejemplo.</span></div>
  <form class="card card--pad stack" style="gap:12px" data-form="perfil-miembro-demo" data-uid="${t(i.uid)}">
    <div><h3 class="admin-card-title">Ficha del miembro</h3><p class="muted" style="font-size:var(--fs-sm)">Edición local de demostración. No cambia Firebase Auth, la membresía ni los cobros.</p></div>
    <div class="form-grid"><div class="field"><label>Nombre</label><input class="input" name="nombre" value="${t(i.nombre)}" required maxlength="100"></div><div class="field"><label>Correo de la ficha</label><input class="input" type="email" name="email" value="${t(i.email)}" required maxlength="254"></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn btn--secondary"><i data-lucide="check" class="i"></i>Guardar ficha demo</button></div>
  </form>
  <div class="admin-grid admin-grid--even">
    <form class="card card--pad stack" style="gap:12px" data-form="cortesia" data-uid="${i.uid}">
      <h3 class="admin-card-title">Acceso de cortesía</h3>
      ${c?`<p style="font-size:var(--fs-sm)">Vigente hasta <strong>${m(i.cortesiaHasta)}</strong>${i.cortesiaMotivo?` · ${t(i.cortesiaMotivo)}`:``}</p>`:`<p class="muted" style="font-size:var(--fs-sm)">Da acceso VIP sin cobro por un periodo: ponentes, alianzas, compensaciones.</p>`}
      <div class="form-grid"><div class="field"><label>Días</label><div class="row" style="gap:6px">${[7,15,30,90].map(e=>`<button type="button" class="chip chip--outline" data-dias="${e}">${e}</button>`).join(``)}</div><input class="input" type="number" min="1" max="730" name="dias" value="30" required></div>
      <div class="field"><label>Motivo (queda registrado)</label><input class="input" name="motivo" required placeholder="Ponente invitada, compensación…"></div></div>
      <div class="row"><button class="btn btn--brand"><i data-lucide="gift" class="i"></i>${c?`Extender cortesía`:`Dar cortesía`}</button>${c?`<button type="button" class="btn btn--danger" data-revocar-cortesia="${i.uid}">Revocar</button>`:``}</div>
    </form>
    <div class="card card--pad stack" style="gap:10px">
      <h3 class="admin-card-title">Suscripción en Stripe</h3>
      <p class="muted" style="font-size:var(--fs-sm)">Cancelar, reembolsar o cambiar de plan se hace desde Stripe para que los cobros y la membresía nunca se desincronicen. Con el backend conectado, aquí aparece el historial de pagos y el enlace directo al cliente en Stripe.</p>
      <div class="row"><button class="btn btn--secondary" disabled><i data-lucide="credit-card" class="i"></i>Ver en Stripe</button><button class="btn btn--secondary" disabled><i data-lucide="x-circle" class="i"></i>Cancelar al final del periodo</button></div>
    </div>
  </div>`}function x(){if(e.modo===`api`&&!s.disponible(`foro`))return d(`No se pudo cargar la comunidad`,`Revisa la conexión con el servidor y vuelve a cargar esta página.`);let i=e.modo===`api`?s.foro().map(e=>({...e,respuestasTotal:Array.isArray(e.respuestas)?e.respuestas.length:Number(e.respuestas)||0,util:Number(e.util)||0})):o.todos();return`
  ${r(`Comunidad`,`${i.length} temas · ${i.filter(e=>e.oculto).length} ocultos`)}
  ${i.length?`<div class="stack" style="gap:10px">${i.map(e=>`
    <div class="card card--pad" style="display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:start;${e.oculto?`opacity:.6`:``}">
      <div class="avatar">${n(e.autor)}</div>
      <div><div class="row" style="gap:8px"><strong style="font-size:var(--fs-sm)">${t(e.autor)}</strong><span class="faint" style="font-size:var(--fs-xs)">${u(e.fecha)} · ${e.respuestasTotal} respuestas · ${e.util} útil</span>${e.oculto?`<span class="chip">Oculto</span>`:``}</div>
        <a href="#/comunidad/${e.id}" target="_blank" style="font-family:var(--font-display);font-weight:700;color:var(--text)">${t(e.titulo)}</a>
        <p class="muted" style="font-size:var(--fs-sm)">${t(e.texto.slice(0,220))}${e.texto.length>220?`…`:``}</p></div>
      <button class="btn btn--sm ${e.oculto?`btn--secondary`:`btn--danger`}" data-ocultar-hilo="${e.id}">${e.oculto?`Mostrar`:`Ocultar`}</button>
    </div>`).join(``)}</div>`:d(`Sin temas`,`Cuando los miembros abran temas aparecerán aquí para moderarlos.`)}`}function S(){if(e.modo===`api`&&!s.disponible(`avisos`))return d(`No se pudieron cargar los avisos`,`Revisa la conexión con el servidor y vuelve a cargar esta página.`);let n=e.avisos();return`
  ${r(`Avisos`,`Mensajes que aparecen en la campana de notificaciones de todos los miembros.`)}
  <form class="card card--pad stack" style="gap:12px;max-width:820px" data-form="aviso">
    <div class="field"><label>Título</label><input class="input" name="titulo" required maxlength="80" placeholder="Título del curso pecuario"></div>
    <div class="field"><label>Mensaje</label><textarea class="input" name="texto" rows="3" required maxlength="400" placeholder="Ya está disponible completo en tu catálogo…"></textarea></div>
    <div class="field"><label>Enlace (opcional)</label><input class="input" name="enlace" placeholder="#/cursos o https://…"></div>
    <div class="row" style="justify-content:flex-end"><button class="btn btn--brand btn--pill-arrow">Publicar aviso <span class="arrow"><i data-lucide="send" class="i"></i></span></button></div>
  </form>
  <div class="stack" style="gap:10px;max-width:820px">${n.map(e=>`
    <div class="card card--pad row" style="justify-content:space-between;align-items:flex-start;flex-wrap:nowrap">
      <div><strong>${t(e.titulo)}</strong><p class="muted" style="font-size:var(--fs-sm)">${t(e.texto)}</p><span class="faint" style="font-size:var(--fs-xs)">${u(e.fecha)}${e.enlace?` · ${t(e.enlace)}`:``}</span></div>
      <button class="btn btn--ghost btn--icon btn--xs" data-borrar-aviso="${e.id}" aria-label="Borrar"><i data-lucide="trash-2" class="i"></i></button>
    </div>`).join(``)||d(`Sin avisos publicados`,`El primero aparecerá en la campana de todos los miembros.`)}</div>`}function C(){if(e.modo===`api`&&!s.disponible(`config`))return d(`No se pudieron cargar los ajustes`,`Revisa la conexión con el servidor antes de modificar la configuración.`);let n=e.config();return`
  ${r(`Ajustes`,`Precios, contacto y administración del club.`)}
  <form class="card card--pad stack" style="gap:14px;max-width:820px" data-form="config">
    <h3 class="admin-card-title">Membresía</h3>
    <div class="form-grid form-grid--3">
      <div class="field"><label>Precio mensual (MXN)</label><input class="input" type="number" min="1" name="precioMensual" value="${n.precioMensual}" ${e.modo===`api`?`disabled`:``}></div>
      <div class="field"><label>Precio anual (MXN)</label><input class="input" type="number" min="1" name="precioAnual" value="${n.precioAnual}" ${e.modo===`api`?`disabled`:``}></div>
      <div class="field"><label>Descuento VIP en vivo (%)</label><input class="input" type="number" min="0" max="100" name="descuentoVIP" value="${n.descuentoVIP}"></div>
    </div>
    <p class="admin-pricing-note"><i data-lucide="shield-alert" class="i"></i><span>${e.modo===`demo`?`Estos importes sólo sirven para previsualizar la oferta en este navegador. No cambian cobros ni suscripciones.`:`Los importes están bloqueados: el contrato actual no permite crear y activar un nuevo precio de Stripe de forma segura. Puedes editar contacto y descuento; el precio de cobro requiere integración de servidor, revisión y confirmación explícita.`}</span></p>
    <h3 class="admin-card-title" style="margin-top:8px">Contacto</h3>
    <div class="form-grid">
      <div class="field"><label>WhatsApp de soporte (con lada, solo números)</label><input class="input mono" name="whatsappSoporte" value="${t(n.whatsappSoporte)}" pattern="[0-9]{10,15}"></div>
      <div class="field"><label>Canal o grupo de WhatsApp</label><input class="input" type="url" name="canalWhatsApp" value="${t(n.canalWhatsApp)}"></div>
    </div>
    <div class="row" style="justify-content:flex-end"><button class="btn btn--brand btn--pill-arrow">Guardar ajustes <span class="arrow"><i data-lucide="check" class="i"></i></span></button></div>
  </form>
  <div class="card card--pad stack" style="gap:10px;max-width:820px">
    <h3 class="admin-card-title">Quién puede entrar al admin</h3>
    <p style="font-size:var(--fs-sm)">En el producto conectado, el permiso debe venir de Firebase y verificarse también en cada endpoint del servidor. Esta interfaz no incluye una herramienta comprobada para asignar administradores; el acceso demo no representa permisos reales.</p>
    <p class="faint" style="font-size:var(--fs-xs)">Antes de habilitar cuentas operadoras: definir roles, probar 401/403 con dos usuarios y auditar cada cambio administrativo.</p>
  </div>
  <div class="card card--pad row" style="justify-content:space-between;max-width:820px">
    <div><strong>Modo de datos: ${e.modo===`demo`?`demo`:`conectado`}</strong><p class="faint" style="font-size:var(--fs-xs)">${e.modo===`demo`?`Todo se guarda en este navegador. Restablecer borra tus cambios y vuelve a los datos iniciales.`:`Conectado al backend.`}</p></div>
    ${e.modo===`demo`?`<button class="btn btn--danger" data-restablecer-demo><i data-lucide="rotate-ccw" class="i"></i>Restablecer demo</button>`:``}
  </div>`}export{C as adminAjustes,S as adminAvisos,x as adminComunidad,b as adminMiembro,y as adminMiembros,v as adminResumen,p as estadoMiembro};