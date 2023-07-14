package hive.Project.Service;

import hive.Project.Entity.Producto;
import hive.Project.Entity.Transaccion;
import hive.Project.Repository.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoConsulta implements ProductoServicio{
    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> ConsultarProducto() {
        return  (List<Producto>) this.productoRepositorio.findAll();
    }

    @Override
    public Producto CrearProducto(Producto producto) {
        producto.setNombre_producto(producto.getNombre_producto());
        return this.productoRepositorio.save(producto);
    }

    @Override
    public Producto BuscarProducto(int id_producto) {
        return this.productoRepositorio.findById(id_producto).get();
    }

    @Override
    public void EliminarProducto(int id_producto) {
        this.productoRepositorio.deleteById(id_producto);
    }

    @Override
    public Producto ModificarProducto(Producto producto) {
        return this.productoRepositorio.save(producto);
    }
}
