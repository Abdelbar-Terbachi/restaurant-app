"use client";
import { SnackbarProvider, useSnackbar } from "notistack";
import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik, FormikProps } from "formik";
import * as yup from "yup";

import { usePathname } from "next/navigation";

interface ReservationFormValues {
  fullName: string;
  date: string;
  hour: string;
  email: string;
  phone: number;
  message: string;
}

const validationSchema = yup.object({
  fullName: yup.string().min(5).required("Full Name is required."),
  date: yup.date().required("Date is required."),
  hour: yup.string().required("Hour is required."),
  email: yup.string().email("Invalid email").required("Email is required."),
  phone: yup.number().min(10).required("Phone Number is required."),
  message: yup.string(),
});

const ReservationForm = () => {
  const pathname = usePathname();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const formik: FormikProps<ReservationFormValues> =
    useFormik<ReservationFormValues>({
      initialValues: {
        fullName: "",
        date: "",
        hour: "",
        email: "",
        phone: 0,
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        enqueueSnackbar("Email was sent successfully", { variant: "success" });
      },
    });

  return (
    <SnackbarProvider>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ flexGrow: 1, padding: 2, mt: "5rem", width: "100%" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} mb="2rem">
            <TextField
              fullWidth
              id="fullName"
              name="fullName"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12} md={6} mb="2rem">
            <TextField
              fullWidth
              id="date"
              name="date"
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12} md={6} mb="2rem">
            <TextField
              fullWidth
              id="hour"
              name="hour"
              label="Hour"
              type="time"
              InputLabelProps={{ shrink: true }}
              value={formik.values.hour}
              onChange={formik.handleChange}
              error={formik.touched.hour && Boolean(formik.errors.hour)}
              helperText={formik.touched.hour && formik.errors.hour}
            />
          </Grid>
          <Grid item xs={12} md={6} mb="2rem">
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6} mb="2rem">
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              type="number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} md={6} mb="2rem">
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12} mb="2rem">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: "1rem" }}
            >
              {pathname === "/contact" ? "Send" : "Book"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </SnackbarProvider>
  );
};

export default ReservationForm;
