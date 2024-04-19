import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import maskGroup from "../../assets/maskgroup.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  console.log(errors);

  const onSubmit = (data) => {
    if (
      data.userName?.toLowerCase() === "Admin".toLowerCase() &&
      data.password?.toLowerCase() === "admin@123".toLowerCase()
    ) {
      return navigate("/home");
    }
  };
  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      maxWidth="md"
      sx={{ py: 2, maxHeight: "80%" }}
    >
      <Stack
        component={Paper}
        sx={{
          flexDirection: "row",
          p: 3,
          gap: 6,
          borderRadius: 8,
        }}
        elevation={6}
      >
        <img src={maskGroup} style={{ maxWidth: "100%", height: "auto" }} />
        <Box sx={{ width: "100%", margin: "auto" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "28px",
              color: "primary.main",
              pb: 2.5,
            }}
          >
            Login
          </Typography>
          <Box sx={{ width: "100%", marginTop: "5px" }}>
            <Typography variant="h6" pb={1}>
              Username
            </Typography>
            <TextField
              {...register("userName", {
                required: "Please Enter Username",
              })}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              fullWidth
              label="Type"
              sx={{
                ".MuiInputLabel-outlined": {
                  left: "9px",
                },
                ".MuiInputBase-formControl": {
                  borderRadius: "80px",
                  backgroundColor: "grey.200",
                },
              }}
            />
            <Typography variant="h6" pt={2} pb={1}>
              Password
            </Typography>
            <TextField
              {...register("password", {
                required: "Please Enter Password",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              label="Type"
              sx={{
                ".MuiInputLabel-outlined": {
                  left: "9px",
                },
                ".MuiInputBase-formControl": {
                  borderRadius: "80px",
                  backgroundColor: "grey.200",
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                display: "block",
                textAlign: "end",
                fontWeight: 600,
                pt: 1,
              }}
            >
              Forgot Password?
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                display: "block",
                textAlign: "end",
                fontWeight: 600,
                pt: 1,
              }}
            >
              Create Account
            </Typography>
            <Button type="submit" sx={{ px: "40px", py: "5px" }}>
              Search
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
