-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2018 at 12:05 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
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
(2, 'mahid', 'mahid', 'ma@gmIL.COM', '', 'sha1$68ffcd67$1$b8058d3765425ce61d5bf27fb1fc07f58eb902f3');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productname` varchar(256) NOT NULL,
  `price` int(8) NOT NULL,
  `quantity` int(8) NOT NULL,
  `catagory` varchar(64) NOT NULL,
  `image1` varchar(256) DEFAULT NULL,
  `image2` varchar(256) DEFAULT NULL,
  `image3` varchar(256) DEFAULT NULL,
  `details` varchar(8192) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `productname`, `price`, `quantity`, `catagory`, `image1`, `image2`, `image3`, `details`, `date`) VALUES
(1, 'Xiaomi Redmi Note 5 plus', 23000, 19, 'smart phone', NULL, NULL, NULL, 'lul', '0000-00-00'),
(2, 'iPhone 8 Plus', 130000, 5, 'smart phones', NULL, NULL, NULL, '', '0000-00-00'),
(3, 'Galaxy S9 Plus', 86000, 12, 'smart phone', NULL, NULL, NULL, 'Snapdragon varient', '0000-00-00'),
(4, 'Google Pixel 2', 68000, 2, 'smart phone', NULL, NULL, NULL, 'Google flagship', '0000-00-00'),
(5, 'Oneplus 5T', 46000, 12, 'smart phone', NULL, NULL, NULL, 'OS: Android Oreo', '0000-00-00'),
(7, 'Oppo Find X', 160000, 3, 'smart phone', NULL, NULL, NULL, '93% screen to body ration', '0000-00-00'),
(11, 'Huawei P9', 1200, 2, 'smart phone', NULL, NULL, NULL, 'asdfghj', '0000-00-00'),
(13, 'Huawei P9', 1200, 0, 'smart phone', NULL, NULL, NULL, 'asdfghj', '0000-00-00'),
(15, 'Huawei P9', 1200, 2, 'smart phone', NULL, NULL, NULL, 'asdfghj', '0000-00-00'),
(16, 'Huawei P9', 30000, 1, 'smart phone', NULL, NULL, NULL, 'asd', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `soldproduct`
--

CREATE TABLE `soldproduct` (
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
-- Dumping data for table `soldproduct`
--

INSERT INTO `soldproduct` (`id`, `productid`, `productname`, `userid`, `username`, `quantity`, `price`, `phonenumber`, `address`, `zipcode`) VALUES
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
(35, 'ahmed zahin111555rerwewewe', 'atonu', 'atonu.zahin@gmail.com', 'sha1$68ffcd67$1$b8058d3765425ce61d5bf27fb1fc07f58eb902f3', '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka'),
(36, 'ahmed zahin', 'atonu1', 'atonu.zahin1@gmail.com', 'sha1$cf8c60b8$1$df8d727b565d9d60123f5b336fc738642ee2ca7e', '01760605684', '161/4 Ahmed Nagar,Mirpur 1,Dhaka');

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
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `soldproduct`
--
ALTER TABLE `soldproduct`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `soldproduct`
--
ALTER TABLE `soldproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
