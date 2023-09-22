/*
 Navicat Premium Data Transfer

 Source Server         : JDBCtest
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : findperson

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 22/09/2023 12:12:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `sid` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '学号',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '性别',
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '班级',
  `mobile` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`sid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('201792228', '严汝涵', '男', '软件1712', '', '');
INSERT INTO `student` VALUES ('201892009', '梁洪源', '男', '软测1806', '', '');
INSERT INTO `student` VALUES ('201892043', '苏璇睿', '男', '软金1801', '', '');
INSERT INTO `student` VALUES ('201892053', '蔡廷漳', '男', '软测1802', '', '');
INSERT INTO `student` VALUES ('201892065', '竺锦杰', '男', '软测1802', '', '');
INSERT INTO `student` VALUES ('201892379', '王晓文', '男', '软测1806', '', '');
INSERT INTO `student` VALUES ('201892415', '周天翔', '男', '软机1801', '', '');
INSERT INTO `student` VALUES ('201892447', '孙书海', '男', '软测1805', '', '');
INSERT INTO `student` VALUES ('201992139', '康越涵', '男', '网物1901', '18612345678', 'k@dlut.edu.cn');
INSERT INTO `student` VALUES ('201992155', '罗凯鑫', '男', '软机1901', '', '');
INSERT INTO `student` VALUES ('201992238', '张云飞', '男', '软测1904', '', '');
INSERT INTO `student` VALUES ('201992328', '方凯达', '男', '软金1901', '', '');
INSERT INTO `student` VALUES ('20201011002', '朱梦圆', '女', '软件2013', '', '');
INSERT INTO `student` VALUES ('20201011142', '杨帆', '男', '软件2013', '', '');
INSERT INTO `student` VALUES ('20201041083', '谭丞', '男', '软件2013', '', '');
INSERT INTO `student` VALUES ('20202241004', '陈宇昂', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241008', '唐弘基', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241013', '石雅舟', '女', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241017', '万一凡', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241018', '蔡修言', '男', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241026', '王子琦', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241027', '王军', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241028', '刘怡博', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241037', '羊昊', '男', '软件2009', '', '');
INSERT INTO `student` VALUES ('20202241044', '吴俊杰', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241046', '孔亚亭', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241047', '刘启昊', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241049', '杨烨', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241055', '牛永伟', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241057', '樊晨阳', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241059', '贾正德', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241062', '王沛祺', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241063', '杨钰啸', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241078', '陈子昂', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241085', '刘忠宇', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241088', '王琳', '女', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241093', '张天元', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241094', '刘欣怡', '女', '软件2013', '', '');
INSERT INTO `student` VALUES ('20202241099', '阮雨婷', '女', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241102', '李旻灿', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241105', '邹玉婷', '女', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241119', '袁鸿宇', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241120', '黄钊', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241122', '张丽华', '女', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241123', '熊亦康', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241124', '朱啸天', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241133', '李源', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241138', '杜颖', '女', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241139', '唐嘉宇', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241142', '苏运维', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241148', '安兴隆', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241150', '康云翔', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241156', '高铭瑜', '男', '软件2009', '', '');
INSERT INTO `student` VALUES ('20202241157', '刘子凡', '男', '软件2001', '', '');
INSERT INTO `student` VALUES ('20202241163', '魏倩文', '女', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241166', '柏鉴浩', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241169', '马一鸣', '男', '软件2001', '13912345678', 'm@dlut.edu.cn');
INSERT INTO `student` VALUES ('20202241170', '董骜', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241172', '陈云啸', '男', '软件2001', '', '');
INSERT INTO `student` VALUES ('20202241185', '张海新', '男', '软件2001', '', '');
INSERT INTO `student` VALUES ('20202241189', '王乙', '男', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241191', '蔡佳纯', '女', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241194', '梁子一', '女', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241196', '田默晗', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241198', '王康', '男', '软件2001', '', '');
INSERT INTO `student` VALUES ('20202241200', '李靖辉', '男', '软件2001', '', '');
INSERT INTO `student` VALUES ('20202241205', '马明元', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241207', '杜梦杰', '女', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241212', '高用鑫', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241214', '张程遥', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241219', '赵伟骏', '男', '软件2009', '', '');
INSERT INTO `student` VALUES ('20202241220', '李佳豪', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241223', '王一凡', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241228', '武南丁', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241229', '张怡然', '女', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241231', '徐悦雷', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241232', '张骏杰', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241233', '查浩男', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241235', '程骏', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241238', '冯广伟', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241241', '史锦民', '男', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241244', '叶萌', '女', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241245', '张秦维', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241249', '吴大伟', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241250', '何启航', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241251', '王梓涵', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241255', '杨孟堂', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241259', '李佳朋', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241260', '刘兴宇', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241261', '赵犇', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241272', '张翔宇', '男', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241273', '李思奇', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241280', '曹子康', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241285', '王栋', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241288', '刘天阔', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241290', '胡远航', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241293', '李强', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241294', '何方静', '女', '软件2013', '', '');
INSERT INTO `student` VALUES ('20202241296', '高尊敬', '男', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241297', '刘浩', '男', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241301', '刘阳', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241304', '赵韬洲', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241307', '王宜建', '男', '软件2009', '', '');
INSERT INTO `student` VALUES ('20202241313', '赵俊森', '男', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241316', '吴强', '男', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241318', '韩钰', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241324', '刘致远', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241327', '王天齐', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241340', '张硕', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241343', '王少杰', '女', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241345', '李佳澄', '女', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241359', '刘家兴', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241364', '王聖皓', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241365', '鲍东洋', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241368', '李珅', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241371', '李佳蔚', '女', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241373', '王雨竹', '女', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241377', '崔海龙', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241383', '孙小茜', '女', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241385', '薛荣辉', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241386', '包惠婷', '女', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241394', '祝钰博', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241395', '王镇艺', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241397', '王佳玉', '女', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241398', '李瑞楠', '女', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241399', '刘沛辰', '女', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241403', '唐乾淇', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241409', '尹虓然', '男', '软件2001', '', '');
INSERT INTO `student` VALUES ('20202241411', '谭志豪', '男', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241412', '李梓灿', '男', '软件2008', '', '');
INSERT INTO `student` VALUES ('20202241413', '阳靖康', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241423', '向琪', '女', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241427', '赖佳玮', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241428', '修作鑫', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241429', '余若楠', '女', '软件2009', '', '');
INSERT INTO `student` VALUES ('20202241430', '陈宇哲', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241432', '林心灿', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241440', '杨金卓', '男', '软件2006', '', '');
INSERT INTO `student` VALUES ('20202241444', '张城玮', '男', '软件2002', '', '');
INSERT INTO `student` VALUES ('20202241447', '王奕凯', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241448', '张光宇', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241451', '孙佳明', '男', '软件2009', '', '');
INSERT INTO `student` VALUES ('20202241453', '刘继中', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241458', '姚雪晴', '女', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241460', '战雨桐', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241463', '姜晗', '男', '软件2007', '', '');
INSERT INTO `student` VALUES ('20202241469', '乔虹宇', '男', '软件2005', '', '');
INSERT INTO `student` VALUES ('20202241471', '李家辉', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241472', '李瑞达', '男', '软件2010', '', '');
INSERT INTO `student` VALUES ('20202241474', '宿曼敬', '女', '软件2012', '', '');
INSERT INTO `student` VALUES ('20202241476', '王长昱', '男', '软件2004', '', '');
INSERT INTO `student` VALUES ('20202241483', '胡心筑', '男', '软件2011', '', '');
INSERT INTO `student` VALUES ('20202241487', '邓驰飏', '男', '软件2003', '', '');
INSERT INTO `student` VALUES ('20202241491', '李颜', '女', '软件2001', '', '');

SET FOREIGN_KEY_CHECKS = 1;
