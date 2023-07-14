package hive.Project.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private int id_cliente;

    @Column(name = "id_categoria")
    private int id_categoria;

    @Column(name = "Nombre_producto")
    private String nombre_producto;

    @Column(name = "Descripcion_producto")
    private String descripcion_producto;

    @Column(name = "Precio_producto")
    private double precio_producto;

    public int getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public int getId_categoria() {
        return id_categoria;
    }

    public void setId_categoria(int id_categoria) {
        this.id_categoria = id_categoria;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public String getDescripcion_producto() {
        return descripcion_producto;
    }

    public void setDescripcion_producto(String descripcion_producto) {
        this.descripcion_producto = descripcion_producto;
    }

    public double getPrecio_producto() {
        return precio_producto;
    }

    public void setPrecio_producto(double precio_producto) {
        this.precio_producto = precio_producto;
    }
}
