-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2022 a las 23:59:49
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gatewaybd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `device`
--

CREATE TABLE `device` (
  `id` int(255) NOT NULL,
  `id_gateway` int(255) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `Provider` varchar(255) NOT NULL,
  `CreationDate` date NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `device`
--

INSERT INTO `device` (`id`, `id_gateway`, `uid`, `Provider`, `CreationDate`, `active`) VALUES
(2, 1, 'llll', 'siemens', '2022-09-09', 0),
(3, 2, 'hhhh', 'java', '2022-09-12', 0),
(15, 2, '77', 'ojo', '0000-00-00', 0),
(17, 1, '88888', 'klkl', '0000-00-00', 0),
(18, 4, '56565', 'asus', '0000-00-00', 0),
(19, 4, '88888', 'klkl', '0000-00-00', 0),
(20, 4, '77', 'java', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gateway`
--

CREATE TABLE `gateway` (
  `id` int(255) NOT NULL,
  `SerialNumber` varchar(255) NOT NULL,
  `LegibleName` varchar(255) NOT NULL,
  `ipv4` decimal(65,0) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gateway`
--

INSERT INTO `gateway` (`id`, `SerialNumber`, `LegibleName`, `ipv4`, `active`) VALUES
(1, '00000', 'prueba', '1', 0),
(2, '55555', 'test', '22', 0),
(4, '3636', 'yupi', '99', 0),
(5, '2525', 'hhh', '999', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idGateway` (`id_gateway`);

--
-- Indices de la tabla `gateway`
--
ALTER TABLE `gateway`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `device`
--
ALTER TABLE `device`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `gateway`
--
ALTER TABLE `gateway`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `device`
--
ALTER TABLE `device`
  ADD CONSTRAINT `fk_idGateway` FOREIGN KEY (`id_gateway`) REFERENCES `gateway` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
