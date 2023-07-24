package hive.Project.Controller;


import hive.Project.Entity.Usuarios;
import hive.Project.Service.UsuarioConsulta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("acceso")
public class UsuarioController {

        @Autowired
        private UsuarioConsulta usuarioConsulta;

        @GetMapping
        @RequestMapping(value = "ConsultarUsuario", method = RequestMethod.GET)
        public ResponseEntity<?> ConsultarUsuario(){
            List<Usuarios> UsuarioList=this.usuarioConsulta.ConsultarUsuario();
            return  ResponseEntity.ok(UsuarioList);

        }
        @PostMapping
        @RequestMapping(value = "CrearUsuario", method = RequestMethod.POST)
        public ResponseEntity<?>CrearUsuario(@RequestBody Usuarios usuarios){
            Usuarios crearUsuario = this.usuarioConsulta.CrearUsuario(usuarios);
            return ResponseEntity.status(HttpStatus.CREATED).body(crearUsuario);
        }
        @PutMapping
        @RequestMapping(value = "ModificarUsuario", method = RequestMethod.PUT)
        public ResponseEntity<?>ModificarUsuario(@RequestBody Usuarios usuarios){
            Usuarios modificarUsuario =this.usuarioConsulta.ModificarUsuario(usuarios);
            //return ResponseEntity.status(HttpStatus.CREATED).body(modificarCliente);
            return ResponseEntity.ok(usuarios);
        }

        @GetMapping
        @RequestMapping(value = "BuscarUsuario/{id_usuario}", method = RequestMethod.GET)
        public ResponseEntity<?> BuscarCliente(@PathVariable int id_usuario){
            Usuarios usuarios=this.usuarioConsulta.BuscarUsuario(id_usuario);
            return ResponseEntity.ok(usuarios);
        }
        @DeleteMapping
        @RequestMapping(value = "EliminarUsuario/{id_usuario}", method = RequestMethod.DELETE)
        public ResponseEntity<?> EliminarUsuario(@PathVariable int id_usuario){
            Usuarios usuarios =this.usuarioConsulta.EliminarUsuario(id_usuario);
            return ResponseEntity.ok(usuarios);
        }

    }


