package hive.Project.Service;

import hive.Project.Entity.Transaccion;
import hive.Project.Repository.TrasaccionRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransaccionConsulta implements TransaccionServicio{
    @Autowired
    private TrasaccionRepositorio trasaccionRepositorio;
    @Override
    public List<Transaccion> ConsultarTransaccion() {
        return (List<Transaccion>) this.trasaccionRepositorio.findAll();
    }

    @Override
    public Transaccion CrearTransaccion(Transaccion transaccion) {
        transaccion.setSaldo_venta(transaccion.getSaldo_venta());
        return this.trasaccionRepositorio.save(transaccion);
    }

    @Override
    public Transaccion BuscarTransacción(int id_transaccion) {
        return this.trasaccionRepositorio.findById(id_transaccion).get();
    }
}
