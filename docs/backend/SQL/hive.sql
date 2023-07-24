-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-07-2023 a las 22:23:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hive`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(10) NOT NULL,
  `Nombre_Categoria` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `Tipo_Categoria` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `Nombre_Categoria`, `Tipo_Categoria`) VALUES
(1, 'Granja', 'Riego');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Correo` varchar(70) NOT NULL,
  `Direccion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `Nombre`, `Apellido`, `Telefono`, `Correo`, `Direccion`) VALUES
(1, 'Carlos', 'Mantilla', '2314912', 'carlos@gmail.com', 'AK 29 #52'),
(49, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com'),
(50, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com'),
(51, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com'),
(52, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com'),
(53, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com'),
(54, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'Calle 53 #27-24'),
(55, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'Calle 53 #27-24'),
(56, 'Luis', 'Velez', '3128775590', 'a@a.com', 'Calle 53 #27-24'),
(57, 'Martin', 'Liscano', '23451', 'MartinLis@outlook.com', 'Calle 1'),
(58, 'Paula', 'Matiz', '3212232123', 'paula@gmail.com', 'Calle 10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(10) NOT NULL,
  `id_categoria` int(10) NOT NULL,
  `Nombre_producto` varchar(40) NOT NULL,
  `Descripcion_producto` varchar(1000) DEFAULT NULL,
  `Precio_producto` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `id_categoria`, `Nombre_producto`, `Descripcion_producto`, `Precio_producto`) VALUES
(1, 1, 'AGRAS T40 DRONE', 'Es el más eficiente drone fumigador del mundo, su capacidad de tanque es de 40 litros para aspersión y 50 kg para esparcir semillas. Además ahora cuenta con un nuevo sistema de mapeo inteligente innovador para terrenos complicados y árboles frutales.', 20000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaccion`
--

CREATE TABLE `transaccion` (
  `id_transaccion` int(10) NOT NULL,
  `id_cliente` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `cantidad_producto` int(10) NOT NULL,
  `saldo_venta` double NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `transaccion`
--

INSERT INTO `transaccion` (`id_transaccion`, `id_cliente`, `id_producto`, `cantidad_producto`, `saldo_venta`, `fecha`) VALUES
(1, 1, 1, 2, 40000000, '2023-05-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Correo` varchar(70) NOT NULL,
  `Direccion` varchar(60) NOT NULL,
  `Pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Nombre`, `Apellido`, `Telefono`, `Correo`, `Direccion`, `Pass`) VALUES
(48, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com', '12345'),
(49, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com', '12345'),
(50, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com', '12345'),
(51, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com', '12345'),
(52, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'antonio@gmail.com', '12345'),
(53, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'Calle 53 #27-24', '12345'),
(54, 'Luis', 'Velez', '3128775590', 'antonio@gmail.com', 'Calle 53 #27-24', '12345'),
(55, 'Luis', 'Velez', '3128775590', 'a@a.com', 'Calle 53 #27-24', '12345'),
(56, 'Martin', 'Liscano', '23451', 'MartinLis@outlook.com', 'Calle 1', '12345'),
(57, 'Paula', 'Matiz', '3212232123', 'paula@gmail.com', 'Calle 10', '12345');

--
-- Disparadores `usuarios`
--
DELIMITER $$
CREATE TRIGGER `tr_copiar_datos` AFTER INSERT ON `usuarios` FOR EACH ROW BEGIN
    INSERT INTO clientes (Nombre, Apellido, Telefono, Correo, Direccion)
    VALUES ( NEW.Nombre, NEW.Apellido, NEW.Telefono, NEW.Correo, NEW.Direccion);
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_categoriaFK_producto` (`id_categoria`);

--
-- Indices de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD PRIMARY KEY (`id_transaccion`),
  ADD KEY `id_clienteFK_transaccion` (`id_cliente`),
  ADD KEY `id_productoFK` (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  MODIFY `id_transaccion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `id_categoriaFK_producto` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD CONSTRAINT `id_clienteFK_transaccion` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`),
  ADD CONSTRAINT `id_productoFK` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
