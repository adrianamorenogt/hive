package hive.Project.Controller;

import hive.Project.Entity.Cliente;
import hive.Project.Service.ClienteConsulta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("acceso")
public class ClienteController {
    @Autowired
    private ClienteConsulta clienteConsulta;

    @GetMapping
    @RequestMapping(value = "ConsultarCliente", method = RequestMethod.GET)
    public ResponseEntity<?> ConsultarCliente(){
        List<Cliente> clienteList=this.clienteConsulta.ConsultarCliente();
            return  ResponseEntity.ok(clienteList);

    }
        @PostMapping
        @RequestMapping(value = "CrearCliente", method = RequestMethod.POST)
        public ResponseEntity<?>CrearCliente(@RequestBody Cliente clientes){
            Cliente crearCliente = this.clienteConsulta.CrearCliente(clientes);
            return ResponseEntity.status(HttpStatus.CREATED).body(crearCliente);
        }
    @PutMapping
    @RequestMapping(value = "ModificarCliente", method = RequestMethod.PUT)
    public ResponseEntity<?>ModificarCliente(@RequestBody Cliente clientes){
        Cliente modificarCliente =this.clienteConsulta.ModificarCliente(clientes);
            //return ResponseEntity.status(HttpStatus.CREATED).body(modificarCliente);
        return ResponseEntity.ok(clientes);
    }

    @GetMapping
    @RequestMapping(value = "BuscarCliente/{id_cliente}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarCliente(@PathVariable int id_cliente){
        Cliente clientes=this.clienteConsulta.BuscarCliente(id_cliente);
        return ResponseEntity.ok(clientes);
    }
    @DeleteMapping
    @RequestMapping(value = "EliminarCliente/{id_cliente}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarCliente(@PathVariable int id_cliente){
        Cliente clientes =this.clienteConsulta.EliminarCliente(id_cliente);
        return ResponseEntity.ok(clientes);
    }

}
