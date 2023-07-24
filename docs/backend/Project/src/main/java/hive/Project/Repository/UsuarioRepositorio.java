package hive.Project.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import hive.Project.Entity.Usuarios;
@Repository
public interface UsuarioRepositorio extends CrudRepository <Usuarios, Integer> {
}
