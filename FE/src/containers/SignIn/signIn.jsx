import { useState } from "react";
import React, {Component} from 'react'
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import bgImage from "assets/images/nbaJordan.jpg";

import {connect} from 'react-redux'

import {signIn} from '../../redux/action'

class SignIn extends Component {



  state = {
    username: '',  // 用户名
    password: '',  // 密码
    password2: '',  // 确认密码
    type: 'laoban',  // 用户类型名称   dashen/laoban
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  signIn = () => {
    this.props.login(this.state)
  }

  render() {

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
                    Sign in
                  </MKTypography>
                </MKBox>
                <MKBox pt={4} pb={3} px={3}>
                  <MKBox component="form" role="form">
                    <MKBox mb={2}>
                      <MKInput type="Username" label="Username" fullWidth onChange={val => {this.handleChange('username', val)}}/>
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput type="password" label="Password" fullWidth onChange={val => {this.handleChange('password', val)}}/>
                    </MKBox>
                    
                    <MKBox mt={4} mb={1}>
                      <MKButton variant="gradient" color="info" fullWidth>
                        sign in
                      </MKButton>
                    </MKBox>
                    <MKBox mt={3} mb={1} textAlign="center">
                      <MKTypography variant="button" color="text">
                        Don&apos;t have an account?{" "}
                        <MKTypography
                          component={Link}
                          to="/Register"
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          Register
                        </MKTypography>
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </MKBox>
      </>
    );
  }
}

export default connect(
  state => ({user: state.user}),
  {signIn}
)(SignIn)
