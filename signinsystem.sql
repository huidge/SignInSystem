-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 07 月 12 日 09:33
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `signinsystem`
--

-- --------------------------------------------------------

--
-- 表的结构 `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `cno` varchar(15) NOT NULL DEFAULT '',
  `cname` varchar(15) NOT NULL,
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `cst`
--

CREATE TABLE IF NOT EXISTS `cst` (
  `id` int(11) NOT NULL DEFAULT '0',
  `sno` varchar(15) DEFAULT NULL,
  `tno` varchar(15) DEFAULT NULL,
  `cno` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cno` (`cno`),
  KEY `sno` (`sno`),
  KEY `tno` (`tno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `records`
--

CREATE TABLE IF NOT EXISTS `records` (
  `sno` varchar(15) NOT NULL DEFAULT '',
  `date_time` date NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `sno` varchar(15) NOT NULL DEFAULT '',
  `sname` varchar(15) NOT NULL,
  `major` varchar(15) DEFAULT NULL,
  `openid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `teachers`
--

CREATE TABLE IF NOT EXISTS `teachers` (
  `tno` varchar(15) NOT NULL DEFAULT '',
  `tname` varchar(15) NOT NULL,
  `openid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`tno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 限制导出的表
--

--
-- 限制表 `cst`
--
ALTER TABLE `cst`
  ADD CONSTRAINT `cst_ibfk_1` FOREIGN KEY (`cno`) REFERENCES `courses` (`cno`),
  ADD CONSTRAINT `cst_ibfk_2` FOREIGN KEY (`sno`) REFERENCES `students` (`sno`),
  ADD CONSTRAINT `cst_ibfk_3` FOREIGN KEY (`tno`) REFERENCES `teachers` (`tno`);

--
-- 限制表 `records`
--
ALTER TABLE `records`
  ADD CONSTRAINT `records_ibfk_1` FOREIGN KEY (`sno`) REFERENCES `students` (`sno`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
