package cn.neat.learn.schedule;

import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;

public class HelloSchedulerDemo {
    public static void main(String[] args) throws Exception {
        //1、调度器(Schedular)，从工厂中获取调度实例（默认：实例化new StdSchedulerFactory();)
        Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
        //2、任务实例（JobDetail）
        //加载任务类，与HelloJob完成绑定，要求HelloJob实现Job接口
        JobDetail jobDetail = JobBuilder.newJob(HelloJob.class)
                //参数1：任务的名称（唯一实例）；参数2：任务组的名称
                .withIdentity("job1", "group1")
                .build();
        //3、触发器（Trigger）
        Trigger trigger = TriggerBuilder.newTrigger()
                //参数1：触发器的名称（唯一实例）；参数2：触发器组的名称
                .withIdentity("trigger1", "group1")
                .startNow() //马上启动触发器
                //每5秒执行一次
                .withSchedule(SimpleScheduleBuilder.repeatSecondlyForever(10))
                .build();
        //让调度器关联任务和触发器，保证按照触发器定义的条件执行任务
        scheduler.scheduleJob(jobDetail, trigger);
        //启动
        scheduler.start();
    }
}