package hive.Project.Controller;


import hive.Project.Entity.Producto;
import hive.Project.Service.ProductoConsulta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("acceso")
public class ProductoController {
    @Autowired
    private ProductoConsulta productoConsulta;

    @GetMapping
    @RequestMapping(value = "ConsultarProducto", method = RequestMethod.GET)
    public ResponseEntity<?> ConsultarProducto(){
        List<Producto> productoList = this.productoConsulta.ConsultarProducto();
        return  ResponseEntity.ok(productoList);
    }
    @PostMapping
    @RequestMapping(value = "CrearProducto", method = RequestMethod.POST)
    public ResponseEntity<?>CrearProducto(@RequestBody Producto producto){
        Producto crearProducto = this.productoConsulta.CrearProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(crearProducto);
    }
    @PutMapping
    @RequestMapping(value = "ModificarProducto", method = RequestMethod.PUT)
    public ResponseEntity<?>ModificarProducto(@RequestBody Producto producto){
        Producto modificarProducto =this.productoConsulta.ModificarProducto(producto);
        //return ResponseEntity.status(HttpStatus.CREATED).body(modificarProducto);
        return ResponseEntity.ok(producto);
    }

    @GetMapping
    @RequestMapping(value = "BuscarProducto/{id_producto}", method = RequestMethod.GET)
    public ResponseEntity<?> BuscarProducto(@PathVariable int id_producto){
        Producto producto=this.productoConsulta.BuscarProducto(id_producto);
        return ResponseEntity.ok(producto);
    }
    @DeleteMapping
    @RequestMapping(value = "EliminarProducto/{id_producto}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarProducto(@PathVariable int id_producto){
       Producto producto= this.productoConsulta.EliminarProducto(id_producto);
        //return ResponseEntity.ok().build();
        return ResponseEntity.ok(producto);
    }





}
