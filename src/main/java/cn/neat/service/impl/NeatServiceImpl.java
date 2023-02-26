package cn.neat.service.impl;

import cn.neat.service.NeatService;
import org.springframework.stereotype.Service;

@Service
public class NeatServiceImpl implements NeatService {

    public String sayHello() {
        return "Hello World!";
    }

    @Override
    public String getNeat() {
        return "boot_vue";
    }
}
