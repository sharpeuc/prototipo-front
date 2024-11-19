import React from 'react';
import './CMS.css'; // Archivo de estilos actualizado

function CMS() {
  return (
    <div className="cms-container">
      <h2>CMS (Contenido y Podcasts)</h2>
      <p className="cms-description">Gestiona contenido multimedia como blogs, videos, podcasts y recursos educativos.</p>

      {/* Sección del Blog */}
      <div className="cms-section">
        <h3>Blog</h3>
        <div className="cms-blog">
          <h4>Finanzas Inteligentes</h4>
          <p>
            Aprende a gestionar tus finanzas personales con estrategias simples y efectivas para maximizar tus ahorros e inversiones.
          </p>
          <a
            href="https://blog.activomas.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="cms-link"
          >
            Leer más...
          </a>
        </div>
      </div>

      {/* Sección del Video */}
      <div className="cms-section">
        <h3>Videos Educativos</h3>
        <div className="cms-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/oDwJsY4nJBc"
            title="Educación Financiera"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Introducción a la Educación Financiera</p>
        </div>
      </div>

      {/* Sección del Podcast */}
      <div className="cms-section">
        <h3>Podcast: Finanzas para Todos</h3>
        <div className="cms-podcast">
          <audio controls>
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mp3"
            />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <p>Escucha nuestro último episodio sobre estrategias de ahorro e inversión.</p>
        </div>
      </div>

      {/* Sección de Recursos Educativos */}
      <div className="cms-section">
        <h3>Recursos Educativos</h3>
        <p>
          Explora nuestros recursos para mejorar tus conocimientos financieros:
        </p>
        <ul>
          <li><a href="https://blog.activomas.cl/" target="_blank" rel="noopener noreferrer">Artículos de Finanzas</a></li>
          <li><a href="https://www.activomas.cl/proyectos" target="_blank" rel="noopener noreferrer">Proyectos</a></li>
          <li><a href="https://www.activomas.cl/educacion-financiera" target="_blank" rel="noopener noreferrer">Guías de Educación Financiera</a></li>
        </ul>
      </div>
    </div>
  );
}

export default CMS;
