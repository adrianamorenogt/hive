package hive.Project.Service;

import hive.Project.Entity.Cliente;
import hive.Project.Repository.ClienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteConsulta implements ClienteServicio{

    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Override
    public List<Cliente> ConsultarCliente(){
        return (List<Cliente>) this.clienteRepositorio.findAll();
    }
    @Override
    public Cliente CrearCliente(Cliente clientes){
        clientes.setNombreCliente(clientes.getNombreCliente());
        return this.clienteRepositorio.save(clientes);

    }

    @Override
    public Cliente BuscarCliente(int id_cliente) {

        return this.clienteRepositorio.findById(id_cliente).get();
    }

    @Override
    public Cliente EliminarCliente(int id_cliente) {
        this.clienteRepositorio.deleteById(id_cliente);
        return null;
    }

    @Override
    public Cliente ModificarCliente(Cliente clientes) {

        return this.clienteRepositorio.save(clientes);
    }

}
