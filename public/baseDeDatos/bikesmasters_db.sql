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
INSERT INTO `direcciones` VALUES (1,'av.cruz','3625','1407','soldati','argentina','caba'),(2,'av gaona','2525','1407','caballito','argentina','caba'),(4,'123','','','','',''),(5,'Calle falsa','123','123','10014040000',NULL,NULL),(6,'asdasd','123','123123',NULL,NULL,'Jujuy'),(10,'Av. Siempre Viva','931','1023','RETIRO','Argentina','Ciudad AutÃ³noma de Buenos Aires'),(11,'Calle falsa ','123','1123','NUCLEO I','Argentina','Misiones'),(12,'Av EverGreen','123','1012','ICAÃ‘O','Argentina','Santiago del Estero');
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
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (4,'Casco',4,'El mejor Casco del Condado','Vertigo',0,3,'casco.jpg',4000,NULL),(6,'Bici Firebird MTB Rodado 29',1,'La mejor bici del condado','Firebird',5,12,'BIci-Coluer-Limbo-296.jpg',65000,NULL),(7,'Bici de paseo para dama Rodado 26',1,'La mejor bici para damas del condado','Roller',0,5,'Bici-paseo-dama-1.jpg',37000,NULL),(8,'Bici MTB Rodado 29',1,'La mejor bici MTB del condado','OLMO',10,10,'bIci-MTB-2.jpg',37000,NULL),(9,'Silla de competicion',4,'Silla de competiciÃƒÂ³n de gel, super ergonÃƒÂ³mica y confortable para un uso constante y para competiciones largas','patito',0,20,'1649980893734-product-.jpg',6500,NULL),(10,'Bicicleta para niÃ±a',2,'Bicicleta para niÃƒÂ±a fucsia rodado 14, con pie de apoyo. Incluye silla de pasajero y canasta.','Divina',0,12,'1650594387359-product.webp',35000,NULL),(11,'Bicicleta mountain-bike R29',1,'Bicicleta Mtb Vairo Xr 3.5 R29 Bloqueo Disco\\r\\n- Color azul\\r\\n- Cambios Shimano\\r\\n- Amortiguadores delanteros\\r\\n- Asiento de gel super ergonÃƒÂ³mico','Vairo',15,10,'1650594749373-product.jpg',108821,NULL),(12,'Casco para ciclismo deportivo',4,'Casco unisex varios colores\\r\\nDiseÃƒÂ±o y seguridad es una de nuestros compromisos con nuestros clientes, es por eso que desde Shellmets presentamos el casco SM1. Confort, seguridad y agradable diseÃƒÂ±o moderno un producto pensado para uso semi-profesional o cotidiano.','Shellmets',0,20,'1650595305384-product.webp',5000,NULL),(13,'Cubierta para bicicleta R29',3,'Cubierta para bicicletas mountain-bike R29 con diseÃƒÂ±o de vanguardia para todo tipo de terreno. \\r\\nSi esta publicado es porque hay stock','GoodShear',5,50,'cubierta-goodyear.png',7500,NULL),(15,'Kit de transmision Shimano',3,'Kit Transmision Bicicleta Mtb Shimano Mountain 21v 3x7','Shimano',0,10,'1650595799423-product.png',13500,NULL),(16,'Set de herramientas manuales para bicicleta',6,'Kit Reparacion Bicicleta Bici Parche SoluciÃƒÂ³n Llaves Estuche','ToolHards',5,10,'1650595891816-product.png',1899,NULL),(17,'Pedales profesionales para bicicleta',3,'Pedales anatÃƒÂ³micos con agarre de seguridad ideal para competiciÃƒÂ³n y exigentes de las dos ruedas.\\r\\nSu diseÃƒÂ±o otorga un cÃƒÂ³modo uso al andar.','Heinks',2,10,'1650596003864-product.jpg',10000,NULL),(18,'Cadena con funda para bici',4,'Cadena para bicicleta con funda.\\r\\nSistema de seguridad con llave tipo tambor.\\r\\n- Largo de cadena 1m.','Andromeda',3,30,'1650596151641-product.webp',6000,NULL),(71,'Bicicleta infantil R20',1,'- CUADRO MTB ALUMINIO 25 PRO\r\n- 21 VELOCIDADES\r\n- CALCO AL AGUA BAJO BARNIZ\r\n- JUEGO DE DIRECCIÃ“N INTEGRADO\r\n- CAMBIOS SHIMANO\r\n- DESCARRILADOR TRASERO SHIMANO\r\n- HORQUILLA SUSPENSIÃ“N\r\n- FRENOS A DISCO\r\n- RUEDAS MTB REFORZADA','Ciclone',0,20,'1657589408733-product.jpg',57000,12),(74,'H-JERSEY M/L AFRICA IV l/PRO',5,'Campera jersey talle M/L gris cemento','OSX',0,20,'1659308201682-product.jpg',9351,12),(75,'JERSEY FULL COLOR',5,'LYCRA\r\nTELA CON RESPIRACION EN LOS LATERALES\r\nCIERRE COMPLETO\r\nCINTURA CON ANTIDESLISANTE\r\nBOLSILLO TRASERO CON TRES SEPARACIONES\r\nTIRA REFLEX TRASERO','OSX',0,20,'1659308280819-product.jpg',12900,12),(76,'Casaca GROM',5,'CASACA REMERA CICLISTA VAIRO GROM HOMBRE\r\n\r\nEstá hecho para el ciclista que se atreve a todo terreno. Confeccionado con fibras sintéticas Spandex LYCRA® fabricadas para resistir actividades intensas y rápidas sin perder su principal característica de ser liviano y cómodo.\r\n\r\nAdemás la casaca cuenta con con la tecnología Laser Cut que protege la piel del rose constante y AirTech que protege al usuario del calor extremo y lo mantiene seco garantizando la correcta ventilación de la piel.','Vairo',0,20,'1659308351192-product.jpg',6037,12),(77,'CASACA COMBAT RACE',5,'Corte láser que funde el material sintético generando bordes perfectos y reduciendo así el roce con la piel.\r\n\r\nSpandex Lycra\r\nFibras sintéticas con alta capacidad de elasticidad que permiten adaptarse sin deformar la prenda.\r\n\r\nElastic Band\r\nElástico antideslizante con silicona que se adhiere a la piel con el fin de mantener la prenda en su lugar.\r\n\r\nAir Tech\r\nTejido diseñado para permitir el máximo de circulación de aire, reduciendo así el calor y humedad.\r\n\r\nBack Pocket\r\nBolsillos traseros para un fácil acceso a elementos necesarios durante la marcha.\r\n\r\nSublimate\r\nDiseño exclusivo, sublimado de alta calidad que preserva la intensidad de los colores.','Vairo',0,20,'1659308414780-product.jpg',6233,12),(78,'CAMOUFLAGE CALZA CORTA',5,'El ciclismo requiere mucha exigencia para algunas partes de cuerpo por lo que es necesario tener el equipo adecuado en seguridad y comodidad. Por ejemplo, las calzas deben estar diseñadas para generar comodidad al usuario, brindar libertad de movimiento y mantener una temperatura adecuada. Aquí conocerás todo lo que Vairo tiene para ofrecerte.','Vairo',5,15,'1659308997220-product.jpg',10686,12),(79,'CALZA SLIDE',5,'CALZA CORTA CICLISTA VAIRO SLIDE - CON BADANA\r\n\r\nTejido de compresión.\r\nDiseño anatómico.\r\nBordado al tono.\r\nVivos reflectivos para seguridad.\r\n\r\nMaterial: 85% Poliamida, 15% Elastano\r\n\r\nConfeccionada con tela Flat Seams: costura plana. Las costuras se sienten y se ven planas proporcionando mayor confort en el uso.','Vairo',0,20,'1659309068925-product.jpg',5175,12),(80,'Calza F',5,'Alta compresión\r\nPuños siliconados\r\nBadana de gel\r\n\r\nMEDIDAS: SON SACADAS DE FRENTE SIN ESTIRAR LA PRENDA\r\n\r\nS/1 CINTURA 28CM,CADERA 32CM,TIRO DELANTERO 25CM,LARGO 36CM\r\n\r\nM/2 CINTURA 29CM,CADERA 33CM,TIRO DELANTERO 26CM,LARGO 37CM\r\n\r\nL/3 CINTURA 30CM,CADERA 34CM,TIRO DELANTERO 27CM,LARGO 38CM\r\n\r\nXL/4 CINTURA 31CM,CADERA 35CM,TIRO DELANTERO 28CM LARGO 39C','OSX',5,20,'1659309164073-product.jpg',12627,12),(81,'PATA DE CAMBIO TOURNEY TY 6/7V',3,'COLOR: NEGRO MTB\r\nVELOCIDADES : 6-7\r\nSOPORTA 34 DIENTES\r\nModelo: RD-TY300 CON GANCHO\r\nPara tipo de bicicleta: De paseo, Bicicleta híbrida/cómoda,\r\nBicicleta para niños, Bicicleta montaña','Shimano',0,30,'1659309235656-product.jpg',3743,12),(82,'CAMBIO SHIMANO ALTUS RD M310 ESPECIAL PARA 21/24',3,'Pata de cambio para 21/24 velocidades SHIMANO\r\nAltus','Shimano',0,10,'1659309329666-product.jpg',5623,12),(83,'BICICLETA WISH 290 R29 DISC ENTRY',1,'Bicicleta Olmo rodado 29.\r\nCuadro de aluminio.\r\n21 velocidades con cambios SHIMANO.','Olmo',5,10,'1659309468349-product.jpg',89281,12),(84,'CASCO VOLT URBANO C/VISERA',4,'- Casco para bicicleta\r\n- Marca VAIRO\r\n- Modelo VOLT','Vairo',0,30,'1659313268992-product.jpg',8356,12),(85,'CASCOS TOMAC',4,'Marca Rembrandt\r\nModelo: Tomac\r\n16 ventilaciones\r\nLuz desmontable\r\n1 pila redonda\r\nMedida: M (54-58 cm). L (58/61 cm)\r\nPeso: 285 gr +/- 10 gr.\r\nPara tomar la medida del casco medir el contorno de la cabeza, a la altura de la frente.','REMBRANDT',12,10,'1659313365230-product.jpg',13505,12),(86,'REAKTOR R16 V1 BRAKE',2,'Bicicleta Olmo infantil R16 una sola velocidad.\r\nFrenos V-brake.\r\nCuadro de aluminio.','Olmo',5,5,'1659313512397-product.jpg',48129,12),(87,'XCR R20 1V',2,'Olmo ofrece Productos Confiables E Innovadores, Comprometidos Con El Medioambiente. La Vida Es Más Linda Si Vas Pedaleando.\r\n\r\nBicicleta Olmo XCR Rodado 20\r\n\r\nCaracterísticas:\r\n\r\nRodado: 20\r\n\r\nMaterial Del Cuadro: Acero\r\n\r\nHorquilla: Rígida\r\n\r\nFrenos: V-Break resina\r\n\r\nAccesorios: Cubrecadena - Patente - Placa frontal.','Olmo',0,6,'1659313579381-product.jpg',40389,12),(88,'BICI BUTTONS R12 1V VBRAKE',2,'ROYAL BABY\r\n\r\nDiseños únicos y divertidos de primera calidad para compartir los mejores momentos. La innovación, la seguridad y variedad en sus diseños consolidan a Royal Baby como marca Líder en EEUU, siendo los número 1 en ventas de Amazon USA. Fábrica y Productos certificados por las normas IRAM, para garantizarte la mayor calidad de sus componentes.\r\n\r\nSi buscas lo mejor para tus hijos/as ¡Elegís Royal Baby!','ROYAL BABY',10,3,'1659314054433-product.jpg',50399,12),(89,'Bicicleta PRINCESS R20 1V VBRAKE',2,'Bicicleta infantil para niña R20 con freno V-brake.\r\nIncluye canasta y parrilla','TOP MEGA',0,5,'1659314230231-product.jpg',52043,12),(90,'Ciclococomputadora Pure 1 ATS White',6,'EN LA VERSIÓN PURE 1 ATS, LA TRANSMISIÓN SE REALIZA DE FORMA INALÁMBRICA. ATS ES EL NOMBRE DE LA TRANSMISIÓN INALÁMBRICA ANALÓGICA Y CODIFICADA DESARROLLADA POR SIGMA SPORT.\r\nMUESTRA LAS FUNCIONES BÁSICAS DE VELOCIDAD, DISTANCIA Y TIEMPO DE RECORRIDO. MUY FÁCIL DE MANEJAR Y EXTREMADAMENTE CLARO. SU DISEÑO SIMPLE Y COMPACTO SON MUY CONVINCENTES.\r\nCON EL SENCILLO MONTAJE DEL SOPORTE Y DEL TRANSMISOR Y EL AJUSTE RÁPIDO DEL TAMAÑO DE LA RUEDA MEDIANTE LOS TAMAÑOS PREDEFINIDOS ESTARÁ PREPARADO PARA COMENZAR EN UN ABRIR Y CERRAR DE OJOS.\r\n\r\n• VELOCIDAD ACTUAL\r\n• DISTANCIA\r\n• DISTANCIA TOTAL\r\n• TIEMPO DEL RECORRIDO\r\n• TIEMPO TOTAL RECORRIDO\r\n• COMUNICACIÓN DE DATOS MEDIANTE ESTACIÓN DE CONEXIÓN TOPLINE 2016\r\n• ATS TRANSMISIÓN INALÁMBRICA\r\n• A PRUEBA DE AGUA CONFORME A IPX8\r\n• MONTAJE SIN NECESIDAD DE HERRAMIENTAS\r\n• TAMAÑO DE RUEDA AJUSTABLE MEDIANTE TIPO DE NEUMÁTICO\r\n• AJUSTES DEL EQUIPO DATA CENTER\r\n• FUNCIÓN SE MUESTRA CON UN ICONO\r\n• INICIO/DETENCIÓN AUTOMÁTICOS\r\n\r\nLA PANTALLA DE GRAN TAMAÑO MUESTRA LETRAS Y CIFRAS MUY LEGIBLES. EL PURE 1 MUESTRA EN 3 LÍNEAS LA VELOCIDAD, LA DISTANCIA Y EL TIEMPO DE RECORRIDO DIARIOS O, JUNTO CON LA VELOCIDAD, LOS VALORES TOTALES DE DISTANCIA Y TIEMPO DE RECORRIDO.\r\nCON SOLO PRESIONAR UN BOTÓN SE PASA DE LA VISTA DEL RECORRIDO A LA VISTA DE TOTALES.\r\nLA PANTALLA Y DÍGITOS GRANDES LES FACILITAN LA LECTURA A LOS USUARIOS CON PROBLEMAS DE VISTA.','SIGMA',0,15,'1659314426068-product.jpg',12051,12),(91,'Herramienta multi 12 en 1',6,'Multiherramienta Van Halen Van454 12 Funciones\r\n\r\n*Marca: Van Halen\r\n*Modelo: VAN454\r\n*Funciones: 12\r\n*Llaves Alen: 2-2.5-3-4-5-6-8 mm\r\n*Destornillador punta plana\r\n*Destornillador phillips\r\n*Destornillador torx\r\n*Corta cadena\r\n*Llave sacacubierta\r\n*Dimensiones: 70mm (Largo) x 40mm (Ancho) x 26mm (Alto)\r\n*Peso: 190g\r\n\r\nVAN454\r\nMultiherramienta super completa, con todo lo necesario para nuestras salidas, y reparar cualquier eventualidad que surja en el camino. Tamaño reducido para su fácil transporte en nuestro bolsillo o bolso bajo asiento.','VAN HALEN',0,20,'1659314640307-product.jpg',3064,12);
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
INSERT INTO `usuarios` VALUES (4,'pepito','pepito@pepito.com','$2a$10$hjmz8Fwqud9Kz',NULL,NULL,'user-default.png',1,NULL,NULL),(5,'briana','brian@brian.com','$2a$10$3e7TribuwU4ej','1145698714',NULL,'user-default.png',1,NULL,NULL),(7,'donald','mac@donald.com','$2a$10$D7j4tK/qeAdAq',NULL,NULL,'user-default.png',1,NULL,NULL),(8,'loki','loki@loki.com','$2a$10$3zYEn2vj29sBX','12346789',2,'1654825760980-profile.jpg',1,NULL,NULL),(9,'pato','pato@pato.com','$2a$10$sx/t8dVmd.g1X','15471715',NULL,'1654823699746-profile.jpg',1,NULL,NULL),(10,'Fulano','fulano@mail.com','$2a$10$VdFPbmEn0LjnxgKrlFjKEOR0mdYzCIG7DzxQqC3uOsPJHj0wll6AS','123',4,'user-default.png',1,NULL,NULL),(11,'Fulano','usuario@mail.com','$2a$10$vROe4vqLQtwtMgbtKYWJXeE06txr26ITXqqISWwPERbAe0UyR/dtK','15151515',10,'1656729019972-profile.png',1,NULL,NULL),(12,'Admin','admin@mail.com','$2a$10$2x0LIY/YPW9F0d6XK9XGJ.h70UZThAtGe96ub4iNFgumsK6/VSjTS','1512332115',11,'1658691904703-profile.png',2,NULL,NULL),(13,'Brian','brian@mail.com','$2a$10$jx1koXSr66LAnQrxwdsFK.d0qln2CLLZoQxkEnmyeiy3O3x8MZ8SS',NULL,NULL,'user-default.png',1,NULL,NULL),(14,'asdf','asd@mail.com','$2a$10$F5gr9Yj7LrFRDRxBtQBMvupZh6uFPDsa8NP/ze2psc7L/uHyUlhFi',NULL,NULL,'user-default.png',1,NULL,NULL),(15,'Usuario','elpepe@mail.com','$2a$10$5.ynpt2PoQPHfDb5a1KzB.MpOXzdQvBjuFQsDm1H3DaPoljfdQGFW','',12,'user-default.png',2,NULL,NULL),(16,'nina','nina@mail.com','$2a$10$Sqf7Cb0XiAfRMzlBsEVMGOsGrmXTbS6ganfoj4b7olzDs3/ME8tva','123456078',NULL,'user-default.png',1,NULL,NULL),(17,'Brian','brian.flores.ch@gmail.com',NULL,NULL,NULL,NULL,1,'101789862441388506827','google');
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

-- Dump completed on 2022-07-31 23:16:52
