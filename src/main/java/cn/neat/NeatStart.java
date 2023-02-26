package cn.neat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Administrator
 * 1.状态机知道吗?
 * 2.线程池知道吗?
 * 3.线程池的原理?
 * 4.数据库本地事务和分布式事务?
 * 5.数据库的索引?
 * 6.数据库的锁?
 * 7.数据库的隔离级别?
 * 8.数据库的事务隔离级别? 为什么不改成RC?
 * 9.RC和RR的区别? 哪个并发度高?
 * 10.RR和RC在锁的粒度上有什么区别?
 * 11.数据库的主从复制?
 */
@SpringBootApplication
public class NeatStart {
    public static void main(String[] args) {

        SpringApplication.run(NeatStart.class, args);
        System.out.println("NeatStart");
    }
}
