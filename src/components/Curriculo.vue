<template>
    <div ref="root" class="wrapper">
        <div class="sidebar-wrapper">
            <div class="profile-container">
                <img class="profile" src="https://s.gravatar.com/avatar/8ea7628f5c90398b0073b3d32813e5d7?s=80" alt="" />
                <h1 class="name">Pau Puerta Carmona</h1>
                <h3 class="tagline">Ingeniero de software</h3>
            </div><!--//profile-container-->

            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list">
                    <li class="email"><i class="fa fa-envelope"></i><a href="">paupuerta<i class="fa fa-at" style="margin-right: 0;"></i>gmail.com</a></li>
                    <li class="website"><i class="fa fa-globe"></i><a href="http://paupuerta.github.io" target="_blank">paupuerta.github.io</a></li>
                    <li class="linkedin"><i class="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/paupuerta" target="_blank">linkedin.com/in/paupuerta</a></li>
                    <li class="github"><i class="fa fa-github"></i><a href="https://github.com/paupuerta" target="_blank">github.com/paupuerta</a></li>
                    <li class="twitter"><i class="fa fa-twitter"></i><a href="https://twitter.com/_paupuerta_" target="_blank">@_paupuerta_</a></li>
                </ul>
            </div><!--//contact-container-->

            <div class="education-container container-block">
                <h2 class="container-block-title"><i class="fa fa-university"></i> Formación</h2>
                <div class="item">
                    <h4 class="degree">Ingeniería Técnica en Informática de Gestión</h4>
                    <h5 class="meta">Escola Universitaria Politecnica de Mataro</h5>
                    <div class="time">1999 - 2003</div>
                </div><!--//item-->
                <div class="item">
                    <h4 class="degree">F.P. Electrónica Industrial</h4>
                    <h5 class="meta">I.F.P GUINEUETA</h5>
                    <div class="time">1994 - 1999</div>
                </div><!--//item-->
            </div><!--//education-container-->

            <div class="languages-container container-block">
                <h2 class="container-block-title"><i class="fa fa-language"></i> Idiomas</h2>
                <ul class="list-unstyled interests-list">
                    <li>Catalan <span class="lang-desc">(Nativo)</span></li>
                    <li>Español <span class="lang-desc">(Nativo)</span></li>
                    <li>English <span class="lang-desc">(Lectura Técnica)</span></li>
                </ul>
            </div>
        </div><!--//sidebar-wrapper-->

        <div  class="main-wrapper">
            <section class="section summary-section" data-starttime="0" data-endtime="5">
                <h2 class="section-title"><i class="fa fa-user"></i>Perfil</h2>
                <div class="summary">
                    <p>
                        Soy desarrollador desde el 2001, empezando mi carrera profesional compaginada con los estudios universitarios.
                        Desde entonces, mi experiencia principal se ha encaminado a C/C++ y base de datos relacionales en desarrollo de aplicaciones de diversa índole, como SIG (sistemas de información geográfica), aplicaciones Soap, o servidores custom entre otras.
                    </p>
                    <p>
                        Pero en todo este tiempo y con los inescrutables caminos del desarrollo, me he encontrado con el placer de hacer uso de otros poderes, realmente allí donde he ido, quizás por mi inquietud e interés que me ha llevado a tener un conocimiento heterogéneo, han tenido en cuenta mis propuestas y esto me ha permitido trabajar con proyectos web (html, js, css en crudo), php, Angularjs 1.2, ReactJs, algún plugin en firefox, GoLang, pruebas de concepto con Docker, RabbitMq .....
                    </p>
                    <p>
                        En resumen, mi perfil, con una fuerte base en C++ y Sql, es algo dispar sin problemas a cambios y con ganas de seguir aprendiendo lo mucho que me falta.
                        Es con esa idea que me gustaría encontrar, allí donde me lleve el código, un entorno de desarrollo ágil, abierto a ideas y, por supuesto, con un buen ambiente.
                    </p>
                </div><!--//summary-->
            </section><!--//section-->

            <section class="section summary-section">
                <div class="skillset">
                    <h2 class="section-title">
                        <i class="fa fa-rocket"></i>
                        Habilidades
                        <span><h3 class="section-subtitle">adquiridas laboralmente</h3></span>
                    </h2>

                    <dl class="skills-diagram">
                      <dt class="skill-9">C++</dt>
                      <dt class="skill-3">Go</dt>
                      <dt class="skill-7">Qt</dt>
                      <dt class="skill-2">C#</dt>
                      <dt class="skill-3">Python</dt>

                      <dt class="skill-6">Oracle</dt>
                      <dt class="skill-4"><span>SqlServer</span></dt>
                      <dt class="skill-5">PostGresql</dt>

                      <dt class="skill-8">Linux</dt>
                      <dt class="skill-4">Docker</dt>

                      <dt class="skill-7">HTML5</dt>
                      <dt class="skill-6">JavaScript</dt>
                      <dt class="skill-3">CSS</dt>
                      <dt class="skill-5">PHP</dt>
                      <dt class="skill-2"><span>React</span></dt>
                      <dt class="skill-3"><span>Angular1.2</span></dt>
                    </dl>
                </div>
            </section>

            <section class="section projects-section" data-starttime="5" data-endtime="10">
                <h3 class="section-title"><i class="fa fa-graduation-cap"></i>Cursos &amp; Eventos</h3>

                <div class="item">
                    <span class="project-title"><a href="http://openwebinars.net">OpenWebMinars</a></span> - 
                    <span class="project-tagline">Plataforma online con diversos cursos</span>
                    <span style="float:right;">
                        <span class="project-time"><i class="fa fa-clock-o">&nbsp;00h&nbsp;</i></span>
                        <span class="project-date"><i class="fa fa-calendar"></i>&nbsp;00/2018</span>
                    </span>
                </div>
                
                <div class="item">
                    <span class="project-title"><a href="https://pro.codely.tv/library">CodelyTv</a></span> - 
                    <span class="project-tagline">Plataforma online con diversos cursos</span>
                    <span style="float:right;">
                        <span class="project-time"><i class="fa fa-clock-o">&nbsp;00h&nbsp;</i></span>
                        <span class="project-date"><i class="fa fa-calendar"></i>&nbsp;00/2018</span>
                    </span>
                </div>

                <div class="item">
                    <span class="project-title"><a href="https://scbcn.github.io">SCBcn2017</a></span> - 
                    <span class="project-tagline">Software Craftsmanship Barcelona 2017</span>
                    <span style="float:right;">
                        <span class="project-time"><i class="fa fa-clock-o">&nbsp;16h&nbsp;</i></span>
                        <span class="project-date"><i class="fa fa-calendar"></i>&nbsp;10/2017</span>
                    </span>
                </div>
                <div class="item">
                    <span class="project-title"><a href="https://www.codesai.com/curso-de-tdd/">TDD codesai</a></span> - 
                    <span class="project-tagline">Curso de TDD impartido por Carlos Ble y Manuel Rivero</span>
                    <span style="float:right;">
                        <span class="project-time"><i class="fa fa-clock-o">&nbsp;16h&nbsp;</i></span>
                        <span class="project-date"><i class="fa fa-calendar"></i>&nbsp;02/2017</span>
                    </span>
                </div>
            </section>    
            <section class="section projects-section" data-starttime="10" data-endtime="15">
                <h3 class="section-title"><i class="fa fa-star"></i>Intereses</h3>
                <div class="skills">
                    <div class="item">
                        <ul id="techlist">
                          <li>VueJs <i class="fa fa-circle"></i></li>
                          <li>Erlang/Elixir <i class="fa fa-circle"></i></li>
                          <li>TDD <i class="fa fa-circle"></i></li>
                          <li>Agile <i class="fa fa-circle"></i></li>
                          <li>Docker <i class="fa fa-circle"></i></li>
                          <li>Seguridad Informática</li>
                        </ul>
                    </div>
                </div>
            </section>

<div class="pagebreak" />

            <section class="section experiences-section">
                <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiencia profesional</h2>

                  <ul class="timeline">
                    <li>
                    <p class="timeline-date">2018 - <i class="fa fa-arrow-up"></i></p>
                    <div class="timeline-content">
                      <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Ingeniero de software en Abertis Autopistas</h3>
                                    <!--<div class="time">2011 - Actualmente</div>-->
                                </div><!--//upper-row-->
                                <div class="company">Alten</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>
                                    <strong>
                                    Mantenimiento software de peajes.
                                    </strong>
                                    Qt, BD Oracle + alguna herramienta en Go
                                </p>
                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                    </li>
                    <li>
                    <p class="timeline-date">2011 - 2018<i class="fa fa-arrow-up"></i></p>
                    <div class="timeline-content">
                      <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Ingeniero de software en Abertis Autopistas</h3>
                                    <!--<div class="time">2011 - Actualmente</div>-->
                                </div><!--//upper-row-->
                                <div class="company">Altran</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>
                                    <strong>
                                    Servidor HA con carga considerable de mensajes (linux)
                                    </strong>
                                    Qt, BD Oracle + alguna herramienta en Go
                                </p>
                                <p>
                                    <strong>
                                    Aplicativo de gestión incidencias de antenas (linux)
                                    </strong>
                                    Api Soap con Toolkit Gsoap (c++) y BD Oracle, FrontEnd AngularJs 1.2
                                </p>
                                <p>
                                    <strong>
                                    Aplicativo Estación de peajes (solaris)
                                    </strong>
                                    Comunicación tcp con las vías de peaje, obtención y procesamiento de los mensajes.
                                    Api Soap con Toolkit Gsoap (c++) multithread con comunicación IPC (queues, shared memory, semaphores) a otros módulos y BD PostGresql con Backend Apache PHP (sin framework), FrontEnd Html, Css, javascript (jQuery)
                                </p>

                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                    </li>
                  <li>
                    <p class="timeline-date">2010 - 2011</p>
                    <div class="timeline-content">
                        <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Analista/Programador en Institut Municipal dInformatica, IMI</h3>
                                    <!--<div class="time">2010 - 2011</div>-->
                                </div><!--//upper-row-->
                                <div class="company">Altran</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>Programación módulo segregación de capas tipográficas, C/C++ sobre la api de Microstation v8</p>  
                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                  </li>
                  <li>
                    <p class="timeline-date">junio de 2010 - septiembre de 2010</p>
                    <div class="timeline-content">
                        <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Programador de software, proyecto UOC</h3>
                                    <!--/<div class="time">junio de 2010 - septiembre de 2010</div>-->
                                </div><!--//upper-row-->
                                <div class="company">Altran</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>Desarrollo de un lector de libros digitales sobre dispositivos móviles S60 3a edición (sistema operativo Symbian 9.2 Feature Pack 1). 
                                    El proyecto está orientado para ser usado por gente discapacitada visual, integrando la librería lectora TALKS que reproduce verbalmente la interfície de la aplicación.</p>  
                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                  </li>

                  <li>
                    <p class="timeline-date">mayo de 2008 - junio de 2010</p>
                    <div class="timeline-content">
                        <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Ingeniero de software en FCC</h3>
                                    <!--<div class="time">mayo de 2008 - junio de 2010</div>-->
                                </div><!--//upper-row-->
                                <div class="company">Altran</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>Mantenimiento de sistemas de producción de FCC Servicios medioambientales, C/C++ sobre la api de Microstation v8</p>  
                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                  </li>

                  <li>
                    <p class="timeline-date">mayo de 2001 - mayo de 2008</p>
                    <div class="timeline-content">
                        <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Analista/Programador</h3>
                                    <!--<div class="time">mayo de 2001 - mayo de 2008</div>-->
                                </div><!--//upper-row-->
                                <div class="company">ABS Informàtica S.L.</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>
                                    <strong>
                                    Desarrollo de aplicaciones para Microstation vj &amp; v8(programa CAD)
                                    </strong>
                                    C como pasarela hacia C++ (lógica de negocio) con tecnología COM para acceder a .Net (C#) para el GUI. Acceso a BD Oracle, SqlServer mediante OleDb.
                                </p>
                                <p>
                                    <strong>
                                    Desarrollo de un Servidor de Mapas estándar OpenGis (Aplicativo Web).
                                    </strong>
                                    Entorno SIG estándar OpenGis con Asp.Net, C# sobre SGBD Oracle (con spatial) Pl/Sql, SqlServer Transact
                                </p>
                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                  </li>
                  <li>
                    <p class="timeline-date">1997 - 1999</p>
                    <div class="timeline-content">
                        <div class="item">
                            <div class="meta">
                                <div class="upper-row">
                                    <h3 class="job-title">Tecnico informatico</h3>
                                </div><!--//upper-row-->
                                <div class="company">Projectes ELIDE i Tecnologia Informàtica</div>
                            </div><!--//meta-->
                            <div class="details">
                                <p>Montaje y reparación de PC`s a nivel de HW i SW</p>
                            </div><!--//details-->
                        </div><!--//item-->
                    </div>
                  </li>
                </ul>
            </section><!--//section-->
        </div><!--//main-body-->
    </div>
</template>

<script>
import { toRefs, ref, watch, onMounted } from 'vue'
import VueScrollTo from 'vue-scrollto'

  export default {
    name: "Curriculo",
    props: {
        time: Number,
    },
    setup (props, _context) {
      // context has attrs, slots, and emit() 
      const { time } = toRefs(props)
      const root = ref(null)
      let spans = [];

      onMounted(() => {
        const ranges = root.value.querySelectorAll("*[data-starttime]");
        for(var i = 0; i < ranges.length; i++) {
          spans.push(ranges[i])
        }
      })
     
      let prevEle = null
      watch(time, (currtime, _prevTime) => { 
        let el = spans.find((s) => { 
          return parseFloat(s.dataset.starttime) <= parseFloat(currtime) && parseFloat(s.dataset.endtime) >= parseFloat(currtime) 
        })
        if (el != undefined && prevEle != el)
        {
          if (prevEle != null) {
            prevEle.classList.remove('currentTextClass')
          }
          el.classList.add('currentTextClass')
          prevEle = el
          VueScrollTo.scrollTo(el, {container:root.value, offset: -100})
        }
      })

      return { root }
    }
  }
</script>

<style scoped>
    @import 'https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic';
    @import '../assets/styles/plugins/font-awesome/css/font-awesome.css';
    @import '../assets/styles/styleCv.css';
    @import '../assets/styles/variables.css';
  
  .currentTextClass:not(.disabledHighlighting) > * {
    background-color: var(--transcript-selected-text);
    transition: all 1s;
  }
</style>