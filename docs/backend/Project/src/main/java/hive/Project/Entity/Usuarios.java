package hive.Project.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="usuarios")

public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id_usuario;

    @Column(name = "Nombre")
    private String nombreUsuario;

    @Column(name = "Apellido")
    private String apellidoUsuario;

    @Column(name = "Telefono")
    private String telefonoUsuario;

    @Column(name = "Correo")
    private String correUsuario;

    @Column(name = "Direccion")
    private String direccionUsuario;
    @Column(name = "Pass")
    private String pass;

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getApellidoUsuario() {
        return apellidoUsuario;
    }

    public void setApellidoUsuario(String apellidoUsuario) {
        this.apellidoUsuario = apellidoUsuario;
    }

    public String getTelefonoUsuario() {
        return telefonoUsuario;
    }

    public void setTelefonoUsuario(String telefonoUsuario) {
        this.telefonoUsuario = telefonoUsuario;
    }

    public String getCorreUsuario() {
        return correUsuario;
    }

    public void setCorreUsuario(String correUsuario) {
        this.correUsuario = correUsuario;
    }

    public String getDireccionUsuario() {
        return direccionUsuario;
    }

    public void setDireccionUsuario(String direccionUsuario) {
        this.direccionUsuario = direccionUsuario;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}



