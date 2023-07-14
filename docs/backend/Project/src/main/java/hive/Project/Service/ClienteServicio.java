package hive.Project.Service;

import hive.Project.Entity.Cliente;

import java.util.List;

public interface ClienteServicio {


    public List<Cliente> ConsultarCliente();

    public Cliente CrearCliente(Cliente clientes);

    public Cliente BuscarCliente(int id);

    public void EliminarCliente(int id);

    Cliente ModificarCliente(Cliente clientes);
}
