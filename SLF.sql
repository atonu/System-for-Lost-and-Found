-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2018 at 08:51 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.1.19

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
(2, 'mahid', 'mahid', 'ma@gmIL.COM', '', 'sha1$68ffcd67$1$b8058d3765425ce61d5bf27fb1fc07f58eb902f3');

-- --------------------------------------------------------

--
-- Table structure for table `lost`
--

CREATE TABLE `lost` (
  `id` int(11) NOT NULL,
  `lost_name` varchar(256) NOT NULL,
  `age` int(8) NOT NULL,
  `image` longblob NOT NULL,
  `last_located` varchar(64) NOT NULL,
  `origin` varchar(256) DEFAULT NULL,
  `catagory` varchar(256) DEFAULT NULL,
  `agent_name` varchar(256) DEFAULT NULL,
  `contact` varchar(256) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lost`
--

INSERT INTO `lost` (`id`, `lost_name`, `age`, `image`, `last_located`, `origin`, `catagory`, `agent_name`, `contact`, `uname`, `date`) VALUES
(26, 'Akkas Mia', 69, 0x617364, 'Kuratoli Road, BRA', 'Rajshahi', 'lost', 'atonu', '017xxxxxxxx', '', '2018/07/31'),
(28, 'Joshim Hawladar', 56, 0x33373730313935375f323130353330373139393638353037385f363637323734333831333335313437333135325f6e2e6a7067, 'mirpur,Dhaka', 'Dhaka', 'Found', 'ahmed zahin', '123', '', '2018/07/31'),
(31, 'shajib alam', 66, 0x33373730313935375f323130353330373139393638353037385f363637323734333831333335313437333135325f6e2e6a7067, 'birulia bridge, Dhaka', 'Chittagong', 'Lost', 'Thakur', '018xxxxxxxx', '', '2018/07/31'),
(32, 'Musa Bin Shamsher', 80, 0x33373730313935375f323130353330373139393638353037385f363637323734333831333335313437333135325f6e2e6a7067, 'Mogbazar,Dhaka', 'Jessore', 'Lost', 'Pulak Barmon', '019xxxxxxxx', '', '2018/07/31'),
(33, 'tarukul Islam', 30, 0x33373638353230375f323038323434313137353334333332395f333533333034353536353138323936373830385f6e2e6a7067, 'Kuratoli Road, BRA', 'No idea', 'Found', 'Nishe,Nishat', '017xxxxxxxx', '', '2018/07/31'),
(35, 'lulu boyati', 55, 0x627574742e6a7067, 'mirpur,Dhaka', 'Chittagong', 'Found', 'ahmed zahin', '017xxxxxxxx', 'atonu', '2018/07/31'),
(36, 'TARIKUL', 24, 0x627574742e6a7067, 'Kuratoli Road, BRA', 'dhaka', 'Lost', 'atonu', '123', '', '2018/07/31'),
(64, 'Kamal', 56, 0x7468652d656e642e706e67, 'Lost', 'Dhaka', 'Lost', 'ahmed zahin', '018xxxxxxxx', 'atonu', '2018/08/01'),
(65, 'shovic ', 30, 0x33363237343432375f313931383738353339383136313034345f393138363437343436363733363037383834385f6e2e6a7067, 'mirpur', 'dinajpur', 'lost', 'atonu', '019xxxxx', 'atonu', '2018/08/01'),
(66, 'abcd', 23, 0x33363237343432375f313931383738353339383136313034345f393138363437343436363733363037383834385f6e2e6a7067, 'jhigatola,Dhaka', 'dhaka', 'Found', 'Pulak Barmon', '12312', 'atonu', '2018/08/01');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lost`
--
ALTER TABLE `lost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

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
