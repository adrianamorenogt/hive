package hive.Project.Controller;


import hive.Project.Entity.Transaccion;
import hive.Project.Service.TransaccionConsulta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("acceso")
public class TransaccionController {
    @Autowired
    private TransaccionConsulta transaccionConsulta;

    @GetMapping
    @RequestMapping(value = "ConsultarTransaccion", method = RequestMethod.GET)
    public ResponseEntity<?> ConsultarTransaccion(){
        List<Transaccion> transaccionList=this.transaccionConsulta.ConsultarTransaccion();
        return  ResponseEntity.ok(transaccionList);

    }
    @PostMapping
    @RequestMapping(value = "CrearTransaccion", method = RequestMethod.POST)
    public ResponseEntity<?>CrearTransaccion(@RequestBody Transaccion transaccion){
        Transaccion crearTransaccion = this.transaccionConsulta.CrearTransaccion(transaccion);
        return ResponseEntity.status(HttpStatus.CREATED).body(crearTransaccion);
    }

    @GetMapping
    @RequestMapping(value = "BuscarTransaccion/{id_transaccion}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarCliente(@PathVariable int id_cliente){
        Transaccion transaccion=this.transaccionConsulta.BuscarTransacción(id_cliente);
        return ResponseEntity.ok(transaccion);
    }


}
