package hive.Project.Service;

import hive.Project.Entity.Usuarios;

import java.util.List;
public interface UsuarioServicio {

        public List<Usuarios> ConsultarUsuario();

        public Usuarios CrearUsuario(Usuarios usuario);

        public Usuarios BuscarUsuario(int id);

        public Usuarios EliminarUsuario(int id);

        Usuarios ModificarUsuario(Usuarios usuario);
    }


