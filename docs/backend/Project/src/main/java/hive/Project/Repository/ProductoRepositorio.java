package hive.Project.Repository;

import hive.Project.Entity.Producto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepositorio extends CrudRepository<Producto, Integer> {
}
