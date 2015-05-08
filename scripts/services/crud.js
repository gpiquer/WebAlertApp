'use strict';

/**
 * @ngdoc service
 * @name appApp.crud
 * @description
 * # crud
 * Service in the appApp.
 */
angular.module('appApp')
  .factory('TareasResourse', function ($resource) {
  var factory = {

    iniciar: $resource('http://45.55.242.157:8080/login',{},{
      sesion: {method: 'POST', params:{
        username:'@username',
        password:'@password'}
      }
    }),
    getAlert: $resource('http://45.55.242.157:8080/api/getAlert',{},{
      all: {method: 'GET',isArray:true}
    }),
    getPendientes: $resource('http://45.55.242.157:8080/api/getPendientes',{},{
      all: {method: 'GET',isArray:true}
    }),
    getDeclinados: $resource('http://45.55.242.157:8080/api/getDeclinados',{},{
      all: {method: 'GET',isArray:true}
    }),
    getRegistrados: $resource('http://45.55.242.157:8080/api/getRegistrados',{},{
      all: {method: 'GET',isArray:true}
    }),
    getTipos: $resource('http://45.55.242.157:8080/api/getTiposAlert',{},{
      all: {method: 'GET',isArray:true}
    }),
    addCliente: $resource('http://45.55.242.157:8080/addUser',{},{
      nuevoCliente: {method: 'POST', params:{
        nombres:'@nombres',
        apellidos:'@apellidos',
        username:'@username',
        password:'@password',
        telefono:'@telefono',
        direccion:'@direccion',
        cedula:'@cedula',
        idtipouser:'@idtipouser',
        email:'@email'}
      }
    }),
    membresia: $resource('http://45.55.242.157:8080/api/membresia',{},{
      add: {method: 'POST', params:{
        username:'@username',
        tiempo:'@tiempo',
        vence:'@vence'}
      }
    }),
    getEstados: $resource('http://45.55.242.157:8080/api/getEstados',{},{
      all: {method: 'GET',isArray:true}
    }),
    Estado: $resource('http://45.55.242.157:8080/api/editEstado',{},{
      editar: {method: 'POST', params:{
        idestado:'@idestado',
        nombre:'@nombre',
        Descripcion:'@Descripcion'}
      }
    }),
    addEstado: $resource('http://45.55.242.157:8080/api/addEstado',{},{
      new: {method: 'POST', params:{
        nombre:'@nombre',
        Descripcion:'@Descripcion'}
      }
    }),
    deleteEstado: $resource('http://45.55.242.157:8080/api/deleteEstado',{},{
      dl: {method: 'POST', params:{
        idestado:'@idestado'}
      }
    }),
    getMembresias: $resource('http://45.55.242.157:8080/api/getMembresia',{},{
      all: {method: 'GET',isArray:true}
    }),
    editMembresia: $resource('http://45.55.242.157:8080/api/editMembresia',{},{
      editar: {method: 'POST', params:{
        idmebresia:'@idmebresia',
        nombre:'@nombre',
        dias:'@dias'}
      }
    }),
    addMembresia: $resource('http://45.55.242.157:8080/api/addMembresia',{},{
      new: {method: 'POST', params:{
        nombre:'@nombre',
        dias:'@dias'}
      }
    }),
    deleteMembresia: $resource('http://45.55.242.157:8080/api/deleteMembresia',{},{
      dl: {method: 'POST', params:{
        idmebresia:'@idmebresia'}
      }
    }),
    declinar: $resource('http://45.55.242.157:8080/api/declinarUsuario',{},{
      usuario: {method: 'POST', params:{
        username:'@username'
      }
      }
    })
      ,
    eliminarVehiculo: $resource('http://45.55.242.157:8080/api/eliminarVehiculo',{},{
      eliminar: {method: 'POST', params:{idvehiculo:'@idvehiculo'}
      }
    }),


    editar: $resource('http://45.55.242.157:8080/api/editUser',{},{
      cliente: {method: 'POST', params:{
        nombres:'@nombres',
        apellidos:'@apellidos',
        username:'@username',
        password:'@password',
        telefono:'@telefono',
        direccion:'@direccion',
        cedula:'@cedula',
        idtipouser:'@idtipouser',
        email:'@email'
      }
      }
    }),
     e: $resource('http://45.55.242.157:8080/api/editAlert',{},{
      a: {method: 'POST', params:{
        idalerta:'@idalerta',
        estado:'@estado',
        comentario:'@comentario'
      }
      }
    }),
     vehiculo: $resource('http://45.55.242.157:8080/api/newVehiculo',{},{
      add: {method: 'POST', params:{
        color: '@color',
        placa: '@placa',
        chasis: '@chasis',
        idusuario: '@idusuario',
        marca: '@marca',
        modelo: '@modelo',
        fecha: '@fecha'
      }
      }
    }),

  };
  return factory;

});
