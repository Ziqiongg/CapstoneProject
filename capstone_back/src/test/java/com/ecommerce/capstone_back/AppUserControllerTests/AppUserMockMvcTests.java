//package com.ecommerce.capstone_back.AppUserControllerTests;
//
//import org.hamcrest.Matchers;
//import org.junit.jupiter.api.Test;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.web.servlet.MockMvc;
//
//
//@SpringBootTest
//@AutoConfigureMockMvc
//public class AppUserMockMvcTests {
//    @Autowired
//    private MockMvc mvc;
//
//    public AppUserMockMvcTests() {
//    }
//
//    @Test
//    public void shouldReturnUserById() throws Exception{
//        this.mvc.perform(
//                MockMvcRequestBuilders.get("/user/id/1", new Object[0]))
//                .andDo(MockMvcResultHandlers.print())
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.content().string(Matchers.containsString("Alex")))
//                .andExpect(MockMvcResultMatchers.content().string(Matchers.containsString("Leaver Hernandez")));
//
//}
//
//    @Test
//    public void shouldReturnUserWalletById() throws Exception{
//        this.mvc.perform(
//                MockMvcRequestBuilders.get("/users/wallet/{id}", new Object[0]))
//                        .andDo(MockMvcResultHandlers.print())
//                        .andExpect(MockMvcResultMatchers.status().isOk())
//                        .andExpect(MockMvcResultMatchers.jsonPath("$.wallet").value(1000));
//    }
//
//
//
//
//
//
//
//
//}
