import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  constructor() {}

  getBars() {
    return new Promise(resolve => {
      const data = [
        {
          num: 90,
          title: 'DESARROLLO FRONT-END CON ANGULAR 1.5 Y 2.0'
        },
        {
          num: 80,
          title: 'FIREBASE APP PARA BIG DATA'
        },
        {
          num: 95,
          title: 'HTML5,CSS3,SASS'
        },
        {
          num: 75,
          title: 'DESARROLLO DE PRESTASHOP Y WORDPRESS'
        },
        {
          num: 80,
          title: 'DESARROLLO DE APPS CON IONIC'
        },
        {
          num: 30,
          title: 'DESARROLLO DE APPS CON ANDROID STUDIO Y FIREBASE'
        },
        {
          num: 40,
          title: 'C# Y JS EN PROYECTOS CON UNITY'
        }
      ];
      resolve(data);
    });
  }

  getSocialMedia() {
    return new Promise(resolve => {
      const data = [{ icon: '', url: '' }, { icon: '', url: '' }, { icon: '', url: '' }];
      resolve(data);
    });
  }

  getProjectList() {
    return new Promise(resolve => {
      const data = [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fcosplayapp.png?alt=media&token=b20bf83c-d4cf-422d-81aa-7d4fe7425289',
          time: '02-20-2018 - Now',
          title: 'Cosplayapp',
          desc: `
          Cosplay app es una herramienta y red social para todos los cosplayers que necesitan organizar, 
          planear y compartir sus cosplays con el resto del mundo.`,
          url: 'https://cosplayapp.net/'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fpeugeot.png?alt=media&token=d151a4de-78ee-4526-8fbe-aa3aca466be9',
          time: '05-20-2018',
          title: 'Reuniones Peugeot',
          desc: `
          Aplicación web con streaming de video sobre una conferencia de Peugeot, con un sistema de 
          preguntas a tiempo real realizado íntegramente en firebase y angular2`,
          url: 'https://reunionespeugeot.es/'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Femanager.png?alt=media&token=98577225-4c2d-40fb-a875-0ea5d39af9c9',
          time: '02-05-2017 - Now',
          title: 'Emanager.gg',
          desc: `
          Toda la gestión de tu equipo de esports en un solo lugar.
          Toma el mando de tu equipo y organizalo con las herramientas y recursos que utilizan 
          los clubs profesionales para sus entrenamientos y sus partidos clave`,
          url: 'https://emanager.gg'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Ficofolio.png?alt=media&token=90ca73f9-ee83-4f62-9f80-cc146cc96fd9',
          time: '01-05-2018 - 01-27-2018',
          title: 'Icofolio',
          desc: `
          Proyecto de un par de semanas para llevar la cuenta de las inversiones en criptomonedas

          Crea tu portfolio de ICOs, consulta la evolución de tus inversiones y los eventos que te 
          interesen, de forma rápida, sencilla y desde cualquier dispositivo.`,
          url: 'https://ico-list-ba66a.firebaseapp.com/'
        }
      ];
      resolve(data);
    });
  }

  getPostList() {
    return new Promise(resolve => {
      const data = [];
      resolve(data);
    });
  }

  getJobList() {
    return new Promise(resolve => {
      const data = [
        {
          img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAgQIAAkAAQAAAAAAAA_xAAAAJDljYTdkMDljLTRmYmUtNDc4Mi05ZWZlLWEzNTNiMjYxYzlmNQ.bin',
          time: 'Abril 2017 - Abril 2018',
          title: 'Nfq Advisory, Solutions, Outsourcing',
          job: 'Desarrollador Front End',
          desc: `
          Cosplay app es una herramienta y red social para todos los cosplayers que necesitan organizar, 
          planear y compartir sus cosplays con el resto del mundo.`,
          url: 'https://cosplayapp.net/'
        },
        {
          img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMABAQIAAkAAQAAAAAAABAPAAAAJDA3ZmU5MDA1LTk1ZDYtNDUyYi04YjFmLTk1NDJlZmU5M2JiMA.bin',
          time: 'Jun 2015 - Abril 2017',
          title: 'Azken services',
          job: 'Desarrollador Web',
          desc: `
          Gestionar y dirigir un equipo de cuatro personas en proyectos web desarrollados en tecnologías
          como Angular2, firebase, codeigniter, wordpress y prestashop.
          Comunicación con el cliente final y captación de requisitos para un rápido analisis del proyecto 
          y los recursos necesarios para su realización.`
        },
        {
          img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMABAQIAAkAAQAAAAAAABAPAAAAJDA3ZmU5MDA1LTk1ZDYtNDUyYi04YjFmLTk1NDJlZmU5M2JiMA.bin',
          time: 'Sept 2014 - Jun 2015',
          title: 'Azken Muga',
          job: 'Desarrollador Web',
          desc: `
          Toda la gestión de tu equipo de esports en un solo lugar.
          Toma el mando de tu equipo y organizalo con las herramientas y recursos que utilizan 
          los clubs profesionales para sus entrenamientos y sus partidos clave`
        },
        {
          img: 'http://www.agruposistemas.es/img/logo.png',
          time: 'Sept 2012 - Jul 2012',
          title: 'Agrupo Sistemas',
          job: 'Desarrollador SAP',
          desc: `
          Curso de ABAP IV y creación de pequeñas herramientas de integración para pequeños 
          clientes con licencias del ERP SAP`
        },
        {
          img: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAMAAgQIAAkAAQAAAAAAABDOAAAAJGVlMzEzNzk1LWEwYWQtNDBmNC04MzEzLTYwM2YwMjIwY2MzMg.bin',
          time: 'Abr 2012 - Jul 2012',
          title: 'SIA Group',
          job: 'Desarrollador de Zabbix',
          desc: `
          Creación y automatización de aplicaciones en Perl y Python relacionadas con la 
          herramienta de monitorización Zabbix`
        }
      ];
      resolve(data);
    });
  }
}
