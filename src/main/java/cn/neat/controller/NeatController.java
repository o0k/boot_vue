package cn.neat.controller;

import cn.neat.service.NeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/neat")
public class NeatController {

    @Autowired
    private NeatService neatService;

    @RequestMapping(value = "/getNeat", method = RequestMethod.GET)
    public String getNeat() {
        return neatService.getNeat();
    }

    @RequestMapping("login")
    public String login(@RequestParam("username") String username, @RequestParam("password") String password) {
        System.out.println("username: " + username);
        System.out.println("##### username: " + username);
        if ("assiduous".equals(username) && "xhtx@5438".equals(password)) {
            System.out.println("登录成功!");
            return "login0";
        } else {
            System.out.println("登录失败...");
            return "login2";
        }
    }
}
