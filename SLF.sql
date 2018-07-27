-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2018 at 12:24 AM
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
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lost`
--

INSERT INTO `lost` (`id`, `lost_name`, `age`, `image`, `last_located`, `origin`, `catagory`, `agent_name`, `contact`, `date`) VALUES
(26, 'Akkas Mia', 69, 0x617364, 'Kuratoli Road, BRA', 'Rajshahi', 'lost', 'atonu', '017xxxxxxxx', '0000-00-00'),
(27, 'Kuddus', 71, 0x6c756c, 'mirpur,Dhaka', 'Sylhet', 'Lost', 'atonu', '018xxxxxxxx', '0000-00-00'),
(28, 'Joshim Hawladar', 56, 0x33373638353230375f323038323434313137353334333332395f333533333034353536353138323936373830385f6e2e6a7067, 'jhigatola,Dhaka', 'Dhaka', 'Found', 'Kashem bhai', '019xxxxxxxx', '0000-00-00'),
(31, 'shajib alam', 66, 0x33373730313935375f323130353330373139393638353037385f363637323734333831333335313437333135325f6e2e6a7067, 'birulia bridge, Dhaka', 'Chittagong', 'Lost', 'Thakur', '018xxxxxxxx', '0000-00-00'),
(32, 'Musa Bin Shamsher', 80, 0x33373730313935375f323130353330373139393638353037385f363637323734333831333335313437333135325f6e2e6a7067, 'Mogbazar,Dhaka', 'Jessore', 'Lost', 'Pulak Barmon', '019xxxxxxxx', '0000-00-00'),
(33, 'tarukul Islam', 30, 0x33373638353230375f323038323434313137353334333332395f333533333034353536353138323936373830385f6e2e6a7067, 'Kuratoli Road, BRA', 'No idea', 'Found', 'Nishe,Nishat', '017xxxxxxxx', '0000-00-00'),
(35, 'lulu boyati', 55, 0x627574742e6a7067, 'mirpur,Dhaka', 'Chittagong', 'Found', 'ahmed zahin', '017xxxxxxxx', '0000-00-00'),
(36, 'TARIKUL', 24, 0x627574742e6a7067, 'Kuratoli Road, BRA', 'dhaka', 'Lost', 'atonu', '123', '0000-00-00'),
(37, 'asdasd', 1200, 0x33373831353630365f3939363937303531303437373839375f373037313331383239303234383736313334345f6e2e6a7067, 'jhigatola,Dhaka', 'No idea', 'Lost', 'ahmed zahin', 'asd', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lost`
--
ALTER TABLE `lost`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lost`
--
ALTER TABLE `lost`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
