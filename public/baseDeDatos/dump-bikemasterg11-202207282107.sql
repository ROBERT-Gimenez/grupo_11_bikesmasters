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
  CONSTRAINT `carrito_FK` FOREIGN KEY (`product_id`) REFERENCES `productos` (`id`),
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Bicicletas'),(2,'Kids'),(3,'Repuestos'),(4,'Accesorios'),(5,'Indumentaria'),(6,'Herramientas');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(100) DEFAULT NULL,
  `altura` varchar(20) DEFAULT NULL,
  `codigo_postal` varchar(10) DEFAULT NULL,
  `localidad` varchar(50) DEFAULT NULL,
  `pais` varchar(40) DEFAULT NULL,
  `provincia` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,'av.cruz','3625','1407','soldati','argentina','caba'),(2,'av gaona','2525','1407','caballito','argentina','caba'),(3,'Av Cruz ','3625','1437','Argentina','Argentina','Ciudad AutÃƒÂ³noma de Buenos Aires'),(4,'123','','','','',''),(5,'Calle falsa','123','123','10014040000',NULL,NULL),(6,'asdasd','123','123123',NULL,NULL,'Jujuy'),(10,'Av. Siempre Viva','931','1023','RETIRO','Argentina','Ciudad AutÃ³noma de Buenos Aires'),(11,'Calle falsa ','123','1123','NUCLEO I','Argentina','Misiones'),(12,'Av EverGreen','123','1012','ICAÃ‘O','Argentina','Santiago del Estero');
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
  `name` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `categoryid` int(11) NOT NULL,
  `description` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `marca` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `discount` tinyint(4) NOT NULL,
  `stock` int(11) NOT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_FK` (`categoryid`),
  KEY `productos_FK_1` (`user_id`),
  CONSTRAINT `productos_FK` FOREIGN KEY (`categoryid`) REFERENCES `categorias` (`id`),
  CONSTRAINT `productos_FK_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (4,'Casco',4,'El mejor Casco del Condado','Vertigo',0,3,'casco.jpg',4000,NULL),(6,'Bici Firebird MTB Rodado 29',1,'La mejor bici del condado','Firebird',5,12,'BIci-Coluer-Limbo-296.jpg',65000,NULL),(7,'Bici de paseo para dama Rodado 26',1,'La mejor bici para damas del condado','Roller',0,5,'Bici-paseo-dama-1.jpg',37000,NULL),(8,'Bici MTB Rodado 29',1,'La mejor bici MTB del condado','OLMO',10,10,'bIci-MTB-2.jpg',37000,NULL),(9,'Silla de competicion',4,'Silla de competiciÃƒÂ³n de gel, super ergonÃƒÂ³mica y confortable para un uso constante y para competiciones largas','patito',0,20,'1649980893734-product-.jpg',6500,NULL),(10,'Bicicleta para niÃ±a',2,'Bicicleta para niÃƒÂ±a fucsia rodado 14, con pie de apoyo. Incluye silla de pasajero y canasta.','Divina',0,12,'1650594387359-product.webp',35000,NULL),(11,'Bicicleta mountain-bike R29',1,'Bicicleta Mtb Vairo Xr 3.5 R29 Bloqueo Disco\\r\\n- Color azul\\r\\n- Cambios Shimano\\r\\n- Amortiguadores delanteros\\r\\n- Asiento de gel super ergonÃƒÂ³mico','Vairo',15,10,'1650594749373-product.jpg',108821,NULL),(12,'Casco para ciclismo deportivo',4,'Casco unisex varios colores\\r\\nDiseÃƒÂ±o y seguridad es una de nuestros compromisos con nuestros clientes, es por eso que desde Shellmets presentamos el casco SM1. Confort, seguridad y agradable diseÃƒÂ±o moderno un producto pensado para uso semi-profesional o cotidiano.','Shellmets',0,20,'1650595305384-product.webp',5000,NULL),(13,'Cubierta para bicicleta R29',3,'Cubierta para bicicletas mountain-bike R29 con diseÃƒÂ±o de vanguardia para todo tipo de terreno. \\r\\nSi esta publicado es porque hay stock','GoodShear',5,50,'cubierta-goodyear.png',7500,NULL),(14,'Inflador manual con medidor de presion',6,'Inflador manual con accionamiento a pedal con medidor de presiÃƒÂ³n.\\r\\nIncluye funda para ser transportado.','Patito',0,22,'1655794330595-product.jpg',6000,NULL),(15,'Kit de transmision Shimano',3,'Kit Transmision Bicicleta Mtb Shimano Mountain 21v 3x7','Shimano',0,10,'1650595799423-product.png',13500,NULL),(16,'Set de herramientas manuales para bicicleta',6,'Kit Reparacion Bicicleta Bici Parche SoluciÃƒÂ³n Llaves Estuche','ToolHards',5,10,'1650595891816-product.png',1899,NULL),(17,'Pedales profesionales para bicicleta',3,'Pedales anatÃƒÂ³micos con agarre de seguridad ideal para competiciÃƒÂ³n y exigentes de las dos ruedas.\\r\\nSu diseÃƒÂ±o otorga un cÃƒÂ³modo uso al andar.','Heinks',2,10,'1650596003864-product.jpg',10000,NULL),(18,'Cadena con funda para bici',4,'Cadena para bicicleta con funda.\\r\\nSistema de seguridad con llave tipo tambor.\\r\\n- Largo de cadena 1m.','Andromeda',3,30,'1650596151641-product.webp',6000,NULL),(71,'Bicicleta infantil R20',1,'- CUADRO MTB ALUMINIO 25 PRO\r\n- 21 VELOCIDADES\r\n- CALCO AL AGUA BAJO BARNIZ\r\n- JUEGO DE DIRECCIÃ“N INTEGRADO\r\n- CAMBIOS SHIMANO\r\n- DESCARRILADOR TRASERO SHIMANO\r\n- HORQUILLA SUSPENSIÃ“N\r\n- FRENOS A DISCO\r\n- RUEDAS MTB REFORZADA','Ciclone',0,20,'1657589408733-product.jpg',57000,12);
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
  `password` varchar(300) DEFAULT NULL,
  `telefono` varchar(13) DEFAULT NULL,
  `direccion_id` int(11) DEFAULT NULL,
  `avatar` varchar(1000) DEFAULT NULL,
  `rol_id` int(11) NOT NULL,
  `social_id` varchar(100) DEFAULT NULL,
  `social_provider` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_FK_1` (`direccion_id`),
  KEY `usuarios_FK` (`rol_id`),
  CONSTRAINT `usuarios_FK` FOREIGN KEY (`rol_id`) REFERENCES `user_rol` (`id`),
  CONSTRAINT `usuarios_FK_1` FOREIGN KEY (`direccion_id`) REFERENCES `direcciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'robert','mail@mail.com','123456789','1141806012',1,NULL,1,NULL,NULL),(3,'roberto','prueba@prueba.com','$2a$10$4CgdnwEsQj4Tv',NULL,NULL,'user-default.png',1,NULL,NULL),(4,'pepito','pepito@pepito.com','$2a$10$hjmz8Fwqud9Kz',NULL,NULL,'user-default.png',1,NULL,NULL),(5,'briana','brian@brian.com','$2a$10$3e7TribuwU4ej','1145698714',NULL,'user-default.png',1,NULL,NULL),(6,'betty','bety@bety.com','$2a$10$0gWO.o8LnVKM2','1212121212',3,'1655514391846-profile.jpg',1,NULL,NULL),(7,'donald','mac@donald.com','$2a$10$D7j4tK/qeAdAq',NULL,NULL,'user-default.png',1,NULL,NULL),(8,'loki','loki@loki.com','$2a$10$3zYEn2vj29sBX','12346789',2,'1654825760980-profile.jpg',1,NULL,NULL),(9,'pato','pato@pato.com','$2a$10$sx/t8dVmd.g1X','15471715',NULL,'1654823699746-profile.jpg',1,NULL,NULL),(10,'Fulano','fulano@mail.com','$2a$10$VdFPbmEn0LjnxgKrlFjKEOR0mdYzCIG7DzxQqC3uOsPJHj0wll6AS','123',4,'user-default.png',1,NULL,NULL),(11,'Fulano','usuario@mail.com','$2a$10$vROe4vqLQtwtMgbtKYWJXeE06txr26ITXqqISWwPERbAe0UyR/dtK','15151515',10,'1656729019972-profile.png',1,NULL,NULL),(12,'Admin','admin@mail.com','$2a$10$2x0LIY/YPW9F0d6XK9XGJ.h70UZThAtGe96ub4iNFgumsK6/VSjTS','1512332115',11,'1658691904703-profile.png',2,NULL,NULL),(13,'Brian','brian@mail.com','$2a$10$jx1koXSr66LAnQrxwdsFK.d0qln2CLLZoQxkEnmyeiy3O3x8MZ8SS',NULL,NULL,'user-default.png',1,NULL,NULL),(14,'asdf','asd@mail.com','$2a$10$F5gr9Yj7LrFRDRxBtQBMvupZh6uFPDsa8NP/ze2psc7L/uHyUlhFi',NULL,NULL,'user-default.png',1,NULL,NULL),(15,'Usuario','elpepe@mail.com','$2a$10$5.ynpt2PoQPHfDb5a1KzB.MpOXzdQvBjuFQsDm1H3DaPoljfdQGFW','',12,'user-default.png',2,NULL,NULL),(16,'nina','nina@mail.com','$2a$10$Sqf7Cb0XiAfRMzlBsEVMGOsGrmXTbS6ganfoj4b7olzDs3/ME8tva','123456078',NULL,'user-default.png',1,NULL,NULL),(17,'Brian','brian.flores.ch@gmail.com',NULL,NULL,NULL,NULL,1,'101789862441388506827','google');
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

-- Dump completed on 2022-07-28 21:07:47
