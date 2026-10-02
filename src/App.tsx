import { useEffect } from "react";
import { initPage } from "./lib/init";

// Página de ventas: Atlas de Anatomía Humana.
// Los precios NO se escriben aquí: cada lugar tiene data-price="basico|premium"
// y el sistema de src/lib/ los llena según el país del visitante.
// Configuración (precios, links de Hotmart, países): src/lib/config/
export default function App() {
  useEffect(() => {
    initPage();
  }, []);

  return (
    <>
      {/* ===== BARRA SUPERIOR ===== */}
      <div className="topbar">
        <p className="tb1"><span aria-hidden="true">⚠️</span> <span id="topbar-text">DESCUENTO EXCLUSIVO SOLO HOY</span></p>
        <p className="tb2" id="topbar-date">02/10/2026</p>
      </div>
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="wrap narrow center">
          <p className="kicker">Atlas visual de anatomía humana • Edición Premium</p>
          <h1 className="h-hero">Domina la Anatomía Humana de forma <span className="teal">simple</span> y <span className="teal">visual</span></h1>
          <p className="lead">Más de <b>970 páginas ilustradas</b> con huesos, músculos, órganos y sistemas del cuerpo humano para estudiar mucho más rápido, memorizar con facilidad y aprender de forma visual.</p>
          <div className="cover">
            <img src="/assets/img/covers/hero.webp" alt="Atlas de Anatomía Humana: más de 970 páginas ilustradas" width={800} height={800} />
          </div>
          <a href="#planes" className="btn btn-red btn-xl">Quiero mi material ahora <span className="arr">→</span></a>
          <ul className="trust">
            <li><svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>Pago 100% seguro</li>
            <li><svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>Acceso inmediato</li>
            <li><svg viewBox="0 0 24 24"><rect x={5} y={11} width={14} height={10} rx={2} /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>Garantía de 7 días</li>
          </ul>
        </div>
      </header>
      {/* ===== PÁGINAS POR DENTRO ===== */}
      <section className="inside">
        <div className="wrap narrow center">
          <p className="kicker">Páginas reales — sin censura</p>
          <h2 className="h2">Por dentro del <span className="red">Atlas Anatómico</span></h2>
          <p className="sub">Imágenes reales y crudas del cuerpo humano. Cada página es un golpe visual: huesos, músculos y estructuras exactamente como necesitas verlos para nunca más olvidarlos.</p>
        </div>
        <div className="marquee" aria-label="Páginas del atlas">
          <div className="m-row">
            <div className="m-track">
              <img src="/assets/img/p1-01.webp" alt="Página del atlas: cráneo" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-02.webp" alt="Página del atlas: hueso frontal" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-03.webp" alt="Página del atlas: esfenoides" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-04.webp" alt="Página del atlas: vértebra C7" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-05.webp" alt="Página del atlas: tobillo" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-06.webp" alt="Página del atlas: elevador de la escápula" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-07.webp" alt="Página del atlas: pelvis" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p1-08.webp" alt="Página del atlas: bíceps" loading="lazy" width={700} height={991} />
            </div>
          </div>
          <div className="m-row rev">
            <div className="m-track">
              <img src="/assets/img/p2-01.webp" alt="Página del atlas: hueso hioides" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-02.webp" alt="Página del atlas: cartílago tiroides" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-03.webp" alt="Página del atlas: vértebra L2" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-04.webp" alt="Página del atlas: escápula" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-05.webp" alt="Página del atlas: fémur" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-06.webp" alt="Página del atlas: pie" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-07.webp" alt="Página del atlas: estilohioideo" loading="lazy" width={700} height={991} />
              <img src="/assets/img/p2-08.webp" alt="Página del atlas: longísimo" loading="lazy" width={700} height={991} />
            </div>
          </div>
        </div>
      </section>
      {/* ===== CATÁLOGO ===== */}
      <section className="soft">
        <div className="wrap narrow center">
          <p className="kicker">Catálogo médico</p>
          <h2 className="h2">Lo que vas a encontrar <span className="green">dentro del material</span></h2>
          <p className="sub">Un material completo, ilustrado y dividido en los principales sistemas del cuerpo humano.</p>
        </div>
        <div className="wrap cat-grid">
          <article className="cat">
            <div className="emo">🦴</div>
            <h3>Sistema Óseo Completo</h3>
            <ul><li>Cráneo y huesos de la cara</li><li>Columna vertebral detallada</li><li>Caja torácica y costillas</li><li>Miembros superiores</li><li>Miembros inferiores</li></ul>
          </article>
          <article className="cat">
            <div className="emo">💪</div>
            <h3>Sistema Muscular</h3>
            <ul><li>Principales grupos musculares</li><li>Ubicación anatómica precisa</li><li>Función de cada músculo</li><li>Origen e inserción</li><li>Mapas comparativos</li></ul>
          </article>
          <article className="cat">
            <div className="emo">🫀</div>
            <h3>Órganos y Sistemas</h3>
            <ul><li>Corazón y circulación</li><li>Sistema respiratorio</li><li>Esófago y estómago</li><li>Radiografías de tórax señaladas</li><li>Resúmenes visuales por región</li></ul>
          </article>
        </div>
      </section>
      {/* ===== DIFERENCIALES ===== */}
      <section className="soft pt0">
        <div className="wrap narrow center">
          <p className="kicker">Diferenciales</p>
          <h2 className="h2">¿Por qué este material <span className="green">facilita tus estudios?</span></h2>
          <p className="sub">Pensado para estudiantes, profesores y curiosos que quieren aprender de verdad.</p>
        </div>
        <div className="wrap narrow feats">
          <div className="feat"><span className="fi">🦴</span><div><b>Mapas anatómicos ilustrados</b><p>Visualiza cada estructura con mucha más claridad.</p></div></div>
          <div className="feat"><span className="fi">📝</span><div><b>Actividades para completar y repasar</b><p>Aprende de forma activa, no solo leyendo.</p></div></div>
          <div className="feat"><span className="fi">📱</span><div><b>Estudia en el celular o imprime</b><p>Estudia donde y cuando quieras.</p></div></div>
          <div className="feat"><span className="fi">📚</span><div><b>Contenido organizado por sistemas</b><p>Encuentra rápido el tema que necesitas repasar.</p></div></div>
          <div className="feat"><span className="fi">⚡</span><div><b>Ideal para repasar antes de los exámenes</b><p>Consulta el contenido en pocos minutos.</p></div></div>
          <div className="feat"><span className="fi">🌎</span><div><b>100% en español</b><p>Todo el material traducido y listo para estudiar.</p></div></div>
        </div>
      </section>
      {/* ===== BONOS ===== */}
      <section className="bonus-sec">
        <div className="wrap narrow center">
          <p className="kicker">🎁 Bonos exclusivos</p>
          <h2 className="h2">Además te llevas <span className="green">totalmente gratis</span></h2>
          <p className="sub">13 bonos exclusivos para acelerar todavía más tus estudios, incluidos en el <b>Pack Completo</b>.</p>
        </div>
        <div className="wrap bonus-top">
          <article className="bcard">
            <span className="bbadge">Bono</span>
            <img src="/assets/img/covers/flashcards.webp" alt="Bono: Flashcards de Anatomía" loading="lazy" width={800} height={800} />
            <h3>Flashcards de Anatomía</h3>
            <p>59 páginas de tarjetas visuales para memorizar los temas principales en cualquier lugar.</p>
            <p className="free">Incluido en el Pack Completo</p>
          </article>
          <article className="bcard">
            <span className="bbadge">Bono</span>
            <img src="/assets/img/covers/colorear.webp" alt="Bono: Anatomía para Colorear" loading="lazy" width={800} height={800} />
            <h3>Anatomía para Colorear</h3>
            <p>129 láminas para aprender pintando cada estructura del cuerpo humano.</p>
            <p className="free">Incluido en el Pack Completo</p>
          </article>
          <article className="bcard">
            <span className="bbadge">Bono</span>
            <img src="/assets/img/covers/cronograma.webp" alt="Bono: Cronograma de Estudios" loading="lazy" width={800} height={800} />
            <h3>Cronograma de Estudios</h3>
            <p>Plan semanal listo para organizar tu rutina y mantener la constancia.</p>
            <p className="free">Incluido en el Pack Completo</p>
          </article>
        </div>
        <div className="wrap narrow center"><h3 className="more-t">+ 10 bonos más</h3></div>
        <div className="wrap bonus-mini">
          <figure><img src="/assets/img/covers/extra.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Contenido Extra: Huesos y Músculos <small>79 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/cabeza.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Resumen: Cabeza y Cuello <small>37 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/radiografia.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Ejemplos de Radiografía <small>47 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/accidentes.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Accidentes Óseos <small>43 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/corazon.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Corazón y Aorta <small>17 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/fisio.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Fisiología Cardiovascular <small>49 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/cardio.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Sistema Cardiovascular <small>27 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/esofago.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Esófago y Estómago <small>41 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/respiratorio.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Sistema Respiratorio <small>25 págs.</small></figcaption></figure>
          <figure><img src="/assets/img/covers/resp_res.webp" alt="" loading="lazy" width={800} height={800} /><figcaption>Resúmenes Respiratorio <small>6 págs.</small></figcaption></figure>
        </div>
      </section>
      {/* ===== PLANES ===== */}
      <section className="plans-sec" id="planes">
        <div className="wrap narrow center">
          <p className="kicker">Elige tu plan</p>
          <div className="countdown" id="countdown">
            <p className="cd-label">La oferta termina en</p>
            <div className="cd"><span id="cd-h">00</span><i>:</i><span id="cd-m">00</span><i>:</i><span id="cd-s">00</span></div>
          </div>
          <div className="plan-country">Precios en <div data-country-selector /></div>
        </div>
        <div className="wrap plans">
          <article className="plan">
            <h3 className="p-title">Pack Básico</h3>
            <p className="p-desc">Solo el atlas, sin los bonos.</p>
            <p className="p-old">De <s className="skel" data-price="basico" data-kind="old" /></p>
            <p className="p-now skel" data-price="basico" data-kind="price" data-split />
            <p className="p-once">Pago único</p>
            <div className="p-thumbs off" aria-label="Bonos no incluidos">
              <span><img src="/assets/img/covers/flashcards.webp" alt="" loading="lazy" width={800} height={800} /></span>
              <span><img src="/assets/img/covers/colorear.webp" alt="" loading="lazy" width={800} height={800} /></span>
              <span><img src="/assets/img/covers/cronograma.webp" alt="" loading="lazy" width={800} height={800} /></span>
            </div>
            <p className="p-sub">Recibes:</p>
            <ul className="incl">
              <li>Atlas Huesos y Músculos completo (404 págs.)</li>
              <li>Acceso inmediato</li>
              <li>Garantía de 7 días</li>
            </ul>
            <p className="p-bon">🎁 Bonos exclusivos <em>No incluidos</em></p>
            <ul className="incl">
              <li className="no">Flashcards de Anatomía</li>
              <li className="no">Anatomía para Colorear (129 láminas)</li>
              <li className="no">Cronograma de Estudios</li>
              <li className="no">+10 materiales: corazón, respiratorio, radiografías, cabeza y cuello…</li>
              <li className="no">Actualizaciones futuras</li>
            </ul>
            <a className="btn btn-red" data-checkout="basico" href="#planes">Quiero el Pack Básico <span className="arr">→</span></a>
            <p className="p-safe">Pago 100% seguro · Compra protegida</p>
          </article>
          <article className="plan dark">
            <span className="ribbon">⭐ Recomendado</span>
            <h3 className="p-title">Pack Completo</h3>
            <p className="p-desc">Todo lo que necesitas para estudiar, memorizar y repasar Anatomía.</p>
            <p className="p-old">De <s className="skel" data-price="premium" data-kind="old" /> <span className="pct skel">-<span data-price="premium" data-kind="percent" /></span></p>
            <p className="p-now skel" data-price="premium" data-kind="price" data-split />
            <p className="p-once">Pago único</p>
            <div className="p-thumbs">
              <img src="/assets/img/covers/flashcards.webp" alt="" loading="lazy" width={800} height={800} />
              <img src="/assets/img/covers/colorear.webp" alt="" loading="lazy" width={800} height={800} />
              <img src="/assets/img/covers/cronograma.webp" alt="" loading="lazy" width={800} height={800} />
            </div>
            <p className="p-sub">Recibes:</p>
            <ul className="incl">
              <li>Atlas Huesos y Músculos completo (404 págs.)</li>
              <li>Acceso inmediato</li>
              <li>Garantía de 7 días</li>
            </ul>
            <p className="p-bon">🎁 Bonos exclusivos</p>
            <ul className="incl">
              <li>Flashcards de Anatomía</li>
              <li>Anatomía para Colorear (129 láminas)</li>
              <li>Cronograma de Estudios</li>
              <li>+10 materiales: corazón, respiratorio, radiografías, cabeza y cuello…</li>
              <li>Actualizaciones futuras</li>
            </ul>
            <a className="btn btn-green" data-checkout="premium" href="#planes">Quiero el Pack Completo <span className="arr">→</span></a>
            <p className="p-safe">Pago 100% seguro · Acceso inmediato</p>
          </article>
        </div>
        <p className="note wrap narrow">Precio mostrado en tu moneda local como referencia. El valor final, impuestos y formas de pago se confirman en el checkout seguro de Hotmart.</p>
      </section>
      {/* ===== GARANTÍA ===== */}
      <section className="soft">
        <div className="wrap narrow">
          <div className="g-card center">
            <svg className="hex" viewBox="0 0 200 220" aria-hidden="true">
              <defs><linearGradient id="gold" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#f3c463" /><stop offset={1} stopColor="#b8841f" /></linearGradient></defs>
              <polygon points="100,8 190,58 190,162 100,212 10,162 10,58" fill="#fff" stroke="url(#gold)" strokeWidth={10} />
              <text x={100} y={125} textAnchor="middle" fontSize={76} fontWeight={800} fill="#9a6a12">7</text>
              <text x={100} y={158} textAnchor="middle" fontSize={17} letterSpacing={4} fill="#9a6a12">DÍAS</text>
            </svg>
            <p className="kicker">Sello de confianza</p>
            <h2 className="h2 gold">Garantía de 7 días</h2>
            <p className="g-text">Puedes acceder a todo el material y revisar cada página con calma. Si en cualquier momento dentro de 7 días el contenido no es para ti, solo pides el reembolso en Hotmart: sin preguntas y sin complicaciones.</p>
          </div>
        </div>
      </section>
      {/* ===== FAQ ===== */}
      <section className="soft pt0">
        <div className="wrap narrow center">
          <p className="kicker">Preguntas frecuentes</p>
          <h2 className="h2">Todo lo que <span className="red">necesitas saber</span></h2>
          <p className="sub">Reunimos las dudas más comunes sobre el Atlas Anatómico para que decidas con seguridad.</p>
        </div>
        <div className="wrap narrow faq">
          <div className="faq-item"><button aria-expanded="false">¿Cómo recibo el material después de la compra?</button><div className="ans"><p>En cuanto se confirma el pago, recibes un correo de Hotmart con el acceso para descargar todos los PDF.</p></div></div>
          <div className="faq-item"><button aria-expanded="false">¿En qué dispositivos puedo usarlo?</button><div className="ans"><p>Son archivos PDF: funcionan en celular, tablet y computadora. También puedes imprimirlos.</p></div></div>
          <div className="faq-item"><button aria-expanded="false">¿Para qué nivel de estudio sirve?</button><div className="ans"><p>Para estudiantes de medicina, enfermería, fisioterapia, educación física, odontología, biomedicina y cualquier persona que quiera estudiar anatomía de forma visual, desde lo básico.</p></div></div>
          <div className="faq-item"><button aria-expanded="false">¿Qué incluye el material?</button><div className="ans"><p>El Pack Básico incluye el Atlas de Huesos y Músculos en 2 partes (404 páginas). El Pack Completo incluye el atlas más 13 bonos, con más de 970 páginas en total.</p></div></div>
          <div className="faq-item"><button aria-expanded="false">¿Cómo funciona la garantía de 7 días?</button><div className="ans"><p>Tienes 7 días desde la compra. Si no te gusta, solicitas el reembolso directamente en Hotmart y recibes el 100% de tu dinero.</p></div></div>
          <div className="faq-item"><button aria-expanded="false">¿El pago es seguro?</button><div className="ans"><p>Sí. El pago se procesa en Hotmart, una de las mayores plataformas de productos digitales de Latinoamérica.</p></div></div>
          <div className="faq-item"><button aria-expanded="false">¿Por cuánto tiempo tengo acceso?</button><div className="ans"><p>Para siempre. Descargas los archivos y son tuyos.</p></div></div>
        </div>
      </section>
      {/* ===== CTA FINAL ===== */}
      <section className="final">
        <div className="wrap narrow center">
          <h2 className="h2 white">Empieza hoy a estudiar anatomía de forma visual</h2>
          <p>Pack Completo por <b className="skel" data-price="premium" data-kind="price" /> <s className="skel" data-price="premium" data-kind="old" /></p>
          <a className="btn btn-green btn-xl" data-checkout="premium" href="#planes">Quiero el Pack Completo <span className="arr">→</span></a>
          <p className="small">Pago seguro · Acceso inmediato · Garantía de 7 días</p>
        </div>
      </section>
      <footer>
        <div className="wrap">
          <div data-country-selector />
          <p>© <span id="year">2026</span> Atlas de Anatomía Humana. Todos los derechos reservados.</p>
          <p className="small">Este sitio no forma parte de Facebook ni de Meta Platforms, Inc.</p>
        </div>
      </footer>
    </>
  );
}
