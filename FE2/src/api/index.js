/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from "./ajax";

// register interface
export const reqRegister = (user) => ajax("/register", user, "POST");
// login interface
export const reqLogin = ({ username, password }) => ajax("/login", { username, password }, "POST");
