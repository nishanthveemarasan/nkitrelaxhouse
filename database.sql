-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2021 at 07:26 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `relax`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `user_id`, `phone`, `city`, `country`, `postal_code`, `created_at`, `updated_at`) VALUES
(1, 1, '0123454345', 'Melbourne', 'Australia', '3123', '2021-08-02 04:10:09', '2021-08-18 11:45:01'),
(2, 14, '04040304', 'fow', 'sd', 'aip', '2021-10-03 02:26:53', '2021-10-03 09:06:24'),
(3, 15, '0402457102', 'Hawthorn east', 'Australia', '3123', '2021-10-03 02:27:16', '2021-10-03 02:27:16');

-- --------------------------------------------------------

--
-- Table structure for table `checkdouble`
--

CREATE TABLE `checkdouble` (
  `id` int(10) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `checkdouble`
--

INSERT INTO `checkdouble` (`id`, `price`) VALUES
(1, 150),
(2, 150),
(3, 150),
(4, 150.879),
(5, 150.8799);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `content` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('approve','disapprove') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `post_id`, `content`, `status`, `created_at`, `updated_at`) VALUES
(17, 1, 13, 'Will it be visible', 'approve', '2020-11-08 03:58:00', '2020-11-18 16:43:04'),
(23, 1, 13, 'Will it be visible', 'approve', '2020-11-08 03:58:00', '2020-11-18 16:43:04'),
(29, 1, 13, 'this is nice', 'approve', '2021-06-14 04:32:33', '2021-06-14 04:32:33'),
(32, 4, 13, 'this is nice', 'approve', '2021-06-14 04:35:44', '2021-06-14 04:35:44'),
(33, 4, 13, 'this is nice', 'approve', '2021-06-14 04:36:06', '2021-06-14 04:36:06'),
(34, 4, 13, 'this is nice', 'approve', '2021-06-18 03:47:46', '2021-06-18 03:47:46'),
(35, 4, 13, 'this is nice', 'approve', '2021-06-18 04:08:47', '2021-06-18 04:08:47'),
(36, 4, 13, 'this is nice', 'approve', '2021-06-18 04:09:15', '2021-06-18 04:09:15'),
(37, 1, 4, 'weqwe', 'disapprove', '2021-06-18 04:12:19', '2021-08-16 12:35:22'),
(38, 1, 4, 'adasd', 'approve', '2021-06-18 04:13:27', '2021-06-18 04:13:27'),
(39, 1, 4, 'adasd', 'approve', '2021-06-18 04:13:43', '2021-06-18 04:13:43'),
(40, 1, 4, 'sdfsdf', 'approve', '2021-06-18 04:14:16', '2021-06-18 04:14:16'),
(41, 1, 4, 'sdasda', 'approve', '2021-06-18 04:15:12', '2021-06-18 04:15:12'),
(42, 1, 4, 'ewewer', 'approve', '2021-06-18 04:16:15', '2021-06-18 04:16:15'),
(43, 1, 4, 'sdfsdf', 'approve', '2021-06-18 04:16:53', '2021-06-18 04:16:53'),
(44, 1, 4, 'abcd', 'approve', '2021-06-18 04:17:22', '2021-06-18 04:17:22'),
(45, 1, 4, 'ffsdfs', 'approve', '2021-06-18 04:18:33', '2021-06-18 04:18:33'),
(46, 4, 13, 'this is nice', 'approve', '2021-06-18 04:57:50', '2021-06-18 04:57:50'),
(47, 1, 4, 'abcdfgsdfsfsdfsdf', 'approve', '2021-06-18 04:59:15', '2021-06-18 04:59:15'),
(48, 1, 4, 'dsfsdfsdf', 'disapprove', '2021-06-18 05:01:40', '2021-08-16 12:35:29'),
(49, 1, 5, 'dsdf', 'approve', '2021-06-18 05:01:46', '2021-06-18 05:01:46'),
(50, 1, 5, 'sdfsdfsdf', 'approve', '2021-06-18 05:01:50', '2021-06-18 05:01:50'),
(51, 1, 4, 'reerger', 'approve', '2021-06-21 03:28:49', '2021-06-21 03:28:49'),
(52, 4, 9, 'This look nice!!', 'approve', '2021-07-26 05:13:37', '2021-07-26 05:13:37'),
(53, 4, 9, 'this look nice', 'approve', '2021-07-26 05:13:56', '2021-07-26 05:13:56'),
(54, 4, 4, 'cvxcvxcv', 'approve', '2021-07-26 05:14:03', '2021-07-26 05:14:03'),
(55, 4, 4, 'ddsfsdf', 'approve', '2021-07-26 05:14:28', '2021-07-26 05:14:28'),
(56, 4, 4, 'sdfsdfdsf', 'approve', '2021-07-26 05:14:43', '2021-07-26 05:14:43'),
(57, 4, 5, 'sdfsdf', 'approve', '2021-07-26 05:14:48', '2021-07-26 05:14:48'),
(58, 4, 5, 'dsfsdf', 'approve', '2021-07-26 05:14:54', '2021-07-26 05:14:54'),
(59, 4, 9, 'sdfsdf', 'approve', '2021-07-26 05:14:59', '2021-07-26 05:14:59'),
(60, 4, 13, 'sdf', 'approve', '2021-07-26 05:15:07', '2021-07-26 05:15:07'),
(61, 4, 14, 'fdfdfgdfg', 'approve', '2021-07-26 05:29:41', '2021-07-26 05:29:41'),
(62, 4, 14, 'dffgdfg', 'approve', '2021-07-26 05:29:45', '2021-07-26 05:29:45'),
(63, 4, 4, 'xccxv', 'approve', '2021-07-26 06:13:05', '2021-07-26 06:13:05'),
(64, 4, 4, 'esefs', 'approve', '2021-07-28 05:54:57', '2021-07-28 05:54:57'),
(65, 1, 4, 'dasdasd', 'approve', '2021-07-28 05:56:13', '2021-07-28 05:56:13');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_type`
--

CREATE TABLE `invoice_type` (
  `id` int(11) NOT NULL,
  `type` enum('IS','VIC','OVS') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoice_type`
--

INSERT INTO `invoice_type` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'IS', NULL, NULL),
(2, 'VIC', NULL, NULL),
(3, 'OVS', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `emp_type` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'emp',
  `emp_number` int(11) NOT NULL,
  `job_title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_type` enum('part-time','full-time') COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_started_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `user_id`, `emp_type`, `emp_number`, `job_title`, `job_type`, `job_started_date`, `created_at`, `updated_at`) VALUES
(1, 1, 'emp', 100001, 'BackPacker/Bendwood', 'part-time', '2021-07-14 04:35:56', '2021-08-02 04:07:50', '2021-08-02 04:07:50'),
(2, 14, 'emp', 100002, 'title', 'part-time', '2020-10-11 18:30:00', '2021-10-03 09:15:26', '2021-10-03 09:15:30'),
(3, 15, 'emp', 100006, 'Warehouse Delivery', 'full-time', '2021-03-24 18:30:00', '2021-10-03 09:32:39', '2021-10-03 10:25:17'),
(4, 4, 'emp', 100003, 'title', 'part-time', '2020-10-11 18:30:00', '2021-10-03 10:13:06', '2021-10-03 10:13:06'),
(5, 9, 'emp', 100004, 'Warehouse Assistant Manager', 'full-time', '2021-10-02 18:30:00', '2021-10-03 10:20:40', '2021-10-03 10:20:40'),
(6, 10, 'emp', 100005, 'Warehouse IT Staff', 'part-time', '2021-10-02 18:30:00', '2021-10-03 10:22:41', '2021-10-03 10:22:41');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(6, 1, 9, '2020-11-08 01:35:52', '2020-11-08 01:35:52'),
(8, 1, 5, '2020-11-08 01:35:59', '2020-11-08 01:35:59'),
(28, 1, 14, '2021-06-18 03:09:26', '2021-06-18 03:09:26'),
(29, 1, 17, '2021-06-18 03:09:36', '2021-06-18 03:09:36'),
(51, 4, 4, '2021-07-26 09:55:59', '2021-07-26 09:55:59'),
(54, 4, 5, '2021-07-26 09:56:22', '2021-07-26 09:56:22'),
(57, 4, 9, '2021-07-26 09:57:52', '2021-07-26 09:57:52'),
(60, 4, 13, '2021-07-26 09:58:12', '2021-07-26 09:58:12'),
(63, 4, 18, '2021-07-26 09:58:35', '2021-07-26 09:58:35'),
(64, 4, 19, '2021-07-26 09:58:40', '2021-07-26 09:58:40');

-- --------------------------------------------------------

--
-- Table structure for table `logouts`
--

CREATE TABLE `logouts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `logouts`
--

INSERT INTO `logouts` (`id`, `user_id`, `count`, `created_at`, `updated_at`) VALUES
(1, 1, 14, '2020-11-15 16:12:44', '2021-07-27 04:16:44'),
(4, 4, 1, '2020-11-15 17:02:00', '2020-11-15 17:02:51'),
(5, 9, 0, '2020-11-20 14:02:16', '2020-11-20 14:02:16');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `action` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `user_id`, `action`, `description`, `created_at`, `updated_at`) VALUES
(1, 4, 'Insert', 'Item Has been Added', '2020-11-07 16:45:21', '2020-11-07 16:45:21'),
(2, 1, 'Insert', 'Item Has been Added', '2020-11-07 16:45:21', '2020-11-07 16:45:21'),
(3, 1, 'Insert', 'Item Has been Added', '2020-11-07 16:45:21', '2020-11-07 16:45:21'),
(4, 1, 'Insert', 'Item Has been Added', '2020-11-07 16:45:21', '2020-11-07 16:45:21'),
(7, 1, 'Insert', 'Item Has been Added', '2020-11-07 16:45:21', '2020-11-07 16:45:21'),
(8, 1, 'Insert', 'Item Has been Added', '2020-11-07 16:45:21', '2020-11-07 16:45:21'),
(9, 1, 'Update an Item', 'B9 Armchair - Black has been Updated to the system!!!', '2020-11-14 23:11:48', '2020-11-14 23:11:48'),
(10, 1, 'Delete an Item', 'New Item has been Deleted from the system!!!', '2020-11-14 23:14:41', '2020-11-14 23:14:41'),
(11, 1, 'Add New Item', '<strong>New Bronco Chair - Black</strong> has been added to the system!!!', '2020-11-14 23:19:22', '2020-11-14 23:19:22'),
(12, 1, 'Update an Item', '\'B9 Armchair - Black\' has been Updated to the system!!!', '2020-11-14 23:21:03', '2020-11-14 23:21:03'),
(13, 1, 'Sell Items', ' Order: \'212125\' has been Created in the system!!!', '2020-11-14 23:24:11', '2020-11-14 23:24:11'),
(14, 1, 'Update Order', ' Order: \'212125\' has been Updated in the system!!!', '2020-11-14 23:28:50', '2020-11-14 23:28:50'),
(15, 1, 'Update Order', ' Order: \'212125\' has been Cenceled in the system!!!', '2020-11-14 23:30:55', '2020-11-14 23:30:55'),
(16, 1, 'Update USer Role', ' User \'\' Role has been changed in the system!!!', '2020-11-14 23:34:39', '2020-11-14 23:34:39'),
(17, 1, 'Update USer Role', ' User \'\' has been deleted from the system!!!', '2020-11-15 00:08:29', '2020-11-15 00:08:29'),
(18, 1, 'Update USer Role', ' User \'kash_nish\' Role has been changed in the system!!!', '2020-11-15 00:13:24', '2020-11-15 00:13:24'),
(19, 1, 'Edit Comment Status', 'Comment\'s status has been changed in the system!!!', '2020-11-15 00:17:04', '2020-11-15 00:17:04'),
(20, 1, 'Update USer Role', ' Comments has been deleted/changed from the system!!!', '2020-11-15 00:19:34', '2020-11-15 00:19:34'),
(21, 1, 'Update USer Role', ' User \'\' has been deleted from the system!!!', '2020-11-15 00:23:17', '2020-11-15 00:23:17'),
(22, 1, 'Add New Item', '\'DABNEW\' has been added to the system!!!', '2020-11-18 13:37:28', '2020-11-18 13:37:28'),
(23, 1, 'Update an Item', '\'DABNEW\' has been Updated to the system!!!', '2020-11-18 13:41:14', '2020-11-18 13:41:14'),
(24, 1, 'Delete an Item', '\'DABNEW\' has been Deleted from the system!!!', '2020-11-18 13:41:28', '2020-11-18 13:41:28'),
(25, 1, 'Update Order', ' Order: \'212124\' has been Updated in the system!!!', '2020-11-18 13:44:53', '2020-11-18 13:44:53'),
(26, 1, 'Update Order', ' Order: \'101010\' has been Cencelled in the system!!!', '2020-11-18 13:50:26', '2020-11-18 13:50:26'),
(27, 1, 'Update USer Role', ' User \'kash_nish\' Role has been changed in the system!!!', '2020-11-18 13:52:09', '2020-11-18 13:52:09'),
(28, 1, 'Update USer Role', ' User \'\' has been deleted from the system!!!', '2020-11-18 13:55:13', '2020-11-18 13:55:13'),
(29, 1, 'Edit Comment Status', 'Comment\'s status has been changed in the system!!!', '2020-11-18 13:57:55', '2020-11-18 13:57:55'),
(30, 1, 'Edit Comment Status', 'Comment\'s status has been changed in the system!!!', '2020-11-18 13:59:02', '2020-11-18 13:59:02'),
(31, 1, 'Update USer Role', ' Comments has been deleted/changed from the system!!!', '2020-11-18 14:00:47', '2020-11-18 14:00:47'),
(32, 1, 'Update USer Role', ' Comments has been deleted/changed from the system!!!', '2020-11-18 14:01:21', '2020-11-18 14:01:21'),
(33, 1, 'Edit Comment Status', 'Comment\'s status has been changed in the system!!!', '2020-11-18 16:05:23', '2020-11-18 16:05:23'),
(34, 1, 'Edit Comment Status', 'Comment\'s status has been changed in the system!!!', '2020-11-18 16:20:26', '2020-11-18 16:20:26'),
(35, 1, 'Edit Comment Status', 'Comment\'s status has been changed in the system!!!', '2020-11-18 16:23:39', '2020-11-18 16:23:39'),
(36, 1, 'Update USer Role', ' Comment has been deleted from the system!!!', '2020-11-18 16:24:32', '2020-11-18 16:24:32'),
(37, 1, 'Update USer Role', ' Comment has been deleted from the system!!!', '2020-11-18 16:25:56', '2020-11-18 16:25:56'),
(38, 1, 'Update USer Role', ' Comment has been deleted from the system!!!', '2020-11-18 16:31:41', '2020-11-18 16:31:41'),
(39, 1, 'Update USer Role', ' Comment has been deleted from the system!!!', '2020-11-18 16:31:58', '2020-11-18 16:31:58'),
(40, 1, 'Update USer Role', ' Comments has been deleted/changed from the system!!!', '2020-11-18 16:40:09', '2020-11-18 16:40:09'),
(41, 1, 'Update USer Role', ' Comments has been deleted/changed from the system!!!', '2020-11-18 16:40:25', '2020-11-18 16:40:25'),
(42, 1, 'Update USer Role', ' Comments has been deleted/changed from the system!!!', '2020-11-18 16:43:04', '2020-11-18 16:43:04');

-- --------------------------------------------------------

--
-- Table structure for table `mails`
--

CREATE TABLE `mails` (
  `id` int(11) NOT NULL,
  `from` int(11) NOT NULL,
  `to` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read` enum('read','unread') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unread',
  `status` enum('active','trash','delete') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mails`
--

INSERT INTO `mails` (`id`, `from`, `to`, `content`, `read`, `status`, `created_at`, `updated_at`) VALUES
(12, 1, 4, 'is it working?', 'unread', 'active', '2020-11-09 23:58:51', '2020-11-09 23:58:51'),
(14, 1, 4, 'This is the third message', 'unread', 'active', '2020-11-11 16:35:58', '2020-11-11 16:35:58'),
(15, 4, 1, 'This is the third message', 'read', 'active', '2020-11-11 16:35:58', '2020-11-18 03:21:09');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2020_11_05_034019_create_sessions_table', 1),
(7, '2020_11_05_054203_create_stocks_table', 2),
(8, '2020_11_06_014425_create_sells_table', 3),
(12, '2020_11_06_080407_add_role_user_table', 4),
(13, '2020_11_07_004604_create_comments_table', 4),
(14, '2020_11_07_010246_create_posts_table', 4),
(15, '2020_11_07_011943_add_column_to_comment_table', 5),
(16, '2020_11_07_163903_create_logs_table', 6),
(17, '2020_11_08_083157_create_likes_table', 7),
(18, '2020_11_09_025939_create_mails_table', 8),
(20, '2020_11_11_060144_create_order_numbers_table', 9),
(21, '2020_11_11_062349_create_orders_table', 10),
(22, '2020_11_13_090801_add_a_column_to_order_table', 11),
(23, '2020_11_15_065210_add_a_column_to_users_table', 12),
(24, '2020_11_16_030034_create_logouts_table', 12),
(25, '2020_11_16_033645_add_a_column_to_logouts_table', 13),
(36, '2016_06_01_000001_create_oauth_auth_codes_table', 14),
(37, '2016_06_01_000002_create_oauth_access_tokens_table', 14),
(38, '2016_06_01_000003_create_oauth_refresh_tokens_table', 14),
(39, '2016_06_01_000004_create_oauth_clients_table', 14),
(40, '2016_06_01_000005_create_oauth_personal_access_clients_table', 14),
(41, '2021_08_02_033625_create_addresses_table', 15),
(42, '2021_08_02_035828_create_jobs_table', 16),
(43, '2021_09_13_035329_create_store_products_table', 17),
(44, '2021_09_22_103431_create_payments_table', 18);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('030bb4b74803d36b9c333036ec5f17f590f985bbb4bdd1e0b833839eaf6353e8837f7c28dbdd944a', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-18 11:13:37', '2021-08-18 11:13:37', '2022-08-18 16:43:37'),
('046cd697bb385b8502cb854eb8f3ad6500cf0c3fee155ca4232a0be76c2f098453ca16751ccdffa8', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 01:59:31', '2021-07-28 01:59:31', '2022-07-28 07:29:31'),
('048785a66856d726ae8431f5a9c3b89968792d1f204df800fe2a6f8864c3549167dae8c8f2fa6875', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-23 05:08:25', '2021-09-23 05:08:25', '2022-09-23 10:38:25'),
('0cb8d6bac243f00cfd823664a137db240f1347ba37f04e964f3690e477dfa76c38126991abc400cb', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-04 08:54:32', '2021-07-04 08:54:32', '2022-07-04 14:24:32'),
('0ccfd455dd873faba2c860fbb5ae1d76829e6156441e5d679dfe68c90b8523a4b7320ace2caf9901', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-18 11:16:28', '2021-08-18 11:16:28', '2022-08-18 16:46:28'),
('0de57bf575e430f52a68643a97994661c220697eb6f6f744aed70eb8631b55bfde3f983f1aa6537b', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 09:16:37', '2021-10-03 09:16:37', '2022-10-03 14:46:37'),
('120259ba65a068882cb7cc48c9ff58d16a2f9ee90fcb9024012ba49e1f872e6c3fd59b3232d68f84', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-24 22:36:21', '2021-09-24 22:36:21', '2022-09-25 04:06:21'),
('28f713f8ae02d0f9c152915f5dd04c6fdb5e9a5c8d0db1a3ec9e27e4ad263373be441a0ca7325bbc', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-07 21:54:00', '2021-09-07 21:54:00', '2022-09-08 03:24:00'),
('315134c27d93243216aa8c78e41efc3b14d1f32336026cf5343a87f7aecfdb575fbe1377e33fd94c', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-23 05:52:09', '2021-09-23 05:52:09', '2022-09-23 11:22:09'),
('317453d130bdbc45cf15b1b85c0be83221ea6f33832ba25d9b0166c575351ec65ac9d7bdada0774a', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-16 12:12:00', '2021-08-16 12:12:00', '2022-08-16 17:42:00'),
('3186d0d8eb81b332ef93c756d8f09046f9ad8a5c324e334f4252b1acfb60c337a19dda3898d52620', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-14 04:25:25', '2021-09-14 04:25:25', '2022-09-14 09:55:25'),
('32825d9380f4a9ebf69333d4213edaed9822ebf4ba157b911f6d8911197c9558630b0795de05b3a7', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 10:36:43', '2021-10-03 10:36:43', '2022-10-03 16:06:43'),
('3336b6e695c8d69cf52a00039017f9408a748f7f8b5b2596181b043a2715f3e2e9dd9f3adcaedef0', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-18 11:08:52', '2021-08-18 11:08:52', '2022-08-18 16:38:52'),
('3b22b80ec0a1961605235f686dbd3a50612f38f163a01721061a7089f459c1a7e0d370ffbbb95c91', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 12:54:56', '2021-07-28 12:54:56', '2022-07-28 18:24:56'),
('3b4999d977dad4d5a11775db27fae635ced3281818ff2160cd6cc70861e94280ae4de0ec41ae729e', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-29 22:06:47', '2021-07-29 22:06:47', '2022-07-30 03:36:47'),
('3ceea28cad67a7916d1232f0b32f6c5c7f0fa9ac8879125f6e87426312ca730557a626a693e1eb9d', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 02:45:12', '2021-07-28 02:45:12', '2022-07-28 08:15:12'),
('3d24c95d25b3dc1cd5736176725bd63aa85ca658c78e0ebb0452bfcc42ded5701f18d6630e35237a', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-24 22:37:35', '2021-09-24 22:37:35', '2022-09-25 04:07:35'),
('441a41fff187396df1462efda8c129835a80b34c6febd3eacf5a8d26fb97ca7dc8a377a31b290084', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-24 22:36:55', '2021-09-24 22:36:55', '2022-09-25 04:06:55'),
('4514578f4083a13ab18ea8797f2fe9dfb4f8d3978ee46f7a7fa16f4f302e6f43d52f26468938d9fb', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 09:35:36', '2021-07-28 09:35:36', '2022-07-28 15:05:36'),
('46281d83f11d592cadccd7fe20b0df41c7f9cef69c456af0085f6651fe4379cbf84277259422dccf', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 09:33:57', '2021-07-28 09:33:57', '2022-07-28 15:03:57'),
('471e9fcd0061633fae144e7a5b92ccb18bc32e769340c24069ee90bf501bd9f4608aa1f3704ec240', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 01:53:30', '2021-10-03 01:53:30', '2022-10-03 07:23:30'),
('47a71b3b994c5c1d3f0692ab9e0d132143f9f68552983cc5d1a9baf0b8647f67877491563b248540', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 10:36:27', '2021-10-03 10:36:27', '2022-10-03 16:06:27'),
('4b9fb3302ca0ec0340a86f7304d6c8351b4eb6df34cd214ad219f5c610302e9afd811dcb8a4f5c85', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-01 23:13:59', '2021-08-01 23:13:59', '2022-08-02 04:43:59'),
('4caf57ca0f7b104b636ce9912f90fdb9100b9d4bff92e83631e75f202af0a0a7a2716b3957330a24', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-29 22:06:59', '2021-07-29 22:06:59', '2022-07-30 03:36:59'),
('4f00f709d3e29027d278df91a939d83e553cad99086378abf70be91f196daa43a227ccd97ab0e220', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-15 02:50:52', '2021-09-15 02:50:52', '2022-09-15 08:20:52'),
('51b72adced29a9c818b89131c4f9a7e8a9dd435592bf51c6fbb3213554c4fc681e853d0925b7ae71', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 20:43:50', '2021-10-03 20:43:50', '2022-10-04 02:13:50'),
('5265f10fb584a583c8ff6011b53712b7300b16f760b130cfe5453d76a55ac83917d5a81220e70831', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 03:15:39', '2021-07-28 03:15:39', '2022-07-28 08:45:39'),
('581bfa56899d57682f4eb725a242a4df2489ebf61bbea9b92aeccff29db5c1037a6cccce53957523', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 02:07:26', '2021-10-03 02:07:26', '2022-10-03 07:37:26'),
('5e8bb0ea73e8316bf0b024e1c9f3e92a2b462aadf80be9bcb6948c6ab2d067a91550df5a87088bf8', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-12 22:04:58', '2021-09-12 22:04:58', '2022-09-13 03:34:58'),
('5fb55bdcffbf5919c6cbd66317866e5453d0932c6f9381bb8f3ff9ffd963230fb23ece26b407352f', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-14 20:26:06', '2021-09-14 20:26:06', '2022-09-15 01:56:06'),
('65c422df722a5a716db6cc47134dc1d359df359e915ec9ba4a3a62f09937921ff2ec79e203d529fb', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-02 10:03:58', '2021-08-02 10:03:58', '2022-08-02 15:33:58'),
('68b2461badd641cc47728f5166ba9a62d85fff2fe9f54af20e650ba8fba28c7dca316fdb7ece7f0f', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 02:29:12', '2021-07-28 02:29:12', '2022-07-28 07:59:12'),
('6ad890cd146dff1c43509ce973c3052fc7dba1403f2fba5de9dc9ee2f74a7da2a60b75fd54ad70bf', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-01 08:39:32', '2021-08-01 08:39:32', '2022-08-01 14:09:32'),
('6c3faf63f6765bd2abe5deeaee36f55d3e1c2526f03f3dd6240e08193d30fc5a2126c05f22546ab1', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-15 20:54:38', '2021-08-15 20:54:38', '2022-08-16 02:24:38'),
('72f0e4d752e3178ffb4773295c31eac43b719f64853152daef139d4b5613fa2a722725c834962c88', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-24 22:43:26', '2021-09-24 22:43:26', '2022-09-25 04:13:26'),
('7b1c9aaa30aaa43f62537efac43ca403692fe6f281fcefda4c92ef118e4ad3b1b05f991d4c983ad0', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 02:44:22', '2021-07-28 02:44:22', '2022-07-28 08:14:22'),
('7b1fa6481fc309fbcd8e7308d4f12dba8dc0571aaf979c91f4a75269c7d97ab9ddc73d3a0549f315', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 02:04:54', '2021-10-03 02:04:54', '2022-10-03 07:34:54'),
('7d844659a2ba1c35701795464eaed369cc391984f9f8393b126ed8c64f9314a7143cd5302588503a', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 09:09:57', '2021-07-28 09:09:57', '2022-07-28 14:39:57'),
('94a510f3eb6d7e56a5cdce6f2752b1592fa5dd8cfefff7c45f119874da6a01c7e7c9a7753bf6207d', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-18 11:37:10', '2021-08-18 11:37:10', '2022-08-18 17:07:10'),
('a4130d1b4b161c7f60e72c488d1bb5e92f189aeaa96a1de221208a9967e9294668ef6e01623b1a3a', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-15 21:23:10', '2021-09-15 21:23:10', '2022-09-16 02:53:10'),
('a7ffc45641d36991f03da36ee6ab206d24d9ff1408fcfb3d468393c4c391dda40e4fc27f0ac24e6b', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-18 11:24:55', '2021-08-18 11:24:55', '2022-08-18 16:54:55'),
('ba960ae40e1728e3408572d55d4a43f611e2142e550d494c498929e43fd605152a973e9d1ff17300', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-18 11:04:33', '2021-08-18 11:04:33', '2022-08-18 16:34:33'),
('c5c66e10cea5b8650538e5507401d0fa4b6f58e8329232272f411250b5c97616eebf6504e4e57a07', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 02:41:36', '2021-07-28 02:41:36', '2022-07-28 08:11:36'),
('c5db48f7e1be5e0a2caf0a483e68bf4ad2be6bc4cc7604dd05d42d23a34e1bdf3131857825e32804', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-30 09:11:54', '2021-08-30 09:11:54', '2022-08-30 14:41:54'),
('c72ad8a0e57b5163da444fbdbfb4c465dfe8f9cdca767111c0ff415aeb112553d6d84afaf809ab3f', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-24 10:02:50', '2021-09-24 10:02:50', '2022-09-24 15:32:50'),
('cb5302c026abf9e9d36c405e252916c9f1f973df7df72d5d8cb5e261c4abde4571acaf01977d50e0', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-23 03:14:39', '2021-09-23 03:14:39', '2022-09-23 08:44:39'),
('cef23fcb1182b96161fb0576ab6628c29b425e5a2f9084708662c639165aa0ca8f4fe4e71101cc13', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 02:43:28', '2021-07-28 02:43:28', '2022-07-28 08:13:28'),
('cf122734738cd695ffc2fc8beb9dd4e4e7081a5bb580b3935f714a3c9a1ae5bdb0ea2d2ca508e076', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 1, '2021-06-28 04:31:25', '2021-06-28 04:31:25', '2022-06-28 10:01:25'),
('d2058c4ca8f212cf8f731f09d29a18806f00b5e5a1c207b520caa53139838d6101b7c530788fbc14', 14, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 02:17:14', '2021-10-03 02:17:14', '2022-10-03 07:47:14'),
('d3b509cfbc88b09f5df3e2bbb756c951ebee2b61bee8b5c6cb008198867a7fb3bcf62365f844d95f', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-09 11:58:24', '2021-08-09 11:58:24', '2022-08-09 17:28:24'),
('d736baf7d199ddec9d7e99688b3903612f2e7d921bdee5a4463c0f4ca95e0fd3f7f9d4ee927c0d84', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-16 00:15:27', '2021-08-16 00:15:27', '2022-08-16 05:45:27'),
('dfcde26f1ef84b2a525546766d15c8e26f6db9c8a05d5dc09f461543c6712fb02f3705c003a4c094', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-16 22:17:41', '2021-09-16 22:17:41', '2022-09-17 03:47:41'),
('e331440d021c05616db51812cdcb23f22a449ca16350a56c179472344c7dabcd644e433760fe602f', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 03:08:32', '2021-07-28 03:08:32', '2022-07-28 08:38:32'),
('e6c7d24a7efa0851b932dfc28b307da91c2d4da80f13274f75909da327c0f3363797bc5eaf486473', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-01 23:01:24', '2021-08-01 23:01:24', '2022-08-02 04:31:24'),
('e809c8b36ad699e949d9fc13804caf6bb08cb881d8997ec96e87c12d46af98d86651103dd5accf54', 15, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-10-03 10:35:09', '2021-10-03 10:35:09', '2022-10-03 16:05:09'),
('eafb5d8c61d02b72d31a45f973a165676d445c017dce6468f352bdaed40782a987f9785ea32eacb2', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-23 20:36:25', '2021-09-23 20:36:25', '2022-09-24 02:06:25'),
('ef29b931f58b5231f1405408bc64ecf6abaeb11e1d046efab1f02e858727ef09977b9adcaad6c49c', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-07-28 02:53:03', '2021-07-28 02:53:03', '2022-07-28 08:23:03'),
('f42c9b5365287abb0144035b50d0dce2c340efa43ca3555e1ce016c5de6b60558de45d30aa6fe1b4', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-08-03 09:47:18', '2021-08-03 09:47:18', '2022-08-03 15:17:18'),
('f4457c9e8bd2129d442f3cfd8b838448579ec12a6bb28960c7b138c28c106ab354cb25aa38aa927d', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-15 09:09:21', '2021-09-15 09:09:21', '2022-09-15 14:39:21'),
('fd473d3e4f81070943badfb6568e1d36c6e75065940b195d62055ed9f1acf3565e382a95a7819244', 1, '93c803bd-51fe-4087-95d1-b29368edce00', 'api-application', '[]', 0, '2021-09-23 22:48:29', '2021-09-23 22:48:29', '2022-09-24 04:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
('93c803bd-51fe-4087-95d1-b29368edce00', NULL, 'Laravel Personal Access Client', 'kovFL3ypnzRm4AvqK2rPMieUy3fk3CSlQijnQvRJ', NULL, 'http://localhost', 1, 0, 0, '2021-06-28 04:00:54', '2021-06-28 04:00:54'),
('93c803bd-8489-4697-84b3-21ce6d4d9564', NULL, 'Laravel Password Grant Client', 'H0jMkY6xTSeAbfEzU9ZOFQcHtoTS2KbBTRuETyYH', 'users', 'http://localhost', 0, 1, 0, '2021-06-28 04:00:54', '2021-06-28 04:00:54');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, '93c803bd-51fe-4087-95d1-b29368edce00', '2021-06-28 04:00:54', '2021-06-28 04:00:54');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_number` int(11) NOT NULL,
  `itemname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sell_type` enum('received','processing','packed','sent') COLLATE utf8mb4_unicode_ci NOT NULL,
  `sellcount` int(11) NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `packed_by` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`packed_by`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_number`, `itemname`, `sell_type`, `sellcount`, `note`, `created_at`, `updated_at`, `packed_by`) VALUES
(2, 101011, 'Bronco Box Seat - Walnut', 'received', 6, 'item has been received', '2020-11-10 23:22:52', '2021-06-13 09:28:40', NULL),
(3, 101011, 'B9 Armchair - White with Natural socks', 'received', 2, 'eqweqweqw', '2020-11-10 23:22:52', '2020-11-10 23:22:52', NULL),
(4, 1111, 'Francois Bar Stool 74cm - White', 'received', 4, '', '2019-04-15 08:47:13', NULL, NULL),
(5, 1111, 'B9 Armchair - Black', 'received', 6, '', '2019-04-17 16:22:35', NULL, NULL),
(6, 1111, 'Paris Stool 46cm - Black', 'received', 1, '', '2019-04-17 16:22:48', NULL, NULL),
(7, 1111, 'Paris Stool 68cm - White', 'received', 2, '', '2019-04-22 16:12:19', NULL, NULL),
(8, 1111, 'Paris Stool 68cm - Walnut', 'received', 4, '', '2019-04-22 16:13:10', NULL, NULL),
(9, 1111, 'Paris Stool 46cm - Black', 'received', 2, '', '2019-04-22 16:13:43', NULL, NULL),
(10, 1111, 'Paris Stool 46cm - Black', 'received', 3, '', '2019-04-22 16:14:16', NULL, NULL),
(11, 1111, 'Vienna A18  - Red', 'received', 1, '', '2019-04-22 07:03:54', NULL, NULL),
(12, 1111, 'Vienna A18  - White', 'received', 2, '', '2019-04-22 07:30:05', NULL, NULL),
(14, 1111, 'Vienna A18 Bar Stool 74cm - Walnut', 'received', 4, '', '2019-04-23 10:53:09', NULL, NULL),
(15, 1111, 'Paris Stool 68cm - White', 'received', 5, '', '2019-04-25 08:57:22', NULL, NULL),
(16, 1111, 'Francois Bar Stool 74cm - White', 'received', 3, '', '2019-04-25 10:10:03', NULL, NULL),
(17, 1111, 'cushions-Francois - White', 'received', 3, '', '2019-04-25 10:11:08', NULL, NULL),
(18, 1111, 'cushions-Francois - White', 'received', 1, '', '2019-04-29 16:23:25', NULL, NULL),
(19, 1111, 'Francois Bar Stool 74cm - White', 'received', 1, '', '2019-04-29 16:34:56', NULL, NULL),
(20, 1111, 'Paris Stool 68cm - White', 'received', 3, '', '2019-04-30 15:20:50', NULL, NULL),
(21, 1111, 'Vienna A18  - Natural', 'received', 1, '', '2019-05-01 06:22:14', NULL, NULL),
(22, 1111, 'Paris Stool 46cm - Black', 'received', 1, '', '2019-05-02 16:57:53', NULL, NULL),
(23, 1111, 'Vienna A18 Bar Stool 74cm - white with Natual socks', 'received', 1, '', '2019-05-02 09:45:31', NULL, NULL),
(24, 1111, 'Vienna A18  - Natural', 'received', 6, '', '2019-05-05 15:49:45', NULL, NULL),
(25, 1111, 'Vienna A18 Bar Stool 74cm - White wash', 'received', 4, '', '2019-05-06 15:31:35', NULL, NULL),
(26, 1111, 'Roundback chair - Walnut', 'received', 2, '', '2019-05-07 16:25:40', NULL, NULL),
(27, 1111, 'Roundback chair - Walnut', 'received', 2, '', '2019-05-07 16:37:31', NULL, NULL),
(28, 1111, 'Vienna A18 Bar Stool 74cm - Wenge', 'received', 35, '', '2019-05-08 05:59:31', NULL, NULL),
(29, 1111, 'Vienna A18 Bar Stool 74cm - Wenge', 'received', 1, '', '2019-05-08 05:59:58', NULL, NULL),
(30, 1111, 'Paris Stool 80cm - Black', 'received', 4, '', '2019-05-08 15:35:58', NULL, NULL),
(31, 1111, 'B9 Armchair - Black', 'received', 2, '', '2019-05-14 16:09:29', NULL, NULL),
(32, 1111, 'Vienna A18 Bar Stool 74cm - Black with Natual socks', 'received', 6, '', '2019-05-20 09:07:18', NULL, NULL),
(33, 1111, 'Vienna A18 Bar Stool 74cm - white with Natual socks', 'received', 4, '', '2019-05-20 09:08:10', NULL, NULL),
(34, 1111, 'Paris Stool 68cm - White', 'received', 3, '', '2019-05-22 05:00:34', NULL, NULL),
(35, 1111, 'Vienna A18  - Natural', 'received', 4, '', '2019-05-26 06:11:19', NULL, NULL),
(36, 1111, 'Paris Stool 68cm - Walnut', 'received', 1, '', '2019-05-27 05:15:42', NULL, NULL),
(37, 1111, 'B9 Armchair - Black', 'received', 5, '', '2019-05-30 09:02:53', NULL, NULL),
(38, 1111, 'Paris Stool 68cm - White', 'received', 4, '', '2019-05-30 09:49:38', NULL, NULL),
(39, 1111, 'Vienna A18  - Walnut', 'received', 4, '', '2019-06-03 09:08:07', NULL, NULL),
(40, 1111, 'Bronco Box Seat - Walnut', 'received', 11, 'for painting', '2019-06-03 09:08:35', NULL, NULL),
(41, 1111, 'Bronco Box Seat - White wash', 'received', 1, 'for painting', '2019-06-03 09:08:57', NULL, NULL),
(42, 1111, 'Vienna A18 Bar Stool 74cm - Wenge', 'received', 25, 'for painting', '2019-06-03 10:18:08', NULL, NULL),
(43, 1111, 'Vienna A18 Bar Stool 74cm - Walnut', 'received', 13, '', '2019-06-03 10:25:26', NULL, NULL),
(44, 1111, 'Paris Stool 68cm - White', 'received', 3, '', '2019-06-03 10:43:33', NULL, NULL),
(45, 1111, 'Vienna A18 Bar Stool 74cm - Natural', 'received', 4, '', '2019-06-04 16:47:48', NULL, NULL),
(46, 1111, 'B9 Armchair - Light Grey(Warm Grey)', 'received', 4, 'for painting', '2019-06-04 10:01:09', NULL, NULL),
(47, 1111, 'cushions-Linx - White', 'received', 10, '', '2019-06-04 10:01:29', NULL, NULL),
(48, 1111, 'cushions-Linx - Brown', 'received', 2, '', '2019-06-04 10:01:40', NULL, NULL),
(51, 1111, 'cushions-A18 - White', 'packed', 3, '', '2019-06-06 16:45:06', NULL, NULL),
(52, 1111, 'cushions-Francois - White', 'packed', 3, '', '2019-06-06 05:49:17', NULL, NULL),
(53, 1111, 'Linz Chair - Black', 'packed', 3, 'sold', '2019-06-06 06:32:21', NULL, NULL),
(54, 1111, 'Paris Stool 46cm - Black', 'packed', 2, '', '2019-06-06 06:38:25', NULL, NULL),
(55, 1111, 'Vienna A18 Bar Stool 74cm - white with Natual socks', 'packed', 4, 'sold', '2019-06-12 10:44:21', NULL, NULL),
(56, 1111, 'B9 Armchair - White', 'packed', 2, '', '2019-06-12 15:07:31', NULL, NULL),
(57, 1111, 'cushions-A18 - Black', 'packed', 6, '', '2019-06-13 08:03:07', NULL, NULL),
(58, 1111, 'A16 Love Heart - Wenge', 'packed', 24, 'sold 138405', '2019-06-18 08:27:46', NULL, NULL),
(59, 1111, 'Vienna A18 Bar Stool 68cm - white with Natual socks', 'packed', 6, 'sold for Brett as seconds', '2019-06-18 15:15:51', NULL, NULL),
(60, 1111, 'cushions-A18 - Black', 'packed', 38, '', '2019-06-20 05:54:17', NULL, NULL),
(61, 1111, 'cushions-A18 - White', 'packed', 41, '', '2019-06-20 05:54:51', NULL, NULL),
(62, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'packed', 1, '140509', '2019-06-23 16:44:12', NULL, NULL),
(63, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'packed', 3, '140522', '2019-06-23 16:44:30', NULL, NULL),
(64, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'packed', 3, '133720', '2019-06-23 16:45:10', NULL, NULL),
(65, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'packed', 4, '441203', '2019-06-23 05:14:04', NULL, NULL),
(66, 1111, 'B9 Armchair - Black with Natural Socks', 'packed', 3, 'socks painted for 139784', '2019-06-26 16:25:01', NULL, NULL),
(67, 1111, 'Paris Stool 80cm - Natural', 'packed', 4, '', '2019-06-27 06:13:49', NULL, NULL),
(68, 1111, 'Paris Stool 68cm - White', 'packed', 3, '', '2019-06-27 06:14:06', NULL, NULL),
(69, 1111, 'cushions-A18 - Black', 'packed', 1, '', '2019-06-27 06:29:01', NULL, NULL),
(70, 1111, 'Vienna A18  - Black', 'packed', 1, 'with pad(replacement order :- 127315)', '2019-06-27 06:45:50', NULL, NULL),
(71, 1111, 'Vienna A18  - Black', 'packed', 10, '', '2019-06-30 15:05:29', NULL, NULL),
(72, 1111, 'Vienna A18 Bar Stool 74cm - Walnut', 'packed', 5, '', '2019-06-30 15:06:11', NULL, NULL),
(73, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'packed', 3, '', '2019-06-30 15:06:34', NULL, NULL),
(74, 1111, 'B9 Armchair - Walnut', 'packed', 2, '', '2019-06-30 15:06:54', NULL, NULL),
(75, 1111, 'Francois Bar Stool 74cm - White', 'packed', 3, '', '2019-06-30 15:07:15', NULL, NULL),
(76, 1111, 'Linz Chair - Black', 'packed', 6, '', '2019-06-30 15:07:33', NULL, NULL),
(77, 1111, 'Vienna A18  - White', 'packed', 8, '', '2019-06-30 15:07:56', NULL, NULL),
(78, 1111, 'Vienna A18  - Walnut', 'packed', 28, '441719', '2019-07-01 05:41:32', NULL, NULL),
(79, 1111, 'B9 Armchair - White', 'packed', 2, '141464 (pula)', '2019-07-01 05:44:31', NULL, NULL),
(80, 1111, 'Vienna A18 Bar Stool 74cm - Walnut', 'packed', 9, '441719 (pula)', '2019-07-01 05:47:10', NULL, NULL),
(81, 1111, 'Vienna A18 Bar Stool 74cm - white', 'packed', 2, '141534 (pula)', '2019-07-01 05:51:34', NULL, NULL),
(82, 1111, 'Vienna A18  - White', 'packed', 5, '141534 (pula)', '2019-07-01 05:52:20', NULL, NULL),
(83, 1111, 'Vienna A18  - White with Natural Socks', 'packed', 26, '439829 (packed in bentwood stock)', '2019-07-01 07:55:07', NULL, NULL),
(84, 1111, 'Vienna A18  - White with Natural Socks', 'packed', 2, 'Anjal', '2019-07-02 06:01:44', NULL, NULL),
(85, 1111, 'B9 Armchair - Natural', 'packed', 2, 'Anjal', '2019-07-02 06:02:05', NULL, NULL),
(86, 1111, 'Vienna A18  - Black', 'packed', 10, '441958', '2019-07-02 07:53:55', NULL, NULL),
(87, 1111, 'Paris Stool 68cm - White', 'packed', 5, '', '2019-07-02 07:54:25', NULL, NULL),
(88, 1111, 'B9 Armchair - White', 'packed', 1, 'its for showroom', '2019-07-03 06:53:39', NULL, NULL),
(89, 1111, 'cushions-B9 - White', 'packed', 1, 'its for showroom', '2019-07-03 06:54:00', NULL, NULL),
(90, 1111, 'Paris Stool 68cm - Black', 'packed', 1, 'its for showroom', '2019-07-03 06:56:11', NULL, NULL),
(91, 1111, 'Paris Stool 68cm - Walnut', 'packed', 1, 'its for showroom', '2019-07-03 06:56:39', NULL, NULL),
(92, 1111, 'Paris Stool 68cm - White', 'packed', 1, '', '2019-07-03 06:56:54', NULL, NULL),
(93, 1111, 'Paris Stool 46cm - Black', 'packed', 1, 'its for showroom', '2019-07-03 06:57:15', NULL, NULL),
(94, 1111, 'cushions-Paris stool - Black', 'packed', 1, 'its for showroom', '2019-07-03 06:57:55', NULL, NULL),
(95, 1111, 'cushions-Paris stool - White', 'packed', 1, 'its for showroom', '2019-07-03 06:58:18', NULL, NULL),
(96, 1111, 'Vienna A18  - Black with Natural Socks', 'packed', 2, '141962\r\npacked by NISHANTH', '2019-07-03 09:41:09', NULL, NULL),
(97, 1111, 'Bronco Bar Stool 74cm - White Wash', 'packed', 2, '140973(Pulasthi)', '2019-07-06 15:49:45', NULL, NULL),
(98, 1111, 'B9 Armchair - Natural', 'packed', 4, '136855(its an old oreder but it was not in the system)', '2019-07-06 15:50:48', NULL, NULL),
(99, 1111, 'Vienna A18  - Natural', 'packed', 5, '442208(Nishanth/Gawtham)', '2019-07-06 15:52:04', NULL, NULL),
(100, 1111, 'Vienna A18  - White', 'packed', 5, '442208(Nishanth/Gawtham)', '2019-07-06 15:53:59', NULL, NULL),
(101, 1111, 'Paris Stool 68cm - Walnut', 'packed', 3, '442295(Nishanth/Gautham)', '2019-07-06 15:59:32', NULL, NULL),
(102, 1111, 'Vienna A18 Bar Stool 74cm - Walnut', 'packed', 4, '442295(Nishanth/Gautham)\r\n68cm', '2019-07-07 16:00:40', NULL, NULL),
(103, 1111, 'Paris Stool 80cm - Black', 'packed', 11, '442388\r\nMartin', '2019-07-07 15:41:58', NULL, NULL),
(106, 1111, 'Vienna A18  - Black', 'packed', 6, '142358\r\nPula', '2019-07-07 15:45:04', NULL, NULL),
(107, 1111, 'cushions-A18 - Black', 'packed', 6, '142358\r\nPula', '2019-07-07 15:45:34', NULL, NULL),
(108, 1111, 'Vienna A18 Bar Stool 74cm - white', 'packed', 4, '142432 (68cm) Pula', '2019-07-09 04:00:00', NULL, NULL),
(109, 1111, 'Paris Stool 68cm - Black', 'packed', 3, '133988 Martin', '2019-07-09 04:00:00', NULL, NULL),
(110, 1111, 'Vienna A18  - White', 'packed', 3, '442438\r\nPULA', '2019-07-09 04:00:00', NULL, NULL),
(111, 1111, 'Francois Bar Stool 74cm - White', 'packed', 6, '3-68cm and 3 74cm', '2019-07-10 04:00:00', NULL, NULL),
(112, 1111, 'Paris Stool 68cm - Natural', 'packed', 1, 'PICK UP (TIM)', '2019-07-10 04:00:00', NULL, NULL),
(113, 1111, 'Vienna A18 Bar Stool 74cm - Walnut', 'packed', 1, '68CM \r\nNISHANTH/HASITHA\r\n142635', '2019-07-10 04:00:00', NULL, NULL),
(114, 1111, 'B9 Armchair - Walnut', 'packed', 22, '442389', '2019-07-10 04:00:00', NULL, NULL),
(115, 1111, 'Vienna A18  - Black', 'packed', 8, 'PICKUP', '2019-07-10 04:00:00', NULL, NULL),
(116, 1111, 'Vienna A18  - Black', 'packed', 8, '115464(OLD ONE)', '2019-07-10 04:00:00', NULL, NULL),
(117, 1111, 'Vienna A18  - Black', 'packed', 5, 'sold for Ryan', '2019-07-11 04:00:00', NULL, NULL),
(118, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'packed', 4, 'sold for Ryan \r\nalready cut to 68cm', '2019-07-11 04:00:00', NULL, NULL),
(119, 1111, 'Paris Stool 46cm - Walnut', 'packed', 28, '442641\r\npula', '2019-07-11 04:00:00', NULL, NULL),
(120, 1111, 'Vienna A18  - White with Natural Socks', 'packed', 2, 'sold', '2019-07-11 04:00:00', NULL, NULL),
(121, 1111, 'Vienna A18  - Black with Natural Socks', 'sent', 4, 'sold', '2019-07-11 04:00:00', NULL, NULL),
(122, 1111, 'B9 Armchair - Black with Natural Socks', 'sent', 1, 'sold', '2019-07-11 04:00:00', NULL, NULL),
(123, 1111, 'Vienna A18  - Natural', 'sent', 8, 'sold', '2019-07-14 04:00:00', NULL, NULL),
(124, 1111, 'Vienna A18  - White with Natural Socks', 'sent', 4, 'sold', '2019-07-14 04:00:00', NULL, NULL),
(125, 1111, 'Vienna A18 Bar Stool 74cm - Black', 'sent', 34, 'sold 36 with imported 34', '2019-07-17 04:00:00', NULL, NULL),
(126, 1111, 'Vienna A18 Bar Stool 74cm - Black with Natual socks', 'sent', 3, 'socks paited and send for order of 36', '2019-07-17 04:00:00', NULL, NULL),
(127, 1111, 'Vienna A18  - Black with Natural Socks', 'sent', 10, 'sold', '2019-07-17 04:00:00', NULL, NULL),
(128, 1111, 'Paris Stool 68cm - White', 'sent', 2, '', '2019-07-17 04:00:00', NULL, NULL),
(129, 1111, 'Vienna A18  - Natural', 'sent', 6, '443099', '2019-07-18 04:00:00', NULL, NULL),
(130, 1111, 'Vienna A18  - Natural', 'sent', 10, 'sent by tim', '2019-07-18 04:00:00', NULL, NULL),
(131, 1111, 'Paris Stool 80cm - Natural', 'sent', 2, '443099', '2019-07-18 04:00:00', NULL, NULL),
(132, 1111, 'Vienna A18  - Black', 'sent', 16, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(133, 1111, 'Vienna A18  - White', 'sent', 9, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(134, 1111, 'Vienna A18  - Natural', 'sent', 12, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(135, 1111, 'Paris Stool 68cm - Natural', 'sent', 2, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(136, 1111, 'Paris Stool 68cm - Black', 'sent', 10, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(137, 1111, 'Vienna A18  - Black with Natural Socks', 'sent', 7, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(138, 1111, 'Vienna A18  - White with Natural Socks', 'sent', 6, 'sent by unknown', '2019-07-18 04:00:00', NULL, NULL),
(139, 1111, 'Paris Stool 68cm - Black', 'sent', 2, 'sent by anonymous', '2019-07-18 04:00:00', NULL, NULL),
(140, 1111, 'cushions-Linx - White', 'sent', 12, 'just counted the stock and only 9 left. could not upodate the sold items before', '2019-07-21 04:00:00', NULL, NULL),
(141, 1111, 'Vienna A18 Bar Stool 74cm - Black with Natual socks', 'sent', 5, '443541', '2019-07-25 04:00:00', NULL, NULL),
(142, 1111, 'Vienna A18  - White', 'sent', 8, 'sold', '2019-07-28 04:00:00', NULL, NULL),
(143, 1111, 'Paris Stool 68cm - Black', 'sent', 1, 'sold- interstate', '2019-07-28 04:00:00', NULL, NULL),
(144, 1111, 'Paris Stool 80cm - Black', 'sent', 4, 'sold', '2019-07-28 04:00:00', NULL, NULL),
(145, 1111, 'Paris Stool 80cm - White', 'sent', 4, 'sold', '2019-07-28 04:00:00', NULL, NULL),
(146, 1111, 'B9 Armchair - Walnut', 'sent', 8, '443846', '2019-08-01 04:00:00', NULL, NULL),
(147, 1111, 'A16 Love Heart - Wenge', 'sent', 8, 'sold', '2019-08-01 04:00:00', NULL, NULL),
(148, 1111, 'Francois Bar Stool 74cm - White', 'sent', 3, 'sold', '2019-08-06 04:00:00', NULL, NULL),
(149, 1111, 'B9 Armchair - Natural', 'sent', 1, 'sold', '2019-08-06 04:00:00', NULL, NULL),
(150, 1111, 'Vienna A18  - White', 'sent', 6, 'sold', '2019-08-06 04:00:00', NULL, NULL),
(151, 1111, 'Paris Stool 68cm - Walnut', 'sent', 4, 'sold', '2019-08-06 04:00:00', NULL, NULL),
(152, 1111, 'Vienna A18  - Natural', 'sent', 4, 'sold', '2019-08-06 04:00:00', NULL, NULL),
(153, 1111, 'Vienna A18  - White', 'sent', 8, '145495', '2019-08-07 04:00:00', NULL, NULL),
(154, 1111, 'Paris Stool 68cm - White', 'sent', 3, '', '2019-08-07 04:00:00', NULL, NULL),
(155, 1111, 'Vienna A18  - White', 'sent', 8, 'packed by Martin\r\n443486', '2019-08-07 04:00:00', NULL, NULL),
(156, 1111, 'Vienna A18  - Natural', 'sent', 6, 'packed by Gawtham\r\n145629', '2019-08-07 04:00:00', NULL, NULL),
(157, 1111, 'B9 Armchair - Natural', 'sent', 2, 'packed by gautham\r\n145629', '2019-08-07 04:00:00', NULL, NULL),
(158, 1111, 'Vienna A18  - Black with Natural Socks', 'sent', 2, 'packed by Nishanth/Martin', '2019-08-07 04:00:00', NULL, NULL),
(159, 1111, 'Paris Stool 46cm - Black', 'sent', 3, '443924\r\npacked by anjal', '2019-08-07 04:00:00', NULL, NULL),
(160, 1111, 'Paris Stool 46cm - White', 'sent', 1, 'unknown', '2019-08-07 04:00:00', NULL, NULL),
(161, 1111, 'Paris Stool 46cm - Black', 'sent', 1, 'packed by Nishanth/Hasitha\r\n145389', '2019-08-08 04:00:00', NULL, NULL),
(162, 1111, 'Paris Stool 46cm - Black', 'sent', 4, 'packed by Nishanth/Hasitha', '2019-08-08 04:00:00', NULL, NULL),
(163, 1111, 'B9 Armchair - Natural', 'sent', 1, 'packed by Nishanth', '2019-08-08 04:00:00', NULL, NULL),
(164, 1111, 'Paris Stool 68cm - Black', 'sent', 2, 'packed by anjal 145359', '2019-08-08 04:00:00', NULL, NULL),
(165, 1111, 'B9 Armchair - White', 'sent', 8, '145142\r\nPacked by Nishanth/Hasitha', '2019-08-08 04:00:00', NULL, NULL),
(166, 1111, 'B9 Armchair - White', 'sent', 4, '444272\r\nPacked by Nishanth/Hasitha', '2019-08-08 04:00:00', NULL, NULL),
(167, 1111, 'B9 Armchair - White', 'sent', 2, '145699\r\nPacked by Nishanth/Hasitha', '2019-08-08 04:00:00', NULL, NULL),
(168, 1111, 'Paris Stool 68cm - Black', 'sent', 6, 'sold by unknown', '2019-08-08 04:00:00', NULL, NULL),
(169, 1111, 'Vienna A18  - Black', 'sent', 3, 'pick up', '2019-08-08 04:00:00', NULL, NULL),
(170, 1111, 'Vienna A18  - Black', 'sent', 6, 'packwed by nishanth and hasitha\r\n146046', '2019-08-08 04:00:00', NULL, NULL),
(171, 1111, 'Paris Stool 68cm - White with Natural Socks', 'sent', 9, 'unknown', '2019-08-08 04:00:00', NULL, NULL),
(172, 1111, 'Vienna A18  - Black', 'sent', 8, '146443\r\npacked by nishanth/hasitha', '2019-08-11 04:00:00', NULL, NULL),
(173, 1111, 'Paris Stool 68cm - Black', 'sent', 3, 'pick up\r\ntaken by tim', '2019-08-11 04:00:00', NULL, NULL),
(174, 1111, 'Vienna A18  - Natural', 'sent', 6, '146541\r\npacked by nishanth', '2019-08-12 04:00:00', NULL, NULL),
(175, 1111, 'Paris Stool 68cm - Black', 'sent', 3, 'pick up', '2019-08-12 04:00:00', NULL, NULL),
(176, 1111, 'Paris Stool 68cm - Black', 'sent', 2, '145699\r\nthis order needs 3 but we have only 2', '2019-08-12 04:00:00', NULL, NULL),
(177, 1111, 'Paris Stool 68cm - Black with Natural Socks', 'sent', 1, '145699\r\nsocks needs to be painted', '2019-08-12 04:00:00', '2021-07-23 09:34:52', NULL),
(178, 1111, 'Vienna A18  - White with Natural Socks', 'sent', 6, '444673\r\npacked by nishanth / hasitha', '2019-08-12 04:00:00', NULL, NULL),
(179, 1111, 'Vienna A18 Bar Stool 74cm - white', 'sent', 2, '444464 - 6  natural\r\n444673 - 2 68cm\r\npacked by nishanth/hasitha', '2019-08-12 04:00:00', NULL, NULL),
(180, 1111, 'Paris Stool 68cm - Black with Natural Socks', 'sent', 1, 'for painting', '2019-08-13 04:00:00', NULL, NULL),
(181, 1111, 'Paris Stool 68cm - White', 'sent', 4, '', '2019-08-14 04:00:00', NULL, NULL),
(182, 1111, 'Paris Stool 68cm - Black with Natural Socks', 'sent', 3, 'for painting', '2019-08-14 04:00:00', NULL, NULL),
(183, 1111, 'Vienna A18 Bar Stool 74cm - white with Natual socks', 'sent', 2, '147033\r\npacked by Hasitha/Nishanth', '2019-08-14 04:00:00', NULL, NULL),
(184, 1111, 'Vienna A18  - Black', 'sent', 8, '146443', '2019-08-18 04:00:00', NULL, NULL),
(185, 1111, 'Vienna A18  - White', 'sent', 2, '147998', '2019-08-25 04:00:00', NULL, NULL),
(186, 1111, 'Vienna A18 Bar Stool 74cm - white', 'sent', 2, 'replacement for NSW urgent', '2020-09-03 04:00:00', NULL, NULL),
(198, 10125, 'NEWITEM', 'packed', 2, 'fdgfdg', '2020-09-03 04:00:00', '2021-07-23 09:33:38', NULL),
(199, 212123, 'cushions-Francois - Black', 'packed', 1, 'This order is ready to send', '2020-11-13 19:19:10', '2020-11-13 19:59:43', '[\"nish_veema\",\"kash_nish\"]'),
(200, 212124, 'B9 Armchair - Black', 'packed', 3, NULL, '2020-11-13 19:34:30', '2020-11-13 19:59:24', '[\"nish_veema\",\"kash_nish\"]'),
(201, 212124, 'B9 Armchair - Dark Grey', 'received', 4, 'is it working', '2020-11-13 19:34:30', '2020-11-18 13:44:53', NULL),
(208, 212125, 'B9 Armchair - Natural', 'received', 5, NULL, '2021-06-19 02:05:40', '2021-06-21 03:24:33', NULL),
(209, 212125, 'B9 Armchair - Walnut', 'received', 1, NULL, '2021-06-19 02:05:40', '2021-06-19 02:05:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order_numbers`
--

CREATE TABLE `order_numbers` (
  `id` int(11) NOT NULL,
  `order_no` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_numbers`
--

INSERT INTO `order_numbers` (`id`, `order_no`, `text`, `created_at`, `updated_at`) VALUES
(1, '10101', 'This order has been sent', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double NOT NULL,
  `customer_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`customer_details`)),
  `shipping_address` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`shipping_address`)),
  `order_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`order_details`)),
  `pay_method` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time_line` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`time_line`)),
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` enum('processing','packed','delivered') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'processing',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `amount`, `customer_details`, `shipping_address`, `order_details`, `pay_method`, `note`, `time_line`, `status`, `delivery_status`, `created_at`, `updated_at`) VALUES
(1, '1632309433', 873.36, '{\"firstName\":\"Nishanrth\",\"lastName\":\"VEema\",\"email\":\"nishanth@development.com\",\"phone\":\"+61-402457102\",\"lineOne\":\"130 rathmines Rd\",\"town\":\"Hawthorn East\",\"state\":\"Victoria\",\"zip\":\"3123\",\"country\":\"Australia\"}', NULL, '[{\"id\":5,\"itemname\":\"Bendwood LE Corbusier B9-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/Natural_B9_Cava_-Armchair.png\",\"count\":2,\"unitPrice\":254.78,\"discount\":0,\"totalPrice\":509.56,\"totalDiscount\":0},{\"id\":6,\"itemname\":\"Bendwood Roundback Chair-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/roundback.png\",\"count\":1,\"unitPrice\":198.25,\"discount\":0,\"totalPrice\":198.25,\"totalDiscount\":0}]', 'credit_card', NULL, NULL, 'paid', 'processing', '2021-09-22 05:47:13', '2021-09-22 05:47:13'),
(2, '1632309573', 914.68, '{\"firstName\":\"Nishanrth\",\"lastName\":\"VEema\",\"email\":\"nishanth@development.com\",\"phone\":\"+61-402457102\",\"lineOne\":\"130 rathmines Rd\",\"town\":\"Hawthorn East\",\"state\":\"Victoria\",\"zip\":\"3123\",\"country\":\"Australia\"}', NULL, '[{\"id\":4,\"itemname\":\"Vienna A18-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/vienna-18-chair-black-hero.png\",\"count\":1,\"unitPrice\":144.25,\"discount\":22,\"totalPrice\":144.25,\"totalDiscount\":22},{\"id\":9,\"itemname\":\"Paris Stool-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/bentwood-stool-walnut.png\",\"count\":2,\"unitPrice\":165.99,\"discount\":0,\"totalPrice\":331.98,\"totalDiscount\":0},{\"id\":7,\"itemname\":\"Francois Bar Stool-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/Francois-Black.png\",\"count\":2,\"unitPrice\":136.45,\"discount\":43.54,\"totalPrice\":272.9,\"totalDiscount\":87.08}]', 'stripe', NULL, NULL, 'paid', 'processing', '2021-09-22 05:49:33', '2021-09-22 05:49:33'),
(3, '1632392516', 309.8, '{\"firstName\":\"Nishanrth\",\"lastName\":\"VEema\",\"email\":\"nishanth@development.com\",\"phone\":\"+61-402457102\",\"lineOne\":\"130 rathmines Rd\",\"town\":\"Hawthorn East\",\"state\":\"Victoria\",\"zip\":\"3123\",\"country\":\"Australia\"}', NULL, '[{\"id\":4,\"itemname\":\"Vienna A18-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/vienna-18-chair-black-hero.png\",\"count\":1,\"unitPrice\":144.25,\"discount\":22,\"totalPrice\":144.25,\"totalDiscount\":22}]', 'credit_card', NULL, NULL, 'paid', 'packed', '2021-09-23 04:51:56', '2021-09-24 02:51:16'),
(4, '1632819372', 420.33, '{\"firstName\":\"Nishanrth\",\"lastName\":\"VEema\",\"email\":\"nishanth@development.com\",\"phone\":\"+61-402457102\",\"lineOne\":\"130 rathmines Rd\",\"town\":\"Hawthorn East\",\"state\":\"Victoria\",\"zip\":\"3123\",\"country\":\"Australia\"}', NULL, '[{\"id\":5,\"itemname\":\"Bendwood LE Corbusier B9-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/Natural_B9_Cava_-Armchair.png\",\"count\":1,\"unitPrice\":254.78,\"discount\":0,\"totalPrice\":254.78,\"totalDiscount\":0}]', 'credit_card', NULL, NULL, 'paid', 'processing', '2021-09-28 03:26:12', '2021-09-28 03:26:12'),
(5, '1633066702', 706.3, '{\"firstName\":\"Nishanrth\",\"lastName\":\"VEema\",\"email\":\"nishanth@development.com\",\"phone\":\"+61-402457102\",\"lineOne\":\"130 rathmines Rd\",\"town\":\"Hawthorn East\",\"state\":\"Victoria\",\"zip\":\"3123\",\"country\":\"Australia\"}', NULL, '[{\"id\":4,\"itemname\":\"Vienna A18-46cm(black)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/vienna-18-chair-black-hero.png\",\"count\":1,\"unitPrice\":144.25,\"discount\":22,\"totalPrice\":144.25,\"totalDiscount\":22},{\"id\":6,\"itemname\":\"Bendwood Roundback Chair-46cm(walnet)\",\"image_url\":\"http:\\/\\/nkservice.test\\/react-backend\\/storage\\/app\\/public\\/storeProduct\\/roundback.png\",\"count\":2,\"unitPrice\":198.25,\"discount\":0,\"totalPrice\":396.5,\"totalDiscount\":0}]', 'credit_card', NULL, NULL, 'paid', 'processing', '2021-10-01 00:08:22', '2021-10-01 00:08:22');

-- --------------------------------------------------------

--
-- Table structure for table `payme_lang_code`
--

CREATE TABLE `payme_lang_code` (
  `id` int(10) NOT NULL,
  `code` varchar(50) NOT NULL,
  `eng` text NOT NULL,
  `tc` text NOT NULL,
  `sc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payme_lang_code`
--

INSERT INTO `payme_lang_code` (`id`, `code`, `eng`, `tc`, `sc`) VALUES
(1, 'PR001', 'Request for payment initiated', '發起付款請求', '发起付款请求'),
(2, 'PR007', 'Payment request expired', '付款請求已過期', '付款请求已过期'),
(3, 'PR004', 'for Payment Rejected', '付款被拒', '付款被拒'),
(4, 'PR005', 'Payment success', '付款成功', '付款成功'),
(5, 'EW001 - EW008, EW012', 'Payment failed. Please contact customer support for diagnosis and further steps', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(6, 'EW2001', 'Sorry, we were unable to confirm your payment status. Please contact the store to manually confirm the status of your order.', '抱歉，我們無法確認您的付款狀態。 請聯繫商店以確認您的訂單狀態。', '抱歉，我们无法确认您的付款状态。 请联系商店以确认您的订单状态。'),
(7, 'EW2005', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(8, 'EW2017', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(9, 'EW2035', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(10, 'EW2036', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(11, 'EW2037', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(12, 'EW2038', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(13, 'EW2039', 'Payment failed. Please contact customer support for diagnosis and further steps.', '付款失敗。請聯繫客戶服務讓我們提供進一步的支援', '付款失败。请联系客户服务让我们提供进一步的支援'),
(14, 'EA000', 'The API gateway experienced an unexpected error, please contact support', 'API gateway 遇到意外錯誤，請聯繫支援', 'API gateway 遇到意外错误，请联系支援'),
(15, 'EA001', 'The API backend has rejected your request due to an authentication issue', '由於身份驗證問題，API backend 拒絕了您的請求', '由于身份验证问题，API backend 拒绝了您的请求'),
(16, 'EA002', 'The API backend has rejected the request because it does not match the expected format as expressed by the specification. e.g. missing headers, incorrect values formats or body format.', 'API backend 拒絕了該請求，因為它與預期格式不匹配。例如，缺少標頭、不正確的值格式或正文格式。', 'API backend 拒绝了该请求，因为它与预期格式不匹配。例如，缺少标头、不正确的值格式或正文格式。'),
(17, 'EA003', 'The API backend experienced an un expected error, please contact support', 'API backend 出現意外錯誤，請聯繫支援', 'API backend 出现意外错误，请联系支援'),
(18, 'NA', 'The API did not respond in time and the request was cancelled', 'API沒有及時回應，請求被取消', 'API没有及时回应，请求被取消'),
(19, 'EA008', 'Missing or incorrect Accept header in the request', '請求中缺少或有不正確的接受標頭', '请求中缺少或有不正确的接受标头'),
(20, 'EA009', 'Rate limit of APIM exceeded, check each request has a unique Trace-Id header value, contact support of this doesn\'t resolve your issue', '超出 APIM 的限制，請檢查每個請求是否具有唯一的 Trace-Id 標頭值，聯繫支援人員並不能解決您的問題', '超出 APIM 的限制，请检查每个请求是否具有唯一的 Trace-Id 标头值，联系支援人员并不能解决您的问题'),
(21, 'EA014', 'Request to create a payment request uses an invalid currency code, must be \"HKD\"', '創建付款請求時使用了無效的貨幣代碼，必須是 \"HKD\"', '创建付款请求时使用了无效的货币代码，必须是 \"HKD\"'),
(22, 'EA015', 'paymentRequestInputModel\': field \'effectiveDuration\' must be greater than or equal to 15; rejected value', 'paymentRequestInputModel\': field \'effectiveDuration\'  必須大於或等於 15； rejected value', 'paymentRequestInputModel\': field \'effectiveDuration\'  必须大于或等于 15； rejected value'),
(23, 'EA017', 'Request to create a payment request uses an invalid total amount, check api documentation for limits', '創建付款請求時使用了無效的總金額，請查看 API documentation 以了解限制', '创建付款请求时使用了无效的总金额，请查看 API documentation 以了解限制'),
(24, 'EA018', 'Missing or incorrect Content-Type header in the request with content', '內容請求中缺少或有不正確的 Content-Type 標頭', '内容请求中缺少或有不正确的 Content-Type 标头'),
(25, 'EA019', 'Invalid RFC3339 date format', '無效的 RFC3339 日期格式', '无效的 RFC3339 日期格式'),
(26, 'EA020', 'Service Request Validation Failed', '服務請求驗證失敗', '服务请求验证失败'),
(27, 'EB003', 'Account related, contact support', '賬號相關，聯繫支援', '账号相关，联系支援'),
(28, 'EB004, EB005, EB006	', 'Internal server error, contact support', '內部服務器錯誤，聯繫支援', '内部服务器错误，联系支援'),
(29, 'EB007', 'The API backend has rejected your request as QR code has expired', '由於二維碼已過期，API  backend 拒絕了您的請求', '由于二维码已过期，API  backend 拒绝了您的请求'),
(30, 'EB008', 'PayCode not found', '找不到付款碼', '找不到付款码'),
(31, 'EB009', 'No data exists for the transaction ID provided', '所提供的 transaction ID 沒有數據', '所提供的 transaction ID 没有数据'),
(32, 'EB010', 'Refund amount entered > net refundable amount', '輸入的退款金額 > 可退款金額', '输入的退款金额 > 可退款金额'),
(33, 'EB011', 'Refund amount entered > wallet balance', '輸入的退款金額 > 錢包餘額', '输入的退款金额 > 钱包余额'),
(34, 'EB012', 'Blocked by business rules.', '被業務規則阻止。', '被业务规则阻止。'),
(35, 'EB013', 'Blocked by business rules.', '被業務規則阻止。', '被业务规则阻止。'),
(36, 'EB020', 'The API backend has rejected your request as QR code is in aborted state', '由於二維碼處於中止狀態，API backend 拒絕了您的請求', '由于二维码处于中止状态，API backend 拒绝了您的请求'),
(37, 'EB021', 'The API backend has rejected your request as transaction is already completed', 'API backend 拒絕了您的請求，因為交易已經完成', 'API backend 拒绝了您的请求，因为交易已经完成'),
(38, 'EB022', 'The API backend has rejected your request as the QR code payment is currently being processed.', 'API backend 拒絕了您的請求，因為當前正在處理二維碼付款。', 'API backend 拒绝了您的请求，因为当前正在处理二维码付款。'),
(39, 'any', 'Payment Failed', '支付失敗', '支付失败');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('draft','publish') COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('active','disabled','','') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `content`, `status`, `type`, `created_at`, `updated_at`) VALUES
(4, 1, '3rd Post has been Updated', 'This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.', 'draft', 'active', '2020-11-06 14:43:44', '2021-08-16 12:12:24'),
(5, 1, '3rd Post has been Updated', 'This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.', 'publish', 'active', '2020-11-06 14:43:44', '2020-11-06 14:42:40'),
(9, 1, 'This is the Latest Post', 'Hi!! All Hope you are doing Great.Hi!! All Hope you are doing Great.Hi!! All Hope you are doing Great.', 'publish', 'active', '2020-11-07 00:00:47', '2020-11-07 00:00:47'),
(13, 4, '3rd Post has been Updated too', 'This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.', 'publish', 'active', '2020-11-07 00:19:39', '2020-11-07 00:19:39'),
(14, 4, 'I am going to test one', 'Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text', 'publish', 'active', '2020-11-15 16:57:23', '2021-07-23 09:57:20'),
(17, 1, 'welcome to react', 'lession 24', 'publish', 'disabled', '2021-06-14 04:44:03', '2021-06-14 05:13:25'),
(18, 1, 'welcome to react', 'lession 1', 'publish', 'active', '2021-06-19 00:26:14', '2021-06-19 00:26:14'),
(19, 1, 'Welcome to React Projject', 'dfsdfsdfsdfsdf', 'publish', 'active', '2021-06-19 00:31:26', '2021-06-19 00:31:26'),
(20, 1, 'Welcome to React Next Project', 'dfsdfsdfsdfsdf', 'publish', 'active', '2021-06-19 00:34:21', '2021-06-19 00:34:21'),
(21, 1, 'Regarding Testing Purpose', 'is it working file', 'draft', 'disabled', '2021-07-28 05:41:37', '2021-07-28 05:43:34'),
(22, 1, 'sdfsdfsd', 'sdfsfsfsdf', 'draft', 'active', '2021-07-28 06:01:16', '2021-07-28 06:01:16');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0djozTTLl8dzQK2PrqMeqgE7oMpk6kXXWudgwQ8G', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6ImZ3T3ZWQXFYQm1tQ1hZQk9MSGUwVGR6bkJhV3BaeW5SdHBGSFhTcmQiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIzOiJodHRwOi8vcmVsYXgudGVzdC9wb3N0cyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7czo3OiJ1c2VyX2lkIjtpOjE7czo5OiJ1c2VyX25hbWUiO3M6MTA6Im5pc2hfdmVlbWEiO3M6NDoicm9sZSI7czo1OiJhZG1pbiI7czo1OiJwaG90byI7czo2MDoicHJvZmlsZS1waG90b3MvSDQycWlmU2VIQmJ2ZE9ycU8xMlZ5MEV4UFN3ZjIwNnp0MExrSWVXWS5qcGVnIjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7fQ==', 1623907761),
('5EVlBihMezl2xAXopRbWPJJwOt9sPj5G4jbDsolp', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36', 'YTozOntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyNjoiaHR0cDovL3JlbGF4LnRlc3QvcHJvZHVjdHMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjY6Il90b2tlbiI7czo0MDoiNjBxZ3ZyQnRLbGdYQ0F3MkRjZFZkS3FxZnZHV2M2Q1FBYVd5TFQ4WiI7fQ==', 1627379204),
('5NcIamuuPeVHifyt5AcPy4FaYDzG1iWfUdm4exZc', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6ImZPSGEzVEdNY1BOcDhlcHVPMWtTbXhYbllqTDZOTmVDZk1SQmh0VXYiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vcmVsYXgudGVzdC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO3M6NzoidXNlcl9pZCI7aToxO3M6OToidXNlcl9uYW1lIjtzOjEwOiJOaXNoYW50aGFuIjtzOjQ6InJvbGUiO3M6NToiYWRtaW4iO3M6NToicGhvdG8iO3M6ODE6Imh0dHA6Ly9yZWxheHJlYWN0LnRlc3QvcmVhY3QtYmFja2VuZC9zdG9yYWdlL2FwcC9wdWJsaWMvcHJvZmlsZUltYWdlL2Rvd25sb2FkLnBuZyI7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO30=', 1625929687),
('BdUIcPVmnTLCQiWfv6PqM6JZTyGJVoUx7tbjRaPO', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'YToxMjp7czo2OiJfdG9rZW4iO3M6NDA6IjBiOWNWeVRQTWhKckZ0dTNxelhuRzJtYkhGYWZYbzVhTExVTG1sTWsiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIyMDoiaHR0cDovL3JlbGF4LnRlc3QvZWRpdF9wb3N0L2FsbC9leUpwZGlJNklsaHlZbGN6Ym04MmRFd3JjV1J4VURRM05XTTVOMEU5UFNJc0luWmhiSFZsSWpvaVFsVlNNVWRJWVhwNE1VNTJha1pKTUhWd1RrZEVVVDA5SWl3aWJXRmpJam9pTkRZellUVTVOell3TVRFM056QXpOak14TlRJNVlUbGlZalEyTVdVNE1XVXpOek5pWVdabE5qWm1PV0l3TkdZNU1qWmhZMkppT1RVNE5HRXlNelF4WkNKOSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7czo3OiJ1c2VyX2lkIjtpOjE7czo5OiJ1c2VyX25hbWUiO3M6MTA6Im5pc2hfdmVlbWEiO3M6NDoicm9sZSI7czo1OiJhZG1pbiI7czo1OiJwaG90byI7czo2MDoicHJvZmlsZS1waG90b3MvSDQycWlmU2VIQmJ2ZE9ycU8xMlZ5MEV4UFN3ZjIwNnp0MExrSWVXWS5qcGVnIjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7czoxMToiZ2V0X3Bvc3RfaWQiO3M6MTg4OiJleUpwZGlJNklsaHlZbGN6Ym04MmRFd3JjV1J4VURRM05XTTVOMEU5UFNJc0luWmhiSFZsSWpvaVFsVlNNVWRJWVhwNE1VNTJha1pKTUhWd1RrZEVVVDA5SWl3aWJXRmpJam9pTkRZellUVTVOell3TVRFM056QXpOak14TlRJNVlUbGlZalEyTVdVNE1XVXpOek5pWVdabE5qWm1PV0l3TkdZNU1qWmhZMkppT1RVNE5HRXlNelF4WkNKOSI7czo4OiJ1c2VyVHlwZSI7czozOiJhbGwiO30=', 1623773035),
('CnLXOM1AbhrYcFyxtUtV8BIFL5fAXtkfLhIipmgY', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiYlVYSXFzRjlsZVhWa1ZCTzVidXgyWGthc2hhMWoyS25hQ0xUZkRWMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHA6Ly9yZWxheC50ZXN0L3NpZ25pbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1623773021),
('EdaTdyFHAnXavTmvVcgil4LMtk7IMYu4YwVf6MMH', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6IlFtcm1VZ3ZPQ0xKNDFBRWNBTXRSanJPSlJMTENQbEZFV3BKVUZ1WjMiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vcmVsYXgudGVzdC9zZWxsX2l0ZW0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO3M6NzoidXNlcl9pZCI7aToxO3M6OToidXNlcl9uYW1lIjtzOjEwOiJuaXNoX3ZlZW1hIjtzOjQ6InJvbGUiO3M6NToiYWRtaW4iO3M6NToicGhvdG8iO3M6NjA6InByb2ZpbGUtcGhvdG9zL0g0MnFpZlNlSEJidmRPcnFPMTJWeTBFeFBTd2YyMDZ6dDBMa0llV1kuanBlZyI7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO30=', 1623916348),
('M0gSl9Cjcn1U2QaqolkWRAS20rkoLsbwUUl5aAaE', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOFZvelZYTWVjbkNzdm5pdXhGczl2dDhTZlh0VGZVM2Z6QTBEZ2NMSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTc6Imh0dHA6Ly9yZWxheC50ZXN0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1624015555),
('qBWIR9TnSrJkryGt93iet6vUGiaQbYBSY2DT1LFU', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSzBkVW5qUGVaa2J6bU5XYWlPVkJyYWY5T3R5SFc2MjVENHRlRG9jQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjQ6Imh0dHA6Ly9yZWxheC50ZXN0L3NpZ25pbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1623838461),
('RNL90gPbwEmfDtoZUaqqqRIaMW6VPlw8jiNenW1z', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6InJHWWZUS1hoekNzSDRiTDFNeW1sTjRkUVZxUktzMUlOMkhwMGR3SWciO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI5OiJodHRwOi8vcmVsYXgudGVzdC9jcmVhdGVfcG9zdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7czo3OiJ1c2VyX2lkIjtpOjE7czo5OiJ1c2VyX25hbWUiO3M6MTA6Ik5pc2hhbnRoYW4iO3M6NDoicm9sZSI7czo1OiJhZG1pbiI7czo1OiJwaG90byI7czo4MToiaHR0cDovL3JlbGF4cmVhY3QudGVzdC9yZWFjdC1iYWNrZW5kL3N0b3JhZ2UvYXBwL3B1YmxpYy9wcm9maWxlSW1hZ2UvZG93bmxvYWQucG5nIjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7fQ==', 1626199581),
('sax5PtkHeI2Zqcgw5zZELP8My1F9mawUBMU5yb5M', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6IjNLYzZ6emNMMDl1aEkyb09Ma2JJSjhkWG14dU9ZSm5yZU5rVDBMN3QiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vcmVsYXgudGVzdC92aWV3X2l0ZW0iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO3M6NzoidXNlcl9pZCI7aToxO3M6OToidXNlcl9uYW1lIjtzOjEwOiJOaXNoYW50aGFuIjtzOjQ6InJvbGUiO3M6NToiYWRtaW4iO3M6NToicGhvdG8iO3M6ODE6Imh0dHA6Ly9yZWxheHJlYWN0LnRlc3QvcmVhY3QtYmFja2VuZC9zdG9yYWdlL2FwcC9wdWJsaWMvcHJvZmlsZUltYWdlL2Rvd25sb2FkLnBuZyI7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO30=', 1626001868),
('SioOFlC7kWGhnROk0RU2M5nz1YSuJ9etLkiUJwll', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUERBeExSWjZXQ3NlRjFnM2xYQmVpOUZUVG1CVFZTSXVuZmV6dXZKNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTc6Imh0dHA6Ly9yZWxheC50ZXN0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1627457356),
('sIv7PGaazq8V9iDpWkGVxc2qbcbs0Am8xjGKdm2I', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6IjFxdDJpZjhjcnJBeXNwbEZNRmlDeE1oTG92eFZZMVh3VHFGV3dnT24iO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vcmVsYXgudGVzdC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO3M6NzoidXNlcl9pZCI7aToxO3M6OToidXNlcl9uYW1lIjtzOjEwOiJOaXNoYW50aGFuIjtzOjQ6InJvbGUiO3M6NToiYWRtaW4iO3M6NToicGhvdG8iO3M6ODE6Imh0dHA6Ly9yZWxheHJlYWN0LnRlc3QvcmVhY3QtYmFja2VuZC9zdG9yYWdlL2FwcC9wdWJsaWMvcHJvZmlsZUltYWdlL2Rvd25sb2FkLnBuZyI7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkZXNpMmxyeFhBYmlEcWlBT2FYV09ldTQwZklWQ2I0QU8zVU12bHlKd2FKVmpZcGFpTlBVUUciO30=', 1624879025),
('U1xFAIKaeHjPFfGnqQxcSzBzj0Znp9V6a5GNCrE4', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', 'YToxMjp7czo2OiJfdG9rZW4iO3M6NDA6ImlTb2x4bVlSN1gwM28yc2RsVXdYVVVrVG1lNHphdWY4WGdBZUVkcTEiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI4OiJodHRwOi8vcmVsYXgudGVzdC92aWV3X3VzZXJzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJGVzaTJscnhYQWJpRHFpQU9hWFdPZXU0MGZJVkNiNEFPM1VNdmx5SndhSlZqWXBhaU5QVVFHIjtzOjc6InVzZXJfaWQiO2k6MTtzOjk6InVzZXJfbmFtZSI7czoxMDoiTmlzaGFudGhhbiI7czo0OiJyb2xlIjtzOjU6ImFkbWluIjtzOjU6InBob3RvIjtzOjgxOiJodHRwOi8vcmVsYXhyZWFjdC50ZXN0L3JlYWN0LWJhY2tlbmQvc3RvcmFnZS9hcHAvcHVibGljL3Byb2ZpbGVJbWFnZS9kb3dubG9hZC5wbmciO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEwJGVzaTJscnhYQWJpRHFpQU9hWFdPZXU0MGZJVkNiNEFPM1VNdmx5SndhSlZqWXBhaU5QVVFHIjtzOjE5OiJ1cGRhdGVfc2VsbF9pdGVtX2lkIjtzOjE4ODoiZXlKcGRpSTZJbGRoVEhCNE1FeFBlV2cyVjFwWGJHZDBXRlJQYzFFOVBTSXNJblpoYkhWbElqb2lNREJXVjA5TFoxY3ZlbFJoV1hCSkx6RTRNelJxWnowOUlpd2liV0ZqSWpvaVl6aGpPV1F4TXpNMFlUUm1OamMxT1RVMU5qTTBOV1kwTm1JMVltVmlZV1UwTURFMk1qUXpaV0psTXpjMFptTXpZMkppT0RsbU4yUTBNbUV4TTJWaE1DSjkiO3M6MjE6InVwZGF0ZV9zZWxsX2l0ZW1fbmFtZSI7czoyMToiQjkgQXJtY2hhaXIgLSBOYXR1cmFsIjt9', 1626168125),
('W2T59X6BkgdUL0iD1pvrapZBjyW3GtTsO2uiEHPr', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36', 'YToxMDp7czo2OiJfdG9rZW4iO3M6NDA6IjBhQnp4S3gzWnRubTQzbXU4a3dKUnVtck1lSjZNUGZmaEVKY1JjeTEiO3M6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI2OiJodHRwOi8vcmVsYXgudGVzdC9hZGRfaXRlbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7czo3OiJ1c2VyX2lkIjtpOjE7czo5OiJ1c2VyX25hbWUiO3M6MTA6Im5pc2hfdmVlbWEiO3M6NDoicm9sZSI7czo1OiJhZG1pbiI7czo1OiJwaG90byI7czo2MDoicHJvZmlsZS1waG90b3MvSDQycWlmU2VIQmJ2ZE9ycU8xMlZ5MEV4UFN3ZjIwNnp0MExrSWVXWS5qcGVnIjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRlc2kybHJ4WEFiaURxaUFPYVhXT2V1NDBmSVZDYjRBTzNVTXZseUp3YUpWallwYWlOUFVRRyI7fQ==', 1623808537);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `itemname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `itemname`, `itemcode`, `count`, `created_at`, `updated_at`) VALUES
(4, 'Francois Bar Stool 74cm - Walnut', 'BST-500/S', 8, NULL, '2021-10-03 10:26:18'),
(5, 'Francois Bar Stool 74cm - White', 'BST-500/S', 19, NULL, NULL),
(6, 'Francois Bar Stool 74cm - White wash (68cm)', 'BST-500/S', 9, NULL, NULL),
(7, 'B9 Armchair - Black', 'B-9', 29, NULL, '2021-08-16 12:51:53'),
(9, 'B9 Armchair - Dark Grey', 'B-9', 81, NULL, '2020-11-18 13:44:53'),
(10, 'B9 Armchair - Light Grey(Cool Grey)', 'B-9', 2, NULL, NULL),
(11, 'B9 Armchair - Light Grey(Warm Grey)', 'B-9', 24, NULL, NULL),
(12, 'B9 Armchair - Natural', 'B-9', 40, NULL, '2021-08-15 21:02:02'),
(13, 'B9 Armchair - Walnut', 'B-9', 5, NULL, '2021-08-16 12:52:04'),
(14, 'B9 Armchair - Wenge', 'B-9', 7, NULL, NULL),
(15, 'B9 Armchair - White', 'B-9', 29, NULL, '2021-08-16 00:37:16'),
(16, 'B9 Armchair - White with Natural socks', 'B-9', 6, NULL, '2020-11-05 04:24:53'),
(17, 'Linz Chair - Black', 'A-0919', 63, NULL, NULL),
(18, 'Linz Chair - Walnut', 'A-0919', 2, NULL, NULL),
(19, 'Linz Chair - White', 'A-0919', 0, NULL, NULL),
(20, 'Paris Stool 68cm - Black with Natural Socks', 'BST-9739/68', 35, NULL, NULL),
(21, 'Paris Stool 68cm - White with Natural Socks', 'BST-9739/68', 30, NULL, NULL),
(22, 'Paris Stool 46cm - Black', 'BST-9739/46', 9, NULL, NULL),
(23, 'Paris Stool 46cm - Walnut', 'BST-9739/46', 12, NULL, '2021-07-23 09:25:36'),
(24, 'Paris Stool 46cm - White', 'BST-9739/46', 16, NULL, NULL),
(25, 'Paris Stool 68cm - Black', 'BST-9739/68', 4, NULL, NULL),
(26, 'Paris Stool 68cm - White ', 'BST-9739/68', 54, NULL, NULL),
(27, 'Paris Stool 68cm - Walnut', 'BST-9739/68', 77, NULL, NULL),
(28, 'Paris Stool 68cm - Natural', 'BST-9739/68', 45, NULL, NULL),
(29, 'Paris Stool 80cm - Black', 'BST-9739/80', 21, NULL, NULL),
(30, 'Paris Stool 80cm - White ', 'BST-9739/80', 50, NULL, NULL),
(31, 'Paris Stool 80cm - Walnut', 'BST-9739/80', 92, NULL, NULL),
(32, 'Paris Stool 80cm - Natural', 'BST-9739/80', 14, NULL, NULL),
(34, 'Paris Stool 80cm - Wenge', 'BST-9739/80', 2, NULL, NULL),
(35, 'Paris Stool 80cm - Wenge with pad', 'BST-9739/80', 15, NULL, NULL),
(36, 'Roundback Bar Stool 68cm w/Cream Pad - Natural', 'BST-102/500', 0, NULL, NULL),
(37, 'Roundback chair - Black', 'A-1260', 52, NULL, NULL),
(38, 'Roundback chair - Walnut', 'A-1260', 2, NULL, NULL),
(39, 'Roundback chair - Natural', 'A-1260', 60, NULL, NULL),
(41, 'Roundback Bar Stool 68cm w/Cream Seat Pad - Natural', 'A-1260', 0, NULL, NULL),
(42, 'Vienna A18 Bar Stool 74cm - Black with Natual socks', 'BST-18', 0, NULL, NULL),
(43, 'Vienna A18 Bar Stool 74cm - Natural', 'BST-18', 98, NULL, NULL),
(44, 'Vienna A18 Bar Stool 74cm - white with Natual socks', 'BST-18', 2, NULL, NULL),
(45, 'Vienna A18 Bar Stool 74cm - white', 'BST-18', 8, NULL, '2020-11-05 17:34:10'),
(46, 'Vienna A18 Bar Stool 74cm - Black', 'BST-18', 5, NULL, '2021-07-23 09:25:48'),
(47, 'Vienna A18 Bar Stool 74cm - Dark Grey', 'BST-18', 0, NULL, NULL),
(48, 'Vienna A18 Bar Stool 74cm - Light Grey', 'BST-18', 0, NULL, NULL),
(49, 'Vienna A18 Bar Stool 74cm - Walnut', 'BST-18', 11, NULL, NULL),
(50, 'Vienna A18 Bar Stool 74cm - Wenge', 'BST-18', 11, NULL, NULL),
(52, 'Vienna A18  - Black with Natural Socks', 'A-18/14', 99, NULL, NULL),
(53, 'Vienna A18  - White with Natural Socks', 'A-18/14', 8, NULL, NULL),
(54, 'Vienna A18  - Black', 'A-18/14', 29, NULL, NULL),
(55, 'Vienna A18  - White', 'A-18/14', 19, NULL, NULL),
(56, 'Vienna A18  - Wenge', 'A-18/14', 1, NULL, NULL),
(57, 'Vienna A18  - Walnut', 'A-18/14', 0, NULL, NULL),
(58, 'Vienna A18  - Red', 'A-18/14', 40, NULL, NULL),
(59, 'Vienna A18  - Pink', 'A-18/14', 0, NULL, NULL),
(60, 'Vienna A18  - Natural', 'A-18/14', 107, NULL, NULL),
(61, 'Vienna A18  - Light Grey(Warm Grey)', 'A-18/14', 3, NULL, NULL),
(62, 'Vienna A18  - Yellow', 'A-18/14', 0, NULL, NULL),
(63, 'Vienna A18  - Dark Grey', 'A-18/14', 0, NULL, NULL),
(64, 'Castello Stool (With Pad) - Black', 'Castello', 24, NULL, NULL),
(65, 'Castello Stool (With Pad) - white', 'Castello', 5, NULL, NULL),
(66, 'Bronco Box Seat - Walnut', 'A7006', 29, NULL, '2021-06-13 09:28:40'),
(67, 'Bronco Box Seat - Wenge', 'A7006', 10, NULL, NULL),
(68, 'Bronco Box Seat - White wash', 'A7006', 4, NULL, NULL),
(70, 'Bronco Bar Stool 74cm - wenge', 'BST-18', 60, NULL, NULL),
(71, 'Bronco Bar Stool 74cm - White Wash', 'BST-18', 28, NULL, NULL),
(72, 'cushions-Paris stool - Brown', 'cushions', 47, NULL, NULL),
(73, 'cushions-Paris stool - Black', 'cushions', 174, NULL, NULL),
(74, 'cushions-Paris stool - White', 'cushions', 55, NULL, NULL),
(75, 'cushions-B9 - Black', 'cushions', 21, NULL, NULL),
(76, 'cushions-B9 - White', 'cushions', 31, NULL, NULL),
(77, 'cushions-A18 - White', 'cushions', 49, NULL, NULL),
(78, 'cushions-A18 - Black', 'cushions', 27, NULL, NULL),
(79, 'cushions-Francois - Black', 'cushions', -1, NULL, '2020-11-13 19:19:10'),
(80, 'cushions-Francois - Cream', 'cushions', 31, NULL, NULL),
(81, 'cushions-Francois - White', 'cushions', 9, NULL, NULL),
(82, 'cushions-Linx - Brown', 'cushions', 18, NULL, NULL),
(83, 'cushions-Linx - White', 'cushions', 25, NULL, NULL),
(84, 'cushions-Castello - Brown', 'cushions', 10, NULL, NULL),
(85, 'cushions-Castello - Black', 'cushions', 6, NULL, NULL),
(86, 'cushions-Stockholm - White', 'cushions', 70, NULL, NULL),
(87, 'cushions-Castello - White', 'cushions', 20, NULL, NULL),
(88, 'cushions-Stockholm - Black', 'cushions', 8, NULL, NULL),
(89, 'cushions-Ironika - Black', 'cushions', 24, NULL, NULL),
(90, 'cushions-Ironika - White', 'cushions', 15, NULL, NULL),
(91, 'Vienna A18 Bar Stool 68cm - White wash', 'BST-18', 20, NULL, NULL),
(92, 'cushions-A18 - Brown', 'cushions', 0, NULL, NULL),
(93, 'Bronco Bar Stool 74cm - Walnut', 'BST18', 30, NULL, NULL),
(94, 'Bronco Paris Stool 80cm - Natural', 'BST-9739/80', 41, NULL, '2020-11-18 13:50:26'),
(95, 'Bronco Paris Stool 80cm - White wash', 'BST-9739/80', 100, NULL, NULL),
(96, 'Bronco Paris Stool 80cm - Walnut', 'BST-9739/80', 50, NULL, NULL),
(108, 'NEWITEM', 'CODE123', 48, NULL, '2020-11-05 18:00:27'),
(110, 'New Bronco Chair - Black', 'bro-b', 28, '2020-11-14 23:19:22', '2020-11-14 23:19:22'),
(112, 'New Item', 'A18', 20, '2021-03-12 23:46:43', '2021-03-12 23:46:43'),
(113, 'retert', 'Castello', 1, '2021-03-12 23:46:55', '2021-03-12 23:46:55'),
(115, 'New Product', 'ABC12345', 123, '2021-06-18 19:09:26', '2021-06-18 19:09:26'),
(116, 'NEW Chaires - black -48cm', 'NEW-12345', 127, '2021-06-18 20:05:45', '2021-06-18 20:05:45'),
(118, 'Nishanth', 'NEW-123456', 12, '2021-06-18 20:26:09', '2021-06-18 20:26:09'),
(119, 'fsdfsdf', 'fsfsdfs', 123, '2021-06-18 20:26:19', '2021-06-18 20:26:19'),
(123, 'werwer', 'werwer', 12, '2021-06-18 20:27:26', '2021-06-18 20:27:26'),
(125, 'werwrwe', 'erwer', 123, '2021-06-18 20:28:34', '2021-06-18 20:28:34'),
(128, '1', '1', 1, '2021-06-18 20:29:23', '2021-06-18 20:29:23'),
(131, '2', '2', 1, '2021-06-18 20:29:49', '2021-06-18 20:29:49'),
(132, '123', 'newItem', 1, '2021-06-18 20:31:34', '2021-06-18 20:31:34'),
(133, 'Bronco Bar Stool 94cm - Walnut', 'sddsv', 125, '2021-06-18 22:30:14', '2021-06-18 22:30:14'),
(134, 'Bronco Bar Stool 104cm - Walnut', 'sddsv', 12, '2021-06-18 22:31:45', '2021-08-16 00:36:14'),
(135, 'newitem2', 'ABC345', 34, '2021-06-21 09:02:34', '2021-06-21 09:02:34'),
(136, 'newitem1233', 'ABC123', 123, '2021-06-21 09:04:41', '2021-06-21 09:04:41'),
(137, 'newitem212', 'ABC345', 34, '2021-06-21 09:04:41', '2021-06-21 09:04:41'),
(138, 'newChaire1234', 'ABC123', 123, '2021-06-21 09:09:12', '2021-06-21 09:09:12'),
(139, 'newTable234', 'ABC345', 34, '2021-06-21 09:09:12', '2021-06-21 09:09:12'),
(140, 'ewrwervwerwer', 'NEW-12345', 1, '2021-06-21 09:11:34', '2021-06-21 09:11:34'),
(142, 'new product 1234', '1234refe', 12, '2021-07-28 05:32:36', '2021-07-28 05:32:36');

-- --------------------------------------------------------

--
-- Table structure for table `store_products`
--

CREATE TABLE `store_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `offer_price` double DEFAULT NULL,
  `color` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('active','draft') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `store_products`
--

INSERT INTO `store_products` (`id`, `name`, `price`, `offer_price`, `color`, `height`, `description`, `image_url`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Vienna A18', 166.25, 144.25, 'white,walnet,natural', '46cm,68cm,74cm', 'The Relax House Vienna Café chair is crafted from Beech wood and is presented here in black, the perfect contemporary café colour. Put this chair around the beatup tables in your trendy coffee house, or pair these chic restaurant dining chairs with cloth covered tables in your French bistro. Or put these dining chairs in your home kitchen or dining area for an affordable designer touch.', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/vienna-18-chair-black-hero.png', 'active', '2021-09-14 23:39:13', '2021-09-24 22:55:32'),
(5, 'Bendwood LE Corbusier B9', 254.78, NULL, 'white,walnet,natural,black', '46cm,68cm,74cm', 'In black with a sunburst seat pattern, our Le Corbusier B9 bentwood arm chair offers the best of yesterday and today. The furniture of the designer Thonet’s time was typically constructed from flat pieces of wood with abundant joints disguised by ornate carvings. It was understandably difficult for most people to afford to buy furniture. Thonet rejected the old methods and looked for simpler and more affordable ways of mass-producing attractive, high quality furniture.', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/Natural_B9_Cava_-Armchair.png', 'active', '2021-09-15 02:54:14', '2021-09-16 02:56:53'),
(6, 'Bendwood Roundback Chair', 198.25, NULL, 'black,white,walnet,natural', '46cm,68cm,74cm', 'Great architect and designer Le Corbsier said of Thonet’s chairs, “Never was there an object as elegant, as well conceived, as precise in its execution, and practical in its usage.” Le Corbusier knew what he was talking about, Michael Thonet\\\'s bent wood furniture designs are some of the most beautiful and lasting pieces of usable furniture history. The Michael Thonet original Melnikov Roundback café restaurant chair is simple yet chic, durable but light making it a favorite of kitchens, cafes and restaurants since the mid 1800s.', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/roundback.png', 'active', '2021-09-15 02:56:37', '2021-09-15 02:56:37'),
(7, 'Francois Bar Stool', 179.99, 136.45, 'black,white,walnet,natural', '46cm,68cm,74cm', 'Replacing your old barstools with a brand spanking new contemporary bar stool can give your kitchen or bar area an instant, affordable update. With the Francois barstool you get an affordable bar stool that offers a chic bentwood design paired with top notch European craftsmanship and durable beech wood. Our Francois black wooden barstool is offered in two sizes to best fit your space and sports a subtle embossed sunset patterned seat detail that adds something different to this classic bentwood barstool design.', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/Francois-Black.png', 'active', '2021-09-15 03:32:54', '2021-09-15 03:32:54'),
(8, 'Vienna A18 Bar Stool', 156.85, NULL, 'black,white,walnet,natural', '46cm,68cm,74cm', 'Thonet’s collection of bentwood stools are currently experiencing a renewed popularity. The No.18 Vienna Café stool is one of the world’s most recognisable pieces and has remained unchanged for nearly one hundred years. Our Thonet reproduction is constructed in the very same Polish factory that has been producing Thonet originals for over a century. The Thonet No.18 Vienna Café stool has likely been sat upon by renowned and remembered Viennese like Sigmund Freud, Gustav Klimt and Gustav Mahler as they formed the ideas of psychoanalysis, sketched for their paintings and jotted down the notes of their operas.', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/Vienna-18-Whitewash-68cm-with-white-pad.png', 'active', '2021-09-15 03:34:28', '2021-09-15 03:34:28'),
(9, 'Paris Stool', 165.99, NULL, 'black,white,walnet,natural', '46cm,68cm,74cm', 'Michael Thonet designs ebb and flow in popularity but bentwood furniture is once again chic, on top and on trend. Michael Thonet’s \\\'Paris\\\' stool has long been heralded as an icon of bentwood furniture yet this more than century\\\'s old stool is as fresh and fashion forward as ever. Thonet’s impressive legacy gives bentwood furniture lovers many styles and colours to choose from. Our original Michael Thonet black designer timber stool', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/bentwood-stool-walnut.png', 'active', '2021-09-15 03:35:42', '2021-09-15 03:35:42'),
(10, 'Linz Chair', 157.99, NULL, 'white,walnet,natural', '46cm,68cm,74cm', 'Many cheap, knockoff bentwood chair manufacturers use only a top spray paint option that will not handle the daily life of your busy kitchen or commercial business.  At Relax House, our original Michael Thonet designed chairs come directly from the Polish factory that has been creating them for well beyond 120 years.  Put the chic white and natural café chairs in your café, your coffee house, your European bakery and more.', 'http://nkservice.test/react-backend/storage/app/public/storeProduct/18_White_w_Socks.png', 'active', '2021-09-15 03:39:10', '2021-09-15 03:39:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_me` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `status` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `last_name`, `about_me`, `roles`, `status`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'Nishanth', 'nisha_veema', 'nis@gmail.com', 'Veemarasan', NULL, 'admin', '1', NULL, '$2y$10$esi2lrxXAbiDqiAOaXWOeu40fIVCb4AO3UMvlyJwaJVjYpaiNPUQG', NULL, NULL, 'yihDGpxuTQ4QurHQdO8HSb1QKoBqWUNaNBPaCUdwXIlcm9shrxmxTsS6kP3g', NULL, 'https://nkitservice.com/relax/storage/app/public/profileImage/download.png', '2020-11-05 08:28:43', '2021-09-07 23:40:55'),
(4, 'kasthury', 'kasthy', 'kast@gmail.com', 'Nishanth', NULL, 'admin', '1', NULL, '$2y$10$uhYoDajoP/xwjK7hRHC0numpaYHstGlMR0h9vOgv.E9jaiz6wTapu', NULL, NULL, NULL, NULL, NULL, '2020-11-08 04:59:25', '2021-07-28 03:18:16'),
(9, 'prasanna', 'prasanna123', 'pra@gmail.com', NULL, NULL, 'user', '1', NULL, '$2y$10$CYb6eLqb38WtegOPsDZaFugUAZpvLaKalg6El4UMmz28bMcNCqiQ2', NULL, NULL, NULL, NULL, NULL, '2020-11-20 14:02:05', '2020-11-20 14:02:05'),
(10, 'Nishanth', 'kas123', 'kas123@gmail.com', NULL, NULL, 'user', '1', NULL, '$2y$10$4Y52/Bsas/.EqGh7DiwQdeG8QaFEUWgwzcMgU3gAPs34z0edU7lDC', NULL, NULL, NULL, NULL, NULL, '2021-02-10 20:35:40', '2021-06-15 02:03:46'),
(11, 'akil', 'akil_narayana', 'akil@gmail.com', NULL, NULL, 'user', '1', NULL, '123456', NULL, NULL, NULL, NULL, NULL, '2021-06-24 04:56:42', '2021-06-24 04:56:42'),
(12, 'Nishanth', 'nishanthveema', 'iamnishanthveema@gmail.com', 'Veemarasan', NULL, 'user', '1', NULL, '$2y$10$KQnIvRM3jmFiL4OwMKcxHeNMpAl4doqVa4xKo3foUbA1qW2IqPcUa', NULL, NULL, NULL, NULL, NULL, '2021-07-18 10:28:54', '2021-07-18 10:28:54'),
(14, 'sdfsdf', 'dfsdfsdfwewer', 'vnishanthan89@gmail.com', 'sdfsdfsdfsdf', NULL, 'user', '1', NULL, '$2y$10$bIRRzCmH0III2trEC4UdqORsDVh6PPDsvWetTzJtPWCjUqHWD5ojG', NULL, NULL, NULL, NULL, NULL, '2021-10-02 11:44:31', '2021-10-02 11:44:31'),
(15, 'Nishatnh', 'nishkas', 'akvee@gmail.com', 'Veemarasda', NULL, 'user', '1', NULL, '$2y$10$wt.5H/.lc6goouSWrrnurepn68K0KC3MBldemPP811zmPLtp7tu.K', NULL, NULL, NULL, NULL, 'https://nkitservice.com/relax/storage/app/public/profileImage/bentwood-stool-walnut.png', '2021-10-03 01:52:41', '2021-10-03 02:36:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_user_id_foreign` (`user_id`);

--
-- Indexes for table `checkdouble`
--
ALTER TABLE `checkdouble`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_post_id_foreign` (`post_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `invoice_type`
--
ALTER TABLE `invoice_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_user_id_foreign` (`user_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_user_id_foreign` (`user_id`),
  ADD KEY `likes_post_id_foreign` (`post_id`);

--
-- Indexes for table `logouts`
--
ALTER TABLE `logouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `logouts_user_id_foreign` (`user_id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `logs_user_id_foreign` (`user_id`);

--
-- Indexes for table `mails`
--
ALTER TABLE `mails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mails_from_foreign` (`from`),
  ADD KEY `mails_to_foreign` (`to`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_numbers`
--
ALTER TABLE `order_numbers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_numbers_order_no_unique` (`order_no`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payme_lang_code`
--
ALTER TABLE `payme_lang_code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stock_itemname_unique` (`itemname`);

--
-- Indexes for table `store_products`
--
ALTER TABLE `store_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `checkdouble`
--
ALTER TABLE `checkdouble`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice_type`
--
ALTER TABLE `invoice_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `logouts`
--
ALTER TABLE `logouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `mails`
--
ALTER TABLE `mails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=215;

--
-- AUTO_INCREMENT for table `order_numbers`
--
ALTER TABLE `order_numbers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payme_lang_code`
--
ALTER TABLE `payme_lang_code`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `store_products`
--
ALTER TABLE `store_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `job`
--
ALTER TABLE `job`
  ADD CONSTRAINT `job_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `logouts`
--
ALTER TABLE `logouts`
  ADD CONSTRAINT `logouts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `mails`
--
ALTER TABLE `mails`
  ADD CONSTRAINT `mails_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `mails_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
