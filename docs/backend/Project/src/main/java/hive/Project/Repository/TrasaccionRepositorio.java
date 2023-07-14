package hive.Project.Repository;

import hive.Project.Entity.Transaccion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrasaccionRepositorio extends CrudRepository<Transaccion, Integer> {
}
