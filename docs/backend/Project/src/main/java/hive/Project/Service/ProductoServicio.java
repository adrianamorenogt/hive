package hive.Project.Service;

import hive.Project.Entity.Producto;

import java.util.List;

public interface ProductoServicio {

    public List<Producto> ConsultarProducto();

    public Producto CrearProducto(Producto producto);
    public Producto BuscarProducto(int id); //ID PARA LA BUSQUEDA

    public void EliminarProducto(int id);

    Producto ModificarProducto(Producto producto);

}
