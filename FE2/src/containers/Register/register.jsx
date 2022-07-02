/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */

import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/nbaJordan.jpg";
import { register } from "../../redux/action";

class Register extends Component {
  // [rememberMe, setRememberMe] = useState(false);
  // handleSetRememberMe = () => setRememberMe(!rememberMe);
  constructor(props) {
    super(props);
    // first method
    this.state = {
      username: "",
      password: "", //
      password2: "", //
      type: "laoban", // dashen/laoban
    };
  }

  register = () => {
    // console.log(this.state)

    this.props.register(this.state);
  };

  // 处理输入数据的改变: 更新对应的状态
  handleChange = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val, // 属性名不是name, 而是name变量的值
    });
  };

  toLogin = () => {
    this.props.history.replace("/signIn");
  };

  render() {
    const { type } = this.state;
    // const { msg, redirectTo } = this.props.user;
    return (
      <>
        <MKBox
          position="absolute"
          top={0}
          left={0}
          zIndex={1}
          width="100%"
          minHeight="100vh"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
          <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
            <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  mx={2}
                  mt={-3}
                  p={2}
                  mb={1}
                  textAlign="center"
                >
                  <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                    Register
                  </MKTypography>
                </MKBox>
                <MKBox pt={4} pb={3} px={3}>
                  <MKBox component="form" role="form">
                    {type ? <div>{type}</div> : null}
                    <MKBox mb={2}>
                      <MKInput
                        type="UserName"
                        label="UserName"
                        fullWidth
                        onChange={(val) => {
                          this.handleChange("username", val);
                        }}
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Password"
                        fullWidth
                        onChange={(val) => {
                          this.handleChange("password", val);
                        }}
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Input password again"
                        fullWidth
                        onChange={(val) => {
                          this.handleChange("password2", val);
                        }}
                      />
                    </MKBox>

                    <MKBox mt={4} mb={1}>
                      <MKButton variant="gradient" color="info" fullWidth onClick={this.register}>
                        Register
                      </MKButton>
                    </MKBox>
                    <MKBox mt={3} mb={1} textAlign="center">
                      <MKTypography variant="button" color="text">
                        Have an account?{" "}
                        <MKTypography
                          component={Link}
                          to="/signIn"
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          Sign in
                        </MKTypography>
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </MKBox>
        <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
          <SimpleFooter light />
        </MKBox>
      </>
    );
  }
}

export default Register;
