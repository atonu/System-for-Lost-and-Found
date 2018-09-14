-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2018 at 03:15 PM
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
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `last_located` varchar(64) NOT NULL,
  `origin` varchar(256) DEFAULT NULL,
  `catagory` varchar(256) DEFAULT NULL,
  `agent_name` varchar(256) DEFAULT NULL,
  `contact` varchar(256) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `date` varchar(255) NOT NULL,
  `promotion` int(10) NOT NULL,
  `reward` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lost`
--

INSERT INTO `lost` (`id`, `lost_name`, `age`, `image`, `image2`, `image3`, `last_located`, `origin`, `catagory`, `agent_name`, `contact`, `uname`, `date`, `promotion`, `reward`) VALUES
(26, 'Akkas Mia', 69, '/uploads/myImage (5).jpg', NULL, NULL, 'Kuratoli Road, BRA', 'Rajshahi', 'Lost', 'atonu', '017xxxxxxxx', '', '2018/07/31', 0, 0),
(28, 'Joshim Hawladar', 56, '/uploads/myImage (4).jpg', NULL, NULL, 'mirpur,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', '', '2018/07/31', 0, 0),
(31, 'shajib alam', 66, '/uploads/myImage (1).jpg', NULL, NULL, 'birulia bridge, Dhaka', 'Chittagong', 'Lost', 'Thakur', '018xxxxxxxx', '', '2018/07/31', 0, 0),
(32, 'Aunty', 80, '/uploads/myImage (2).jpg', NULL, NULL, 'Mogbazar,Dhaka', 'Jessore', 'Lost', 'Pulak Barmon', '019xxxxxxxx', '', '2018/07/31', 0, 0),
(33, 'tariqul Islam', 30, '/uploads/myImage-1536300178938.jpg', NULL, NULL, 'Kuratoli Road, BRA', 'No idea', 'Found', 'Nishe,Nishat', '017xxxxxxxx', '', '2018/07/31', 0, 0),
(35, 'lulu boyati', 65, '/uploads/pic (4).jpg', NULL, NULL, 'Shitakundo', 'Chittagong', 'Found', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/07/31', 0, 0),
(64, 'Kamal hossain', 56, '/uploads/pic (4).jpg', NULL, NULL, 'mirpur stadium premise', 'Dhaka', 'Lost', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/08/01', 0, 0),
(65, 'shovic azmayn', 30, '/uploads/pic (3).jpg', NULL, NULL, 'basundhara', 'dinajpur', 'Lost', 'atonu', '019xxxx', 'atonu', '2018/08/01', 0, 0),
(66, 'wahid', 23, '/uploads/pic (5).jpg', NULL, NULL, 'mirpur,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '123', 'atonu', '2018/08/01', 0, 0),
(71, 'molla', 22, '/uploads/myImage-1536299779706.jpg', NULL, NULL, 'momahhadpur,Dhaka', 'Feni', 'Found', 'ahmed', '019', 'atonu', '2018/09/01', 0, 0),
(72, 'Chandler Bing', 40, '/uploads/myImage-1536300088129.jpg', NULL, NULL, 'Central Perk', 'Ireland', 'Lost', 'Monica', '234', 'atonu', '2018/09/01', 0, 0),
(73, 'promo', 20, '/uploads/myImage-1536298288841.jpg', NULL, NULL, 'jhigatola,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', 'atonu', '2018/09/01', 0, 0),
(74, 'promo - found', 12, '/uploads/myImage-1536299790639.jpg', NULL, NULL, 'shantinagar,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', 'atonu', '2018/09/01', 0, 0),
(75, 'Fatty', 12, '/uploads/myImage-1536298288841.jpg', NULL, NULL, 'jhigatola,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', 'atonu', '2018/09/01', 240, 0),
(76, 'babu', 8, '/uploads/myImage (1).jpg', NULL, NULL, 'mirpur,Dhaka', 'No idea', 'Lost', 'ahmed zahin', '123', 'atonu', '2018/09/02', 0, 0),
(77, 'abbas', 45, '/uploads/pic (2).jpg', NULL, NULL, 'kalshi,Dhaka', 'noakhali', 'Lost', 'kashem', '017xxxxxx', 'atonu', '2018/09/03', 0, 0),
(78, 'admin post test', 44, '/uploads/myImage-1536299779706.jpg', NULL, NULL, 'Basundhara', 'not known', 'Lost', 'ariya stark', '', '', '123', 0, 0),
(79, 'saddam', 54, '/uploads/myImage (3).jpg', NULL, NULL, 'shonarga', 'notor', 'Found', 'kashem', '123xxx', 'atonu', '2018/09/03', 80, 0),
(80, 'Fatima', 52, '/uploads/pic (1).jpg', NULL, NULL, 'Kuratoli Road, BRA', 'Dhaka', 'Found', 'ahmed zahin', '132', 'atonu', '2018/09/04', 80, 0),
(82, 'irfan', 123, '/uploads/pic (5).jpg', NULL, NULL, 'jhigatola,Dhaka', 'madaripur', 'Lost', 'irfan', '33123123', 'atonu', '2018/09/05', 80, 0),
(83, 'just in case', 123, '/uploads/myImage-1536298288841.jpg', NULL, NULL, 'jhigatola,Dhaka', 'Dhaka', 'Lost', 'ahmed zahin', '1332123', 'atonu', '2018/09/05', 0, 0),
(85, 'tarek', 1200, '/uploads/pic (2).jpg', NULL, NULL, 'jhigatola,Dhaka', 'Dhaka', 'Lost', 'ahmed zahin', '123123', 'atonu', '2018/09/05', 80, 1000),
(102, 'Ahmed', 23, '/uploads/pic (4).jpg', NULL, NULL, 'Dhaka', 'Dhaka', 'Lost', 'Ahmed', '019xxxxxxxx', 'atonu', '2018/09/07', 80, 0),
(103, 'Xisan', 22, '/uploads/myImage-1536297566053.jpg', NULL, NULL, 'Wolf Pack HQ', 'Dhaka', 'Lost', 'XYZ', '017xxxxxxxxx', 'atonu', '2018/09/07', 240, 5000),
(104, 'Inan', 22, '/uploads/myImage-1536297967209.jpg', '/uploads/myImage-1536297566053.jpg', NULL, 'Wolf Pack HQ', 'Dhaka', 'Found', 'Fatty', '017xxxxxxxx', 'atonu', '2018/09/07', 240, 0),
(105, 'Adib', 50, '/uploads/myImage-1536298093851.jpg', '/uploads/myImage-1536297566053.jpg', '/uploads/myImage-1536298288841.jpg', 'Wolf Pack HQ', 'No idea', 'Lost', 'ahmed zahin', '123123123', 'atonu', '2018/09/07', 240, 10000),
(106, 'Sobec', 23, '/uploads/myImage-1536298123458.jpg', NULL, NULL, 'Wolf Pack HQ', 'No idea', 'Lost', 'ahmed zahin', '', 'atonu', '2018/09/07', 0, 0),
(107, 'Promo - lost', 23, '/uploads/myImage-1536299779706.jpg', NULL, NULL, 'Wolf Pack HQ', 'Dhaka', 'Lost', 'WPfan69', '123123', 'atonu', '2018/09/07', 0, 0),
(108, 'admin post test', 22, '/uploads/myImage-1536339184196.jpg', NULL, NULL, 'can\'t tell', 'can\'t tell', 'Lost', 'admin', '123', '', '123', 0, 0),
(109, 'admin image test', 12, '/uploads/myImage-1536339184196.jpg', NULL, NULL, 'jhigatola,Dhaka', 'Chittagong', 'Found', 'mr. A', '019xxxxxxx', '', '019xxxxxxx', 0, 0),
(116, 'Nishee', 22, '/uploads/myImage-1536366618421.jpg', NULL, NULL, 'Shyamoli', 'Bagura', 'Lost', 'ahmed zahin', '123xxxx', 'atonu', '2018/09/08', 80, 6000),
(117, 'blnk test', 12, 'https://i.imgur.com/S58Jnn6.jpg', NULL, NULL, 'jhigatola,Dhaka', 'Dhaka', 'Lost', 'ahmed zahin', '123123', 'atonu', '2018/09/08', 0, 0),
(118, 'lili', 17, '/uploads/myImage-1536368235818.jpg', NULL, NULL, 'Remakri', 'Bandorban', 'Found', 'Shovic', '019xxxxxx', 'atonu', '2018/09/08', 0, 0),
(122, 'hridi', 19, '/uploads/myImage-1536928452606.jpg', '/uploads/myImage2-1536928452607.jpg', NULL, 'UIU permanent campus', 'No idea', 'Lost', 'Punk Inan', '019xxx', 'atonu', '2018/09/09', 0, 0),
(133, 'wahid', 23, '/uploads/pic (5).jpg', NULL, NULL, 'mirpur,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '019xxxx', 'atonu', '2018/09/10', 0, 0),
(134, 'Shovic', 23, '/uploads/myImage-1536298123458.jpg', NULL, NULL, 'Wolf Pack HQ', 'No idea', 'Lost', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/09/10', 0, 0),
(135, 'Promo - lost', 23, '', NULL, NULL, 'Wolf Pack HQ', 'Dhaka', 'Lost', 'WPfan69', '123123', 'atonu', '2018/09/10', 0, 0),
(136, 'wahid', 23, '/uploads/pic (5).jpg', NULL, NULL, 'mirpur,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '016xxxx', 'atonu', '2018/09/10', 0, 0),
(302, 'wolf pack', 30, '/uploads/myImage-1536927464196.jpg', '/uploads/myImage2-1536927464196.jpg', '/uploads/myImage3-1536927464198.jpg', 'dhaka', 'Dhaka', 'Lost', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/09/11', 0, 0),
(307, 'demo', 22, '/uploads/myImage-1536625949447.jpg', '/uploads/myImage2-1536625949452.jpg', '/uploads/myImage3-1536625949453.jpg', 'jhigatola,Dhaka', 'dhaka', 'Lost', 'ahmed zahin', '019xxx', 'atonu', '2018/09/11', 0, 0),
(308, 'Lost Kid', 10, '/uploads/myImage-1536929032222.jpg', '/uploads/myImage2-1536929032224.jpg', NULL, 'Shewra', 'Unknown', 'lost', 'ahmed zahin', '123', 'atonu', '2018/09/14', 0, 1000);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=309;

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
