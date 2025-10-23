/*
Enrique Merino — Single-file React portfolio (Tailwind)

Instrucciones rápidas:
1. Crear proyecto Vite + React (o Next.js). Ejemplo Vite:
   npm create vite@latest my-portfolio -- --template react
   cd my-portfolio
   npm install
2. Copia este archivo a: src/App.jsx (reemplaza el contenido)
3. Instala dependencias opcionales:
   npm install framer-motion lucide-react
4. Tailwind CSS: sigue la guía oficial para Vite + Tailwind (https://tailwindcss.com/docs/guides/vite)
5. Personaliza el array `PROJECTS` con tus proyectos y enlaces (GitHub, Tableau Public, Power BI, etc.).
6. Deploy: GitHub Pages, Vercel o Netlify.

Este archivo incluye:
- Diseño responsive con Tailwind
- Secciones: Hero, About, Projects, Dashboards, Contact
- Componentes sencillos listos para expandir
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const PROJECTS = [
  {
    id: 'global-superstore',
    title: 'Global Superstore Dashboard',
    subtitle: 'Tableau dashboard + LOD & data blending',
    description:
      'Interactive sales dashboard built with Tableau. Includes LOD expressions, parameter-driven filters, and story points for exec summary.',
    tech: ['Tableau', 'SQL', 'Python'],
    link: 'https://public.tableau.com/example',
    image: '/images/superstore.png',
  },
  {
    id: 'hadoop-spark-analysis',
    title: 'E-Commerce Big Data (Hadoop & Spark)',
    subtitle: 'Batch processing & aggregation in Spark',
    description:
      'End-to-end pipeline processing e-commerce logs with PySpark. Produced aggregated KPIs and exported to SQL Server for reporting.',
    tech: ['PySpark', 'Hadoop', 'SQL'],
    link: 'https://github.com/tuusuario/hadoop-spark-analysis',
    image: '/images/spark.png',
  },
  {
    id: 'predictive-model',
    title: 'Predictive Analytics Project',
    subtitle: 'Regression & classification models',
    description:
      'Implemented predictive models with sklearn and R. Focused on feature engineering, cross-validation, and explainability.',
    tech: ['Python', 'scikit-learn', 'R'],
    link: 'https://github.com/tuusuario/predictive-model',
    image: '/images/model.png',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Enrique Merino</h1>
        <nav className="space-x-4 flex items-center">
          <a href="#projects" className="hover:underline">Proyectos</a>
          <a href="#dashboards" className="hover:underline">Dashboards</a>
          <a href="#contact" className="hover:underline">Contacto</a>
          <a
            className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm"
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-600">Hi — I’m</p>
            <h2 className="text-4xl font-bold mt-2">Enrique Merino</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Master’s student in Data Analytics at the University of Niagara Falls. I build
              end-to-end data solutions using Python, R, SQL, Spark and create dashboards in Tableau
              and Power BI to turn data into action.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-sky-600 text-white rounded-md shadow-sm hover:opacity-95"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Contáctame
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-gray-600">
              <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tuemail@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-medium">Skills</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li className="px-3 py-2 bg-gray-100 rounded">Python</li>
              <li className="px-3 py-2 bg-gray-100 rounded">SQL</li>
              <li className="px-3 py-2 bg-gray-100 rounded">R</li>
              <li className="px-3 py-2 bg-gray-100 rounded">Power BI</li>
              <li className="px-3 py-2 bg-gray-100 rounded">Tableau</li>
              <li className="px-3 py-2 bg-gray-100 rounded">PySpark / Hadoop</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm text-gray-600">Current study</h4>
              <p className="text-sm mt-2">Master's in Data Analytics — University of Niagara Falls</p>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-8">
          <h3 className="text-2xl font-semibold mb-4">Proyectos destacados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article key={p.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Imagen / Captura ({p.title})</span>
                </div>
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>
                <p className="mt-2 text-sm text-gray-700">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-sky-600 hover:underline"
                  >
                    Ver proyecto
                  </a>
                  <a
                    href={`https://github.com/tuusuario/${p.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 text-sm"
                  >
                    Código
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dashboards" className="py-8">
          <h3 className="text-2xl font-semibold mb-4">Dashboards & Visualizaciones</h3>
          <p className="text-sm text-gray-600 mb-4">Enlaza tus dashboards de Tableau Public o Power BI (embed) aquí.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium">Tableau Public</h4>
              <p className="text-sm text-gray-600 mt-2">Incrusta iframe desde Tableau Public o enlaza a tu dashboard.</p>
              <div className="mt-3 h-56 bg-gray-50 rounded border flex items-center justify-center text-gray-400">Iframe / Captura</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium">Power BI</h4>
              <p className="text-sm text-gray-600 mt-2">Power BI publish to web o report embedding si tienes licencia.</p>
              <div className="mt-3 h-56 bg-gray-50 rounded border flex items-center justify-center text-gray-400">Iframe / Captura</div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Contacto</h3>
            <p className="text-sm text-gray-600 mt-2">¿Quieres colaborar o ver mi CV? Escríbeme.</p>

            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border px-3 py-2 rounded" placeholder="Nombre" />
              <input className="border px-3 py-2 rounded" placeholder="Email" />
              <textarea className="border px-3 py-2 rounded md:col-span-2" rows={4} placeholder="Mensaje"></textarea>
              <div className="md:col-span-2 flex items-center justify-between">
                <small className="text-sm text-gray-500">También puedes contactarme en: tuemail@example.com</small>
                <button type="button" className="px-4 py-2 bg-sky-600 text-white rounded-md">Enviar</button>
              </div>
            </form>

            <div className="mt-6 text-sm text-gray-600">Sitio creado con ❤️ — Personalízalo y súbelo a GitHub Pages o Vercel.</div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Enrique Merino — Data Analytics</footer>
      </main>
    </div>
  );
}
