package hive.Project.Repository;

import hive.Project.Entity.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ClienteRepositorio extends CrudRepository <Cliente, Integer>{
}
