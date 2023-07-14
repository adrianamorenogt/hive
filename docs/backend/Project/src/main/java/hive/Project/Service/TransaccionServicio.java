package hive.Project.Service;

import hive.Project.Entity.Cliente;
import hive.Project.Entity.Producto;
import hive.Project.Entity.Transaccion;

import java.util.List;

public interface TransaccionServicio
{
    public List<Transaccion>ConsultarTransaccion();
    public Transaccion CrearTransaccion(Transaccion transaccion);
    public Transaccion BuscarTransacción(int id);

}
