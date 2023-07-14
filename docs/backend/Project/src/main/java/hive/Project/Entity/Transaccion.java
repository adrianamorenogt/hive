package hive.Project.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "transaccion")
public class Transaccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaccion")
    private int id_transaccion;

    @Column(name = "id_cliente")
    private int id_cliente;

    @Column(name = "id_producto")
    private int id_producto;
    @Column(name = "cantidad_producto")
    private int cantidad_producto;

    @Column(name = "saldo_venta")
    private double saldo_venta;

    @Column(name = "fecha")
    private LocalDate fecha;

    public int getId_transaccion() {
        return id_transaccion;
    }

    public void setId_transaccion(int id_transaccion) {
        this.id_transaccion = id_transaccion;
    }

    public int getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public int getCantidad_producto() {
        return cantidad_producto;
    }

    public void setCantidad_producto(int cantidad_producto) {
        this.cantidad_producto = cantidad_producto;
    }

    public double getSaldo_venta() {
        return saldo_venta;
    }

    public void setSaldo_venta(double saldo_venta) {
        this.saldo_venta = saldo_venta;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
}
