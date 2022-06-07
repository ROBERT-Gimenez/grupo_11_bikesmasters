-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: bikemasterg11
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carrito_FK` (`product_id`),
  KEY `carrito_FK_2` (`usuario_id`),
  CONSTRAINT `carrito_FK_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'bicicletas'),(2,'kids'),(3,'repuestos'),(4,'accesorios'),(5,'indumentaria'),(6,'indumentaria');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_de_compra` datetime NOT NULL,
  `carrito_id` int(11) NOT NULL,
  `fecha_de_entrega` date NOT NULL,
  `pago_final` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `compras_FK` (`carrito_id`),
  CONSTRAINT `compras_FK` FOREIGN KEY (`carrito_id`) REFERENCES `carrito` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(100) NOT NULL,
  `altura` varchar(20) NOT NULL,
  `codigo_postal` varchar(10) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `pais` varchar(40) NOT NULL,
  `provincia` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,'av.cruz','3625','1407','soldati','argentina','caba');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `categoryid` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL,
  `ultima_modificacion` datetime NOT NULL,
  `marca` varchar(60) NOT NULL,
  `discount` tinyint(4) NOT NULL,
  `stock` int(11) NOT NULL,
  `enable` tinyint(4) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_FK` (`categoryid`),
  CONSTRAINT `productos_FK` FOREIGN KEY (`categoryid`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (2,'Gafas de sol',4,'Las mejores gafas del condado','2002-06-22 00:00:00','2002-06-22 00:00:00','Patito',5,25,1,'GAFAS.jpg',4500),(3,'Remera deportiva',4,'La mejor Remera del condado','2002-06-22 00:00:00','2002-06-22 00:00:00','Raleigh',0,4,1,'Ropa.jpg',3000),(4,'Casco',4,'El mejor Casco del Condado','2002-06-22 00:00:00','2002-06-22 00:00:00','Vertigo',0,3,1,'casco.jpg',4000),(5,'Bici para niño Rodado 16',2,'La mejor Bici de niños del condado','2002-06-22 00:00:00','2002-06-22 00:00:00','SLP',3,12,1,'Bici-niño-1.png',25000),(6,'Bici Firebird MTB Rodado 29',1,'La mejor bici del condado','2002-06-22 00:00:00','2002-06-22 00:00:00','Firebird',5,12,1,'BIci-Coluer-Limbo-296.jpg',65000),(7,'Bici de paseo para dama Rodado 26',1,'La mejor bici para damas del condado','2002-06-22 00:00:00','2002-06-22 00:00:00','Roller',0,5,1,'Bici-paseo-dama-1.jpg',37000),(8,'Bici MTB Rodado 29',1,'La mejor bici MTB del condado','2002-06-22 00:00:00','2002-06-22 00:00:00','OLMO',10,10,1,'bIci-MTB-2.jpg',37000),(9,'Silla de competicion',4,'Silla de competición de gel, super ergonómica y confortable para un uso constante y para competiciones largas','2002-06-22 00:00:00','2002-06-22 00:00:00','patito',0,20,1,'1649980893734-product-.jpg',6500),(10,'Bicicleta para niña',2,'Bicicleta para niña fucsia rodado 14, con pie de apoyo. Incluye silla de pasajero y canasta.','2002-06-22 00:00:00','2002-06-22 00:00:00','Divina',0,12,1,'1650594387359-product.webp',35000),(11,'Bicicleta mountain-bike R29',1,'Bicicleta Mtb Vairo Xr 3.5 R29 Bloqueo Disco\\r\\n- Color azul\\r\\n- Cambios Shimano\\r\\n- Amortiguadores delanteros\\r\\n- Asiento de gel super ergonómico','2002-06-22 00:00:00','2002-06-22 00:00:00','Vairo',15,10,1,'1650594749373-product.jpg',108821),(12,'Casco para ciclismo deportivo',4,'Casco unisex varios colores\\r\\nDiseño y seguridad es una de nuestros compromisos con nuestros clientes, es por eso que desde Shellmets presentamos el casco SM1. Confort, seguridad y agradable diseño moderno un producto pensado para uso semi-profesional o cotidiano.','2002-06-22 00:00:00','2002-06-22 00:00:00','Shellmets',0,20,1,'1650595305384-product.webp',5000),(13,'Cubierta para bicicleta R29',3,'Cubierta para bicicletas mountain-bike R29 con diseño de vanguardia para todo tipo de terreno. \\r\\nSi esta publicado es porque hay stock','2002-06-22 00:00:00','2002-06-22 00:00:00','GoodShear',5,50,1,'cubierta-goodyear.png',7500),(14,'Inflador manual con medidor de presion',6,'Inflador manual con accionamiento a pedal con medidor de presión.\\r\\nIncluye funda para ser transportado.','2002-06-22 00:00:00','2002-06-22 00:00:00','Patito',0,20,1,'1650595698642-product.webp',6000),(15,'Kit de transmision Shimano',3,'Kit Transmision Bicicleta Mtb Shimano Mountain 21v 3x7','2002-06-22 00:00:00','2002-06-22 00:00:00','Shimano',0,10,1,'1650595799423-product.png',13500),(16,'Set de herramientas manuales para bicicleta',6,'Kit Reparacion Bicicleta Bici Parche Solución Llaves Estuche','2002-06-22 00:00:00','2002-06-22 00:00:00','ToolHards',5,10,1,'1650595891816-product.png',1899),(17,'Pedales profesionales para bicicleta',3,'Pedales anatómicos con agarre de seguridad ideal para competición y exigentes de las dos ruedas.\\r\\nSu diseño otorga un cómodo uso al andar.','2002-06-22 00:00:00','2002-06-22 00:00:00','Heinks',2,10,1,'1650596003864-product.jpg',10000),(18,'Cadena con funda para bici',4,'Cadena para bicicleta con funda.\\r\\nSistema de seguridad con llave tipo tambor.\\r\\n- Largo de cadena 1m.','2002-06-22 00:00:00','2002-06-22 00:00:00','Andromeda',3,30,1,'1650596151641-product.webp',6000);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_rol`
--

DROP TABLE IF EXISTS `user_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_rol`
--

LOCK TABLES `user_rol` WRITE;
/*!40000 ALTER TABLE `user_rol` DISABLE KEYS */;
INSERT INTO `user_rol` VALUES (1,'USER'),(2,'ADMIN');
/*!40000 ALTER TABLE `user_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(20) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `direccion_id` int(11) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `rol_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_FK_1` (`direccion_id`),
  KEY `usuarios_FK` (`rol_id`),
  KEY `usuarios_FK_2` (`product_id`),
  CONSTRAINT `usuarios_FK` FOREIGN KEY (`rol_id`) REFERENCES `user_rol` (`id`),
  CONSTRAINT `usuarios_FK_1` FOREIGN KEY (`direccion_id`) REFERENCES `direcciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'robert','mail@mail.com','123456789',1141806012,1,1,NULL,2),(3,'roberto','prueba@prueba.com','$2a$10$4CgdnwEsQj4Tv',NULL,NULL,NULL,'user-default.png',1),(4,'pepito','pepito@pepito.com','$2a$10$hjmz8Fwqud9Kz',NULL,NULL,NULL,'user-default.png',1),(5,'brian','brian@brian.com','$2a$10$3e7TribuwU4ej',NULL,NULL,NULL,'user-default.png',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bikemasterg11'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-06 23:58:03
