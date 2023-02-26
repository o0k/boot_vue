package cn.neat.config;

import cn.neat.controller.NeatController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class NeatConfigure implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/META-INF/resources/static/");
            registry.addResourceHandler("*.html").addResourceLocations("classpath:/META-INF/resources/templates/");
    }

    // @Bean
    // public NeatController neatController() {
    //     return new NeatController();
    // }
}
