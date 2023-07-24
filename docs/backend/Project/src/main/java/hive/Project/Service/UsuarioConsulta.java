package hive.Project.Service;
import hive.Project.Entity.Usuarios;
import hive.Project.Repository.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioConsulta implements UsuarioServicio {

        @Autowired
        private UsuarioRepositorio usuarioRepositorio;

        @Override
        public List<Usuarios> ConsultarUsuario(){

            return (List<Usuarios>) this.usuarioRepositorio.findAll();
        }
        @Override
        public Usuarios CrearUsuario(Usuarios usuarios){
            usuarios.setNombreUsuario(usuarios.getNombreUsuario());
            return this.usuarioRepositorio.save(usuarios);

        }

        @Override
        public Usuarios BuscarUsuario(int id ) {

            return this.usuarioRepositorio.findById(id).get();
        }

        @Override
        public Usuarios EliminarUsuario(int id_usuario) {
            this.usuarioRepositorio.deleteById(id_usuario);
            return null;
        }

        @Override
        public Usuarios ModificarUsuario(Usuarios usuarios) {

            return this.usuarioRepositorio.save(usuarios);
        }
}
