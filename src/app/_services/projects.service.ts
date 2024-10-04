import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { table } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0, name: "Mean Stack Project", pictures: ["/Codigo.PNG", "/Lista_web.PNG", "/Details_web.PNG", "/Form_web.PNG"], projectLink: "https://github.com/JulianMCM/MeanStackProject.git", summary: "Este es un proyecto full stack desarrollado utilizando la pila MEAN (MongoDB, Express.js, Angular, Node.js). Esta aplicación tiene como objetivo facilitar la gestión de proveedores de servicios.", description: "A través de una interfaz sencilla y eficiente, los usuarios pueden realizar las siguientes acciones: Cargar una lista de proveedores: La aplicación permite visualizar una lista completa de proveedores de servicios con información básica como el nombre, el tipo de servicio que ofrecen, y su información de contacto. Agregar nuevos proveedores: Los usuarios pueden añadir fácilmente nuevos proveedores a la lista, proporcionando todos los datos relevantes, como nombre, dirección, tipo de servicio, etc. Modificar proveedores existentes: Si algún dato de un proveedor cambia (por ejemplo, la dirección o el tipo de servicio), se puede modificar la información existente sin problemas. Eliminar proveedores: Los usuarios tienen la posibilidad de eliminar proveedores de la lista si ya no están activos o si no son relevantes. Consultar detalles: Para obtener información más detallada sobre un proveedor específico, la aplicación ofrece la funcionalidad de consultar datos adicionales, como servicios prestados, historial de colaboración, entre otros.", tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT, Tag.NODEJS, Tag.EXPRESSJS, Tag.MONGODB] },
    { id: 1, name: "Portafolio", pictures: ["/portfolio.PNG", "/projects.PNG", "/resume.PNG"], projectLink: "//www.github.com", summary: "Este portafolio web, desarrollado con Angular y Bootstrap, tiene como objetivo destacar mis habilidades, proyectos y experiencia en el desarrollo Full Stack, utilizando tecnologías modernas. Está diseñado para proporcionar una experiencia de usuario intuitiva, con un enfoque en la accesibilidad, el diseño responsivo y la navegabilidad fluida.", description: "El portafolio web es una aplicación dinámica construida con Angular y estilizada con Bootstrap para lograr un diseño atractivo y completamente adaptado a dispositivos móviles. Incluye varias secciones, como una biografía personal, proyectos destacados, habilidades técnicas, y una página de contacto. Cada sección está diseñada para ser fácil de mantener y actualizar. Además, se aprovechan componentes modulares de Angular para garantizar la escalabilidad y mantener un código limpio y eficiente. El uso de Bootstrap asegura que el diseño sea moderno y profesional, garantizando una óptima experiencia de usuario en diferentes plataformas y tamaños de pantalla.", tags: [Tag.ANGULAR, Tag.BOOTSTRAP] },
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);
    }

    return project;
  }
  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
