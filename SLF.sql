-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2018 at 04:04 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `slf`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `email`, `phone`, `password`) VALUES
(2, 'mahid', 'mahid', 'ma@gmIL.COM', '', 'sha1$68ffcd67$1$b8058d3765425ce61d5bf27fb1fc07f58eb902f3'),
(3, 'atonu', 'atonu', '', '', 'sha1$68ffcd67$1$b8058d3765425ce61d5bf27fb1fc07f58eb902f3');

-- --------------------------------------------------------

--
-- Table structure for table `lost`
--

CREATE TABLE `lost` (
  `id` int(11) NOT NULL,
  `lost_name` varchar(100) NOT NULL,
  `age` int(8) NOT NULL,
  `image` varchar(256) NOT NULL,
  `last_located` varchar(64) NOT NULL,
  `origin` varchar(256) DEFAULT NULL,
  `catagory` varchar(256) DEFAULT NULL,
  `agent_name` varchar(256) DEFAULT NULL,
  `contact` varchar(256) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `date` varchar(255) NOT NULL,
  `promotion` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lost`
--

INSERT INTO `lost` (`id`, `lost_name`, `age`, `image`, `last_located`, `origin`, `catagory`, `agent_name`, `contact`, `uname`, `date`, `promotion`) VALUES
(26, 'Akkas Mia', 69, '/uploads/myImage (5).jpg', 'Kuratoli Road, BRA', 'Rajshahi', 'Lost', 'atonu', '017xxxxxxxx', '', '2018/07/31', 0),
(28, 'Joshim Hawladar', 56, '/uploads/myImage (4).jpg', 'mirpur,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', '', '2018/07/31', 0),
(31, 'shajib alam', 66, '/uploads/myImage (1).jpg', 'birulia bridge, Dhaka', 'Chittagong', 'Lost', 'Thakur', '018xxxxxxxx', '', '2018/07/31', 0),
(32, 'Aunty', 80, '/uploads/myImage (2).jpg', 'Mogbazar,Dhaka', 'Jessore', 'Lost', 'Pulak Barmon', '019xxxxxxxx', '', '2018/07/31', 0),
(33, 'tariqul Islam', 30, '/uploads/myImage-1536300178938.jpg', 'Kuratoli Road, BRA', 'No idea', 'Found', 'Nishe,Nishat', '017xxxxxxxx', '', '2018/07/31', 0),
(35, 'lulu boyati', 65, '/uploads/pic (4).jpg', 'Shitakundo', 'Chittagong', 'found', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/07/31', 0),
(64, 'Kamal hossain', 56, '/uploads/pic (4).jpg', 'mirpur stadium premise', 'Dhaka', 'Lost', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/08/01', 0),
(65, 'shovic azmayn', 30, '/uploads/pic (3).jpg', 'basundhara', 'dinajpur', 'Lost', 'atonu', '019xxxx', 'atonu', '2018/08/01', 0),
(66, 'wahid', 23, '/uploads/pic (5).jpg', 'mirpur,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '123', 'atonu', '2018/08/01', 0),
(71, 'molla', 22, '/uploads/myImage-1536299779706.jpg', 'momahhadpur,Dhaka', 'Feni', 'Found', 'ahmed', '019', 'atonu', '2018/09/01', 0),
(72, 'Chandler Bing', 40, '/uploads/myImage-1536300088129.jpg', 'Central Perk', 'Ireland', 'Lost', 'Monica', '234', 'atonu', '2018/09/01', 100),
(73, 'promo', 20, '/uploads/myImage-1536298288841.jpg', 'jhigatola,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', 'atonu', '2018/09/01', 0),
(74, 'promo - found', 12, '/uploads/myImage-1536299790639.jpg', 'shantinagar,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', 'atonu', '2018/09/01', 200),
(75, 'Fatty', 12, '/uploads/myImage-1536298288841.jpg', 'jhigatola,Dhaka', 'Dhaka', 'found', 'ahmed zahin', '123', 'atonu', '2018/09/01', 400),
(76, 'babu', 8, '/uploads/myImage (1).jpg', 'mirpur,Dhaka', 'No idea', 'lost', 'ahmed zahin', '123', 'atonu', '2018/09/02', 0),
(77, 'abbas', 45, '/uploads/pic (2).jpg', 'kalshi,Dhaka', 'noakhali', 'lost', 'kashem', '017xxxxxx', 'atonu', '2018/09/03', 0),
(78, 'admin post test', 44, '/uploads/myImage-1536299779706.jpg', 'Basundhara', 'not known', 'lost', 'ariya stark', '', '', '123', 0),
(79, 'saddam', 54, '/uploads/myImage (3).jpg', 'shonarga', 'notor', 'found', 'kashem', '123xxx', 'atonu', '2018/09/03', 100),
(80, 'Fatima', 52, '/uploads/pic (1).jpg', 'Kuratoli Road, BRA', 'Dhaka', 'found', 'ahmed zahin', '132', 'atonu', '2018/09/04', 100),
(82, 'irfan', 123, '/uploads/pic (5).jpg', 'jhigatola,Dhaka', 'madaripur', 'lost', 'irfan', '33123123', 'atonu', '2018/09/05', 0),
(83, 'just in case', 123, '/uploads/myImage-1536298288841.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '1332123', 'atonu', '2018/09/05', 0),
(85, 'tarek', 1200, '/uploads/pic (2).jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '123123', 'atonu', '2018/09/05', 0),
(102, 'Ahmed', 23, '/uploads/pic (4).jpg', 'Dhaka', 'Dhaka', 'lost', 'Ahmed', '019xxxxxxxx', 'atonu', '2018/09/07', 0),
(103, 'Geysun', 22, '/uploads/myImage-1536297566053.jpg', 'Wolf Pack HQ', 'Dhaka', 'lost', 'XYZ', '017xxxxxxxxx', 'atonu', '2018/09/07', 400),
(104, 'Punki', 22, '/uploads/myImage-1536297967209.jpg', 'Wolf Pack HQ', 'Dhaka', 'found', 'Fatty', '017xxxxxxxx', 'atonu', '2018/09/07', 400),
(105, 'Single', 50, '/uploads/myImage-1536298093851.jpg', 'Wolf Pack HQ', 'No idea', 'lost', 'ahmed zahin', '123123123', 'atonu', '2018/09/07', 400),
(106, 'Sobec', 23, '/uploads/myImage-1536298123458.jpg', 'Wolf Pack HQ', 'No idea', 'lost', 'ahmed zahin', '', 'atonu', '2018/09/07', 400),
(107, 'Promo - lost', 23, '/uploads/myImage-1536299779706.jpg', 'Wolf Pack HQ', 'Dhaka', 'lost', 'WPfan69', '123123', 'atonu', '2018/09/07', 400),
(108, 'admin post test', 22, '/uploads/myImage-1536339184196.jpg', 'can\'t tell', 'can\'t tell', 'lost', 'admin', '123', '', '123', 0),
(109, 'admin image test', 12, '/uploads/myImage-1536339184196.jpg', 'jhigatola,Dhaka', 'Chittagong', 'found', 'mr. A', '019xxxxxxx', '', '019xxxxxxx', 0),
(116, 'Nishee', 22, '/uploads/myImage-1536366618421.jpg', 'Shyamoli', 'Bagura', 'lost', 'ahmed zahin', '123xxxx', 'atonu', '2018/09/08', 200),
(117, 'blnk test', 12, 'https://i.imgur.com/S58Jnn6.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '123123', 'atonu', '2018/09/08', 0),
(118, 'lili', 17, '/uploads/myImage-1536368235818.jpg', 'Remakri', 'Bandorban', 'found', 'Shovic', '019xxxxxx', 'atonu', '2018/09/08', 0),
(122, 'hridi', 19, '/uploads/myImage-1536510162644.jpg', 'UIU permanent campus', 'No idea', 'lost', 'Punk Inan', '019xxx', 'atonu', '2018/09/09', 0),
(133, 'wahid', 23, '/uploads/pic (5).jpg', 'mirpur,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '019xxxx', 'atonu', '2018/09/10', 0),
(134, 'Sobec', 23, '/uploads/myImage-1536298123458.jpg', 'Wolf Pack HQ', 'No idea', 'lost', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/09/10', 400),
(135, 'Promo - lost', 23, '/uploads/myImage-1536299779706.jpg', 'Wolf Pack HQ', 'Dhaka', 'lost', 'WPfan69', '123123', 'atonu', '2018/09/10', 400),
(136, 'wahid', 23, '/uploads/pic (5).jpg', 'mirpur,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '016xxxx', 'atonu', '2018/09/10', 0),
(137, 'lulu boyati', 65, '/uploads/pic (4).jpg', 'Shitakundo', 'Chittagong', 'found', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(138, 'lulu boyati', 65, '/uploads/pic (4).jpg', 'Shitakundo', 'Chittagong', 'found', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(139, 'lulu boyati', 65, '/uploads/pic (4).jpg', 'Shitakundo', 'Chittagong', 'found', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(140, 'lulu boyati', 65, '/uploads/pic (4).jpg', 'Shitakundo', 'Chittagong', 'found', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(142, 'Geysun', 22, '/uploads/myImage-1536297566053.jpg', 'Wolf Pack HQ', 'Dhaka', 'lost', 'XYZ', '017xxxxxx', 'atonu', '2018/09/10', 400),
(143, 'joshim', 23, '/uploads/myImage-1536299779706.jpg', 'Wolf Pack HQ', 'Dhaka', 'lost', 'joshim', '123123', 'atonu', '2018/09/10', 400),
(144, 'paypal test', 22, '/uploads/myImage-1536539329383.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(145, 'asd', 22, '12', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(146, 'lulu boyati', 22, '2', 'smart phone', 'No idea', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(147, 'lulu boyati', 12, '2', 'Kuratoli Road, BRA', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(148, 'asdasd', 1200, 'https://i.imgur.com/S58Jnn6.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(149, 'asd', 22, '/uploads/myImage-1536539975746.jpg', 'smart phone', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(150, 'asd', 22, '/uploads/myImage-1536540055535.jpg', 'mirpur,Dhaka', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(151, 'asd', 22, '/uploads/myImage-1536540055535.jpg', 'mirpur,Dhaka', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(152, 'asd', 22, '/uploads/myImage-1536540055535.jpg', 'mirpur,Dhaka', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'Guest', '2018/09/10', 0),
(153, 'Huawei P9', 12, '/uploads/myImage-1536540336067.jpg', 'jhigatola,Dhaka', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(154, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(155, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(156, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(157, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(158, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(159, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(160, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(161, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(162, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(163, 'asd', 12, '1', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(164, 'asd', 1200, 'https://i.imgur.com/S58Jnn6.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(165, 'Huawei P9', 1200, '/uploads/myImage-1536541304599.jpg', 'smart phone', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(166, 'asdasd', 12, 'https://i.imgur.com/S58Jnn6.jpg', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(167, 'lulu boyati', 12, '1', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(168, 'lulu boyati', 12, '1', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(169, 'lulu boyati', 12, '1', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(170, 'Huawei P9', 1200, '/uploads/myImage-1536541616915.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(171, 'Huawei P9', 1200, '/uploads/myImage-1536541708411.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(172, 'Huawei P9', 1200, '/uploads/myImage-1536541708411.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(173, 'Huawei P9', 1200, '/uploads/myImage-1536541708411.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(174, 'Huawei P9', 1200, '/uploads/myImage-1536541708411.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(175, 'asd', 12, '/uploads/myImage-1536541821303.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(176, 'asdasd', 12, '/uploads/myImage-1536541935052.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(177, 'asd', 12, '/uploads/myImage-1536542070923.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(178, 'asd', 12, '/uploads/myImage-1536542070923.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(179, 'asd', 1200, '/uploads/myImage-1536542289354.jpg', 'smart phone', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(180, 'Huawei P9', 1200, '/uploads/myImage-1536542474503.jpg', 'smart phone', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 3),
(181, 'asd', 12, '/uploads/myImage-1536542743885.jpg', 'mirpur,Dhaka', 'dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(182, 'asd', 1200, '/uploads/myImage-1536542869599.jpg', 'mirpur,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(183, 'asd', 12, '/uploads/myImage-1536542929703.jpg', 'mirpur,Dhaka', 'dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(184, 'asd', 12, 'https://i.imgur.com/S58Jnn6.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxxx', 'atonu', '2018/09/10', 0),
(185, 'asd', 12, 'https://i.imgur.com/S58Jnn6.jpg', 'jhigatola,Dhaka', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(186, 'Xiaomi Redmi Note 5 plus', 1200, '/uploads/myImage-1536543917513.jpg', 'smart phone', 'Dhaka', 'lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 0),
(187, 'Huawei P9', 1200, '/uploads/myImage-1536544226438.jpg', 'smart phone', 'No idea', 'found', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 3),
(188, 'ass', 12, '/uploads/myImage-1536544434767.jpg', 'jhigatola,Dhaka', 'Dhaka', 'found', 'ahmed zahin', '019xxx', 'atonu', '2018/09/10', 240);

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `productname` varchar(128) NOT NULL,
  `userid` int(11) NOT NULL,
  `username` varchar(128) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(128) NOT NULL,
  `phonenumber` varchar(128) NOT NULL DEFAULT 'no',
  `address` varchar(128) NOT NULL,
  `zipcode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `productid`, `productname`, `userid`, `username`, `quantity`, `price`, `phonenumber`, `address`, `zipcode`) VALUES
(80, 16, 'Huawei P9', 35, 'ahmed zahin111555rerwewewe', 1, 30000, '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka', 1229),
(81, 13, 'Huawei P9', 35, 'ahmed zahin111555rerwewewe', 1, 1200, '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka', 1229),
(82, 1, 'Xiaomi Redmi Note 5 plus', 35, 'ahmed zahin111555rerwewewe', 1, 23000, '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka', 1229),
(83, 13, 'Huawei P9', 35, 'ahmed zahin111555rerwewewe', 1, 1200, '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka', 1229);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `address` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `email`, `password`, `phone`, `address`) VALUES
(35, 'ahmed zahin', 'atonu', 'atonu.zahin@gmail.com', 'sha1$68ffcd67$1$b8058d3765425ce61d5bf27fb1fc07f58eb902f3', '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka'),
(36, 'ahmed zahin', 'atonu1', 'atonu.zahin1@gmail.com', 'sha1$cf8c60b8$1$df8d727b565d9d60123f5b336fc738642ee2ca7e', '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka'),
(37, 'edit test', 'test', 'test@gmail.com', 'sha1$ec0b5a25$1$dd98f46c1b2d3e38376b6076fa49a43c3f27d490', '01912312312', 'basha');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `lost`
--
ALTER TABLE `lost`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `lost`
--
ALTER TABLE `lost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
